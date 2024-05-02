import words from "../../assets/retrospective/doc.png";
import React from "react";
import TwoColumn from "../../common/TwoColumn";

const DevlogEntry = () => {
  return (
    <>
      <div>
        <h3>Post-Release</h3>
        I rejoined the Antimatter Dimensions Discord server a few hours after release; with such a long
        ongoing project finally being completed, I wanted to see how the community reacted to it. Additionally,
        considering how game releases occur nowadays, there was almost undoubtedly going to be some important
        fixes that needed to be rolled out in the first few days. I wanted to be there to get those bug
        reports immediately.
        <br />
        <br />
        Release went fairly smoothly except for one crucial immediate-action bug that we
        scrambled to fix. It seemed like people with saves from extremely old versions of the game were
        having odd conversion bugs with a specific (seemingly irrelevant) property getting set to NaN.
        Dan threw together a quick thing that let you input a bugged save and it would give you
        a &quot;fixed&quot; save in return.  We patched in a more proper fix a few days later, along with
        fixes for a few other uncaught but otherwise minor bugs.
        <br />
        <br />
        <i>
          The older pre-Reality &quot;save fixer&quot; attempted to
          dynamically fill in every single NaN value and, more often than not, broke saves instead (which is
          why we ended up <a href="https://github.com/IvarK/AntimatterDimensionsSourceCode/pull/952/commits/bb98b7e6c94686405f1f5e76de8ab599acdee9c7">deleting it</a>).
          The only thing Dan&apos;s version did was fix that single property, which fixed that bug without
          any negative side effects.
        </i>
        <br />
        <br />
        We also kept an eye out for general user suggestions for changes, and pushed those
        (and additional bug fixes) to the live version in batches roughly monthly. There was a bit more
        cleanup on the code and repository post-release, with the intent to have it in a nice-looking
        state when we made it open-source for people who want to mod the game. The repository of the
        game&apos;s code was
        then <a href="https://github.com/IvarK/AntimatterDimensionsSourceCode">made public</a> in July
        2023, shortly after the last official post-release update.
        <br />
        <br />
        Kaj continued to work on the Android version of Reality, bringing it to a public release on
        April 1st 2024. I had access to the testing channel specific to the Android version, but
        didn&apos;t keep a particularly close eye on it. Nothing special happened there as far as I
        could tell; it was pretty much purely just testing and discussions of minor pacing
        tweaks since all the mechanics and balancing had already been decided originally on the web version.

        <h3>Making The Devlog</h3>
        
        <TwoColumn
          leftWeight={3}
          rightWeight={2}
        >
          <>
            To no surprise, there was a lot of content to look through when making this. I did actually
            go back and skim through <i>all</i> the messages in every single testing channel. There were about
            450,000 messages across these channels since the beginning of the Reality Update,
            not counting any additional messages in my various DMs with testers and group chats
            near the beginning and end.
            <br />
            <br />
            That&apos;s on average about 14,000 messages/week across the entire devlog, and I can
            definitely say that I ended up spending a lot more time on it than I thought I would at
            the start. I wasn&apos;t keeping track, but I think that it probably took me about 10 hours
            each week. A surprising time commitment, but I still mostly enjoyed it too.
            <br />
            <br />
            I drafted up the majority of the text in my own Google Doc while scrolling through the older
            messages on Discord. The contents were formatted largely like they are here, except without
            any images or styling beyond basic bold/italics and a page break after every week. Then I
            copy-pasted the plaintext into VSCode and started adding images and text formatting in HTML
            where relevant before posting it to the actual website.
          </>
          <img src={words} />
        </TwoColumn>
        <br />
        Just the text on the Google Doc ended up being a total of 129 pages containing a bit over
        54,000 words; I was amazed there was apparently this much to say about the development of
        the Reality Update in total. Perhaps surprisingly, this is <i>after</i> spending time to reduce
        unnecessary fluff in every entry - as a personal project of sorts, I don&apos;t exactly
        have a word or length target I&apos;m trying to hit.

        <h3>Last Thoughts</h3>
        I can&apos;t believe it&apos;s been almost 8 months since I started this retrospective. For
        those of you who followed along this whole journey, I sincerely thank you for hanging in
        there and checking in as I was posting things every week. And for those of you who have
        read it all after it&apos;s been completed, I hope that you found the read to be worth your time.
        <br />
        <br />
        Some weeks were a bit less of a development summary and more of a rant, and I apologise for those
        times. I hoped for this entire devlog to be a way of chronicling the history of development so
        that the story doesn&apos;t get lost to time, and I think for the most part I still accomplished
        that. But as with any take on history there will be some biases from the writer(s), and hopefully
        those of mine which were present here weren&apos;t too distracting from the events.
        <br />
        <br />
        Overall I had quite an interesting time myself, seeing it all again to some degree and also skimming
        through all the messages during my absences for the first time. I hope that reading through the story
        of the Reality Update&apos;s development was some combination of informative, entertaining, and
        satisfying - and that ultimately you got something positive out of joining me in reliving the experience.
      </div>
    </>
  )
}

export default DevlogEntry;
