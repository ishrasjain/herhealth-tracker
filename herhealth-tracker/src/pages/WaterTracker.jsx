import { useState, useEffect } from "react";

function WaterTracker() {
  const [waterCount, setWaterCount] = useState(0);

  useEffect(() => {
    const savedWater =
      localStorage.getItem("waterCount");

    if (savedWater) {
      setWaterCount(Number(savedWater));
    }
  }, []);

  const addWater = () => {
    const updatedCount = waterCount + 1;

    setWaterCount(updatedCount);

    localStorage.setItem(
      "waterCount",
      updatedCount
    );
  };

  const removeWater = () => {
    if (waterCount > 0) {
      const updatedCount = waterCount - 1;

      setWaterCount(updatedCount);

      localStorage.setItem(
        "waterCount",
        updatedCount
      );
    }
  };

  const progress =
    (waterCount / 8) * 100;

  return (
    <section className="tracker">
      <h2>💧 Water Tracker</h2>

      <h3>
        Today's Progress:
        {" "}
        {waterCount}/8 Glasses
      </h3>

      <div className="water-buttons">
        <button onClick={addWater}>
          + Add Glass
        </button>

        <button onClick={removeWater}>
          - Remove Glass
        </button>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
          }}
        ></div>
      </div>

      {waterCount >= 8 && (
        <h3>
          🎉 Daily Goal Completed!
        </h3>
      )}
    </section>
  );
}

export default WaterTracker;