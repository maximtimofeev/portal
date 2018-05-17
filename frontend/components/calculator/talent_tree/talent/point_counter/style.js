import { StyleSheet } from 'aphrodite/no-important'

export default StyleSheet.create({
  pointContainer: {
    display: 'flex',
    flexDirectiom: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: '-8px',
    bottom: '-5px',
    color: '#ffffff',
    fontSize: '14px',
    padding: '2px 2px 0 2px',
    background: '#000000',
    border: '1px solid #717171',
    borderRadius: '3px'
  },
  counterAvailable: {
    color: '#00f700',
    borderColor: '#00f700',
  },
  counterFull: {
    color: '#ffcd00',
    borderColor: '#ffcd00'
  },
});