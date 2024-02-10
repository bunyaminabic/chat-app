import "./App.css";
import { chatProvider } from "./context/ChatContext";
import Container from "./components/Container";

function App() {
  return (
    <chatProvider>
      <Container />
    </chatProvider>
  );
}

export default App;
