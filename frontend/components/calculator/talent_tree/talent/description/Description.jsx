import React from "react"
import PropTypes from "prop-types"
import { css } from 'aphrodite/no-important'
import styles from './style'

class Description extends React.Component {
  constructor (props) {
    super(props);    
    this.state = {
      text: this.handleDescText(this.props.config.description, this.props.points)
    }
  }
  componentWillReceiveProps(props) {
    this.setState({
      text: this.handleDescText(props.config.description, props.points)
    })
  }
  handleDescText = (description, points) => {
    let text = description;
    this.props.config.descValues.map((value, i) => {
      let regex = new RegExp(`<${i}>`);
      text = text.replace(regex, value[points == 0 ? 0 : points - 1]);
    })
    return text;
  };
  renderNextRank = () => {
    return (this.props.points > 0 && this.props.points < this.props.config.capacity) ? <div className={css(styles.descriptionItem)}>
        Next Rank:<br/>
        {this.handleDescText(this.props.config.description, this.props.points + 1)}
      </div> : null
  }
  render () {
    return (
      <React.Fragment>
        <div className={css(styles.description)}>
          <div className={css(styles.descriptionItem, styles.talentName)}>{this.props.config.name}</div>
          <div className={css(styles.descriptionItem)}>Rank {this.props.points}/{this.props.config.capacity}</div>
          <div className={css(styles.descriptionItem)}>{this.state.text}</div>
          {this.renderNextRank()}
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
