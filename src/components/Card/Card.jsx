import React from 'react'
import "./Card.scss"
import cardImage from "../../assets/image/card1.png"

function Card() {
    return (
        <div className="card">
            <div className="board">
                <img className="productImage" src="" alt="" />
                <div className="cardButton">
                    {/* <div><img src={icon1} alt="" /></div>
                    <div><img src={icon2} alt="" /></div> */}
                </div>
                <div className="discount">
                    <p>-40%</p>
                </div>
                <button className="cartBtn">Add To Cart</button>
            </div>

            <div className="info">
                <h1>HAVIT HV-G92 Gamepad</h1>
                <div className="prices">
                    <p className="actualPrice">$120</p>
                    <p className="oldPrice">$160</p>
                </div>
                <div className="rate">
                    <p>(88)</p>
                </div>
            </div>
        </div>
    )
}

export default Card
