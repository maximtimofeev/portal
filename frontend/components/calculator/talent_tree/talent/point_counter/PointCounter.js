import React from "react"
import PropTypes from "prop-types"
import { css } from 'aphrodite/no-important'
import styles from './style'

class PointCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      availability: this.props.availability,
      picked: false
    }
  }
  componentWillReceiveProps(props) {
    this.setState({
      availability: props.availability,
      picked: props.picked
    });
  }
  render() {
    const counterClasses = css(
        styles.pointContainer,
        this.state.availability && styles.counterAvailable,
        this.state.picked && styles.counterFull
      )
    return (
      <React.Fragment>
        <div className={counterClasses}>{this.props.points}/{this.props.capacity}</div>
      </React.Fragment>
    );
  }
}

export default PointCounter
