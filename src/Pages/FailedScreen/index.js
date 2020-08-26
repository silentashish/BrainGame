import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../StartScreen/styles';
import LottieView from 'lottie-react-native';
import {Button} from '../../Component';

const FailedScreen = (props) => {
  const {level, threshold} = props.route.params;
  const page =
    level === 1 ? 'LevelOne' : level === 2 ? 'LevelTwo' : 'LevelThree';
  return (
    <View style={styles.mainView}>
      <View style={styles.centerElement}>
        <Text style={styles.bigText}>Level {level}</Text>
        <Text style={styles.bigText}>Failed</Text>
        <View style={styles.divider} />
        <View style={styles.divider} />
        <Text style={[styles.instruction, styles.widthLess]}>
          You need to score atleast {threshold} to pass this level
        </Text>
        <View style={styles.animationBox}>
          <LottieView
            source={require('../../assets/Animations/cancel.json')}
            autoPlay
            loop
            style={styles.animation}
          />
        </View>
        <Button onPress={() => props.navigation.navigate(page)}>
          Try Again
        </Button>
      </View>
    </View>
  );
};

export default FailedScreen;
