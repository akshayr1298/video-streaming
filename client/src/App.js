import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/Signp';




function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route exact path = '/' element={<Home/>}/>
        <Route path = '/signIn' element={<SignIn/>} />
        <Route path = '/signUp' element={<SignUp/>} />

      </Routes>
     </Router>
    </div>
  );
}

export default App;
