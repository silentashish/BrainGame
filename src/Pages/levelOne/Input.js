import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {connect} from 'react-redux';
import _styles from './styles';
import {UpdateValue} from '../../Redux/actions';

const Input = ({submit, index, data, UpdateValue}) => {
  const {value, inputvalue} = data[index];
  const [input, setInput] = useState(inputvalue);
  const styles = _styles({level: 1});
  return (
    <TextInput
      onBlur={() => UpdateValue(input, index)}
      keyboardType="numeric"
      placeholder=""
      value={input}
      style={[
        styles.inputText,
        submit && value !== parseInt(inputvalue) && styles.errorStyle,
      ]}
      onChangeText={(val) => setInput(val)}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    UpdateValue: (value, index) => {
      dispatch(UpdateValue(value, index));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
