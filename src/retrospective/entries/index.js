import Introduction from "./Introduction"
import FAQ from './FAQ.jsx';
import MissingEntry from './MissingEntry.jsx';

// Note: These imports generally won't follow standard naming conventions (matching the import name
// to the file name) for the sake of keeping the contents of said files easier to search through and edit
import PreTesting from './01 - Preliminary Testing.jsx';

export const LogEntries = {
  Introduction,
  FAQ,
  MissingEntry,
  Entries: {
    1: PreTesting,
  }
};

export default LogEntries;
