import { useEffect, useReducer } from "react";
import reducer, { initialState } from "./reducers";

let dispatchRef;
export default function Counter() {
  useEffect(() => {
    //dispatch({ type: "increment" });
  }, []);
  const [state, dispatch] = useReducer(reducer, initialState);
  dispatchRef = dispatch;
  console.log(state);
  return (
    <>
      Notification: {state.message} <br />
    </>
  );
}

Counter.increment = (props) => {
  console.log({ ...props, type: "show" });
  dispatchRef({ ...props, type: "show" });
};
