import React from "react"
import "./upload.css"

class Upload extends React.Component {

  render() {
    return (
      <div>
        <div className="container">
          <form action="http://httpbin.org/anything" method="post" />

          <div className="contact">
            <label><p>NAME</p>
              <input
                className="input"
                type="text"
                spellCheck="false"
                autoComplete="off"
                name="firstname"
                value=""
                onFocus="this.placeholder =
              'Enter your name'"
                onBlur="this.placeholder = ''" />
              <span className="underline" />
            </label>

            <label><p>EMAIL</p>
              <input
                className="input"
                type="emal"
                spellCheck="false"
                autoComplete="off"
                name="firstname"
                value=""
                onFocus="this.placeholder =
              'Enter your email'"
                onBlur="this.placeholder = ''" />
              <span classaName="underline" />
            </label>
          </div>

          <label>
            <h2 className="message">DROP ME A MESSAGE</h2>
            <textarea
              name="message"
              value=""
              spellCheck="false"
              placeholder="Describe your ideas here"
              onFocus="this.placeholder = ''"
              onBlur="this.placeholder = 'Describe your ideas here'" />
          </label>

          <button
            type="button"
            name="button">Upload
          </button>
        </div>
      </div>
    )
  }

}

export default Upload
