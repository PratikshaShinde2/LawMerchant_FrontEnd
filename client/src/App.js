import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import { RegulationsProvider } from './contexts/RegulationsContext';

function App() {

  return (
    <RegulationsProvider>
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1/>}>
          
        </Route>
        <Route path="/rules" element={<Page2/>} />
        <Route path="/contact" element={<Page3 />} />
      </Routes>
    </BrowserRouter>
    </div>
    </RegulationsProvider>
  );
}
export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);