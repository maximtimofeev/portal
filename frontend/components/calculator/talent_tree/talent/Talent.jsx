import React from "react";
import PropTypes from "prop-types";
import { css } from 'aphrodite/no-important';
import styles from './style';
import Description from './description/Description';
import PointCounter from './point_counter/PointCounter';
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
      masterPicked: false,
      slaveFree: true
    }
    store.subscribe(() => {     
      const slaveId = store.getState().talentDependencity.find((obj) => obj.id == this.props.config.masterId);
      let masterPicked = slaveId == undefined ? false : slaveId.slaveId == this.props.config.id;

     
      if (this.props.config.masterId != "") {
        this.setState({
          masterPicked: masterPicked,
          availability: this.props.treePoints >= (this.props.config.tier - 1) * 5 && masterPicked,
        })
      }
       if (this.props.config.masterId != "") {
        console.log("store", store.getState());
        console.log("name", this.props.config.name, "storemasterPicked", masterPicked, "masterPicked", this.state.masterPicked)
      }
    })
    
  }
  componentWillReceiveProps(props) {
    this.props.handleStore();
     if (this.props.config.masterId != "") {
        console.log("name", this.props.config.name, "statemasterPicked", this.state.masterPicked)
      }
    this.setState({
      sprite: props.sprite,
      x: props.config.posX,
      y: props.config.posY,
      gridX: props.config.gridX,
      availability: props.config.masterId != "" ? (props.treePoints >= (props.config.tier - 1) * 5 && this.state.masterPicked) : props.treePoints >= (props.config.tier - 1) * 5,
    });

  }
  componentWillMount() {

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
  talentPicked = () => {
      return (this.state.points == this.state.capacity)
  }
  handleClick = (e) => {
    const talentPickable = (
        (this.state.points < this.state.capacity)
        && (this.props.talentCount > 0)
        && (this.state.availability)
      )
    e.preventDefault();
    if ((e.type === 'click') && talentPickable) {
      this.setState({points: this.state.points + 1});
      this.props.handleTreePoints(1);
      this.props.handleCalculatorPoints(-1);
      if ((this.state.points == this.state.capacity - 1) && (this.props.config.slaveId != "")) {
        store.dispatch({type: 'ADD_TALENT_SLAVE_ID', id: this.props.config.id, slaveId: this.props.config.slaveId});
      }
    } else if (e.type === 'contextmenu') {
      if (this.state.points > 0) {
        this.setState({points: this.state.points - 1});
        this.props.handleTreePoints(-1);
        this.props.handleCalculatorPoints(1);
      }
      if (this.props.config.slaveId != "") {
        if (store.getState().talentDependencity.find((obj) => obj.id == this.props.config.id) != undefined) {
          store.dispatch({type: 'REMOVE_TALENT_SLAVE_ID', slaveId: this.props.config.slaveId});
        }
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
        this.state.availability && this.state.points > 0 && !this.state.masterPicked ? styles.active : null
      )
   
    const talentBorderClasses = css(
        styles.talentBorder,
        this.state.availability && this.state.points > 0 && styles.talentAvailable,
        this.talentPicked() && styles.talentPicked
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
          <div className={talentBorderClasses}>
          </div>
          <PointCounter points={this.state.points}
                        capacity={this.state.capacity}
                        availability={this.state.availability}
                        picked={this.talentPicked()}>
          </PointCounter>
          {this.renderDescription()}
        </div>
      </React.Fragment>
    );
  }
}

export default Talent
