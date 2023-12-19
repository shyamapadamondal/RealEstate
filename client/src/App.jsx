import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<Home />} />
      <Route path = '/log-in' element = {<LogIn />} />
      <Route path = '/sign-up' element = {<SignUp />} />
      <Route Path = '/about' element = {<About />} />
      <Route path = '/profile' element = {<Profile />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;