import { useState } from "react";
import PropTypes from "prop-types";
import css from "./AutoPlayButton.module.css"; // Path: src/components/Buttons/AutoPlayButton.module.css
const AutoPlayButton = ({ OnChecked }) => {
  const [autoplay, setAutoplay] = useState(false);
  const handleAutoPlay = () => {
    setAutoplay(!autoplay);
    OnChecked(!autoplay);
  };
  return (
    <div className={css.autoPlayContainer}>
      <label htmlFor="autoplay">Auto Play</label>
      <input
        className={css.autoPlayInput}
        type="checkbox"
        name="autoplay"
        checked={autoplay}
        onClick={handleAutoPlay}
      />
    </div>
  );
};

AutoPlayButton.propTypes = {
  OnChecked: PropTypes.func.isRequired,
};
export default AutoPlayButton;
