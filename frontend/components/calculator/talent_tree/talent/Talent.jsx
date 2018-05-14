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
      x: this.props.config.posX,
      y: this.props.config.posY,
      gridX: this.props.config.gridX,
      descActive: false,
      points: 0,
      description: <Description config={this.props.config}></Description>,
      availability: this.props.config.tier == 1,
    }
    this.renderDescription = this.renderDescription.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleCLick = this.handleCLick.bind(this);
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
  handleCLick (e) {
    if (e.type === 'click') {
      console.log('Left click');
    } else if (e.type === 'contextmenu') {
      console.log('Right click');
    }
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
    let talentClass = css(
        styles.talent,
        this.state.availability ? styles.active : null
      )
    return (
      <React.Fragment>
        <div className={css(styles.talentContainer)}
             style={talentContainerStyle}
             onMouseEnter={this.handleMouseEnter} 
             onMouseLeave={this.handleMouseLeave}
             onClick={this.handleClick}
             onContextMenu={this.handleClick}>
          <div className={talentClass} style={talentStyle}>
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
