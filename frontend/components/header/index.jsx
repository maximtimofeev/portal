import React from "react"
import PropTypes from "prop-types"
import Menu from "../menu"
import { css } from 'aphrodite/no-important'
import styles from './style'

class Header extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Menu>
        </Menu>
      </React.Fragment>
    );
  }
}

export default Header
