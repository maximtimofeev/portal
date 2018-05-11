import React from "react"
import PropTypes from "prop-types"
import { css } from 'aphrodite/no-important'
import styles from './style'
import TalentTree from './talent_tree/TalentTree'
class Calculator extends React.Component {
  constructor () {
    super();
    this.state = {
      class: 'warrior'
    };
    this.changeClass = this.changeClass.bind(this)
  }
  changeClass () {}
  render () {
    return (
      <React.Fragment>
        <div className={css(styles.calculator)}>
          <TalentTree class={this.state.class} spec='1'></TalentTree>
          <TalentTree class={this.state.class} spec='2'></TalentTree>
          <TalentTree class={this.state.class} spec='3'></TalentTree>
        </div>
      </React.Fragment>
    );
  }
}

export default Calculator
