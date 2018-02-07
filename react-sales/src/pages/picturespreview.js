import React from "react"
import info from "./../data/info"
import Details from "./details"
import "./picturespreview.css"

class Picturespreview extends React.Component {

  render() {
    return (
      // <Link to={`/projects/${this.props.url}`} className="projects">
      <div className="grid-container">
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
