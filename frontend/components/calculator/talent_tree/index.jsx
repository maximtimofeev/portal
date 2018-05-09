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
    };
    var talents = () => this.config.arms.map((talentConfig, i) => <Talent key={i} sprite={classSprite} x={talentConfig.posX} y={talentConfig.posY}/>);

    return (
      <React.Fragment>
        <div className={css(styles.tree)} style={treeStyle}>
          {talents()}
        </div>
      </React.Fragment>
    );
  }
}

export default TalentTree
