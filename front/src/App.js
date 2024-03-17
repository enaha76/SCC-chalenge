import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Retrait from './pages/retrait';
import Login from './pages/login';
import Depot from './pages/depot';
import Signup from './pages/auth';
import UsersManagement from './pages/Admin/UsersManagement';
import Challenge from './pages/Admin/challenge';
import Evaluation from './pages/Evaliation/index';
import Team from './pages/Team/index';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />

        <Route path="/login" element={<Login />} />
        <Route path="/retrait" element={<Retrait />} />
        <Route path="/depot" element={<Depot />} />
        <Route path='/admin' element={<UsersManagement />} />
        <Route path="/chalenge" element={<Challenge/>} />
        <Route path="/eva" element={<Evaluation/>} />
        <Route path="/team" element={<Team/>} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
