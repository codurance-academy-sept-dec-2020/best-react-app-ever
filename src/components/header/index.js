import React from "react";
import logo from "../../assets/icons/logo.svg";
import "./style.scss";

function Header() {
    return <React.Fragment>
        <header className="header">
            <img src={logo} className="header__logo" alt="logo" />
        </header>
    </React.Fragment>
}

export default Header;
