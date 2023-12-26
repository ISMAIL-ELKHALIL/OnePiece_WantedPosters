import PropTypes from "prop-types";
import css from "./Slider.module.css";
import { useState, useEffect } from "react";
import AutoPlayButton from "../Buttons/AutoPlayButton";

const Slider = ({ children, onChangeIndex, index, listLength, onClick }) => {
  const [rightButtonDisplay, setRightButtonDisplay] = useState(css.show_button);
  const [leftButtonDisplay, setLeftButtonDisplay] = useState(css.show_button);
  const [autoplay, setAutoplay] = useState(false);
  const handleRightButtonClick = () => {
    if (index < listLength - 1) {
      index++;
      if (index === listLength - 1) {
        setRightButtonDisplay(css.hide_button);
      } else {
        setRightButtonDisplay(css.show_button);
        setLeftButtonDisplay(css.show_button);
      }
      onChangeIndex(index);
    }
    console.log("Right clicked index is : ", index);
  };

  const handleLeftButtonClick = () => {
    if (index > 0) {
      index--;
      if (index === 0) {
        setLeftButtonDisplay(css.hide_button);
      } else {
        setLeftButtonDisplay(css.show_button);
        setRightButtonDisplay(css.show_button);
      }
      onChangeIndex(index);
    }
    console.log("Left clicked index is : ", index);
  };

  const handleAutoPlayChange = (checked) => {
    setAutoplay(checked);
  };

  useEffect(() => {
    let intervalId;

    const handleAutoPlay = () => {
      if (autoplay) {
        intervalId = setInterval(() => {
          if (index === listLength - 1) {
            index = 0;
          }
          handleRightButtonClick();
        }, 1000); // Change the interval time as needed (in milliseconds)
      } else {
        clearInterval(intervalId);
      }
    };

    handleAutoPlay();

    return () => {
      clearInterval(intervalId);
    };
  }, [autoplay, handleRightButtonClick]);

  return (
    <div
      className={css.slider}
      onClick={onClick}
      style={{ backgroundColor: "transparent" }}
    >
      <i
        className={
          "fa-solid fa-chevron-left fa-2xl" +
          " " +
          css.slider_left_button +
          ` ${leftButtonDisplay}`
        }
        onClick={handleLeftButtonClick}
      ></i>
      {children}
      <i
        className={
          "fa-solid fa-chevron-right fa-2xl " +
          css.slider_right_button +
          ` ${rightButtonDisplay}`
        }
        onClick={handleRightButtonClick}
      ></i>

      <AutoPlayButton OnChecked={handleAutoPlayChange}></AutoPlayButton>
    </div>
  );
};

Slider.propTypes = {
  children: PropTypes.object,
  onChangeIndex: PropTypes.func,
  index: PropTypes.number,
  listLength: PropTypes.number,
  onClick: PropTypes.func,
};

export default Slider;
