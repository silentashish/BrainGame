import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
// import {Button} from 'native-base';
import {styles} from './styles';
import LottieView from 'lottie-react-native';
import {Button, Divider} from '../../Component';
import {secondaryColor} from '../../Utils';

export default (props) => {
  const {navigation} = props;
  return (
    <View style={styles.mainView}>
      <SafeAreaView backgroundColor={'#b2d9a3'} opacity={0.95} />
      <View style={styles.headerinfo}>
        <Text style={styles.headerinfoText}>MemorizeDigits</Text>
      </View>
      <View style={styles.animationBox}>
        <LottieView
          source={require('../../assets/Animations/pie_dark.json')}
          autoPlay
          loop
          style={styles.animation}
        />
      </View>
      <View style={styles.instructionBox}>
        <Text style={styles.instructionHead}>Instructions To Play: </Text>
        <Text style={styles.instructionText}>Clock ticks</Text>
        <Text style={styles.instructionText}>Memorize Number</Text>
        <Text style={styles.instructionText}>Guess</Text>
      </View>
      <View style={styles.buttonBox}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('LevelOne', {level: 1})}>
          <Text style={styles.txt}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
