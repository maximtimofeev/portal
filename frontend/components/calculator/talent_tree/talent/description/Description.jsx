import React from "react"
import PropTypes from "prop-types"
import { css } from 'aphrodite/no-important'
import styles from './style'

class Description extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className={css(styles.description)}>talent description</div>
      </React.Fragment>
    );
  }
}

export default Description
