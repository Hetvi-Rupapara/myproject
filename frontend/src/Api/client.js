// src/Api/client.js

const BASE_URL = "http://localhost:8000"; // later: your FastAPI URL

export async function fetchWatchlist() {
  // When backend is ready, uncomment this and delete the fake return:
  /*
  const res = await fetch(`${BASE_URL}/watchlist`);
  if (!res.ok) throw new Error("Failed to load watchlist");
  return res.json();
  */

  // Fake data for now:
  return [
    {
      id: 1,
      name: "John Doe",
      riskLevel: "High",
      lastSeen: "Entrance Gate - 10:15",
    },
    {
      id: 2,
      name: "Jane Smith",
      riskLevel: "Medium",
      lastSeen: "Parking Lot - 09:42",
    },
    {
      id: 3,
      name: "Unknown Male #37",
      riskLevel: "Low",
      lastSeen: "Corridor C - 08:59",
    },
  ];
}

export async function fetchRecentAlerts() {
  /*
  const res = await fetch(`${BASE_URL}/analytics/alerts`);
  if (!res.ok) throw new Error("Failed to load alerts");
  return res.json();
  */

  return [
    {
      id: 101,
      message: "Match: John Doe detected on Camera 03",
      level: "critical",
      time: "10:17:23",
    },
    {
      id: 102,
      message: "Match: Jane Smith detected on Camera 01",
      level: "warning",
      time: "09:43:10",
    },
  ];
}
