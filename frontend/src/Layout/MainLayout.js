// src/Layout/MainLayout.js
import React from "react";

function MainLayout({ children, activePage, onChangePage }) {
  return (
    <div className="app-root">
      <header className="navbar">
        <div className="navbar__logo">LFW CCTV Surveillance</div>
        <nav>
          <button
            style={{ marginRight: "8px" }}
            onClick={() => onChangePage("live")}
          >
            Live Detection
          </button>
          <button
            style={{ marginRight: "8px" }}
            onClick={() => onChangePage("watchlist")}
          >
            Watchlist
          </button>
          <button onClick={() => onChangePage("analytics")}>Analytics</button>
        </nav>
      </header>

      <main className="main-container">{children}</main>

      <footer className="footer">
        Prototype CCTV facial recognition system using LFW &amp; ArcFace.
      </footer>
    </div>
  );
}

export default MainLayout;
