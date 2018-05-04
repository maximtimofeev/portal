import React from "react"
import PropTypes from "prop-types"
import { css } from 'aphrodite/no-important'
import styles from './style'
class MenuItem extends React.Component {
  render () {
    return (
      <React.Fragment>
        <li className={css(styles.menuElement)}>
          <a href={this.props.link} className={css(styles.menuElementLink)}>{this.props.name}</a>
        </li>
      </React.Fragment>
    );
  }
}

export default MenuItem
