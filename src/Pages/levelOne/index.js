import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, FlatList, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {
  IncreaseLevel,
  ChangeData,
  IncreaseScore,
  ClearScore,
} from '../../Redux/actions';
import _styles from './styles';
import {AppHeader, Divider} from '../../Component';
import {secondaryColor} from '../../Utils';
import {Button, Text, Item, Content, Label} from 'native-base';
import {useFocusEffect} from '@react-navigation/native';
import Input from './Input';

const viewTime = 20;

const TimeView = ({time}) => (
  <View style={_styles().timerView}>
    {[...time.toString()].map((item) => (
      <View style={_styles().timeBox}>
        <Text style={_styles().time}>{item}</Text>
      </View>
    ))}
  </View>
);

const GamePage = ({
  level,
  data,
  score,
  IncreaseLevel,
  ChangeData,
  IncreaseScore,
  navigation,
  ClearScore,
}) => {
  //  import styles here
  const styles = _styles();

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

      ChangeData(6);
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
      if (score > 21) {
        ClearScore();
        return navigation.navigate('SuccessScreen', {level: 1});
      } else {
        ClearScore();
        return navigation.navigate('FailedScreen', {level: 1, threshold: 21});
      }
    }
    // increase problem value
    setProblem((problem) => problem + 1);
    // change data redux action
    ChangeData(6);
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

  const Item = ({children, index, timeEnd, submitted}) => (
    <View
      style={[
        styles.viewBox,
        index === 0
          ? styles.leftPad
          : index % 2 === 0
          ? styles.leftPad
          : styles.rightPad,
      ]}>
      {timeEnd ? (
        <Input index={index} submit={submitted} />
      ) : (
        <Text style={styles.txt}>{children}</Text>
      )}
    </View>
  );

  const ItemSepretor = () => <View style={styles.division} />;

  return (
    <View style={styles.container}>
      {/* Safe are is for ios and appheader show game name and level */}
      <SafeAreaView backgroundColor={secondaryColor} opacity={0.95} />
      <AppHeader title="Memory Game" subTitle={`Level ${level}`} />

      <Divider small />

      <View style={styles.infoSection}>
        <InfoView lable={'Problem'}>{problem}/5</InfoView>
        <InfoView lable={'Score'}>{score}</InfoView>
      </View>

      <Divider small />

      {/* timer showing filed lie on top   */}
      <TimeView time={time} />

      <View style={styles.instruction}>
        <Text style={styles.instructionText}>
          Look in the number carefully and enter this number later. You get
          point for each correct answer you place
        </Text>
      </View>

      <View style={styles.boxContainer}>
        <SafeAreaView style={{flex: 1}}>
          <FlatList
            removeClippedSubviews={false}
            ItemSeparatorComponent={ItemSepretor}
            extraData={data}
            numColumns={3}
            keyExtractor={(item) => item.value.toString()}
            data={data}
            renderItem={({item, index}) => (
              <Item submitted={submitted} index={index} timeEnd={showTimerEnd}>
                {showTimerEnd ? item.inputvalue : item.value}
              </Item>
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
                <Button onPress={onNextAction}>
                  <Text>Next</Text>
                </Button>
              </>
            ) : (
              <Button onPress={onSubmitAction}>
                <Text>Submit</Text>
              </Button>
            )}
          </View>
        ) : null}
      </View>
    </View>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);