import "../styles/Entries.css";

export const WaveOne = () => {
  return (
    <>
      <div>
        <i>
          Note: This is a very community-oriented devlog post, so there&apos;s not much in the way of actual game
          content or images. Next entry is probably going to outline what was going on concurrently in the
          development channel and should be a lot more game-oriented. I would&apos;ve tried to condense them
          together into one post, but I wasn&apos;t able to devote as much time to this week&apos;s entry as
          I liked due to things related to my upcoming overseas move. (Sorry.)
        </i>

        <h3>Selecting People</h3>
        The suggestion to bring on new testers blindsided many of us, since we were actually now in a good
        position for it. It came out of Razen mentioning offhand that the state of the game and code looked
        good enough to open a public beta for more testing. Most of us were against the idea of a public
        beta for multiple reasons - notably, Hevi was opposed due to the fact that earlier updates had some
        content leaks which nearly led to ideas being stolen for and implemented into other games before
        he released them himself. As a result, the Reality Update remained a private beta for the entirety
        of its development.
        <br />
        <br />
        Hevi was the one who really pushed forward with bringing on additional testers. We collectively
        drafted about 10 or so questions which asked broadly about how much of Antimatter Dimensions
        you&apos;ve played through, how much (if any) previous testing or coding experience you have,
        and what motivated you to want to become a tester. In terms of choosing who to onboard, we all
        agreed that we were looking for a few things in particular:
        <ul>
          <li>
            Soft skills of being able to work productively with other people - given that some previous
            testers who were removed from the team or otherwise left on their own caused some very
            light &quot;drama,&quot; we wanted to preemptively avoid that.
          </li>
          <li>
            Positive or at least neutral community presence on the Discord server - we were still
            concerned about content leaks, and not having any prior activity at all was an
            unknown risk nobody wanted to take.
          </li>
          <li>
            Some amount of prior dedication to the game - we want to make sure that they&apos;re already
            part of the game&apos;s target audience and also won&apos;t disappear shortly after joining.
          </li>
          <li>
            Interested in becoming a tester for more than simply wanting access to the Reality Update
            content sooner - there were a couple people who were really insistent like this in a way
            none of the team liked, and that caused us to view this behavior itself as reason for a
            near-immediate rejection.
          </li>
        </ul>
        At the end of the whole process, we decided upon 10 new playtesters which we split equally
        into a first and second &quot;wave&quot; of testers. The motivation for this was that we
        wanted to have an iterative approach to tweaking and improving the game, and it would be
        harder to get new changes properly tested if they didn&apos;t get implemented
        until after all the new testers were past that point. Tentatively, we planned to add the first
        wave in the next few days, and then the second wave would be added at some indeterminate point
        in the future after the first wave completed the majority of the existing content.

        <h3>Getting Started</h3>
        Garnet said as a joke, &quot;nothing like the threat of new testers to kick us in gear&quot; and,
        while it was a bit of a tongue-in-cheek comment, the two days leading up to the start of the
        first wave of new testers was full of frantic bug fixing. We managed to get most of the obvious
        bugs, particularly ones which would have otherwise caused massive progression skips or crashes,
        but a few more minor bugs still slipped through. A few days after the new testers joined, pretty much
        everyone agreed that all the preparation for getting the game ready enough was very rushed and
        not as thoroughly tested as our other recent changes.
        <br />
        <br />
        In the interest of trying to simulate a similar environment to a new player post-release, we decided
        to create a new Discord channel for the first wave. This primarily let us see how they managed
        without outside help, while also keeping them unspoiled on any later content which was actively
        being worked on by some of the devs. This would eventually be repurposed as the generic&nbsp;
        <b>#patch-testing</b> channel as further tester waves were added to the team.
        <br />
        <br />
        We added the five new testers, with the Discord role &quot;Totally not a tester&quot; and
        gave them access to this new channel, but they weren&apos;t given the test link immediately
        since we had a few more things to finish up before doing so. There was also the secondary
        purpose of further vetting of everyone involved before we got started, but that ended up
        being largely unnecessary.

        <h3>New Feedback</h3>
        Once testing started, a lot of more minor bugs got uncovered almost immediately. Besides that,
        we found that the new testers gave a huge amount of value to the team due to offering completely
        fresh perspectives. Additionally, they gave quite a few suggestions for improving the UI/UX
        (User Interface and User Experience) of the game, which was something that didn&apos;t cross
        the mind of many existing testers - we were all used to the game looking jank and unpolished.
        <br />
        <br />
        As they neared the end of their second Reality, they pointed out that Time Dilation was still
        poorly-paced even considering all the new update content. This was something that none of the
        old testers caught - we had all gone into the new content with the same savefile, which had
        slightly inflated values compared to a typical player who had completed all pre-Reality
        content and then left the game alone.
        <br />
        <br />
        This led to testing a bunch of various hypothetical situations, and then we found out that:
        <ul>
          <li>
            Replicanti speed very strongly correlates with Eternity Point gain, as reducing Replicanti
            speed by x3 resulted in it taking nearly 3 times as long to reach the same EP.
          </li>
          <li>
            After Time Theorem generation, progress speed is fairly limited purely due to needing to
            wait on having enough Time Theorems to unlock Time Dimensions 5-8.
          </li>
          <li>
            Any buffs to Dilated Time feed fairly well into EP through all the various Dilation upgrades.
          </li>
        </ul>
        The discussion that followed was basically trying to decide &quot;do we bother with making the
        first trip through dilation not suck, or do we leave it as-is.&quot; We decided on the former
        and added a few Achievement upgrades which increased the generation of all Time Dilation resources
        by approximately 2.5 times after Theorem generation, and then just let this change propagate
        through upgrades to improve Eternity Point progress. None of us were keen on insisting that future
        players would need to &quot;suffer&quot; through the long waiting times just because we had to ourselves.
        <br />
        <br />
        Overall much of the older testing team was excited about bringing the new testers on - this
        may have been a much-needed morale boost to development after months of headaches due to
        game instability. For the first few days, the new channel was filled with excitement
        from the new testers as they experienced and discussed new content, and eagerness from the
        old testers to tell various bits of the story of development so far even though it wasn&apos;t
        completely a positive experience.

        <h3>NG+3 Commentary</h3>
        We kept our eyes open for game mechanic suggestions in the (now deleted) game suggestion Discord
        channel, but many of them ended up being things which we had already implemented, addressed in
        an alternate way, were incompatible with what we had, or were simply not well thought-out ideas.
        <br />
        <br />
        This was probably the start of some stronger animosity towards NG+3 development, since this was
        around the time that the NG+3 developers really ramped up in activity. The thing that people
        on the team disagreed with was that many of the suggestions we dismissed
        were immediately taken up and incorporated into the NG+3 development roadmap regardless of their
        suitability or quality. Some felt like the NG+3 developers were simply attempting to one-up the
        Reality Update with, to quote Earth, &quot;a big conglomerate of half-baked ideas.&quot; Hevi
        also pointed out that &quot;Without [the main NG+3 dev] I could spoil the whole update. But if
        I do suddenly all the mechanics appears in his games or NG+.&quot;
        <br />
        <br />
        Some of the new testers made comparisons between the Reality Update and various New Game Plus
        versions of the game, and commented about how Reality felt more satisfying due to it being a
        more uniform speedup while keeping a lot of the original experience intact. There were also
        some remarks about how while there were a lot of potential choices to make, it was hard to feel
        like you ever made a wrong decision which was hard to recover from and every option offered
        something useful for progressing faster.
        <br />
        <br />
        This is in stark contrast to what I&apos;ve heard about NG+3, where (to my understanding)
        your only real reward was a choice between three colors of upgrades (Red, Green, Blue) and
        the game was very clearly balanced around you picking the &quot;correct&quot; one since it
        was very powerful and the other two were significantly weaker.

        <h3>Other Changes</h3>
        This is when we committed to the idea that the Automator execution speed should passively
        speed up with reality count (without requiring resources to be spent), and that all the
        commands and the Automator itself (without a line limit) should unlock at 5 realities. Things
        would remain this way for at least a year or so before the next change.
        <br />
        <br />
        We changed the Achievement system so that they were now also manually re-earnable by repeating
        their requirements, meaning you were no longer locked down by the Achievement timer. This
        change to allow for Achievements to be manually re-completed was probably the source
        of the most minor bugs we had to hastily fix before giving the new testers the link
        to the game, as it made us realize that there was almost no consistency amongst how
        all of the Achievements were given.
        <br />
        <br />
        Pichu was struggling with Teresa&apos;s RM bar leaking over time, since he wasn&apos;t
        able to get his RM income to surpass the leak rate that easily. Everyone gradually realized
        that nobody really knew why the leak existed and it only really served to punish non-optimal
        players, so we removed it.
        <br />
        <br />
        <i>
           I don&apos;t really have a natural segue into the next entry&apos;s content. As alluded
           to at the top, next week should go into a few new features which were being worked on
           in the development channel during this time. In particular, we continued with Ra and
           Lai&apos;tela content, and Garnet started drafting up what we now call Celestial Navigation.
        </i>
      </div>
    </>
  )
}

export default WaveOne;
