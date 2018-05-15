import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
  tree: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    justifyItems: 'center',
    alignItems: 'center',
    width: '300px',
    height: '750px',
    marginRight: '20px',
    backgroundSize: 'cover',

    ":last-child": {
      marginRight: '0'
    }
  }
});