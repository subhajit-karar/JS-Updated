import "./styles.css";
import Counter from "../lib/NotificationComponent";
import Consumer from "./ConsumerComponent";
import Consumer2 from "./Consumer2";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <Consumer /> <br />
      <Consumer2 /> <br />
    </div>
  );
}
