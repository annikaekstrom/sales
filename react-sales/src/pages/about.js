import React from "react"
import "./about.css"
import me from "../images/me.PNG"

class About extends React.Component {

  render() {
    return (
      <div className="about-container">
        <img id="profile" src={me} alt="" />
          <div className="about-text">
            <h4>Send me your ideas and let us inspire sales!</h4>
            <p>
              I have always been drawing and made work more fun
              whereever I work; in bars, offices etc. It is a challenge
              to have motivated team members and I am constatntly
              trying to do better in motivating my team.
              Sales competitoins can be extremely fun if you
              make them creative and fun. This is wy I want to share
              my ideas and also see your ideas!
              </p>
              <p>................</p>
              <p>
              Take part of my ideas and how i have made playing a part of my team.
              Send my your ideas and let us inspire each other!
            </p>
            <p>par.ekstrom@gmail.com</p>
          </div>
      </div>
    )
  }

}

export default About
