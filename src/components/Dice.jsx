import React from "react";

const styles = { width: "150px", height: "150px" };
const Dice = (props) => {
  return (
    <>
      {props.value ? (
        <img
          className="mx-2 my-5"
          style={styles}
          src={"/dice-roll/images/dice_" + props.value + ".png"}
          alt={props.value}
        ></img>
      ) : (
        <div />
      )}
    </>
  );
};

export default Dice;
