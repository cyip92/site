import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from "./common/Navbar";
import SleepPage from './sleep/SleepPage'
import BlobPage from './blob/BlobPage';
import HomePage from './home/HomePage';
import ErrorPage from './common/ErrorPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <div className="c-site-layout">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sleep" element={<SleepPage />} />
          <Route path="/blob" element={<BlobPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </HashRouter>
  </React.StrictMode>,
)
