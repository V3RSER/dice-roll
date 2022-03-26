import React from "react";
import { connect } from "react-redux";
const Dices = (props) => {
  return (
    <>
      {props.result.value ? (
        <div>
          <img
            src={"/images/dice_" + props.result.dice1 + ".png"}
            alt={props.result.dice1}
          ></img>
          <img
            src={"/images/dice_" + props.result.dice2 + ".png"}
            alt={props.result.dice2}
          ></img>
          <div>{"Resultado: " + props.result.value}</div>
        </div>
      ) : (
        <div />
      )}
    </>
  );
};

const stateMapToPros = (state) => {
  return {
    result: {
      dice1: state.dice.result?.dice1,
      dice2: state.dice.result?.dice2,
      value: state.dice.result?.sum,
    },
  };
};

export default connect(stateMapToPros)(Dices);
