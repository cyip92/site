import { useEffect } from 'react';

import SleepFAQ from "./SleepFAQ";
import SleepInfo from "./SleepInfo";
import WeekTable from "./WeekTable";
import TimeInput from "./TimeInput";
import "./styles/SleepPage.css";

export const SleepPage = () => {
  useEffect(() => {
    document.title = "Sleep Pattern";
    document.getElementById("favicon").setAttribute('href', "src/assets/favicon/blobsleep.png");
  }, []);
  
  return (
    <>
      <div className="c-page-layout">
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
      </div>
    </>
  )
}

export default SleepPage;
