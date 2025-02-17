import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Entry from './pages/Entry/Entry';
import UserSignUp from './pages/auth/user/UserSignUp';
import UserLogin from './pages/auth/user/UserLogin';
import CaptainSignUp from './pages/auth/captain/CaptainSignUp';
import CaptainLogin from './pages/auth/captain/CaptainLogin';
import Home from './pages/site/Home';
import UserProtectWapper from './components/HOCs/UserProtectWapper';
import UserLogout from './pages/auth/user/UserLogout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Entry />} />

      <Route path="/user-register" element={<UserSignUp />} />
      <Route path="/user-login" element={<UserLogin />} />
      <Route path="/user-logout" element={<UserLogout />} />

      <Route path="/captain-register" element={<CaptainSignUp />} />
      <Route path="/captain-login" element={<CaptainLogin />} />

      <Route path="/home" element={<UserProtectWapper><Home /></UserProtectWapper>} />
    </Routes>
  )
}

export default App