import React, { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import "./style.scss";

function Header() {

    let[animationStyle, setAnimationStyle] = useState(1);

    const toggleanimationStyle = () => {
        animationStyle += 1;
        if (animationStyle > 3) {
            animationStyle = 1;
        }
        setAnimationStyle(animationStyle);
    };

    const applyAnimation = () => {
        if (animationStyle == 1) {
            return "header__logo--clockwise";
        } else if (animationStyle == 2) {
            return "header__logo--coutnerclockwise";
        } else {
            return "header__logo--bothwise";
        }
    };

    return <React.Fragment>
        <header className="header">
            <div onClick={toggleanimationStyle}>
                <img
                    src={logo}
                    className={`header__logo ${applyAnimation()}`}
                />
            </div>
        </header>
    </React.Fragment>
}

export default Header;
