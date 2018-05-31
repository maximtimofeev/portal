import { StyleSheet } from 'aphrodite/no-important';
import arrowBody from '../../img/arrow-body.png';
import arrow from '../../img/arrow.png';

export default StyleSheet.create({
  arrow: {
    display: "block",
    position: "absolute",
    width: "11px",
    backgroundImage: `url(${arrowBody})`,
    backgroundRepeat: "repeat",
    pointerEvents: "none",
    zIndex: "10",
    filter: "grayscale(100%)",

    ":after": {
      content: '""',
      display: "block",
      width: "19px",
      height: "11px",
      position: "absolute",
      bottom: "-10px",
      left: "-4px",
      backgroundImage: `url(${arrow})`
    },
  },
  available: {
    filter: "none",
  },
  picked: {
    filter: "none",
    backgroundPositionX: "-11px",

    ":after": {
      backgroundPositionX: "-19px",
    },
  },
  down1: {  
    top: "53px",
    left: "22px",
    height: "25px",
  },
  down2: {
    top: "53px",
    left: "22px",
    height: "109px",
  },
  down3: {
    top: "53px",
    left: "22px",
    height: "192px",
  },
  right1: {
    top: "21px",
    left: "54px",
    height: "12px",
    transform: "rotate(-90deg)",
  },
  left1: {
    top: "21px",
    right: "54px",
    height: "12px",
    transform: "rotate(90deg)",
  },
});