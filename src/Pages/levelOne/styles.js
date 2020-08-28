import {ScaledSheet} from 'react-native-size-matters';
import {
  whiteColor,
  timeBackgroud,
  darkBackgroundColor,
  overlayColor,
  inputBoxColor,
  infoBox,
  wrapper,
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
      padding: '10@ms',
      borderRadius: '15@ms',
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
      margin: '10@ms',
    },
    errorStyle: {
      borderWidth: 2,
      borderColor: 'red',
    },
    infoBox: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: infoBox,
      borderRadius: '10@ms',
      padding: '5@ms',
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
      marginHorizontal: '20@ms',
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
      backgroundColor: '#4d51e8',
      borderRadius: '10@ms',
      alignSelf: 'center',
    },
    buttonTxt: {
      fontSize: '18@ms',
      textTransform: 'capitalize',
    },

    wrapper: {
      backgroundColor: wrapper,
      borderRadius: '20@ms',
    },
    animation: {
      height: '72@vs',
      width: '100@vs',
      justifyContent: 'center',
      alignItems: 'center',
    },
    animation1: {
      height: '150@ms',
    },
    animation2: {
      height: '120@ms',
    },
    animationBox: {
      marginVertical: '5@ms',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
