import React from "react";
import PropTypes from "prop-types";
import { css } from 'aphrodite/no-important';
import styles from './style';

class Arrow extends React.Component {
  render () {

    const arrowClasses = css(
        styles.arrow,
        this.props.config.arrowDirection == "right" && styles.right,
        (this.props.config.arrowDirection == "down" && this.props.config.arrowLength == "1") && styles.down1,
        (this.props.config.arrowDirection == "down" && this.props.config.arrowLength == "2") && styles.down2,
        (this.props.config.arrowDirection == "down" && this.props.config.arrowLength == "3") && styles.down3,
        (this.props.config.arrowDirection == "right" && this.props.config.arrowLength == "1") && styles.right1,
        (this.props.config.arrowDirection == "left" && this.props.config.arrowLength == "1") && styles.left1,
      )
    return (
      <React.Fragment>
        <div className={arrowClasses}></div>
      </React.Fragment>
    );
  }
}

export default Arrow