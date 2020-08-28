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
      height: '70@ms',
      width: '70@ms',
      borderRadius: '35@ms',
      margin: '10@ms',
    },
    time: {
      textAlign: 'center',
      color: whiteColor,
      fontWeight: 'bold',
      fontSize: '35@ms',
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
      marginTop: '10@ms',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ff0266',
      borderRadius: '10@ms',
      padding: '10@ms',
    },
    lable: {
      fontSize: '25@ms',
      color: whiteColor,
    },
    value: {
      fontSize: '20@ms',
      color: whiteColor,
    },
    problemBox: {
      flex: 1,
      marginHorizontal: '15@ms',
    },
    infoSection: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    instruction: {
      marginTop: '10@ms',
      marginBottom: '10@ms',
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
      margin: '10@ms',
    },

    wrapper: {
      backgroundColor: '#27292d',
    },
    animation: {
      height: '180@vs',
      width: '150@vs',
      justifyContent: 'center',
      alignItems: 'center',
    },
    animationBox: {
      marginVertical: '5@ms',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
