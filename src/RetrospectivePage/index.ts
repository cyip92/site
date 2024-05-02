import Introduction from "./entries/Introduction.jsx"
import FAQ from "./entries/FAQ.jsx";
import MissingEntry from "./entries/MissingEntry.jsx";
import Epilogue from "./entries/Epilogue.tsx";

// Note: These imports generally won't follow standard naming conventions (matching the import name
// to the file name) for the sake of keeping the contents of said files easier to search through and edit
import PreTesting from "./entries/01 - Preliminary Testing.jsx";
import WaveZero from "./entries/02 - Wave Zero.jsx";
import NewDevs from "./entries/03 - New Developers.jsx";
import Motivation from "./entries/04 - Motivation.jsx";
import BiggerTeam from "./entries/05 - Team.jsx";
import Rebalancing from "./entries/06 - Instability.jsx";
import FirstCel3 from "./entries/07 - Untested Cel3.jsx";
import RushCel4and5 from "./entries/08 - Celestial Rush.jsx";
import NamelessVer2 from "./entries/09 - Nameless v2.jsx";
import BeginFatigue from "./entries/10 - First Fatigue.jsx";
import Rawork from "./entries/11 - Rawork.jsx";
import TimeCompression from "./entries/12 - Compression.jsx";
import WaveOne from "./entries/13 - First Wave.jsx";
import Unfinished from "./entries/14 - Unfinished Work.jsx";
import VRework from "./entries/15 - More Reworks.jsx";
import FeelEternity from "./entries/16 - Feel Eternity.jsx";
import Slower from "./entries/17 - A Break.jsx";
import ThirdRa from "./entries/18 - Third Try.jsx";
import Wave2Prep from "./entries/19 - Preparation.jsx";
import Wave2Start from "./entries/20 - Second Wave.jsx";
import Wave2Tension from "./entries/21 - Tensions.jsx";
import Cel7Drafts from "./entries/22 - Cel7.jsx";
import Wave2Complete from "./entries/23 - Wave 2 Finished.jsx";
import TimeSkip from "./entries/24 - Time Skip.jsx";
import ImaginaryMachines from "./entries/25 - Imaginary Machines.jsx";
import Wave3Selection from "./entries/26 - Wave 3 Selection.jsx";
import Wave3Test from "./entries/27 - Third Wave.jsx";
import Disagreement from "./entries/28 - Internal Disagreement.jsx";
import Elephant from "./entries/29 - The Elephant.jsx";
import Leaving from "./entries/30 - Moving Onward.jsx";
import DistantDevelopment from "./entries/31 - Distant Development.jsx";
import FinalEntry from "./entries/32 - We Did It.jsx";

const SpecialEntries = {
  Introduction: {
    content: Introduction,
    bgImage: "devlog_intro.png",
    bgFilter: "brightness(15%)",
    route: "/intro",
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
    bgImage: "devlog_intro.png",
    bgFilter: "brightness(15%)",
    title: "Retrospective Entry Not Found"
  },
  Epilogue: {
    content: Epilogue,
    bgImage: "devlog_intro.png",
    bgFilter: "brightness(60%)",
    route: "/epilogue",
    title: "Epilogue",
    prev: "Entry32",
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
  13: {
    content: WaveOne,
    bgImage: "devlog_w1.png",
    bgFilter: "brightness(40%) blur(0.2rem)",
    title: "The First Wave",
    posted: "December 22th, 2023",
    span: "September 2019 (Playtesting Channel)",
  },
  14: {
    content: Unfinished,
    bgImage: "devlog_celnav.png",
    bgFilter: "blur(0.2rem)",
    title: "Unfinished Work",
    posted: "December 29th, 2023",
    span: "September 2019 (Development Channel)",
  },
  15: {
    content: VRework,
    bgImage: "devlog_V_reworks.png",
    bgFilter: "brightness(60%) blur(0.1rem)",
    title: "Trying Again",
    posted: "January 5th, 2024",
    span: "October 2019",
  },
  16: {
    content: FeelEternity,
    bgImage: "devlog_cel3_nav.png",
    bgFilter: "blur(0.1rem)",
    title: "Nothing is Sacred",
    posted: "January 12th, 2024",
    span: "November 2019",
  },
  17: {
    content: Slower,
    bgImage: "devlog_celnav_to_cel3.png",
    bgFilter: "blur(0.1rem)",
    title: "Taking It Slow",
    posted: "January 19th, 2024",
    span: "December 2019 to February 2020",
  },
  18: {
    content: ThirdRa,
    bgImage: "devlog_old_ra.png",
    bgFilter: "brightness(60%) blur(0.1rem)",
    title: "A 3rd Time??",
    posted: "January 26th, 2024",
    span: "March 2020",
  },
  19: {
    content: Wave2Prep,
    bgImage: "devlog_cel6_UI.png",
    bgFilter: "brightness(70%) blur(0.1rem)",
    title: "Preparation Time",
    posted: "February 2nd, 2024",
    span: "First half of April 2020",
  },
  20: {
    content: Wave2Start,
    bgImage: "devlog_pandemic_effect.png",
    bgFilter: "brightness(70%) blur(0.2rem)",
    title: "The Second Wave",
    posted: "February 9th, 2024",
    span: "Second half of April 2020 (New Tester Channels)",
  },
  21: {
    content: Wave2Tension,
    bgImage: "devlog_race.png",
    bgFilter: "blur(0.05rem)",
    title: "Tensions",
    posted: "February 16th, 2024",
    span: "Second half of April 2020 (Older Tester Channels)",
  },
  22: {
    content: Cel7Drafts,
    bgImage: "devlog_MAD_Pelle.png",
    bgFilter: "blur(0.05rem)",
    title: "Revisiting Late-game",
    posted: "February 23rd, 2024",
    span: "First half of May 2020",
  },
  23: {
    content: Wave2Complete,
    bgImage: "devlog_cel6_UI_rework.png",
    bgFilter: "brightness(60%) blur(0.05rem)",
    title: "Waving Goodbye",
    posted: "March 1st, 2024",
    span: "Second half of May 2020",
  },
  24: {
    content: TimeSkip,
    bgImage: "devlog_MADcel7.png",
    bgFilter: "blur(0.05rem)",
    title: "Time Skip",
    posted: "March 8th, 2024",
    span: "June 2020 to February 2021",
  },
  25: {
    content: ImaginaryMachines,
    bgImage: "devlog_e1000_cap.png",
    bgFilter: "brightness(60%) blur(0.05rem)",
    title: "Intentional Capping",
    posted: "March 15th, 2024",
    span: "March 2021 to July 2021",
  },
  26: {
    content: Wave3Selection,
    bgImage: "devlog_error_log.png",
    bgFilter: "brightness(80%) blur(0.1rem)",
    title: "Final Selection",
    posted: "March 22th, 2024",
    span: "First half of August 2021",
  },
  27: {
    content: Wave3Test,
    bgImage: "devlog_AP_perks.png",
    bgFilter: "blur(0.1rem)",
    title: "The Third Wave",
    posted: "March 29th, 2024",
    span: "Second half of August 2021 to October 2021 (Playtesting Channels)",
  },
  28: {
    content: Disagreement,
    bgImage: "devlog_intro.png",
    bgFilter: "brightness(15%)",
    title: "Internal Disagreement",
    posted: "April 5th, 2024",
    span: "Second half of August 2021 to October 2021 (Development Channels)",
  },
  29: {
    content: Elephant,
    bgImage: "devlog_celnav_cel6.png",
    bgFilter: "blur(0.1rem)",
    title: "The Elephant",
    posted: "April 12th, 2024",
    span: "November 2021 to January 2022",
  },
  30: {
    content: Leaving,
    bgImage: "devlog_intro.png",
    bgFilter: "blur(0.1rem)",
    title: "Moving Onward",
    posted: "April 19th, 2024",
    span: "February 2022 to May 2022",
  },
  31: {
    content: DistantDevelopment,
    bgImage: "devlog_cel_quotes.png",
    bgFilter: "blur(0.05rem)",
    title: "Distant Development",
    posted: "April 26th, 2024",
    span: "June 2022 to August 2022",
  },
  32: {
    content: FinalEntry,
    bgImage: "devlog_final.png",
    bgFilter: "blur(0.05rem)",
    title: "We Did It!",
    posted: "May 3rd, 2024",
    span: "September 2022 to December 2022",
    next: "Epilogue",
  },
};

export type LogEntryType = {
  key: string;
  content: () => React.JSX.Element;
  bgImage: string;
  bgFilter: string;
  title: string;
  route: string;
  posted: string | undefined;
  index: Number | undefined;
  prev: string | undefined;
  next: string | undefined;
};

// Dynamically add all the unspecified routes and prev/next references to the listed entries
const LogEntries: { [key: string]: LogEntryType } = {};
for (const key of Object.keys(SpecialEntries)) {
  LogEntries[key] = SpecialEntries[key];
}
for (const key of Object.keys(ListedEntries)) {
  const index = Number(key);
  ListedEntries[key].index = index;
  ListedEntries[key].route = `/${index}`;
  if (!ListedEntries[index].prev) ListedEntries[index].prev = `Entry${index - 1}`;
  if (Object.keys(ListedEntries).includes(`${index + 1}`)) ListedEntries[key].next = `Entry${index + 1}`;

  const entryKey = `Entry${key}`;
  LogEntries[entryKey] = ListedEntries[key];
  ListedEntries[key].key = entryKey;
}

export default LogEntries;
