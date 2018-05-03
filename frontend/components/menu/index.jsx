import React from "react"
import PropTypes from "prop-types"
import { css } from 'aphrodite/no-important'
import styles from './style'

class Menu extends React.Component {
  render () {
    return (
      <React.Fragment>
      <nav className={css(styles.topMenu)}>
        <li className={css(styles.menuElement)}>
          <a href='/'>Home</a>
        </li>
      </nav>
      </React.Fragment>
    );
  }
}

export default Menu
