import { useState, useEffect } from 'react';
import blob from '../assets/blob.png';
import './BlobPage.css';

export const BlobPage = () => {
  useEffect(() => {
    document.title = "Pat the blob!";
  }, []);

  const [pats, setCount] = useState(0);
  const incPats = () => setCount(p => p + 1);
  const quantStr = c => c === 1 ? "time" : "times";

  const [squished, setSquish] = useState(false);
  const squish = () => {
    if (squished) return;
    setSquish(() => true);
    incPats();
    setTimeout(() => { setSquish(() => false) }, 350);
  }

  return (
    <>
      <div className="c-page-layout">
        <img
          className={squished ? "blob" : null}
          src={blob}
          onClick={squish}
        />
        <br />
        You have patted blob {pats} {quantStr(pats)}.
      </div>
    </>
  )
}

export default BlobPage;
