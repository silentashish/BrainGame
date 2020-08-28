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
  animation: {
    height: '300@vs',
    width: '200@vs',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animationBox: {
    marginVertical: '10@ms',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3,
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
