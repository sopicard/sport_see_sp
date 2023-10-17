import React from "react";
import iconYoga from "../assets/icons/iconYoga.svg";
import iconSwimmer from "../assets/icons/iconSwimmer.svg";
import iconCyclist from "../assets/icons/iconCyclist.svg";
import iconDumbbell from "../assets/icons/iconDumbbell.svg";

const NavLeft = () => {
    return (
        <div className="navleft">
            <img src={iconYoga} alt="icon of yoga position" className="navleft__yoga"/>
            <img src={iconSwimmer} alt="icon of swimmer" className="navleft__swimmer"/>
            <img src={iconCyclist} alt="icon of cyclist" className="navleft__cyclist"/>
            <img src={iconDumbbell} alt="icon of dumbbell" className="navleft__dumbbell"/>
            <p className="navleft__p">Copyright, SportSee 2020</p>
        </div>
    );
};

export default NavLeft;