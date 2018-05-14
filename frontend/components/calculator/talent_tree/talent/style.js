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
    left: '5px',
    backgroundColor: '#000000',
    filter: 'grayscale(100%)'
  },
  talentBorder: {
    width: '53px',
    height: '53px',
    position: 'absolute',
    backgroundImage: `url(${background})`,

    ":hover": {
    }
  },
  talentAvailable: {
    backgroundPosition: '-53px 0',
  },
  talentPicked: {
    backgroundPosition: '-106px 0',
  },
  active: {
    filter: 'none'
  }
});