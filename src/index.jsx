import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from "./common/Navbar";
import SleepPage from './sleep/SleepPage'
import { Projects, ProjectPage } from './projects/ProjectPage'
import BlobPage from './blob/BlobPage';
import DevlogPage from './retrospective/DevlogPage';
import HomePage from './home/HomePage';
import ErrorPage from './common/ErrorPage';
import UnfinishedPage from './common/UnfinishedPage';
import LogEntries from './retrospective/entries/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <div className="c-site-layout">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects">
            <Route index element={<ProjectPage />} />
            {
              Projects
                .filter(p => p.component)
                .map(Proj => <Route key={Proj.id} path={`/projects/${Proj.id}`} element={<Proj.component />} />
              )
            }
          </Route>
          <Route path="/sleep" element={<SleepPage />} />
          <Route path="/blob" element={<BlobPage />} />
          <Route path="/ADdevlog">
            <Route index element={<DevlogPage specialKey="Introduction" />} />
            <Route path="/ADdevlog/FAQ" element={<DevlogPage specialKey="FAQ" />} />
            {
              Object.keys(LogEntries.Entries).map(key =>
                <Route key={key} path={`/ADdevlog/${key}`} element={<DevlogPage entryKey={Number(key)}/>} />
              )
            }
            <Route path="*" element={<DevlogPage specialKey="MissingEntry" />} />
          </Route>
          <Route path="/unfinished" element={<UnfinishedPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </HashRouter>
  </React.StrictMode>,
)
