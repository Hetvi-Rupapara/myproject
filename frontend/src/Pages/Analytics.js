import React from "react";

function Analytics() {
  const stats = [
    { label: "Total cameras", value: 8 },
    { label: "Matches today", value: 12 },
    { label: "High-risk matches", value: 3 },
    { label: "Average lookup time (ms)", value: 7.8 },
  ];

  return (
    <section className="section-box">
      <h2>Analytics</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: "12px",
          marginTop: "12px",
        }}
      >
        {stats.map((item) => (
          <div
            key={item.label}
            style={{
              padding: "10px",
              borderRadius: "6px",
              backgroundColor: "#111827",
              border: "1px solid #252b45",
              fontSize: "0.9rem",
            }}
          >
            <div style={{ color: "#a0aec0" }}>{item.label}</div>
            <div style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Analytics;
