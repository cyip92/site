import React from "react";
import "./index.css";

import { Routes, Route, HashRouter, useLocation } from "react-router-dom";
import Navbar from "./common/Navbar";
import SleepPage from "./sleep/SleepPage"
import { Projects, ProjectPage } from "./projects/ProjectPage"
import BlobPage from "./blob/BlobPage";
import DevlogPage from "./retrospective/DevlogPage";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage.jsx";
import ErrorPage from "./common/ErrorPage";
import UnfinishedPage from "./common/UnfinishedPage";
import LogEntries from "./retrospective/entries/index.js";

// Fairly self-explanatory; this forces the browser to scroll to the top when changing pages
import { useEffect } from "react";
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <React.StrictMode>
      <HashRouter>
        <div className="c-site-layout">
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
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
              <Route index element={<DevlogPage entry={LogEntries.Introduction} />} />
              {
                Object.values(LogEntries)
                  .filter(entry => entry.route && entry.route !== "/")
                  .map(entry => 
                    <Route key={entry.route} path={`/ADdevlog${entry.route}`} element={<DevlogPage entry={entry}/>} />
                )
              }
              <Route path="*" element={<DevlogPage entry={LogEntries.MissingEntry} />} />
            </Route>
            <Route path="/unfinished" element={<UnfinishedPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </HashRouter>
    </React.StrictMode>
  );
};

export default App;
