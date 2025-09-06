import React from 'react'
import './footer.scss'
import image1 from "../../assets/Footer.img/image1.png"
import image2 from "../../assets/Footer.img/image2.png"
import image1s from "../../assets/Footer.img/image1s.svg"
import image2s from "../../assets/Footer.img/image2s.svg"
import image3s from "../../assets/Footer.img/image3s.svg"
import image4s from "../../assets/Footer.img/image4s.svg"
import image5s from "../../assets/Footer.img/image5s.svg"
import image6s from "../../assets/Footer.img/image6s.svg"
import image7s from "../../assets/Footer.img/image7s.svg"

function Footer() {
  return (
    <footer>
      <div className='footer-top'>
        <div className='ft1'>
          <h3>
            Exclusive
          </h3>
          <h4>
            Subscribe
          </h4>
          <p>
            Get 10% off your first order
          </p>
          <div>
            <input type="text" placeholder='Enter your email' />
            <img src={image2} alt="" />
          </div>
        </div>

        <div className='ft2'>
          <h3>
            Support
          </h3>
          <h4>
            111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.
          </h4>
          <p>
            exclusive@gmail.com
          </p>
          <p>
            +88015-88888-9999
          </p>
        </div>

        <div className='ft3'>
          <h3>
            Account
          </h3>
          <p>
            My Account
          </p>
          <p>
            Login / Register
          </p>
          <p>
            Cart
          </p>
          <p>
            Wishlist
          </p>
          <p>
            Shop
          </p>
        </div>

        <div className='ft4'>
          <h3>
            Quick Link
          </h3>
          <p>
            Privacy Policy
          </p>
          <p>
            Terms Of Use
          </p>
          <p>
            FAQ
          </p>
          <p>
            Contact
          </p>
        </div>

         <div className='ft5'>
          <h3>
            Download App
          </h3>
          <div className='ft5_in'>
            <p>
              Save $3 with App New User Only
            </p>
            <div>
              <img src={image1s} alt="" className='foho1s' />
              <div className='Ok'>
                <img src={image2s} alt="" className='foho2s' />
                <img src={image3s} alt="" className='foho2s' /></div>
            </div>
          </div>
          <div className='endF'>
            <img src={image4s} alt="" className='foho3s'/>
            <img src={image5s} alt="" className='foho3s'/>
            <img src={image6s} alt="" className='foho3s'/>
            <img src={image7s} alt="" className='foho3s'/>
          </div>
        </div>

      </div>
      <hr />
      <div className='footer-button'>
        <img src={image1} alt="" />
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  )
}

export default Footer
