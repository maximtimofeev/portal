import React from "react"
import PropTypes from "prop-types"
import { css } from 'aphrodite/no-important'
import styles from './style'
class TalentTree extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className={css(styles.tree)}></div>
      </React.Fragment>
    );
  }
}

export default TalentTree
