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
import Rebalancing from './06 - Instability.jsx';
import FirstCel3 from './07 - Untested Cel3.jsx';
import RushCel4and5 from './08 - Celestial Rush.jsx';
import NamelessVer2 from './09 - Nameless v2.jsx';
import BeginFatigue from './10 - First Fatigue.jsx';
import Rawork from './11 - Rawork.jsx';
import TimeCompression from './12 - Compression.jsx';

const SpecialEntries = {
  Introduction: {
    content: Introduction,
    bgImage: "devlog_intro.png",
    bgFilter: "brightness(15%)",
    route: "/",
    title: "A Retrospective for The Reality Update",
    next: "FAQ",
  },
  FAQ: {
    content: FAQ,
    bgImage: "devlog_faq.png",
    bgFilter: "blur(0.3rem)",
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
    bgImage: "devlog_start.png",
    bgFilter: "blur(0.1rem)",
    title: "Humble Beginnings",
    posted: "September 29th, 2023",
    span: "June/July 2018",
    prev: "Introduction"
  },
  2: {
    content: WaveZero,
    bgImage: "devlog_rupg.png",
    bgFilter: "blur(0.1rem)",
    title: "Wave Zero Testers",
    posted: "October 6th, 2023",
    span: "July to September 2018",
  },
  3: {
    content: NewDevs,
    bgImage: "devlog_black_hole.png",
    title: "New Developers!",
    posted: "October 13th, 2023",
    span: "September/October 2018",
  },
  4: {
    content: Motivation,
    bgImage: "devlog_cel1.png",
    bgFilter: "blur(0.2rem)",
    title: "Staying Motivated",
    posted: "October 20th, 2023",
    span: "November to Mid-December 2018",
  },
  5: {
    content: BiggerTeam,
    bgImage: "devlog_cel2.png",
    bgFilter: "blur(0.2rem)",
    title: "A Bigger Team",
    posted: "October 27th, 2023",
    span: "Mid-December 2018 to Mid-January 2019",
  },
  6: {
    content: Rebalancing,
    bgImage: "devlog_large_bh.png",
    bgFilter: "blur(0.5rem)",
    title: "Massive Instability",
    posted: "November 3rd, 2023",
    span: "Mid-January to End of January 2019",
  },
  7: {
    content: FirstCel3,
    bgImage: "devlog_cel3.png",
    bgFilter: "blur(0.15rem)",
    title: "Definitely Complete",
    posted: "November 10th, 2023",
    span: "First half of February 2019",
  },
  8: {
    content: RushCel4and5,
    bgImage: "devlog_cel4.png",
    bgFilter: "blur(0.1rem)",
    title: "Rushing It",
    posted: "November 17th, 2023",
    span: "Second half of February 2019",
  },
  9: {
    content: NamelessVer2,
    bgImage: "devlog_big_glyphs.png",
    bgFilter: "blur(0.1rem)",
    title: "Overhaul Time",
    posted: "November 24th, 2023",
    span: "March 2019",
  },
  10: {
    content: BeginFatigue,
    bgImage: "devlog_newUI.png",
    bgFilter: "blur(0.1rem)",
    title: "Slowing Down",
    posted: "December 1st, 2023",
    span: "April/May 2019",
  },
  11: {
    content: Rawork,
    bgImage: "devlog_alchemy.png",
    bgFilter: "brightness(25%)",
    title: "1½ Reworks",
    posted: "December 8th, 2023",
    span: "June 2019",
  },
  12: {
    content: TimeCompression,
    bgImage: "devlog_compression.png",
    bgFilter: "brightness(40%)",
    title: "Overzealousness",
    posted: "December 15th, 2023",
    span: "July/August 2019",
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
