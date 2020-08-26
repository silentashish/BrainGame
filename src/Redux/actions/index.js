export const IncreaseLevel = () => ({type: 'Increase_Level'});

export const ClearLevel = () => ({type: 'Clear_Level'});

export const ChangeData = (number) => ({
  type: 'Change_Data',
  data: GenerateArray(number),
  number: number,
});

export const UpdateValue = (value, index) => ({
  type: 'Update_Input',
  value,
  index,
});

export const IncreaseScore = (value) => ({
  type: 'Increase_Score',
  value,
});

export const ClearScore = (value) => ({
  type: 'Clear_Score',
  value,
});

// extra function to make action work easier
const generateRandomNumber = () => {
  let num = Math.floor(Math.random() * 900 + 100);
  return num;
};

const GenerateArray = (number) => {
  let i = 0;
  let newArray = [];
  for (i = 0; i < number; i++) {
    let data = {
      value: generateRandomNumber(),
      inputvalue: '',
      id: i,
    };
    newArray = [...newArray, data];
  }
  return newArray;
};
