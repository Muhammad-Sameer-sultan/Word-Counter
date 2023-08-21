// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextEditor from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Word Counter" />

      <TextEditor/>
    </>
  );
}

export default App;
