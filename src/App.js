// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
   
<Navbar   title='Word Counter' link1='Text Analyzer' link2="Tex Counter"/>
<TextForm/>
    </>
         );
}

export default App;