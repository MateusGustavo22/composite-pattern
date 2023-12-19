import { Notification } from "./components/Index";
import "./index.css";

function App() {
  return (
    <Notification.Root>
      <Notification.Icon />
      <Notification.Text />
      <Notification.Actions />
    </Notification.Root>
  );
}

export default App;
