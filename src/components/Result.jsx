import React from "react";
import { connect } from "react-redux";
import Dice from "./Dice";
const Result = (props) => {
  return (
    <>
      <div className="d-flex">
        {props.result.total ? (
          props.result.dices.map((dice, index) => (
            <Dice value={dice} key={index}></Dice>
          ))
        ) : (
          <div />
        )}
      </div>
    </>
  );
};

const stateMapToPros = (state) => {
  return {
    result: {
      dices: state.dice.result?.dices,
      total: state.dice.result?.total,
    },
  };
};

export default connect(stateMapToPros)(Result);
