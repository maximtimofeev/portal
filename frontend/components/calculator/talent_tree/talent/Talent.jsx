import React from "react"
import PropTypes from "prop-types"
import { css } from 'aphrodite/no-important'
import styles from './style'
import Description from './description/Description'

class Talent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sprite: this.props.sprite,
      x: this.props.x,
      y: this.props.y,
      gridX: this.props.gridX,
      descActive: false,
      description: <Description></Description>
    }
    this.renderDescription = this.renderDescription.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  componentWillReceiveProps(props) {
    this.setState({
      sprite: props.sprite,
      x: props.x,
      y: props.y,
      gridX: this.props.gridX,
      descActive: this.props.descActive
    });
  }
  handleMouseEnter () {
    this.setState({
      descActive: true
    });
  }
  handleMouseLeave () {
    this.setState({
      descActive: false
    });
  }
  renderDescription () {
    return (this.state.descActive ? this.state.description : null);
  }
  render () {
    const talentSideLength = 44;
    let talentContainerStyle = {
      gridColumnStart: this.state.gridX
    }
    let talentStyle = {
      backgroundImage: `url('${this.state.sprite}')`,
      backgroundPositionX: `-${this.state.x * talentSideLength}px`,
      backgroundPositionY: `-${this.state.y * talentSideLength}px`,
    }
    return (
      <React.Fragment>
        <div className={css(styles.talentContainer)} style={talentContainerStyle} onMouseEnter={this.handleMouseEnter}  onMouseLeave={this.handleMouseLeave}>
          <div className={css(styles.talent)} style={talentStyle}>
          </div>
          <div className={css(styles.talentBorder)}>
          </div>
          {this.renderDescription()}
        </div>
      </React.Fragment>
    );
  }
}

export default Talent
