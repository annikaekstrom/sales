import React from "react"
import info from "./data/info"
import "./projectPage.css"

class ProjectPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      information: {}
    }
  }

  componentDidMount() {
    const information = info.find(p => (p.id === this.props.match.params.id))
    this.setProject(information)
  }

setProject = (information) => {
  this.setState({
    information
  })
}

render() {
  return (
    <div>
      <div className="ProjectPage">
        <h1>{this.state.information.name}</h1>
        <div className="projectDescription">
          <p>{this.state.information.description}</p>
          <div className="projectImage">
            <p>{this.state.information.projectImage}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
}

export default ProjectPage
