import { useEffect } from 'react';
import DevlogFAQ from './FAQ.jsx';
import './DevlogPage.css';

export const DevlogPage = () => {
  useEffect(() => {
    document.title = "The Reality Update";
  }, []);

  return (
    <>
      <div className="c-devlog">
        <DevlogFAQ />
      </div>
    </>
  )
}

export default DevlogPage;
