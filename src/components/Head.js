import React from "react";

export default function Header() {
    return (
        <div className="header">
            <img src="images/boostx-logo.png" alt="Boostx Logo"/>

            <ul className="headerNavListMid">
                <li className="lonleyMenu">Features</li>
                <li className="lonleyMenu">FAQs</li>
                <li className="lonleyMenu">About</li>
            </ul>


            <ul className="headerNavListRight">
                <li>SignIn</li>
                <li><button>Start Free</button></li>
            </ul>

            <img className="moreMenu" src="images/bars.png" alt="" />

        </div>
    )
}