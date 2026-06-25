import { useState, useEffect } from "react";

export default function Loader({ onDone }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
      if (onDone) onDone();
    }, 1800);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className={`loader-screen ${done ? "done" : ""}`}>
      <span className="loader-word">Autonoms</span>
      <div className="loader-bar-track">
        <div className="loader-bar-fill" />
      </div>
    </div>
  );
}
