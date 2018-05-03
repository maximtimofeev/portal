import React from "react"
import PropTypes from "prop-types"
import { css } from 'aphrodite/no-important'
import styles from './style'

class Header extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1 className={css(styles.mainHeader)}>
          Hello, im calculator
        </h1>
      </React.Fragment>
    );
  }
}

export default Header
