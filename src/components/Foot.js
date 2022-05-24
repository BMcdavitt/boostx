import React from "react";

export default function Footer() {

    return (
        <div className="footer">

            <div className="footerTop">
                <div className="footerTopLeft">
                    <img src="images/english-to-chinese.png" alt="english to chinese"/>
                    English 
                    <img src="images/angle-down.png" alt="angle down icon" />

                </div>
                <div className="footerTopMiddle">
                    <img className="footerTopMiddleLogo" src="images/boostx-logo.png" alt="BoostX Logo" />
                    <p>BoostX is a multi-chain launchpad enabling projects to raise capital, market effectively and ensure the safety of early investors.</p>
                    <div className="socialMediaLinks">
                        <img src="images/socialLinkedin.png" alt="Linked In" />
                        <img src="images/socialMessenger.png" alt="Messenger" />
                        <img src="images/socialTwitter.png" alt="Twitter" />
                        <img src="images/socialTwoo.png" alt="Twoo" />
                    </div>

                </div>


                <div className="footerTopRight">
                    <h3>Company</h3>
                    <div>Features</div>
                    <div>About</div>
                    <div>FAQs</div>
                </div>
            </div>
            <hr />
            <div className="footerBottom">
                Copyright @ BoostX 2022. All Rights Reserved.
            </div>
        </div>
    )
}