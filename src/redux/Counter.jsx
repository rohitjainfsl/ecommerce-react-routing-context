import { useSelector, useDispatch } from "react-redux";
import { decrementCounter, incrementCounter } from "./slice";

function Counter() {
  const counter = useSelector((state) => {
    return state.counterSl.counter;
  });
  const dispatch = useDispatch()
  return (
    <>
      <button onClick={() => dispatch(incrementCounter())}>Increment</button>
      <p>{counter}</p>
      <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
    </>
  );
}

export default Counter;
