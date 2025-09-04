import React from 'react'
import "./wish.scss"

function WishCard() {
    return (
        <div className="card wish">
            <div className='board'>
                <img className='bagImg' src="" alt="" />
                <div className="cardButton">
                    <div><img src="" alt="" /></div>
                </div>
                <div className='discount'>
                    <p>-35%</p>
                </div>
                <button className='cartBtn'>Add To Cart</button>
            </div>

            <div className='info'>
                <h1>Gucci duffle bag</h1>
                <div className='prices'>
                    <p className='actualPrice'>$960</p>
                    <p className='oldPrice'>$1160</p>
                </div>
            </div>
        </div>
    )
}

export default WishCard
