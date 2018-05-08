import React from "react"
import PropTypes from "prop-types"
import { css } from 'aphrodite/no-important'
import styles from './style'
import Talent from './talent'

class TalentTree extends React.Component {
  constructor(props) {
    super(props);
    this.config = require(`./config/${this.props.class}.json`);
  }
  render () {
    var classSprite = require(`./img/${this.props.class}.png`)
    var background = require(`./img/${this.props.class}_${this.props.spec}.jpg`)

    var treeStyle = {
      backgroundImage: `url('${background}')`,
      backgroundRepaet: 'no-repeat'
    }

    return (
      <React.Fragment>
        <div className={css(styles.tree)} style={treeStyle}>
          <Talent sprite={classSprite} x='0' y='0'>
          </Talent>
           <Talent sprite={classSprite} x='-56px' y='0'>
          </Talent>
        </div>
      </React.Fragment>
    );
  }
}

export default TalentTree
