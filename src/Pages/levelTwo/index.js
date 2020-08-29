import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, FlatList, TextInput} from 'react-native';
import {Badge} from 'react-native-elements';
import {connect} from 'react-redux';
import {
  IncreaseLevel,
  ChangeData,
  IncreaseScore,
  ClearScore,
  UpdateValue,
} from '../../Redux/actions';
import _styles from '../levelOne/styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {AppHeader, Divider} from '../../Component';
import {secondaryColor} from '../../Utils';
import {Button, Text, Item, Content, Label} from 'native-base';
import {useFocusEffect} from '@react-navigation/native';
import {timeBackgroud} from '../../Utils';
import LottieView from 'lottie-react-native';
import {ScrollView} from 'react-native-gesture-handler';

const viewTime = 10;
const numberOfItem = 6;
const threshold = 20;

console.disableYellowBox = true;

const TimeView = ({time}) => {
  //  import styles here
  const styles = _styles({level: 1});
  return (
    <View style={styles.timerView}>
      {[...time.toString()].map((item) => (
        <View style={styles.timeBox}>
          <Text style={styles.time}>{item}</Text>
        </View>
      ))}
    </View>
  );
};

const GamePage = ({
  level,
  data,
  score,
  IncreaseLevel,
  ChangeData,
  IncreaseScore,
  navigation,
  ClearScore,
  UpdateValue,
}) => {
  //  import styles here
  const styles = _styles({level: 2});

  // if timer for showing number is end
  const [showTimerEnd, setShowTimerEnd] = useState(false);
  // if timer for inputing is end
  const [inputTimerEnd, setInputTimerEnd] = useState(false);

  // if answer is submitted or not
  const [submitted, setSubmitted] = useState(false);

  // setTimer state and set if it is running or not
  const [time, setTime] = useState(viewTime);
  const [isTimerRunning, setTimerRunning] = useState(true);

  // problem level in here
  const [problem, setProblem] = useState(1);

  // current level score
  const [scoreLevel, setScoreLevel] = useState(0);

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;

      ChangeData(numberOfItem);
      // initialize state values
      setProblem(0);
      setTime(viewTime);
      setSubmitted(false);
      setTimerRunning(true);
      setShowTimerEnd(false);
      setInputTimerEnd(false);

      return () => {
        isActive = false;
      };
    }, []),
  );

  // manage timer in here
  useEffect(() => {
    const interval = setInterval(() => {
      if (isTimerRunning) {
        setTime((time) => time - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  // get Info about time complition
  useEffect(() => {
    if (time === 0) {
      setTime(0);
      setTimerRunning(false);
      TimeFinishAction();
    }
  }, [time]);

  // this execute when time is finished
  const TimeFinishAction = () => {
    setShowTimerEnd(true);
    setTime(0);
  };

  const onSubmitAction = () => {
    setSubmitted(true);
    setTimerRunning(false);
    let score = 0;
    data.map((item) => {
      if (item.value === parseInt(item.inputvalue)) {
        score++;
      }
    });
    // set Score in internal state
    setScoreLevel(score);
    // set Score in redux state
    IncreaseScore(score);
  };

  const onNextAction = () => {
    // if level reached 5 check for completion
    if (problem === 5) {
      if (score > threshold - 1) {
        ClearScore();
        IncreaseLevel();
        return navigation.navigate('SuccessScreen', {level: 1});
      } else {
        ClearScore();
        return navigation.navigate('FailedScreen', {level: 1, threshold});
      }
    }
    // increase problem value
    setProblem((problem) => problem + 1);
    // change data redux action
    ChangeData(numberOfItem);
    // reset time
    setTime(viewTime);
    // set timer end to false
    setShowTimerEnd(false);
    setInputTimerEnd(false);
    // start the timer
    setTimerRunning(true);
    setSubmitted(false);
  };

  const InfoView = ({lable, children}) => (
    <View style={styles.infoBox}>
      <Text style={styles.lable}>{lable}</Text>
      <Text style={styles.value}>{children}</Text>
    </View>
  );

  const ItemSepretor = () => <View style={styles.division} />;

  return (
    <KeyboardAwareScrollView
        bounces={false}
        keyboardShouldPersistTaps="handled"
        style={styles.container}
      >
      {/* Safe are is for ios and appheader show game name and level */}
      <SafeAreaView backgroundColor={'#1f2023'} opacity={0.95} />
      <AppHeader title="MemorizeDigits" subTitle={`Level ${level}`} />

      <Divider small />

      <View style={styles.infoSection}>
        <View style={styles.problemBox}>
          <InfoView lable={'Problem'}>{problem}| 5</InfoView>
        </View>
        <View style={styles.problemBox}>
          <InfoView lable={'Score'}>{score}</InfoView>
        </View>
      </View>

      <Divider small />

      {/* timer showing filed lie on top   */}

      <TimeView time={time} />

      <View style={styles.instruction}>
        <Text style={styles.instructionText}>
          Memorize the number below and enter later.
        </Text>
        <Text style={styles.instructionText}>Watch out for the timer.</Text>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.animationBox}>
          <LottieView
            source={require('../../assets/Animations/looking_owl.json')}
            autoPlay
            loop
            style={[styles.animation, styles.animation2]}
          />
        </View>

        <View style={styles.boxContainer}>
          <SafeAreaView style={{flex: 1}}>
            <FlatList
              ItemSeparatorComponent={ItemSepretor}
              extraData={data}
              numColumns={3}
              keyExtractor={(item) => item.value.toString()}
              data={data}
              renderItem={({item, index}) => (
                <View
                  style={[
                    styles.viewBox,
                    index === 0
                      ? styles.leftPad
                      : index % 2 === 0
                      ? styles.leftPad
                      : styles.rightPad,
                  ]}>
                  {showTimerEnd ? (
                    <TextInput
                      style={[
                        styles.inputText,
                        submitted &&
                          item.value !== parseInt(item.inputvalue) &&
                          styles.errorStyle,
                      ]}
                      keyboardType="numeric"
                      value={item.inputvalue}
                      onChangeText={(val) => UpdateValue(val, index)}
                    />
                  ) : (
                    <Text style={styles.txt}>{item.value}</Text>
                  )}
                </View>
              )}
            />
          </SafeAreaView>

          {showTimerEnd && submitted && (
            <>
              <Divider />
              <Text style={styles.instructionText}>
                Total Correct Answer : {scoreLevel}
              </Text>
              <Divider />
            </>
          )}

          {showTimerEnd ? (
            <View style={styles.centerButton}>
              {submitted ? (
                <>
                  <Button style={styles.button} onPress={onNextAction}>
                    <Text>Next</Text>
                  </Button>
                </>
              ) : (
                <Button style={styles.button} onPress={onSubmitAction}>
                  <Text>Submit</Text>
                </Button>
              )}
            </View>
          ) : null}
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    level: state.level,
    data: state.data,
    score: state.scoreTotal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    IncreaseLevel: () => {
      dispatch(IncreaseLevel());
    },
    ChangeData: (num) => {
      dispatch(ChangeData(num));
    },
    IncreaseScore: (value) => {
      dispatch(IncreaseScore(value));
    },
    ClearScore: () => {
      dispatch(ClearScore());
    },
    UpdateValue: (value, index) => {
      dispatch(UpdateValue(value, index));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
