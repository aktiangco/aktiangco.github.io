import { useEffect, useState } from "react";

function VisitCounter() {
  const [count, setCount] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://counterapi.dev/api/aktiangco/medtek-navbar/up")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Counter response:", data);
        setCount(data.count);
      })
      .catch((err) => {
        console.error("Counter error:", err);
        setError("Unavailable");
      });
  }, []);

  return (
    <span className="nav-counter">
      {error ? `Visitors: ${error}` : `Visitors: ${count !== null ? count : "..."}`}
    </span>
  );
}

export default VisitCounter;