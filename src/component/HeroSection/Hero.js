import React from 'react'
import './Hero.css';
import heroImg from '../../Assets/4841088.png'
const Hero = () => {
  return (
    <>
      <div className="hero_container">
        <div className="hero_content">
          <div className="hero_image">
            <img src={heroImg} alt="" />
          </div>
          <div className="hero_text">
            <p>Ready to <span>finally stickk </span> to your Goals?</p>
            <h3>I commit ot</h3>
            <div className="form-control">
              <div className="input-group">
                <select className="select">
                  <option disabled selected>Select Your Goal...</option>
                  <option>Lose Weight</option>
                  <option>Exercise Regularly</option>
                  <option>Quit Smoking</option>
                  <option>Race</option>
                  <option>Maintain Weight</option>
                  <option>Custom Goal (Everything Else)</option>
                </select>
                <button className="btn">Go</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero