import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {
  IncreaseLevel,
  ChangeData,
  UpdateValue,
  IncreaseScore,
} from '../../Redux/actions';
import _styles from '../levelOne/styles';
import {AppHeader, Divider} from '../../Component';
import {secondaryColor} from '../../Utils';
import {Button, Text, Input, Item, Content, Label} from 'native-base';

const viewTime = 5;
const inputTime = 10;

const GamePage = ({
  level,
  data,
  score,
  IncreaseLevel,
  ChangeData,
  UpdateValue,
  IncreaseScore,
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
    if (showTimerEnd) {
      setInputTimerEnd(true);
      onSubmitAction();
    } else {
      setShowTimerEnd(true);
      setTime(inputTime);
      setTimerRunning(true);
    }
  };

  // load data of 3 when game is started
  useEffect(() => {
    ChangeData(6);
  }, []);

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
    if (problem === 5) {
      return navigation.navigate();
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

  const InputComponent = ({submit, value, inputvalue, index}) => (
    <Input
      blurOnSubmit={false}
      keyboardType="numeric"
      placeholder=""
      value={inputvalue}
      style={[
        styles.inputText,
        submit && value !== parseInt(inputvalue) && styles.errorStyle,
      ]}
      onChangeText={(val) => UpdateValue(val, index)}
    />
  );

  const InfoView = ({lable, children}) => (
    <View style={styles.infoBox}>
      <Text style={styles.lable}>{lable}</Text>
      <Text style={styles.value}>{children}</Text>
    </View>
  );

  const Item = ({children, index, timeEnd, input, submitted}) => (
    <View
      style={[
        styles.viewBox,
        index === 0
          ? styles.leftPad
          : index % 2 === 0
          ? styles.leftPad
          : styles.rightPad,
      ]}>
      {timeEnd ? input : <Text style={styles.txt}>{children}</Text>}
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
      <View style={styles.timerView}>
        {[...time.toString()].map((item) => (
          <View style={styles.timeBox}>
            <Text style={styles.time}>{item}</Text>
          </View>
        ))}
      </View>

      <View style={styles.instruction}>
        <Text style={styles.instructionText}>
          Look in the number carefully and enter this number later. You get
          point for each correct answer you place
        </Text>
      </View>

      <View style={styles.boxContainer}>
        <SafeAreaView style={{flex: 1}}>
          <FlatList
            key={3}
            ItemSeparatorComponent={ItemSepretor}
            extraData={data.length}
            numColumns={3}
            keyExtractor={(item) => item.value.toString()}
            data={data}
            renderItem={({item, index}) => (
              <Item
                submitted={submitted}
                index={index}
                timeEnd={showTimerEnd}
                input={
                  <InputComponent
                    inputvalue={item.inputvalue}
                    index={index}
                    submit={submitted}
                    value={item.value}
                  />
                }>
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
    UpdateValue: (value, index) => {
      dispatch(UpdateValue(value, index));
    },
    IncreaseScore: (value) => {
      dispatch(IncreaseScore(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
