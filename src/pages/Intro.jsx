import './Intro.css';

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="video-mask">
        <video src="/videoFondo.mp4" autoPlay muted loop className="video-in-text" />
        <h1 className="masked-text">CUCUTA</h1>
      </div>
    </div>
  );
};

export default Intro;
