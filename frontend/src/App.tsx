// App.tsx
import React from 'react';
import logo from './logo.svg';
import './App.css';
import TeamManagementPage from './pages/TeamManagement';
import Login from './pages/Login';
import UsersManagement from './pages/Admin/UsersManagement';


const App: React.FC = () => {
  
  return (
   
    <UsersManagement/>
  );
};

export default App;
