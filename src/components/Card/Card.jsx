import React from 'react'
import "./Card.scss"
import cardImage from "../../assets/image/card1.png"
import like from "../../assets/svg/like.svg"
import { addWish } from '../../redux/wish/wishSlice'
import { useDispatch } from 'react-redux'

function Card({cart}) {

    const dispatch = useDispatch()
    return (
        <div className="card-product">
            <div className="board">
                <img className="productImage" src={cart.thumbnail} alt="" />
                <div className="cardButton">
                    <div><img onClick={() => dispatch(addWish(cart))} src={like} alt="" /></div>
                    {/* <div><img src={icon2} alt="" /></div> */}
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
