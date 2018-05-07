import React from "react"
import PropTypes from "prop-types"
import { css } from 'aphrodite/no-important'
import styles from './style'

class TalentTree extends React.Component {
  render () {
    var background = require(`./img/${this.props.class}_${this.props.spec}.jpg`)
    console.log(background)
    return (
      <React.Fragment>
        <div className={css(styles.tree)} style={{background: `url('${background}') no-repeat`}}>
        </div>
      </React.Fragment>
    );
  }
}

export default TalentTree
