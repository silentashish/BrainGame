import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {connect} from 'react-redux';
import _styles from './styles';
import {UpdateValue} from '../../Redux/actions';

const Input = ({submit, index, data, UpdateValue}) => {
  const {value, inputvalue} = data[index];
  const styles = _styles({level: 1});
  return (
    <TextInput
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
