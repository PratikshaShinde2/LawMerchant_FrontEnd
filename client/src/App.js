import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from './pages/page1';
import Page2 from './pages/page2';

function App() {

  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1/>}>
          
        </Route>
        <Route path="/rules" element={<Page2/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);