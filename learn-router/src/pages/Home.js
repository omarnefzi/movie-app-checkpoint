import React from 'react'
import "./Home.css";


const Home = () => {
  return (
    <div>

  <div  style={{marginBottom: 10}}   className="top">
    <div className="columns">
      <div className="column is-full featured_wrapper p-0">
        <img
          src="img/home-pic.jpg"
          className="featured"
        />
        <div className="title_wrapper">
          <span className="has-text-white">Trending Today</span>
          <h1 className="title is-1 has-text-white">
            The Untold Story of the great Lorem Ipsum
          </h1>
          <button className="button is-medium">Watch It Now</button>
        </div>
      </div>
    </div>
  </div>
  
</div>

  )
}

export default Home