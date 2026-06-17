import { useState } from "react";

function PeriodTracker() {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <section className="tracker">
      <h2>Period Tracker</h2>

      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />

      {selectedDate && (
        <p>
          Selected Date: {selectedDate}
        </p>
      )}
    </section>
  );
}

export default PeriodTracker;