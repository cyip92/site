import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import SleepPageContainer from '../sleep/SleepPageContainer'
import Blob from '../blob/Blob';
import Home from '../home/Home';

const Main = () => {
  const rootDir = "/sleep-page";
  return (
    <>
      <Router>
        <Routes>
          <Route path={rootDir} element={<Home />} />
          <Route path={`${rootDir}/sleep`} element={<SleepPageContainer />} />
          <Route path={`${rootDir}/blob`} element={<Blob />} />
        </Routes>
      </Router>
    </>
  );
}

export default Main;
