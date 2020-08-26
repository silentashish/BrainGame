import {ScaledSheet} from 'react-native-size-matters';
import {
  whiteColor,
  timeBackgroud,
  darkBackgroundColor,
  overlayColor,
  inputBoxColor,
} from '../../Utils';
export default ({level}) => {
  return ScaledSheet.create({
    container: {
      backgroundColor: darkBackgroundColor,
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
      height: '50@ms',
      width: '50@ms',
      borderRadius: 25,
      margin: '3@ms',
    },
    time: {
      textAlign: 'center',
      color: whiteColor,
      fontWeight: 'bold',
      fontSize: '30@ms',
    },
    viewBox: {
      backgroundColor: inputBoxColor,
      padding: '5@ms',
      paddingRight: '10@ms',
      paddingLeft: '10@ms',
      width: '32%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '10@ms',
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
      color: whiteColor,
      fontSize: '35@ms',
      fontWeight: 'bold',
    },
    division: {
      height: '5@s',
    },
    inputText: {
      color: whiteColor,
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
      color: whiteColor,
      marginBottom: '10@ms',
    },
    value: {
      fontSize: '20@ms',
      color: whiteColor,
    },
    infoSection: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
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
      color: whiteColor,
    },
    button: {
      backgroundColor: '#5c7829',
      borderRadius: '10@ms',

      alignSelf: 'center',
    },
  });
};
