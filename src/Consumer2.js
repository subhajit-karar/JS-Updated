import { useEffect } from "react";
import Counter from "../lib/NotificationComponent";

export default function Consumer2() {
  useEffect(() => {}, []);
  return (
    <>
      <button
        onClick={() => {
          Counter.increment({ text: "text" });
        }}
      >
        Incr
      </button>
    </>
  );
}
