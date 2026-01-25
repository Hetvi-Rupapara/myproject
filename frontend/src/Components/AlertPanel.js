import React, { useEffect, useState } from "react";
import { fetchRecentAlerts } from "../Api/client";

function AlertPanel() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      const data = await fetchRecentAlerts();
      if (isMounted) setAlerts(data);
    }

    // initial load
    load();

    // refresh every 10 seconds to simulate live feed
    const intervalId = setInterval(load, 10000);

    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, []);

  return (
    <ul className="alerts-list">
      {alerts.map((alert) => (
        <li key={alert.id} className="alert-item">
          <div>{alert.message}</div>
          <div style={{ fontSize: "0.75rem", color: "#a0aec0" }}>
            {alert.time}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default AlertPanel;
