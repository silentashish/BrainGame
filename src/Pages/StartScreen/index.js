import React from 'react';
import {View, Text} from 'react-native';
// import {Button} from 'native-base';
import {styles} from './styles';
import LottieView from 'lottie-react-native';
import {Button} from '../../Component';

export default (props) => {
  const {navigation} = props;
  return (
    <View style={styles.mainView}>
      <View style={styles.centerElement}>
        <Text style={styles.bigText}>Welcome to Brain Game</Text>
        <Text style={styles.bigText}></Text>
        <View style={styles.animationBox}>
          <LottieView
            source={require('../../assets/Animations/puzzle.json')}
            autoPlay
            loop
            style={styles.animation}
          />
        </View>
        <Button onPress={() => navigation.navigate('LevelOne', {level: 1})}>
          Start
        </Button>
      </View>
    </View>
  );
};
