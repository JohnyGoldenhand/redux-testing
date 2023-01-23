import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";
import { SelectCounter } from "./counterSlice";

export const Counter = () => {
  const { count } = useSelector(SelectCounter);
  const dispatch = useDispatch();

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </section>
  );
};
