const Intro = () => {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: 'black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <video
        src="/videoFondo.mp4"
        autoPlay
        muted
        loop
        style={{
          width: '80%',
          maxHeight: '80%',
          objectFit: 'contain'
        }}
      />
    </div>
  );
};

export default Intro;

