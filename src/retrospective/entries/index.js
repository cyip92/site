import Introduction from "./Introduction"
import FAQ from './FAQ.jsx';
import MissingEntry from './MissingEntry.jsx';

// Note: These imports generally won't follow standard naming conventions (matching the import name
// to the file name) for the sake of keeping the contents of said files easier to search through and edit
import PreTesting from './01 - Preliminary Testing.jsx';
import WaveZero from './02 - Wave Zero.jsx';
import NewDevs from './03 - New Developers.jsx';
import Motivation from './04 - Motivation.jsx';
import BiggerTeam from './05 - Team.jsx';

const SpecialEntries = {
  Introduction: {
    content: Introduction,
    route: "/",
    title: "A Retrospective for The Reality Update",
    next: "FAQ",
  },
  FAQ: {
    content: FAQ,
    route: "/FAQ",
    title: "Frequently Asked Questions",
    prev: "Introduction",
    next: "Entry1",
  },
  MissingEntry: {
    content: MissingEntry,
    title: "Retrospective Entry Not Found"
  }
};

const ListedEntries = {
  1: {
    content: PreTesting,
    title: "Humble Beginnings",
    posted: "September 29th, 2023",
    span: "June/July 2018",
    prev: "Introduction"
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
    span: "November to Mid-December 2018",
  },
  5: {
    content: BiggerTeam,
    title: "A Bigger Team",
    posted: "October 27th, 2023",
    span: "Mid-December 2018 to Mid-January 2019",
  },
};

// Dynamically add all the unspecified routes and prev/next references to the listed entries
export const LogEntries = {};
for (const key of Object.keys(SpecialEntries)) {
  LogEntries[key] = SpecialEntries[key];
}
for (const key of Object.keys(ListedEntries)) {
  const index = Number(key);
  ListedEntries[key].index = index;
  ListedEntries[key].route = `/${index}`;
  if (!ListedEntries[index].prev) ListedEntries[index].prev = `Entry${index - 1}`;
  if (Object.keys(ListedEntries).includes(`${index + 1}`)) ListedEntries[key].next = `Entry${index + 1}`;
  LogEntries[`Entry${key}`] = ListedEntries[key];
}

export default LogEntries;
