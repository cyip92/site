import { useEffect } from 'react';

import SleepFAQ from "./SleepFAQ";
import SleepInfo from "./SleepInfo";
import WeekTable from "./WeekTable/WeekTable";
import TimeInput from "./TimeInput/TimeInput";
import "./styles/SleepPage.css";

export const SleepPage = () => {
  useEffect(() => {
    document.title = "Sleep Pattern";
    document.getElementById("favicon").setAttribute('href', `${window.rootURL}/favicon/blobsleep.png`);
  }, []);
  
  return (
    <>
      <div className="c-page-layout c-grayscale-content-bg">
        <div className="c-image-bg c-sleep-bg" />
        <div className="c-inactive-disclaimer">
          Note: I am no longer following this sleep pattern; this page is simply being kept here for posterity.
        </div>
        <h1>Weekly Sleep Pattern</h1>
        <WeekTable />
        <div className="c-text-elements">
          <SleepInfo />
          <br />
          <TimeInput />
        </div>
        <div className="o-divider" />
        <div className="c-faq">
          <SleepFAQ />
        </div>
        <br />
        <i>
          Background image was sourced from
          <a href="https://wallpapers.com/night-sky-moon-pictures"> Wallpapers.com</a>.
        </i>
      </div>
    </>
  )
}

export default SleepPage;
