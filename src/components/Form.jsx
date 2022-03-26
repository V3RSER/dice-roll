import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchRoll } from "../actions";

const Form = (props) => {
  const [state, setState] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    props.dispatch(fetchRoll(state));
  };
  return (
    <form className="form-group row m-0" onSubmit={onSubmit}>
      <div className="col-xs-2">
        <div className="input-group mb-3">
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Nombre"
            onChange={(e) => setState(e.target.value)}
          ></input>
          <button
            className="btn btn-success"
            type="submit"
            disabled={props.loading}
          >
            Lanzar
          </button>
        </div>
      </div>
    </form>
  );
};

const stateMapToPros = (state) => {
  return {
    loading: state.view.loading,
  };
};

export default connect(stateMapToPros)(Form);
