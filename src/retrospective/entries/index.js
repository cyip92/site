import Introduction from "./Introduction"
import FAQ from './FAQ.jsx';
import MissingEntry from './MissingEntry.jsx';

// Note: These imports generally won't follow standard naming conventions (matching the import name
// to the file name) for the sake of keeping the contents of said files easier to search through and edit
import PreTesting from './01 - Preliminary Testing.jsx';
import WaveZero from './02 - Wave Zero.jsx';
import NewDevs from './03 - New Developers.jsx';
import Motivation from './04 - Motivation.jsx';

export const LogEntries = {
  Introduction: {
    content: Introduction,
    title: "A Retrospective for The Reality Update"
  },
  FAQ: {
    content: FAQ,
    title: "Frequently Asked Questions"
  },
  MissingEntry: {
    content: MissingEntry,
    title: "Retrospective Entry Not Found"
  },
  Entries: {
    1: {
      content: PreTesting,
      title: "Humble Beginnings",
      posted: "September 29th, 2023",
      span: "June/July 2018",
    },
    2: {
      content: WaveZero,
      title: "Wave Zero Testers",
      posted: "October 6th, 2023",
      span: "July to September 2018",
    },
    3: {
      content: NewDevs,
      title: "New Developers!",
      posted: "October 13th, 2023",
      span: "September/October 2018",
    },
    4: {
      content: Motivation,
      title: "Staying Motivated",
      posted: "October 20th, 2023",
      span: "November/December 2018",
    },
  }
};

export default LogEntries;
