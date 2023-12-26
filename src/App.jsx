import { useState, useRef } from "react";
import css from "./App.module.css";
import Slider from "./components/Slider/Slider";

function App() {
  const [index, setIndex] = useState(5);
  const audioRef = useRef(null);
  const [audioPlayed, setAudioPlayed] = useState(false);

  const wantedPosterImages = [
    { name: "Zoro", url: "/src/assets/images/zoro.jpg" },
    { name: "Brook", url: "/src/assets/images/brook.jpg" },
    { name: "Chopper", url: "/src/assets/images/chopper.jpg" },
    { name: "Francky", url: "/src/assets/images/franky.jpg" },
    { name: "Jinbei", url: "/src/assets/images/jinbei.jpg" },
    { name: "Nami", url: "/src/assets/images/nami.jpg" },
    { name: "Robin", url: "/src/assets/images/robin.jpg" },
    { name: "Usopp", url: "/src/assets/images/usopp.jpg" },
    { name: "Sanji", url: "/src/assets/images/sanji.jpg" },
    { name: "Luffy", url: "/src/assets/images/luffy.jpg" },
  ];

  const changeIndex = (newIndex) => {
    setIndex(newIndex);
  };

  const handlePlayAudio = () => {
    if (audioPlayed === false) {
      audioRef.current.play();
      console.log("audio played");
      setAudioPlayed(true);
    }
    // Play the audio
  };
  /* 
  const handlePauseAudio = () => {
    if (audioPlayed === true) {
      audioRef.current.pause(); // Pause the audio
      console.log("audio paused");
    }
    setAudioPlayed(false);
  }; */

  return (
    <div>
      <audio
        ref={audioRef}
        src="../src/assets/audios/One_Piece_Opening.mp3"
        type="audio/mp3"
        loop
      ></audio>
      <video
        className={css.container_Img}
        src="../src/assets/videos/One_Piece_Ship.mp4"
        muted={true}
        loop={true}
        autoPlay={true}
      ></video>
      {/*    <img
        className={css.container_Img}
        src="/src/assets/images/bg.jpg"
        alt="Luffy_Ship"
      /> */}
      <div className={css.container}>
        <Slider
          onClick={handlePlayAudio}
          onChangeIndex={changeIndex}
          index={index}
          listLength={wantedPosterImages.length}
        >
          <div style={{ width: "100%", height: "100%" }}>
            <img
              key={index}
              className={css.posterImg}
              src={wantedPosterImages[index].url}
              alt={wantedPosterImages[index].name}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default App;
