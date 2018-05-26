import React from "react";
import PropTypes from "prop-types";
import { css } from 'aphrodite/no-important';
import styles from './style';
import Talent from './talent/Talent';
import store from '../store';

class TalentTree extends React.Component {
  constructor(props) {
    super(props);
    const talentOriginalRows = 7;

    this.config = require(`./config/${this.props.class}.json`);
    this.state = {
      spec: this.props.spec,
      gridRows: talentOriginalRows + this.props.type * 2,
      treePoints: 0
    }
  }

  handleStore = () => {
    store.subscribe(() => {
      console.log("hej from tree");
    })
  }

  handleTreePoints = (val) => {
    this.setState({treePoints: this.state.treePoints + val})
  }

  render () {
    var classSprite = require(`./img/${this.props.class}.png`)
    var background = require(`./img/${this.props.class}_${this.props.spec}.jpg`)

    let treeStyle = {
      backgroundImage: `url('${background}')`,
      backgroundRepaet: 'no-repeat',
      gridTemplateRows: `repeat(${this.state.gridRows}, 1fr)`
    };
    let talents = () => this.config[`${this.state.spec}`].map(
      (talentConfig, i) => <Talent
        key={i}
        config={talentConfig}
        sprite={classSprite}
        treePoints={this.state.treePoints}
        handleTreePoints={this.handleTreePoints}
        maxTalent={this.props.maxTalent}
        talentCount={this.props.talentCount}
        handleCalculatorPoints={this.props.handleCalculatorPoints}
        handleStore={this.handleStore}/>
      );
    return (
      <React.Fragment>
        <div className={css(styles.tree)} style={treeStyle}>
          {talents()}
        </div>
      </React.Fragment>
    );
  }
}

export default TalentTree
