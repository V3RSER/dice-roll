import { dice as DiceTypes } from "../constants/diceActionTypes";
import { view as ViewTypes } from "../constants/viewActionTypes";

export const fetchRoll = (state) => async (dispatch) => {
  dispatch({ type: ViewTypes.LOADING });
  return fetch(`https://api-roll-dice.herokuapp.com/api/roll`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: state }),
  })
    .then((response) => response.json())
    .then((json) => {
      dispatch({ type: DiceTypes.ROLL, data: json });
      dispatch({ type: ViewTypes.LOADED });
    });
};
