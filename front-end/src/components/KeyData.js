import React from "react";

const KeyData = ({ icon, title, value }) => {
    const className = `keyData keyData--${title.toLowerCase()}`;

    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }

    const formattedValue = formatNumber(value) + (title === "Calories" ? "kCal" : "g");

    return (
        <div className={className}>
            <img src={icon} alt={`${title} icône`} className="keyData__icon" />
            <div className="keyData__infos">
                <p className="keyData__value">{formattedValue}</p>
                <h3 className="keyData__title">{title}</h3>
            </div>
        </div>
    );
};

export default KeyData;
