import React from "react"
import PropTypes from "prop-types"
import { css } from 'aphrodite/no-important'
import styles from './style'

class TalentTree extends React.Component {
  render () {
    var classSprite = require(`./img/${this.props.class}.jpg`)
    var positionX = (this.props.spec - 1) * 246
    var treeStyle = {
      backgroundImage: `url('${classSprite}')`,
      backgroundPositionX: `-${positionX}px`
    }

    console.log(positionX)
    return (
      <React.Fragment>
        <div className={css(styles.tree)} style={treeStyle}>
        </div>
      </React.Fragment>
    );
  }
}

export default TalentTree
