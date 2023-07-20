import { useEffect } from "react";
import Counter from "../lib/NotificationComponent";

export default function Consumer() {
  useEffect(() => {}, []);
  return (
    <>
      <button
        onClick={() => {
          Counter.increment();
        }}
      >
        Incr
      </button>
    </>
  );
}
