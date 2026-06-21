import { useState } from "react";

function PeriodTracker() {
  const [selectedDays, setSelectedDays] = useState([]);
  const [nextPeriod, setNextPeriod] = useState("");

  const [cycleLength, setCycleLength] = useState(28);
  const [periodLength, setPeriodLength] = useState(5);

  const [symptoms, setSymptoms] = useState([]);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const symptomOptions = [
    "Cramps",
    "Headache",
    "Bloating",
    "Fatigue",
    "Mood Swings",
  ];

  const handleDayClick = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(
        selectedDays.filter((d) => d !== day)
      );
    } else {
      setSelectedDays([
        ...selectedDays,
        day,
      ]);
    }
  };

  const toggleSymptom = (symptom) => {
    if (symptoms.includes(symptom)) {
      setSymptoms(
        symptoms.filter((s) => s !== symptom)
      );
    } else {
      setSymptoms([
        ...symptoms,
        symptom,
      ]);
    }
  };

  const calculateNextPeriod = () => {
    if (selectedDays.length === 0) {
      alert(
        "Please select at least one period day"
      );
      return;
    }

    const firstDay = Math.min(...selectedDays);

    const currentDate = new Date(
      2026,
      6,
      firstDay
    );

    currentDate.setDate(
      currentDate.getDate() + cycleLength
    );

    setNextPeriod(
      currentDate.toDateString()
    );
  };

  return (
    <section className="tracker">
      <h2>Period Tracker</h2>

      <div className="settings">
        <h3>Cycle Preferences</h3>

        <input
          type="number"
          value={cycleLength}
          onChange={(e) =>
            setCycleLength(
              Number(e.target.value)
            )
          }
          placeholder="Cycle Length"
        />

        <input
          type="number"
          value={periodLength}
          onChange={(e) =>
            setPeriodLength(
              Number(e.target.value)
            )
          }
          placeholder="Period Length"
        />
      </div>

      <h3>July 2026</h3>

      <div className="weekdays">
  <span>Sun</span>
  <span>Mon</span>
  <span>Tue</span>
  <span>Wed</span>
  <span>Thu</span>
  <span>Fri</span>
  <span>Sat</span>
</div>

      <div className="calendar-grid">
        {days.map((day) => (
          <div
            key={day}
            className={`day ${
              selectedDays.includes(day)
                ? "selected"
                : ""
            }`}
            onClick={() =>
              handleDayClick(day)
            }
          >
            {day}
          </div>
        ))}
      </div>

      <button
        onClick={calculateNextPeriod}
      >
        Calculate Next Period
      </button>

      {nextPeriod && (
        <div className="prediction">
          <h3>Expected Next Period</h3>
          <p>{nextPeriod}</p>
        </div>
      )}

      <h3>Symptoms Today</h3>

<div className="symptoms">
  {symptomOptions.map((symptom) => (
    <button
      key={symptom}
      className={
        symptoms.includes(symptom)
          ? "symptom selected-symptom"
          : "symptom"
      }
      onClick={() =>
        toggleSymptom(symptom)
      }
    >
      {symptom}
    </button>
  ))}
</div>

      <div className="info">
        <p>
          Cycle Length: {cycleLength} days
        </p>

        <p>
          Period Length: {periodLength} days
        </p>
      </div>
    </section>
  );
}

export default PeriodTracker;