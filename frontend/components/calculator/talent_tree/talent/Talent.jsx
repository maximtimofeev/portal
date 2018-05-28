import React from "react";
import PropTypes from "prop-types";
import { css } from 'aphrodite/no-important';
import styles from './style';
import Description from './description/Description';
import PointCounter from './point_counter/PointCounter';
import Arrow from './arrow/Arrow';
import store from '../../store';

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
      availability: this.props.treePoints >= (this.props.config.tier - 1) * 5,
      slavePicked: false
    } 
  }
  componentWillReceiveProps(props) {
    this.setState({
      availability:  props.treePoints >= (props.config.tier - 1) * 5,
    });
    const masterState = props.storeState.talentDependencity.find((obj) => obj.id == props.config.masterId);
    const slaveState = props.storeState.talentDependencity.find((obj) => obj.id == props.config.slaveId);
    let masterPicked = false
    if (props.config.masterId != "") {
      masterPicked = masterState == undefined ? false : masterState.slaveId == props.config.id;
      this.setState({
        availability: props.treePoints >= (props.config.tier - 1) * 5 && masterPicked
      })
    }
    if (props.config.slaveId != "") {
      this.setState({
        slavePicked: slaveState == undefined ? false : slaveState.masterId == props.config.id
      })
    }
  }
  setDescState = (state) => {
    this.setState({descActive: state})
  }
  handleMouseEnter = () => {
    this.setDescState(true);
  }
  handleMouseLeave = () => {
    this.setDescState(false);
  }
  handleMouseLeftClick = () => {
    this.setState({points: this.state.points + 1});
    this.props.handleTreePoints(1);
    this.props.handleCalculatorPoints(-1);
    if (this.state.points == this.state.capacity - 1) {
      if (this.props.config.slaveId != "") {
        store.dispatch({type: 'ADD_TALENT_SLAVE_ID', id: this.props.config.id, slaveId: this.props.config.slaveId});
      }
      if (this.props.config.masterId != "") {
        store.dispatch({type: 'ADD_TALENT_MASTER_ID', id: this.props.config.id, masterId: this.props.config.masterId});
      }
    }
  }

  handleMouseRightClick = () => {
    if (this.state.points > 0 && !this.state.slavePicked) {
      this.setState({points: this.state.points - 1});
      this.props.handleTreePoints(-1);
      this.props.handleCalculatorPoints(1);
      if ((this.props.config.slaveId != "") && !this.state.slavePicked) {
        if (store.getState().talentDependencity.find((obj) => obj.id == this.props.config.id) != undefined) {
          store.dispatch({type: 'REMOVE_TALENT_SLAVE_ID', slaveId: this.props.config.slaveId});
        }
      }
      if ((this.props.config.masterId != "") && (this.state.points == 1)) {
        if (store.getState().talentDependencity.find((obj) => obj.id == this.props.config.id) != undefined) {
          store.dispatch({type: 'REMOVE_TALENT_MASTER_ID', masterId: this.props.config.masterId});
        }
      }
    }
  }

  talentPicked = () => {
      return (this.state.points == this.state.capacity)
  }
  handleClick = (e) => {
    const talentPickable = (
        (this.state.points < this.state.capacity)
        && (this.props.talentCount > 0)
        && (this.state.availability)
      );
    const tierUnpickable = (
        this.props.treePoints <= this.props.config.tier * 5
      );
    e.preventDefault();
    if ((e.type === 'click') && talentPickable) {
      this.handleMouseLeftClick();
    } else if ((e.type === 'contextmenu') ) {
      this.handleMouseRightClick();      
    }
  }
  renderDescription = () => {
    return (this.state.descActive ? <Description config={this.props.config} points={this.state.points}></Description> : null);
  }
  render () {
    const talentSideLength = 44;
    const talentHasArrow = (
      this.props.config.arrowDirection != "" && this.props.config.arrowLength != ""
      );
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
        this.state.availability && this.state.points > 0 && !this.state.masterPicked && styles.active
      );
   
    const talentBorderClasses = css(
        styles.talentBorder,
        this.state.availability && this.state.points > 0 && styles.talentAvailable,
        this.talentPicked() && styles.talentPicked
      );

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
          <div className={talentBorderClasses}>
          </div>
          <PointCounter points={this.state.points}
                        capacity={this.state.capacity}
                        availability={this.state.availability}
                        picked={this.talentPicked()}>
          </PointCounter>
          {this.renderDescription()}
          {console.log(this.props.config.name, talentHasArrow)}
          {talentHasArrow ? <Arrow config={this.props.config}></Arrow> : null}
        </div>
      </React.Fragment>
    );
  }
}

export default Talent
