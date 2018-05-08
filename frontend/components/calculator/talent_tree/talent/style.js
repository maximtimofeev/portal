import { StyleSheet } from 'aphrodite/no-important'
import background from '../img/border.png'

export default StyleSheet.create({
  talentContainer: {
    width: '62px',
    height: '62px',
    position: 'relative',
    backgroundImage: `url(${background})`
  },
  talent: {
    width: '56px',
    height: '56px',
    position: 'absolute',
    top: '3px',
    left: '3px'
  }
});