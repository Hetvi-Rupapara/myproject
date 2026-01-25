import React from "react";
import Videoplayer from "../Components/Videoplayer";
import AlertPanel from "../Components/AlertPanel";

function LiveDetection() {
  return (
    <>
      <section className="section-box">
        <h2>Live CCTV Feed</h2>
        <Videoplayer />
      </section>

      <aside className="section-box">
        <h2>Real-time Alerts</h2>
        <AlertPanel />
      </aside>
    </>
  );
}

export default LiveDetection;
