import {ScaledSheet} from 'react-native-size-matters';
import {secondaryColor, primaryColor} from '../../Utils';

export const styles = ScaledSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#b2d9a3',
  },
  headerinfo: {
    alignItems: 'center',
    margin: '20@ms',
  },
  headerinfoText: {
    fontSize: '30@ms',
    fontWeight: 'bold',
  },
  divider: {
    marginTop: '10@ms',
    marginBottom: '10@ms',
    height: '3@ms',
    width: '90%',
    borderRadius: 25,
    backgroundColor: 'grey'
  },
  instruction: {
    fontSize: '15@ms',
  },
  animation: {
    height: '300@vs',
    width: '200@vs',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation2: {
    height: '150@vs',
    width: '200@vs',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    marginTop: '100@ms'
  },
  centerElement: {
    marginTop: '100@ms',
    alignItems: 'center',
    alignContent: 'center',
  },
  animationBox: {
    marginVertical: '10@ms',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3,
  },
  animationBox2: {
    marginVertical: '30@ms',
    justifyContent: 'center',
    alignItems: 'center',
  },
  instructionBox: {
    alignItems: 'center',
    flex: 2,
    justifyContent: 'center',
  },
  instructionHead: {
    fontWeight: 'bold',
    fontSize: '20@ms',
    margin: '5@ms',
  },
  instructionText: {
    fontSize: '18@ms',
  },
  bigText: {
    fontSize: '40@ms',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  bigText2: {
    fontSize: '30@ms',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  buttonBox: {flex: 1},
  button: {
    margin: '10@ms',
    backgroundColor: '#e89989',
    elevation: 4,
    height: '50@ms',
    width: '100@ms',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: '5@ms',
  },
  txt: {
    fontSize: '20@ms',
  },
});
