import {ScaledSheet} from 'react-native-size-matters';
import {
  whiteColor,
  timeBackgroud,
  blackColor,
  primaryColor,
  secondaryColor,
} from '../../Utils';
export default ({level}) => {
  return ScaledSheet.create({
    container: {
      backgroundColor: primaryColor,
      flex: 1,
    },
    input: {
      backgroundColor: whiteColor,
    },
    timerView: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    timeBox: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: timeBackgroud,
      padding: '5@ms',
      paddingRight: '10@ms',
      paddingLeft: '10@ms',
      margin: '3@ms',
    },
    time: {
      textAlign: 'center',
      color: whiteColor,
      fontWeight: 'bold',
      fontSize: '30@ms',
    },
    viewBox: {
      backgroundColor: whiteColor,
      padding: '5@ms',
      paddingRight: '10@ms',
      paddingLeft: '10@ms',
      width: '32%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    boxContainer: {
      height:
        level && level === 1 ? '150@vs' : level === 3 ? '275@vs' : '200@vs',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '5@s',
    },
    rightPad: {
      marginRight: '5@s',
    },
    leftPad: {
      marginRight: '5@s',
    },
    txt: {
      color: blackColor,
      fontSize: '35@ms',
      fontWeight: 'bold',
    },
    division: {
      height: '5@s',
    },
    inputText: {
      width: '100%',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '20@ms',
    },
    centerButton: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    errorStyle: {
      borderWidth: 2,
      borderColor: 'red',
    },
    infoBox: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    lable: {
      fontSize: '20@ms',
      fontWeight: 'bold',
    },
    value: {
      fontSize: '20@ms',
    },
    infoSection: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    instruction: {
      paddingTop: '10@ms',
      paddingBottom: '10@ms',
      justifyContent: 'center',
      alignItems: 'center',
    },
    instructionText: {
      textAlign: 'center',
      maxWidth: '90%',
    },
    button: {
      backgroundColor: secondaryColor,
    },
  });
};
