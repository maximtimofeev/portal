import React from "react"
import PropTypes from "prop-types"
import { css } from 'aphrodite/no-important'
import styles from './style'

class Header extends React.Component {
  render () {
    return (
      <div className={css(styles.header)}>
        <h1 className={css(styles.mainHeader)}>
          Hello, im calculator
        </h1>
      </div>
    );
  }
}

export default Header
