import React from "react";
import logo from "../assets/icons/logo.svg";
import brandName from "../assets/icons/brandName.svg";

const NavTop = () => {
    return (
        <div className="navtop">
            <img src={logo} alt="logo" className="navtop__logo"/>
            <img src={brandName} alt="SportSee" className="navtop__brandName" />
            <div className="navtop__home">Accueil</div>
            <div className="navtop__profile">Profil</div>
            <div className="navtop__settings">Réglage</div>
            <div className="navtop__community">Communauté</div>
        </div>
    );
};

export default NavTop;
