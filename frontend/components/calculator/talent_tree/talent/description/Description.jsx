import React from "react"
import PropTypes from "prop-types"
import { css } from 'aphrodite/no-important'
import styles from './style'

class Description extends React.Component {
  constructor (props) {
    super(props);
    let text = this.props.config.description;
    this.props.config.descValues.map((value, i) => {
      let regex = new RegExp(`<${i}>`);
      text = text.replace(regex, value[this.props.points == 0 ? 0 : this.props.points - 1]);
    })
    this.state = {
      text: text
    }
  }
  render () {
    return (
      <React.Fragment>
        <div className={css(styles.description)}>
          <div className={css(styles.descriptionItem, styles.talentName)}>{this.props.config.name}</div>
          <div className={css(styles.descriptionItem)}>Rank {this.props.points}/{this.props.config.capacity}</div>
          <div className={css(styles.descriptionItem)}>{this.state.text}</div>
          <div className={css(styles.descriptionItem, styles.learnTips)}>
            <span className={css(styles.learn)}>Left Click To Learn</span>
            <span className={css(styles.unlearn)}>Right Click To Unlearn</span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Description
