import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
  menuElement: {
    display: 'flex',
    font: '16px Verdana, sans-serif'
  },
  menuElementLink: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 10px',
    color: '#cba300',
    textDecoration: 'none',
    ':hover': {
      color: '#ffffff'
    }
  },
  active: {
    border: '2px solid #da2b49',
    borderRadius: '3px'
  }
});