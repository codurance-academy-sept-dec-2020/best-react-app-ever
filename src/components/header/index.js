import React, { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import "./style.scss";

function Header() {

    const[isActive, setActive] = useState(false);

    const toggleActivity = () => {
        console.log("ho");
        setActive(!isActive);
    };

    return <React.Fragment>
        <header className="header">
            <div onClick={toggleActivity}>
                <img
                    src={logo}
                    className={isActive ? "header__logo rt" : "header__logo lt"} alt="logo"
                />
            </div>
        </header>
    </React.Fragment>
}

export default Header;
