import React from "react"
import PropTypes from "prop-types"
import { css } from 'aphrodite/no-important'
import styles from './style'
import TalentTree from './talent_tree/TalentTree'
class Calculator extends React.Component {
  constructor () {
    super();
    this.state = {
      class: 'warrior',
      type: '1',
      pointsAvailable: 61,
      pointsCapacity: 61
    };
  }
  handlePoints = (val) => {
    this.setState({pointsAvailable: this.state.pointsAvailable + val})
  }
  render () {
    let trees = () => {
      let talentTrees = [];
      for (let i = 1; i <= 3; i++) {
        talentTrees.push(
          <TalentTree
            key={i}
            class={this.state.class}
            spec={i}
            type={this.state.type}
            maxTalent={this.state.pointsCapacity}
            talentCount={this.state.pointsAvailable}
            handleCalculatorPoints={this.handlePoints}/>)
      }
      return talentTrees;
    }
    return (
      <React.Fragment>
        <div className={css(styles.calculator)}>
          {trees()}
        </div>
      </React.Fragment>
    );
  }
}

export default Calculator
