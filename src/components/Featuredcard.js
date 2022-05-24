import React from "react";

export default function Featuredcard(props) {

    console.log(props.cardObject.icon)

    function buttonDisplay() {

        if(props.cardObject.presale === "False"){

            return (
            <div className="featuredCardButtonGroup">
                <button className="specialButton">Buy on Seesaw Swap</button>
                <button>Buy on Pancake Swap</button>
            </div>
            )
        }
        else {
            return(
                <div className="featuredCardButtonGroup">
                    <button>Enter Presale</button>
                    <div className="featuredCardPrsaleText">
                        Presale launch
                        <div className="feturedCardPresalePrice">
                            1 {props.cardObject.symbol} = {props.cardObject.presaleCost}
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="featuredCard">
            <div className="featuredCardTop">
                <img src={"images/" + props.cardObject.icon} alt="props.cardObject.icon"/>
                <div className="featuredCardTopRight">
                    <div className="featuredCardSaleInfo">
                        Sale ended on <b>{props.cardObject.saleEndDate}</b>
                    </div>
                    <h3>{props.cardObject.name}</h3>
                    {props.cardObject.symbol}
                </div>
            </div>
            <div className="featuredCardDescription">
                {props.cardObject.description}
            </div>
            <div className="featuredCardIconTextGroup">
                <img src="images/chain.png" alt="BNB chain icon" />
                Distribution and launch on BNB chain
            </div>
            <div className="featuredCardIconTextGroup">
                <img src="images/telegram.png" alt="paper airplain graphic" />
                Projects Official Telegram
            </div>
            {buttonDisplay()}
        </div>
    )
}

