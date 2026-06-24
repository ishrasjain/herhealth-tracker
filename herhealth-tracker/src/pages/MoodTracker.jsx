import { useState, useEffect } from "react";

function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState("");
  const [history, setHistory] = useState([]);

  const moods = [
    { emoji: "😊", name: "Happy" },
    { emoji: "😌", name: "Calm" },
    { emoji: "😐", name: "Neutral" },
    { emoji: "😔", name: "Sad" },
    { emoji: "😡", name: "Angry" },
    { emoji: "😴", name: "Tired" },
  ];

  useEffect(() => {
    const savedHistory = localStorage.getItem("moodHistory");

    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  const saveMood = (moodObj) => {
    setSelectedMood(moodObj.name);

    const now = new Date();

    const newEntry = {
      mood: moodObj.name,
      emoji: moodObj.emoji,
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const updatedHistory = [newEntry, ...history];

    setHistory(updatedHistory);

    localStorage.setItem(
      "moodHistory",
      JSON.stringify(updatedHistory)
    );
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("moodHistory");
  };

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
            onClick={() => saveMood(mood)}
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

      {history.length > 0 && (
        <div className="mood-history">
          <h3>Mood History</h3>

          {history.map((item, index) => (
            <div
              key={index}
              className="history-card"
            >
              <h4>
                {item.emoji} {item.mood}
              </h4>

              <p>
                {item.date} • {item.time}
              </p>
            </div>
          ))}

          <button onClick={clearHistory}>
            Clear History
          </button>
        </div>
      )}
    </section>
  );
}

export default MoodTracker;