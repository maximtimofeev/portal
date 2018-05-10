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
      gridX: this.props.gridX
    }
  }
  componentWillReceiveProps(props) {
    this.setState({
      sprite: props.sprite,
      x: props.x,
      y: props.y,
      gridX: this.props.gridX
    });
  }
  render () {
    var talentContainerStyle = {
      gridColumnStart: this.state.gridX
    }
    var talentStyle = {
      backgroundImage: `url('${this.state.sprite}')`,
      backgroundPositionX: `-${this.state.x * 44}px`,
      backgroundPositionY: `-${this.state.y * 44}px`,
    }

    return (
      <React.Fragment>
        <div className={css(styles.talentContainer)} style={talentContainerStyle}>
          <div className={css(styles.talent)} style={talentStyle}>
          </div>
          <div className={css(styles.talentBorder)}>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Talent
