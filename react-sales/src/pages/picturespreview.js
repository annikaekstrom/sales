import React from "react"
import ImageZoom from "react-medium-image-zoom"
import info from "./../data/info"
import Details from "./details"
import "./picturespreview.css"
import Balls from "./../images/balls.JPG"

class Picturespreview extends React.Component {

  render() {
    return (
      // <Link to={`/projects/${this.props.url}`} className="projects">
      <div className="grid-container">
        {/* <ImageZoom
          image={{
            src: Balls,
            alt: "Golden Gate Bridge",
            className: "imgnew",
            style: { width: "20em" }
          }}
          zoomImage={{
            src: Balls,
            alt: "Golden Gate Bridge"
          }} /> */}
        {info.map(item => {
          return <Details
            key={item.id}
            description={item.description}
            projectImage={item.projectImage}
            link={item.link} />
        })}
      </div>
    )
  }

}

export default Picturespreview
