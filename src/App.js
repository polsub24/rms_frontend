import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import './index.css'
import Dashboard from './Components/dashboard';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
      </Routes>
    </Router>
  );
}

export default App;
