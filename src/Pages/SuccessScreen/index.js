import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../StartScreen/styles';
import LottieView from 'lottie-react-native';
import {Button} from '../../Component';

const SuccessScreen = (props) => {
  const {level} = props.route.params;
  const {navigation} = props;
  const nextpage =
    level === 1 ? 'LevelTwo' : level === 2 ? 'LevelThree' : 'LevelOne';

  return (
    <View style={styles.mainView}>
      <View style={styles.centerElement}>
        <Text style={styles.bigText}>
          {level === 3 ? `Game` : `Level ${level}`}
        </Text>
        <Text style={styles.bigText}>Completed</Text>
        <View style={styles.animationBox}>
          <LottieView
            source={require('../../assets/Animations/success.json')}
            autoPlay
            loop
            style={styles.animation}
          />
        </View>
        <Button onPress={() => navigation.navigate(nextpage)}>
          {level === 3 ? 'Play Again' : 'Continue'}
        </Button>
      </View>
    </View>
  );
};

export default SuccessScreen;
