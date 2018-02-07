import React from "react"
import "./home.css"
import colors from "../images/colors.jpg"
import guitar from "../images/guitar.JPG"
import christmas from "../images/christmas.JPG"
import balls from "../images/balls.JPG"
import snow from "../images/snow.JPG"

class Home extends React.Component {

  render() {
    return (
      <div className="main" style={{ backgroundImage: `url(${colors})` }}>
        <div className="hero">
          <div className="companyname">
            <h1>THE ART PART OF SALES <br />
              <p>Creative successful sales competitions</p>
            </h1>
          </div>
        </div>

        <div className="features">
          <div className="container text">
            <h4>I made this page to share sales comepetitions. Help me to
            bw inspired and to inspire others. Sales competitons can be so much
          more fun and it is also a way to make your team motivated. <br/>
          Send me you ideas about sales competitions and help inspire others:</h4>
          </div>
          <div className="container image">
            <img src={guitar} alt="Design" />
          </div>
          <div className="container image">
            <img src={christmas} alt="Design" />
          </div>
          <div className="container text">
            <h4>These are some of the sales competitions I have made. It
            includes football, music, christmas, snow, etc. Please use my ideas
          and see if it works on your team.</h4>
          </div>

          <div className="container text">
            <h4>"Who gets teh most balls" is one of the sales competitions
            we had before the championships in Rio. My team got so motivated
          and kicked 100 balls into the goal.</h4>
          </div>
          <div className="container image">
            <img src={balls} alt="Design" />
          </div>

          <div className="container image">
            <img src={snow} alt="Design" />
          </div>
          <div className="container text">
            <h4>Skiing is one other large interest in my team. The
            more they have been selling, the more parts of the hill
          has been done and when in goal, we all go skiing.</h4>
          </div>
        </div>
      </div>
    )
  }

}

export default Home
