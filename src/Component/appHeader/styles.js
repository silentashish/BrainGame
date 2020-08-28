import {ScaledSheet} from 'react-native-size-matters';
import {overlayColor} from '../../Utils';

export const styles = ScaledSheet.create({
  appHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#404142',
    borderRadius: '3@ms',
    margin: '10@ms',
    padding: '3@ms',
  },
  title: {
    fontSize: '16@ms',
    fontWeight: 'bold',
    color: 'white',
  },
  subTitle: {
    fontSize: '14@ms',
    fontWeight: 'bold',
    color: 'white',
  },
  icon: {
    height: '18@ms',
    width: '18@ms',
  },
  leftButton: {
    paddingLeft: '20@ms',
  },
  rightView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  leftButton: {
    height: '35@ms',
    width: '35@ms',
    justifyContent: 'center',
    marginLeft: '10@ms',
  },
  rightButton: {
    height: '35@ms',
    width: '35@ms',
    marginRight: '10@ms',
    justifyContent: 'center',
  },
  rightButton2: {
    height: '35@ms',
    width: '35@ms',
    justifyContent: 'center',
  },
});
