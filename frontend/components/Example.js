import React from "react"
import PropTypes from "prop-types"
class Example extends React.Component {
  render () {
    return (
      <h1>
        Zagolovok dlya {this.props.text}
      </h1>
    );
  }
}

export default Example
