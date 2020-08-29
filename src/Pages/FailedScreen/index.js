import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {styles} from '../StartScreen/styles';
import LottieView from 'lottie-react-native';
import {Button} from '../../Component';

const FailedScreen = (props) => {

  const {level, threshold} = props.route.params;
  const page =
    level === 1 ? 'LevelOne' : level === 2 ? 'LevelTwo' : 'LevelThree';
  return (
    <View style={styles.mainView}>
      <SafeAreaView backgroundColor={'#b2d9a3'} opacity={0.95} />
      <View style={styles.centerElement}>
        <Text style={styles.bigText}>LEVEL {level}</Text>
        <Text style={styles.bigText2}>Failed</Text>
        <View style={styles.divider} />
        <Text style={[styles.instruction, styles.widthLess]}>
          You need to score atleast {threshold} to pass this level
        </Text>
        <View style={styles.animationBox2}>
          <LottieView
            source={require('../../assets/Animations/cancel.json')}
            autoPlay
            loop
            style={styles.animation2}
          />
        </View>
        <Button 
        onPress={() => props.navigation.navigate(page)}
        >
          Try Again
        </Button>
      </View>
    </View>
  );
};

export default FailedScreen;
