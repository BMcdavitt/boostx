import React from "react";

import Header from "./Head.js"
import FeatureCard from "./Featurecard.js"
import FeaturedCard from "./Featuredcard.js"
import Footer from "./Foot.js"

export default function Features() {
    return (
        <div className="featuresPage">
            <Header />
            <div className="featuresTopSection">
                <div className="featuresTopSectionLeft">
                    <h1>Premium Launchpad Technology</h1>
                    <p>End-to-end payments and financial management in a single solution.  Meet the right platform to help realize</p>
                    <button>Launch your Projects</button>
                </div>
                <div className="featuresTopSecitonRight">
                    <img src="images/boostx-rocket.png" alt="A rocket launching out of a laptop computer" />
                </div>
            </div>
            <div className="featuresKeyFeaturesSection">
                <h2>BoostX Key Features</h2>
                <p>Innovative Launchpad Technology created for IDOs with unique features designed to boost your project into the stratosphere; live orderbooks, dynamic pricing and much more...</p>
                <div className="featureCards">
                    <FeatureCard 
                        featureIconPath="images/featureTokens.png" 
                        featuresAltIconText="token graphic"
                        featureText="Curated Tokens"/>
                    <FeatureCard 
                        featureIconPath="images/featurePresales.png" 
                        featuresAltIconText="sales tag graphic"
                        featureText="Unique Presales"/>
                    <FeatureCard 
                        featureIconPath="images/featureDashboard.png" 
                        featuresAltIconText="dashboard gadget graphic"
                        featureText="Dynamic Dashboards"/>
                    <FeatureCard 
                        featureIconPath="images/featureProjects.png" 
                        featuresAltIconText="diamond graphic"
                        featureText="High Quality Projects"/>
                </div>
                <button>Launch your Projects</button>
            </div>
            <div className="featuresFeaturedProjects">
                <h2>Featured Projects</h2>
                <p>Innovative Launchpad Technology created for IDOs with unique features designed to boost your project into the stratosphere; live orderbooks, dynamic pricing and much more...</p>
                <div className="festuresFeaturedProjectCards">
                    <FeaturedCard 
                        cardObject={{
                            icon: "projectSeesawProtocol.png",
                            name: "Seesaw Protocol",
                            symbol: "SSW",
                            saleEndDate: "April 08",
                            description: "Seesaw protocol has successfully launched on the Binance Chain",
                            presale: "False"}}
                    />
                    <FeaturedCard  
                        cardObject={{
                            icon: "projectFierpin.png",
                            name: "Firepin",
                            symbol: "FRPN",
                            saleEndDate: "April 08",
                            description: "Dynamic pricing. Simulated DeFi orderbook. Every buy increases the price.",
                            presale: "True",
                            presaleCost: "$0.000067"}}
                    />
                    <FeaturedCard 
                        cardObject={{
                            icon: "projectAutomishToken.png",
                            name: "Automish Token",
                            symbol: "ATI",
                            saleEndDate: "April 08",
                            description: "Dynamic pricing. Simulated DeFi orderbook. Every buy increases the price.",
                            presale: "True",
                            presaleCost: "$0.00667"}}
                     />
                    <FeaturedCard 
                        cardObject={{
                            icon: "projectCapriceFinance.png",
                            name: "Caprice finance",
                            symbol: "CFT",
                            saleEndDate: "April 08",
                            description: "Dynamic pricing. Simulated Defi orderbook.  Every buy increases the price.",
                            presale: "True",
                            presaleCost: "$0.004762"}}
                     />
                </div>

                <button>Show All</button>

            </div>
            <div className="emptySpace">

            </div>
            <div className="featuresBottomSection">
                <div className="featuresBottomSectionLeft">
                    <h2 className="textWhite">Bring Investors and High Quality Projects Together</h2>
                    <p>Boostx provides its community with fair access to exclusive early-stage presale opportunities, allowing you to acquire highly-anticipated tokens before they hit the market; while simultaneously giving innovative projects the ability to crowdsource funding and build a strong and loyal community in the process.  Using our extensive marketing experience, boostx successfully facillitates the launches of multiple high quality blockchain projects.</p>
                </div>
                <div className="featuresBottomSecitonRight">
                    <img src="images/bottomImage.png" alt="A rocket launching out of a laptop computer" />
                </div>
            </div>

            <Footer />

        </div>
    )
}