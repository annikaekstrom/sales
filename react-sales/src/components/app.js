import React from "react"
import Home from "pages/home"
import { HashRouter, Route } from "react-router-dom"
import Navigation from "./navigation"
import Picturespreview from "./../pages/picturespreview"
import Footer from "./footer"
import About from "./../pages/about"

class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <div>
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Picturespreview} />
          <Footer />

        </div>
      </HashRouter>
    )
  }

}

export default App
