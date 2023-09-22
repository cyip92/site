import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import SleepPage from '../sleep/SleepPage'
import BlobPage from '../blob/BlobPage';
import HomePage from '../home/HomePage';
import ErrorPage from './ErrorPage';

const Main = () => {
  const rootDir = "/site";
  return (
    <>
      <Router>
        <Routes>
          <Route path={`${rootDir}/`} element={<HomePage />} />
          <Route path={`${rootDir}/sleep`} element={<SleepPage />} />
          <Route path={`${rootDir}/blob`} element={<BlobPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default Main;
