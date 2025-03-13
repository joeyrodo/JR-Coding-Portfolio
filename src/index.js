import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

function render() {
  root.render(
  <React.StrictMode>
    <BrowserRouter basename="/JR-Coding-Portfolio!">
      <Routes>
        <Route path="*" element={<App />}>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
  }

  export default render();