import React from "react"
import PropTypes from "prop-types"
import { css } from 'aphrodite/no-important'
import styles from './style'

class Talent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sprite: this.props.sprite,
      x: this.props.x,
      y: this.props.y,
    }
  }
  componentWillReceiveProps(props) {
    this.setState({
      sprite: props.sprite,
      x: props.x,
      y: props.y,
    });
  }
  render () {
    var talentStyle = {
      backgroundImage: `url('${this.state.sprite}')`,
      backgroundPositionX: `-${this.state.x}`,
      backgroundPositionY: `-${this.state.y}`
    }

    return (
      <React.Fragment>
        <div className={css(styles.talentContainer)}>
          <div className={css(styles.talent)} style={talentStyle}>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Talent
