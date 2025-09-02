import React from 'react'
import "./Card.scss"
import cardImage from "../../assets/image/card1.png"

function Card() {
    return (
        <div className='card-product'>
            <div className='image'>
                <img src={cardImage} alt="" />
                <div className='discount'>12%</div>
                <div className='icons'>
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
                <button className='add'>Add To Cart</button>
            </div>
            <div className='content'>
                <h4></h4>
                <div className='prices'></div>
                <div className='rating'></div>
            </div>
        </div>
    )
}

export default Card
