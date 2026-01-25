import React, { useEffect, useState } from "react";
import { fetchWatchlist } from "../Api/client";

function WatchlistMgmt() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetchWatchlist().then((data) => setEntries(data));
  }, []);

  return (
    <section className="section-box">
      <h2>Watchlist</h2>
      <table
        style={{
          width: "100%",
          marginTop: "12px",
          borderCollapse: "collapse",
          fontSize: "0.9rem",
        }}
      >
        <thead>
          <tr>
            <th style={{ textAlign: "left", padding: "6px" }}>ID</th>
            <th style={{ textAlign: "left", padding: "6px" }}>Name</th>
            <th style={{ textAlign: "left", padding: "6px" }}>Risk</th>
            <th style={{ textAlign: "left", padding: "6px" }}>Last seen</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((row) => (
            <tr key={row.id}>
              <td style={{ padding: "6px" }}>{row.id}</td>
              <td style={{ padding: "6px" }}>{row.name}</td>
              <td style={{ padding: "6px" }}>{row.riskLevel}</td>
              <td style={{ padding: "6px" }}>{row.lastSeen}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default WatchlistMgmt;
