import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index";

const buttonStyle = {
  padding: "10px 15px",
  color: "white",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  margin: 10,
};

function Counter() {
  const counter_data = useSelector((state) => state.counter.counter);
  const visibility_data = useSelector((state) => state.counter.visibility);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const changeVisibility = () => {
    dispatch(counterActions.changeVisibility());
  };
  return (
    <div>
      <button
        onClick={incrementHandler}
        style={{ ...buttonStyle, background: "green" }}
      >
        increment
      </button>
      <button
        onClick={increaseHandler}
        style={{ ...buttonStyle, background: "blue" }}
      >
        increase by 5
      </button>
      <button
        onClick={decrementHandler}
        style={{ ...buttonStyle, background: "red" }}
      >
        decrement
      </button>
      <button
        onClick={changeVisibility}
        style={{ ...buttonStyle, background: "purple" }}
      >
        Change Visibility
      </button>
      {visibility_data && <h1>{counter_data}</h1>}
    </div>
  );
}

export default Counter;
