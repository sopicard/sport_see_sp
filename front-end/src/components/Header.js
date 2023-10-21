import React from "react";

const Header = ({ firstName }) => {
  return (
    <>
      <h1 className="header__mainTitle">Bonjour <span className="header__firstName">{firstName}</span></h1>
      <h2 className="header__subTitle">Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
    </>
  );
};

export default Header;
