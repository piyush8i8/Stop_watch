import logo from './logo.svg';
import './App.css';
import WelcomePage from './WelcomePage';
import Home from './Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Practice from './Practice';
import Stopwatch from './Stopwatch';
import Todoapp from './Todoapp/Todoapp';

function App() {
  return (
    <div className="App">
<Todoapp></Todoapp>
    </div>
  );
}

export default App;
