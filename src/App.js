import { useState, useRef, useEffect } from "react";
import praise from "./assets/praise.mp4";
import "./styles.css";

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);
  return (
    <div className="App">
      <h1 className="title-header">useRef</h1>
      <p className="sub-title">Play and pause a video using useRef</p>

      <video
        width="200"
        ref={videoRef}
        src={praise}
        alt="worship to the Most High"
      />
      <br />
      <button
        className="play-pause-btn"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
}
