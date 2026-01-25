
import React, { useState } from "react";
import MainLayout from "./Layout/MainLayout";
import LiveDetection from "./Pages/LiveDetection";
import WatchlistMgmt from "./Pages/WatchlistMgmt";
import Analytics from "./Pages/Analytics";
import "./Styles/main.css";

function App() {
  const [activePage, setActivePage] = useState("live");

  let content = null;
  if (activePage === "live") {
    content = <LiveDetection />;
  } else if (activePage === "watchlist") {
    content = <WatchlistMgmt />;
  } else if (activePage === "analytics") {
    content = <Analytics />;
  }

  return (
    <MainLayout activePage={activePage} onChangePage={setActivePage}>
      {content}
    </MainLayout>
  );
}

export default App;
