import React from "react";

export default function Featurecard(props) {
    return (
        <div className="featuresCard">
            <img src={props.featureIconPath} alt={props.featuresAltIconText} />
            <div className="featuresCardText">
                {props.featureText}
            </div>
        </div>
    )
}