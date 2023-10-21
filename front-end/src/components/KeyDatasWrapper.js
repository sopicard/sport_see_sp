import React from "react";
import KeyData from "./KeyData";
import iconFire from "../assets/icons/iconFire.svg";
import iconProtein from "../assets/icons/iconProtein.svg";
import iconCarbs from "../assets/icons/iconCarbs.svg";
import iconFats from "../assets/icons/iconFats.svg";

const KeyDatasWrapper = ({ keyData }) => {
  return (
    <>
      {keyData && (
        <>
          <KeyData title="Calories" value={keyData.calorieCount} icon={iconFire} />
          <KeyData title="Protéines" value={keyData.proteinCount} icon={iconProtein} />
          <KeyData title="Glucides" value={keyData.carbohydrateCount} icon={iconCarbs} />
          <KeyData title="Lipides" value={keyData.lipidCount} icon={iconFats} />
        </>
      )}
    </>
  );
}; 

export default KeyDatasWrapper;
