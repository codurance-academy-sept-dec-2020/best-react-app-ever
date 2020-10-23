import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import "./style.scss";

function Header() {
  const [animationStyle, setAnimationStyle] = useState(1);
  const [palleteColour, setPalleteColour] = useState(null);

  const selectColour = (paletteItem) => {
    const selectedColour = window
      .getComputedStyle(paletteItem)
      .getPropertyValue("background-color");
    setPalleteColour(selectedColour);
  };

  const toggleanimationStyle = () => {
    setAnimationStyle(animationStyle + 1);
    if (animationStyle > 3) {
      setAnimationStyle(1);
    }
  };

  const applyAnimation = () => {
    if (animationStyle === 1) {
        return "header__logo--nonwise";
    } else if (animationStyle === 2) {
      return "header__logo--clockwise";
    } else if (animationStyle === 3) {
      return "header__logo--coutnerclockwise";
    } else {
      return "header__logo--bothwise";
    }
  };

  return (
    <React.Fragment>
      <header className="header">
        <div className="header__controller--container">
          <div
            onClick={(event) => selectColour(event.target)}
            className="header__controller header__controller--primary"
          ></div>
          <div
            onClick={(event) => selectColour(event.target)}
            className="header__controller header__controller--secondary"
          ></div>
          <div
            onClick={(event) => selectColour(event.target)}
            className="header__controller header__controller--tertiary"
          ></div>
          <div
            onClick={(event) => selectColour(event.target)}
            className="header__controller header__controller--quaternary"
          ></div>
        </div>

        <div className="header__logo--container" onClick={toggleanimationStyle}>
          <Logo
            className={`header__logo ${applyAnimation()}`}
            fill={palleteColour}
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
          />
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
