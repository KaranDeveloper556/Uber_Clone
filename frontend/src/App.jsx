import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Entry from './pages/Entry/Entry';
import UserSignUp from './pages/auth/user/UserSignUp';
import UserLogin from './pages/auth/user/UserLogin';
import CaptainSignUp from './pages/auth/captain/CaptainSignUp';
import CaptainLogin from './pages/auth/captain/CaptainLogin';
import Home from './pages/site/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Entry />} />

      <Route path="/user-register" element={<UserSignUp />} />
      <Route path="/user-login" element={<UserLogin />} />

      <Route path="/captain-register" element={<CaptainSignUp />} />
      <Route path="/captain-login" element={<CaptainLogin />} />

      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default App