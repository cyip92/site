import SleepFAQ from "./SleepFAQ";
import SleepInfo from "./SleepInfo";
import WeekTable from "./WeekTable";
import "./SleepPageContainer.css";

export const SleepPageContainer = () => {
  return (
    <>
      <div className="c-page-layout">
        <h1>Weekly Sleep Pattern</h1>
        <WeekTable />
        <SleepInfo />
        <div className="o-divider" />
        <SleepFAQ />
      </div>
    </>
  )
}

export default SleepPageContainer;
