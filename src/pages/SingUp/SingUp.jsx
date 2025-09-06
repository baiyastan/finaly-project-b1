import React from 'react'
import "./Sing.scss"
import Phone from "../../assets/image/Phone.png"
import Google from "../../assets/svg/google.svg"

function SingUp() {
  return (
    <section>
        <div className='Side_Image'>
          <img src={Phone} alt="" />
        </div>
        <div className='right_Bart'>
          <div className='SingUp'>
            <div className='Sing_UP'>
              <h3>Create an account</h3>
              <p>Enter your details below</p>
            </div>
            <div className='Sing_center'>
              <div><input type="text" placeholder='Name'/></div>
              <div><input type="text" placeholder='Email or Phone Number'/><hr /></div>
              <div><input type="text" placeholder='Password'/><hr /></div>
            </div>
            <div className='Sing_end'>
              <button className='Btn1'>
                <p>Create Account</p>
              </button>
              <button className='Btn2'>
                <div><img src={Google} alt="" />
                <p>Sign up with Google</p></div>
              </button>
              <div className='Sing_End_Text'>
                <p>Already have account?</p>
                <h4>Log in</h4>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default SingUp