import React, { useState } from "react";
import Header from "../../components/header";
import {Link} from "react-router-dom";

function Landing() {
    return <React.Fragment>
        <Link to={"/cool-video"}>Really Cool Video</Link>
        <Header/>
    </React.Fragment>
}

export default Landing;