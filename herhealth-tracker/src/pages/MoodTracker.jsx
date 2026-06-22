import { useState } from "react";

function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState("");

  const moods = [
    { emoji: "😊", name: "Happy" },
    { emoji: "😌", name: "Calm" },
    { emoji: "😐", name: "Neutral" },
    { emoji: "😔", name: "Sad" },
    { emoji: "😡", name: "Angry" },
    { emoji: "😴", name: "Tired" },
  ];

  return (
    <section className="tracker">
      <h2>Mood Tracker</h2>

      <p>How are you feeling today?</p>

      <div className="mood-container">
        {moods.map((mood) => (
          <button
            key={mood.name}
            className={`mood-btn ${
              selectedMood === mood.name
                ? "mood-selected"
                : ""
            }`}
            onClick={() => setSelectedMood(mood.name)}
          >
            <span>{mood.emoji}</span>
            <br />
            {mood.name}
          </button>
        ))}
      </div>

      {selectedMood && (
        <div className="mood-result">
          <h3>Today's Mood</h3>
          <p>{selectedMood}</p>
        </div>
      )}
    </section>
  );
}

export default MoodTracker;