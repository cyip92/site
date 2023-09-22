import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import SleepPage from '../sleep/SleepPage'
import BlobPage from '../blob/BlobPage';
import Homepage from '../home/Homepage';

const Main = () => {
  const rootDir = "/site";
  return (
    <>
      <Router>
        <Routes>
          <Route path={`${rootDir}/`} element={<Homepage />} />
          <Route path={`${rootDir}/sleep`} element={<SleepPage />} />
          <Route path={`${rootDir}/blob`} element={<BlobPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default Main;
