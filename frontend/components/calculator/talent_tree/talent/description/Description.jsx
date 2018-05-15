import React from "react"
import PropTypes from "prop-types"
import { css } from 'aphrodite/no-important'
import styles from './style'

class Description extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: this.props.config.name,
      capacity: this.props.config.capacity,
      points: this.props.points
    }
  }
  componentWillReceiveProps(props) {
    this.setState({
      points: props.points
    });
  }
  render () {
    return (
      <React.Fragment>
        <div className={css(styles.description)}>
          <div className={css(styles.talentName)}>{this.state.name}</div>
          <div>Rank {this.state.points}/{this.state.capacity}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Description
