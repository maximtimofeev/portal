import { StyleSheet } from 'aphrodite/no-important'

export default StyleSheet.create({
  description: {
    position: 'absolute',
    top: '50%',
    left: '63px',
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    height: '50px',
    boxSizing: 'border-box',
    padding: '5px',
    color: '#ffffff',
    border: '1px solid #a5a5a5',
    borderRadius: '1px',
    background: 'rgba(0, 0, 0, .8)',
    zIndex: '10'
  },
  talentName: {
    fontWeight: 'bold',
    marginBottom: '5px'
  }
});