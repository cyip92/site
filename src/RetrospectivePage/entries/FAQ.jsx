import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <>
      <div>
        <h2>How is this retrospective formatted?</h2>
        It&apos;s a series of somewhat short blog-like entries on this site, which I initially thought would
        be of a similar reading length to this page. After the first few weeks, I realized that on average they
        ended up being significantly longer - on average about four times as long as this page in terms of length.
        <br />
        <h2>How much time did this take?</h2>
        Each entry took probably an estimated 8-10 hours to compile together all the information and format it
        into something that looked presentable. The history of development is spread across some Discord group
        chats (in the very beginning and end), a bunch of testing channels (also on Discord), and the history
        on the Github repo itself, all of which I went through in the process of writing these. Then, after
        gathering information, I also spent a fair bit of time editing them down to a more sensible length too.
        <br />
        <h2>Why not some other format, like a video essay or a series of podcasts?</h2>
        My initial thought was that this is the format I was most comfortable with. It would&apos;ve probably
        taken way longer to put together, both in total time and per entry, if I did it differently. Now that I
        look back on the completed entries, I&apos;m not sure if the information is that well-suited for those
        other formats either.
        <br />
        <h2>Why did you write this?</h2>
        Two big reasons. The first is that this is something which I&apos;ve had in mind ever since a couple years
        into development and, like many people, I like talking about myself and telling stories I am involved in. The
        second is that after mentioning this offhandedly a few times on Discord, many others have also expressed
        interest in hearing the inside scoop.
        <br />
        <h2>How many entries are there?</h2>
        There are a total of 32 entries in this retrospective. The update took 4.5 years to complete from start to
        finish - it definitely wasn&apos;t smooth sailing the entire time, and the fact that ended up being so lengthy
        is a testament to that. We may not have been charging forward with full force the entire time, but there was
        almost always something going on at any given time.
        <br />
        <h2>I have another question which isn&apos;t here!</h2>
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
