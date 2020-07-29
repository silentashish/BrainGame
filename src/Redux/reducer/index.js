import update from 'immutability-helper';
import InitialState from '../store';

const gameReducer = (state = InitialState, action) => {
  switch (action.type) {
    case 'Increase_Level':
      return {...state, level: state.level + 1};

    case 'Clear_Level':
      return {...state, level: 1};

    case 'Increase_Score':
      return {...state, scoreTotal: state.scoreTotal + action.value};

    case 'Clear_Score':
      return {...state, scoreTotal: 0};

    case 'Change_Data':
      return {...state, data: action.data, number: action.number};

    case 'Update_Input':
      return {
        ...state,
        data: update(state.data, {
          [action.index]: {inputvalue: {$set: action.value}},
        }),
      };

    default:
      return state;
  }
};

export default gameReducer;
