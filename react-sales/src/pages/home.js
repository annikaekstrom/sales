import React from "react"
import "./home.css"
import colors from "../images/colors.jpg"
import backgrounds from "../images/background1.jpg"
import skiing from "../images/skiing.JPG"
import titanic from "../images/titanic.JPG"
import present from "../images/present.PNG"

class Home extends React.Component {

  render() {
    return (
      <div className="main" style={{ backgroundImage: `url(${backgrounds})` }}>
        <div className="hero">
          <div className="companyname">
            <h1>hello THE ART PART OF SALES <br />
              <p id="text">Creative & successful <br /> sales competitions</p>
            </h1>
          </div>
        </div>

        <div className="intro">
          <p id="introtext">I love a good sales competition. Now, having a sales competition is one thing, having a motivating and easy to relate to visual also makes it fun at the same time. Fun and inspiring for both the team and for the manager = great result and great team spirit. I made this page to share visuals for sales competitions with others, and to inspire me to create new ones by seing the visuals of others around the world. <br /> <br /> I have always been drawing and most of my own visuals are made with just pens. But you do not have to be good at drawing to create visuals, imagination and some card, cut-outs and movable pieces make great visuals!
          <br />  <br />
        Have a look in the gallery and get excited, then send me your ideas and visuals about sales competitions and <br /> let's inspire sales teams around the world!
      </p>
        </div>

        <div className="features">
          <div className="container image">
            <img src={present} alt="Design" />
          </div>
          <div className="container image">
            <img src={titanic} alt="Design" />
          </div>
          <div className="container image">
            <img src={skiing} alt="Design" />
          </div>

        </div>
      </div>
    )
  }

}

export default Home
