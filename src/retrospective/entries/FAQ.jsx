import { Link } from "react-router-dom";

export const FAQ = () => {
  return (
    <>
      <div>
        <h3>How are you planning to format this retrospective?</h3>
        It will mainly be a series of somewhat short blog-like entries on this site, of likely a similar reading length
        to this page, which I will post regularly.
        <br />
        <h3>How often do you plan to write these?</h3>
        I&apos;m going to tentatively aim for about once a week, and will post them every Friday in the evening for
        US time zones. I don&apos;t think I can feasibly do more often than that simply because I expect each of these
        to take a somewhat significant amount of time to write.
        <br />
        <h3>Why do you think these will take so long?</h3>
        The history of development is spread across some Discord group chats (in the very beginning), a bunch of
        testing channels (also on Discord), and the history on the Github repo itself. And then after gathering
        information, I&apos;ll need to edit it down to something of a sensible length too.
        <br />
        <h3>Why not some other format, like a video essay or a series of podcasts?</h3>
        If I were to do that, it would probably take way longer to put together, both in total time and per entry.
        I may try to condense it all into something like that once the whole “story” has been told, but otherwise
        this is the format I feel the most comfortable with.
        <br />
        <h3>Why are you doing this?</h3>
        Two big reasons. The first is that this is something which I&apos;ve had in mind ever since a couple years
        into development and, like many people, I like talking about myself and telling stories I am involved in. The
        second is that after mentioning this offhandedly a few times on Discord, many others have also expressed
        interest in hearing the inside scoop.
        <br />
        <h3>How many entries do you think you&apos;ll write?</h3>
        I have no idea at this point, considering I haven&apos;t written anything past this FAQ so far. The update took
        4.5 years to complete from start to finish, and it definitely wasn&apos;t smooth sailing the entire time. We
        may not have been charging forward with full force the entire time, but there was almost always something going
        on at any given time.
        <br />
        <h3>I have another question which isn&apos;t here!</h3>
        I am still somewhat active on the Antimatter Dimensions Discord server, so you can simply ping me and ask me
        there. Otherwise, the next easiest way would be to send me a DM on Discord (<b>@spectralflame</b>). If some
        question ends up being repeatedly asked by multiple people, I&apos;ll come back and update this page again.
        <br />
        <br />
        Hopefully that answers any questions you may have had about what I plan to write!
        Click <Link to="/ADdevlog/1">here</Link> to start reading from the very beginning of Reality development.
      </div>
    </>
  )
}

export default FAQ;
