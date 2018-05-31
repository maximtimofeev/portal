import { StyleSheet } from 'aphrodite/no-important'

export default StyleSheet.create({
  description: {
    position: 'absolute',
    top: '50%',
    left: '63px',
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    boxSizing: 'border-box',
    padding: '5px',
    color: '#ffffff',
    fontSize: '14px',
    border: '1px solid #a5a5a5',
    borderRadius: '1px',
    background: 'rgba(0, 0, 0, .8)',
    zIndex: '10'
  },
  descriptionItem: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '5px',
    lineHeight: '18px',
  },
  talentName: {
    fontWeight: 'bold',
    marginBottom: '5px'
  },
  learnTips: {
    justifyContent: 'space-between',
    marginBottom: '0'
  },
  learn: {
    color: '#1ae91b'
  },
  unlearn: {
    color: '#fb1410'
  }
});