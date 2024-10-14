import React from 'react'
import image from './home-image.webp'
import './Home.css'

const Home = () => {
  return (
      <div className="home">
        <div className="home-container">
        <img src={image} alt="Home Image" />
        <div className="overlay">
        </div>
        <div className="content">
          <h1>Better Solution for Business</h1>
          <p>Create.Elevate.Expand</p>
          <button><a href='#contact'>Talk With Us</a></button>
        </div>
      </div>
      </div>
  )
}

export default Home
