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
      capacity: this.props.config.capacity,
      points: 0,
      availability: this.props.config.tier == 1,
    }
  }
  componentWillReceiveProps(props) {
    this.setState({
      sprite: props.sprite,
      x: props.config.posX,
      y: props.config.posY,
      gridX: props.config.gridX,
    });
  }
  handleMouseEnter = () => {
    this.setState({
      descActive: true
    });
  }
  handleMouseLeave = () => {
    this.setState({
      descActive: false
    });
  }

  handleClick = (e) => {
    if ((e.type === 'click') && (this.state.points < this.state.capacity)) {
      this.setState({points: this.state.points + 1});
      this.props.treePoints(1);
    } else if (e.type === 'contextmenu') {
      e.preventDefault();
      if (this.state.points > 0) {
        this.setState({points: this.state.points - 1});
        this.props.treePoints(-1);
      }
    }
  }
  renderDescription = () => {
    return (this.state.descActive ? <Description config={this.props.config} points={this.state.points}></Description> : null);
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
