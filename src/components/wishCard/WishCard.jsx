import React from 'react'
import "./wish.scss"
import deleteImg from "../../assets/svg/deleteImg.svg"
import { removeWish } from '../../redux/wish/wishSlice'
import { useDispatch } from 'react-redux'

function WishCard({box}) {
    const dispatch = useDispatch()

    return (
        <div className="card wish">
            <div className='board'>
                <img className='bagImg' src={box?.thumbnail} alt="" />
                <div className="cardButton">
                    <div><img 
                        onClick={() => dispatch(removeWish(box.id))} 
                        src={deleteImg} alt="" /></div>
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
