import unstable from "../../assets/retrospective/20/glyph_flicker.gif";
import raNameless from "../../assets/retrospective/20/ra-nameless_reality.png";
import raTeresa from "../../assets/retrospective/20/ra-teresa_reality.png";
import halted from "../../assets/retrospective/20/halted_reality.png";
import subReality from "../../assets/retrospective/20/sub_reality_ideas.png";
import { CaptionedFigure } from "./CommonElements";

export const Wave2Start = () => {
  return (
    <>
      <div>
        <h3>Separation</h3>
        There was a &quot;blind testing&quot; policy we instituted for the 1st wave testers that we wanted to
        apply to the 2nd wave as well, but we needed to revisit the details. The overarching idea
        is that existing testers would keep their mouths shut about content that we wanted new players to
        figure out or discover on their own, but this ended up being problematic because nobody could agree
        on where to draw the line between &quot;content clarification&quot; and &quot;gameplay advice.&quot;
        <br />
        <br />
        Our decision was to create a new channel named <b>#blind-patch-testing</b> for the 2nd wave, just like
        the 1st wave except this time the barrier between old and new testers was stricter. All of the old
        testers were entirely forbidden from talking in this channel; the permissions were configured to allow
        everyone to read everything being said, but only server moderators, developers, and new testers could
        actually say anything. This was mostly done in order to avoid spoiling the blind experience through
        Nameless content, which was something that slipped through on accident during the first wave via some
        loose-lipped old playtesters.
        <br />
        <br />
        We had an additional secondary channel named <b>#patch-discussion</b> which everyone on the testing
        team could use. Talking about gameplay in this channel was meant to be forbidden, which we laid out
        shortly before the test link was shared:
        <div className="o-quote-box">
          Part of the point of the channel separation is legitimately to avoid talking about gameplay here
          because some of the testers have issues with not spoiling things they shouldn&apos;t be spoiling. 
          So while speculation and stuff is fine for now, please avoid talking about game mechanics in this
          channel once testing starts, thanks.
        </div>
        This channel ended up being mostly used for technical clarifications for odd-looking behavior, minor
        showcasing of additional Quality-of-Life and layout adjustments the devs were working on, and general
        small talk about other popular incrementals at the time.
        <br />
        <br />
        These were of course in addition to the two already-existing channels for gameplay discussion
        (<b>#patch-testing</b>) and technical coding discussion (<b>#patch-development</b>).
        At this point we had four testing channels; the brief summary I offered on Discord at the time was
        the following:
        <div className="o-quote-box">
          blind-patch-testing - New testers and mods only, primarily meant for unspoiled fresh playthrough discussion
          <br />
          patch-discussion - All testers, sorta meant as a casual chatting channel
          <br />
          patch-testing  - Old testers, mostly discussion about lategame concepts/idea/design and such
          <br />
          patch-development - Old testers, mostly discussing code stuff
        </div>

        <h3>One Last Check</h3>
        Right before giving the new testers a link to the test version, we wanted to go through and quickly
        sanity-check the game and make sure that there weren&apos;t any obvious bugs. Dan took the lead and
        played through the first reality with a fresh save and liberal use of cheat commands
        in the javascript console while relaying anything odd he found to the rest of the devs.
        The more &quot;meaningful&quot; or potentially bug-prone segments such as challenges or doing something
        for the first time were done in real-time, but otherwise all of the in-between segments were skipped
        through with either simulated time or artificially increased game speed. This mostly only uncovered
        display oddities, such as base numbers for effects showing up as multipliers or Space Theorem costs
        being visible when they shouldn&apos;t have been.
        <br />
        <br />
        The first notable oversight was that the Eternity milestones for offline Infinity generation and
        offline Eternity generation could be simultaneously active because it was possible to satisfy both
        conditions at once. We modified the conditions slightly so that this was no longer possible,
        effectively closing the obvious &quot;loophole&quot; that allows you to get better progression
        with the game completely closed as opposed to open and running. (This is incidentally also
        why &quot;stored real time&quot; within Nameless doesn&apos;t work at 100% efficiency.) However,
        to my understanding, doubling-up progression via offline-only upgrades and the offline catch-up
        calculations is still possible (and in the speedrun subcommunity, <i>recommended</i>) to a much
        lesser degree with the offline EP generation milestone.
        <br />
        <br />
        Another much more minor quirk we found was some interactions the Companion Glyph had with other
        mechanics. Its tooltip information is internally stored as a pair of unique Companion-only Glyph
        effects, which caused it to technically count as a free two-effect Glyph for the purposes of some
        unlocking conditions. We left this in as an easter egg, but ended up removing it post-release.
        (This was due to feedback from the broader game community saying that it was inconsistent and
        presenting some arguments that the player should never be punished for <i>deleting</i> their
        Companion Glyph.)

        <h3>Still a Nerf</h3>
        Since it had been over a year since the last update, we provided a &quot;premade&quot; save
        which had gotten to the end of old content. It was still preferred to have people load their
        own saves into the test version, but this provided an alternative if they no longer had it.
        A couple of the new testers <i>still</i> had their old saves and, in fact, one of them was
        known to be one of the farthest legitimate players and had a save with a whopping 1e6779 EP.
        As this was well above the 1e6000 where the first-reality nerf started to apply, we were
        actually able to get feedback on it.
        <br />
        <br />
        Testing was slow for the first few days as people worked through their second reality, but
        things really sped up once people started getting their second and third Glyphs.
        It also became fairly clear that despite the difference in initial RM due to differing savefiles,
        general player activity was a much bigger factor in terms of progression speed. Having an
        extra 30 or so RM definitely helped, but not in any way that carried forward beyond the
        first few realities.

        <h3>RNG Standardization</h3>
        In-game Glyph selection was a bit weird during this point in development - clicking the button
        to complete a reality would bring up a barebones confirmation modal where you were presented
        with your choices (with no info besides the tooltip), and clicking your desired Glyph would
        immediately complete the reality. Saving operations were paused and nothing else in the game
        could be interacted while the confirmation was open, and you were unable to close it once opened.
        The intent was that once you press the button, you have no choice to do anything but pick your Glyph.
        <br />
        <br />
        There was a loophole out of this locked-in state - you could simply refresh the webpage and
        the game would reload whenever the last time it saved before you opened the confirmation
        modal. This was pointed out by one of the new testers, and it became a common habit
        for all of them to do that to preview their upcoming choices without needing to commit to ending
        that reality. Since it was such a hassle to get some arguably crucial information out of the game,
        we decided to add in-game information which directly told you what your upcoming choices would be
        once you get to that point; the loophole was no longer necessary.
        <br />
        <br />
        <div className="c-entries-columns">
          <div className="c-col-wide">
            Shortly after adding that functionality, we found that the seeded RNG process to generate Glyphs
            wasn&apos;t as stable as we thought - in certain situations, one or two attributes on a Glyph
            may change in such a way that the other options generated afterward end up being drastically
            different. This sometimes led to very awful-looking in-game behavior.
            <br />
            <br />
            The core of this problem was that sometimes a Glyph would make (for example) 11 calls to the
            seeded RNG, and sometimes it would make 12. That one extra RNG call would shift all subsequent
            values, in such a way that now the random number for rarity could be used for type instead,
            the number for the first effect would be used for rarity, etc.
          </div>
          <div className="c-col-narrow--borderless">
            <CaptionedFigure
              imgPath={unstable}
              caption={"An example of the unstable choices"}
            />
          </div>
        </div>
        <br />
        Our solution was to standardize the number of RNG calls so that every Glyph generated uses the
        same count of random numbers, even if many of them are discarded. For the typical player, this
        mostly just eliminates the unpleasant flickering from half of your options changing all at once.
        For a player who is attempting to aggressively optimize some aspect of the game, this closes
        off a potential &quot;exploit&quot; from manipulating the game in a way that isn&apos;t
        immediately clear on the surface level. Generally speaking we have nothing against the latter
        playstyle, but we also didn&apos;t want to release a game where it becomes common practice to do
        seemingly-pointless actions in order to leverage an obtuse internal code interaction.
        <br />
        <br />
        <i>
          (As a side note - some other games are less aware of this manipulation issue, and my antics
          on exploiting this in Trimps were a common theme when discussing this topic. Heirlooms in
          Trimps are a random-item mechanic that has a similar RNG call-shift issue, and in a very
          particular and limited playstyle, it can be massively advantageous to deliberately shift
          the RNG calls. On one occasion this led to what a few people
          called &quot;the tabbening&quot; - an incident where I opened more than a hundred parallel
          instances of Trimps in order to find the most favorable call-shift sequence.)
        </i>

        <h3>More Realities</h3>
        In the development channel, we were still discussing late-game content in addition to what
        the new testers were going through. Something that came up again was Ra feeling like
        a &quot;timewall,&quot; yet still strangely active. This was because you generally got
        a new Ra upgrade or mechanic every hour or two and how much effort or activity you put
        into it didn&apos;t change that much at all. I briefly summarized Ra with the following:
        <div className="o-quote-box">
          it has a tendency to pull you into the next set of upgrades overnight, kicking and screaming
          <br />
          While at the same time not really allowing you to speed it up
        </div>
        In a separate yet related line of thought, many of us thought that Ra was
        straight-up <i>boring</i> content, even moreso than what exists in the released version of the game,
        because there was little you could do (or neglect) that would influence the progression rate.
        <br />
        <br />
        This led to a very ambitious idea to split Ra&apos;s reality into four sub-realities, on the
        basis of the fact that Glyph Alchemy was mostly the only interesting interactable part of the game
        within Ra and that maybe it would be improved if we added more. Many versions of altered Ra realities
        were drafted up, all with the goal of making memory gain mechanics more interesting and possibly
        altering how memories for specific Celestials were generated overall. A few snippets of what came from
        this train of thought:
        <div className="c-figure-group">
          <div className="c-figure-row">
            <CaptionedFigure
              containerClass="c-single-figure--small"
              imgPath={subReality}
              caption={`A list of tentative ideas in a screenshotted Notepad file (for some reason,
                not sure why)`}
            />
            <CaptionedFigure
              containerClass="c-single-figure--small"
              imgPath={raTeresa}
              caption={`Ra's sub-reality for Teresa, with the idea that you would loop realities
                with a modified Automator script`}
            />
          </div>
          <div className="c-figure-row">
            <CaptionedFigure
              containerClass="c-single-figure--small"
              imgPath={raNameless}
              caption={`Ra's sub-reality for Nameless, where you were supposed to carefully plan out
                a run and then sit inside of it when you finished it`}
            />
            <CaptionedFigure
              containerClass="c-single-figure--small"
              imgPath={halted}
              caption={"A small extra line of text that went along with the Ra-Nameless concept"}
            />
          </div>
        </div>
        <i>
          (I didn&apos;t care too much about the text overflow for these initial images because
          I figured I would fix that once the ideas were more finalized.)
        </i>
        <br />
        <br />
        A few ideas actually got implemented for a bit, but they never went any farther than an initial
        test branch which was never finished and merged into the main one. We ended up scrapping all of this
        farther down the line due to a combination of unnecessary complexity, lack of ideas for Ra-V, and
        overall awkwardness with the new game flow.
        <br />
        <br />
        <br />
        <i>
          Next week, we start seeing some unfortunate side-effects of the start of the COVID quarantine.
          One of the new testers was sick for a while and many of us suspected after the fact that he
          did get COVID, but thankfully he recovered fine and everyone else was in good health. However,
          the prolonged isolation was causing some mental strain and led to large arguments amongst the team.
        </i>
      </div>
    </>
  )
}

export default Wave2Start;
