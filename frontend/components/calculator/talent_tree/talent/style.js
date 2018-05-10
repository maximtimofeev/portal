import { StyleSheet } from 'aphrodite/no-important'
import background from '../img/border.png'

export default StyleSheet.create({
  talentContainer: {
    width: '53px',
    height: '53px',
    position: 'relative',
    cursor: 'pointer'
  },
  talent: {
    width: '44px',
    height: '44px',
    position: 'absolute',
    top: '6px',
    left: '5px'
  },
  talentBorder: {
    width: '53px',
    height: '53px',
    position: 'absolute',
    backgroundImage: `url(${background})`
  },
  talentPicked: {
    backgroundPosition: '-53px 0'
  },
  talentUpgraded: {
    backgroundPosition: '-106px 0'
  }
});