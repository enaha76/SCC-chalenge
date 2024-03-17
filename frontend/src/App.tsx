// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import mainRoutes from './routes/mainroute';


const App: React.FC = () => {
  
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
        
      {mainRoutes.map((route, index) => (
          <Route path={route.path} element={<route.component />} key={index} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
