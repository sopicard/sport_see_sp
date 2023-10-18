import React from "react";

const KeyData = ({ icon, title, value }) => {
  return (
    <div className="keyData">
      <img src={icon} alt={`${title} icône`} className="keyData__icon" />
      <h3 className="keyData__title">{title}</h3>
      <p className="keyData__value">{value}</p>
    </div>
  );
};

export default KeyData;
