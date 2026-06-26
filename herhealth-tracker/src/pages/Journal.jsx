import { useState, useEffect } from "react";

function Journal() {
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const savedEntries = localStorage.getItem("journalEntries");

    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
  }, []);

  const saveEntry = () => {
    if (entry.trim() === "") return;

    const now = new Date();

    const newEntry = {
      id: Date.now(),
      text: entry,
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const updatedEntries = [newEntry, ...entries];

    setEntries(updatedEntries);

    localStorage.setItem(
      "journalEntries",
      JSON.stringify(updatedEntries)
    );

    setEntry("");
  };

  const deleteEntry = (id) => {
    const updatedEntries = entries.filter(
      (item) => item.id !== id
    );

    setEntries(updatedEntries);

    localStorage.setItem(
      "journalEntries",
      JSON.stringify(updatedEntries)
    );
  };

  return (
    <section className="tracker">
      <h2>📖 Health Journal</h2>

      <p>Write about your day, symptoms or thoughts.</p>

      <textarea
        className="journal-input"
        rows="6"
        placeholder="How are you feeling today?"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      />

      <br />

      <button onClick={saveEntry}>
        Save Entry
      </button>

      {entries.length > 0 && (
        <div className="journal-history">
          <h3>Previous Entries</h3>

          {entries.map((item) => (
            <div
              className="journal-card"
              key={item.id}
            >
              <h4>
                {item.date} • {item.time}
              </h4>

              <p>{item.text}</p>

              <button
                className="delete-btn"
                onClick={() =>
                  deleteEntry(item.id)
                }
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Journal;