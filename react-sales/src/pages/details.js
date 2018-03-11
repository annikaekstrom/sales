import React from "react"

class Details extends React.Component {

  render() {
    return (
      <div className="projectDescription">
        <p id="description">{this.props.description}</p>
        <img id="gallery" src={this.props.projectImage} alt="Design" />
      </div>
    )
  }
}

export default Details
