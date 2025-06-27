import { useEffect, useState } from "react";
import '../Intro.css';

function Intro() {
  const [hideIntro, setHideIntro] = useState( () => {
    return localStorage.getItem("introSeen") === "true";
  });

  useEffect(() => {
    if (!hideIntro) {
      const timeout = setTimeout(() => {
        setHideIntro(true);
        localStorage.setItem("introSeen", "true");
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [hideIntro]);

  if (hideIntro) return null;

  return (
    <div className="intro-container">
      <div className="video-mask">
        <video src="/videoFondo.mp4" autoPlay muted loop className="video-in-text" />
        <h1 className="masked-text">CÚCUTA</h1>
      </div>
    </div>
  );
}

export default Intro;
