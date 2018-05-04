import React from "react"
import PropTypes from "prop-types"
import { css } from 'aphrodite/no-important'
import styles from './style'
import MenuItem from './menuItem'

class Menu extends React.Component {
  render () {
    return (
      <React.Fragment>
      <nav className={css(styles.topMenu)}>
        <MenuItem name='Home' link='/'>
        </MenuItem>
      </nav>
      </React.Fragment>
    );
  }
}

export default Menu
