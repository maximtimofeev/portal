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
      pointsAll: 61
    };
  }
  render () {
    return (
      <React.Fragment>
        <div className={css(styles.calculator)}>
          <TalentTree class={this.state.class} spec='1' type={this.state.type}></TalentTree>
          <TalentTree class={this.state.class} spec='2' type={this.state.type}></TalentTree>
          <TalentTree class={this.state.class} spec='3' type={this.state.type}></TalentTree>
        </div>
      </React.Fragment>
    );
  }
}

export default Calculator
