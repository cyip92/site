import { useEffect } from 'react';
import DevlogFAQ from './FAQ.jsx';
import DevlogSidebar from './DevlogSidebar.jsx';
import './styles/DevlogPage.css';

export const DevlogPage = () => {
  useEffect(() => {
    document.title = "The Reality Update";
  }, []);

  return (
    <>
      <div className="c-devlog-full-page">
        <div className="c-devlog-sidebar">
          <DevlogSidebar />
        </div>
        <div className="c-devlog-main-content">
          <DevlogFAQ />
        </div>
      </div>
    </>
  )
}

export default DevlogPage;
