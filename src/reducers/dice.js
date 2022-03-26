import { dice as DiceTypes } from "../constants/diceActionTypes";

const INITIAL_STATE = {
  result: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DiceTypes.ROLL: {
      return { result: action.data };
    }
    default:
      return state;
  }
};
