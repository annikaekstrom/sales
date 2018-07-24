import React from "react"
import "./about.css"
import me from "../images/me.PNG"
import backgroundpicture from "../images/background2.jpg"

class About extends React.Component {

  render() {
    return (
      <div className="picture" style={{ backgroundImage: `url(${backgroundpicture})` }}>
      {/* <div className="about-container"> */}
        <img id="profile" src={me} alt="" />
          <div className="about-text">
            <p id="aboutheadline">Send me your ideas and let us inspire sales!</p>
          </div>
          <div className="abouttext">
            I have always been drawing and made work more fun
            whereever I work; in bars, offices etc. It is a challenge
            to have motivated team members and I am constantly
            trying to do better in motivating my team.
            Sales competitions can be extremely fun if you
            make them creative and fun. This is wy I want to share
            my ideas and also see your ideas! Take part of my ideas and how I have made playing a part of my sales strategy.
            Send me your ideas and let us inspire each other!

          par.ekstrom@gmail.com
          </div>
      {/* </div> */}
    </div>
    )
  }

}

export default About
