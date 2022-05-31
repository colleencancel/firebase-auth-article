import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Login from './Login.js'
import Register from "./Register.js";
import Reset from "./Reset.js";
import Dashboard from "./Dashboard.js";
import Profile from "./Profile.js"
import Balance from "./Balance"
import NavBar from "./NavBar"



//import PrivateRoute from './PrivateRoute'
//import {Navigate} from 'react-router-dom'
import {AuthProvider} from './AuthContext'
import {useState, useEffect} from 'react'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from './firebase'

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <div className="container" style={{padding: "20px"}}>
      <Router>
        <NavBar/>
      <AuthProvider value={{currentUser}}>
    <Routes>
      <Route exact path="/" element={<Register/>}/>
      <Route exact path="/login" element={<Login/>}/> 
      <Route exact path="/reset" element={<Reset/>}/>
      <Route exact path="/dashboard" element={<Dashboard/>}/> 
      <Route exact path="/Profile" element={<Profile/>}/>
      <Route exact path="/Balance" element={<Balance/>}/>
      </Routes>
    </AuthProvider>
     
  </Router>
    </div>
  );
}

export default App;
