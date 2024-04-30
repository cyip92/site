import React from "react";
import { Routes, Route, HashRouter, useLocation } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import SleepPage from "./SleepPage/SleepPage"
import { Projects, ProjectPage } from "./ProjectPage/ProjectPage"
import BlobPage from "./BlobPage/BlobPage";
import DevlogPage from "./RetrospectivePage/DevlogPage";
import HomePage from "./HomePage/HomePage.jsx";
import AboutPage from "./AboutPage/AboutPage.jsx";
import ErrorPage from "./ErrorPage/ErrorPage.js";
import UnfinishedPage from "./UnfinishedPage/UnfinishedPage.tsx";
import LogEntries from "./RetrospectivePage/index.js";
import "./index.css";

// Fairly self-explanatory; this forces the browser to scroll to the top when changing pages
import { useEffect } from "react";
import SingleProjectPage from "./ProjectPage/entries/SingleProjectPage.tsx";
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
        <Navbar />
        <ScrollToTop />
        <div className="c-site-layout">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects">
              <Route index element={<ProjectPage />} />
              {
                Projects
                  .filter(p => p.component)
                  .map(Proj =>
                    <Route
                      key={Proj.id}
                      path={`/projects/${Proj.id}`}
                      element={<SingleProjectPage projectData={Proj} />}
                    />
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
