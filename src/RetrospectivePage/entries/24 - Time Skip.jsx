import eter from "../../assets/retrospective/24/old_eter.gif";
import dil from "../../assets/retrospective/24/old_dil.gif";
import memories from "../../assets/retrospective/24/prototype_ra_memories.png";
import loop from "../../assets/retrospective/24/looped_cel7.png";
import CaptionedFigure from "../common/CaptionedFigure";

export const TimeSkip = () => {
  return (
    <>
      <div>
        <h3>Polishing Up</h3>
        Omsi went through and did a set of visual improvements, making all the Celestial icons animated
        and adding animations for Eternity and Dilation. She also made some contrast improvements for
        colour-blind friendliness. Earth also joined in on the UI work by adding confirmation modals
        for basically every reset and challenge event, and which was the start of him becoming
        our informal &quot;Modal Man.&quot;
        <br />
        <br />
        <div className="c-figure-group">
          <div className="c-figure-row">
            <CaptionedFigure
              containerClass="c-single-figure--small"
              imgPath={eter}
            />
            <CaptionedFigure
              containerClass="c-single-figure--small"
              imgPath={dil}
            />
          </div>
          <i>A couple of older animation samples before we changed them</i>
        </div>
        <br />
        Throughout this time, a few of the second-wave testers were disappointed about how lore only
        existed in the first three Celestials so far. It became a collaborative effort amongst a few
        of them to try to fill out the missing lore for V, Ra, and Lai&apos;tela. Much of it was
        written, revised, and completed during this span of time, they just needed to be added into the game.
        <br />
        <br />
        One of the second-wave testers in particular decided that they wanted to join in on the development
        process. This took the form of a bunch of relatively minor changes - mostly sweeping checks for
        standardised capitalization and a bit of code refactoring and organisation. Unfortunately though,
        due to the absence of most of the other devs during this time, good coding practices fell by the
        wayside. This resulted in every single one of these changes being put into two Pull Requests
        with more than a hundred files changed <i>each</i>, which both took a very long time to review.

        <h3>Steam Version</h3>
        At some point during this break, Hevi brought on another developer (named Makopaz) whose main role
        was to manage a port of the game into Steam. Testing for this version was opt-in amongst the
        tester team, and only a few people out of everyone decided to go out of their way to join.
        <br />
        <br />
        Testing for the Steam version was quiet for almost the entire period except for the few months
        before release. This was mostly because on the backend we were able to port the game&apos;s code
        as-is plus a handful of extra files to properly interface with Steam itself. As a result, actually
        testing Steam on top of the web version was largely unneeded since they were mostly the same code.

        <h3>Hex Development</h3>
        The <b>#patch-discussion</b> channel turned into a place where people mostly talked about just
        three things - questionable design in other incrementals, how COVID and lockdown was
        affecting them, and feedback/playtesting for Dan&apos;s
        incremental <a href="https://dan-simon.github.io/misc/fe000000/">Hex</a> (often called by this name
        due to its name and some of its balancing being inspired by the Hex notation he made).
        <br />
        <br />
        Eventually talk about Hex took over <i>most</i> of the conversations there, as almost all
        of the active people at the time also supplied feedback to Dan about improving the game. To my
        understanding, he made at least half of the entire game during this time period. After a few months,
        Hex was completed content-wise, Dan officially released the game to the public, and then the channel
        became relatively silent.

        <h3>Looped Pelle</h3>
        MAD Pelle, in its half-finished implementation, ended up getting very mixed feedback. Development
        of it ended up more or less halting due to Jazz being frustrated at the improper implementation
        and not having the motivation or interest to fill out any further upgrades past what would&apos;ve
        been around Replicanti.
        <br />
        <br />
        A few months passed with an incomplete MAD Pelle in the game before Hevi would return again and
        offer some thoughts on a different concept for Pelle which he hoped would be easier to implement.
        The basic idea was partially inspired by <a href="https://stopsign.github.io/idleLoops/">Idle Loops</a>,
        although it gradually shifted a bit away from it and only kept the looping aspect:
        <ul>
          <li>
            Starting Pelle content required you to Doom your Reality and lose most of your upgrades you
            had accumulated by this point. This was now a point of no return; you couldn&apos;t un-Doom
            your game in this version.
          </li>
          <li>
            A new type of reset called Armageddon was introduced, and it happened unavoidably every few
            seconds. Armageddon reset all resources that a Reality reset would affect, except for any
            new Pelle-specific resources.
          </li>
          <li>
            Every time Armageddon occurred, you would gain some amount of Unstable Matter based on what
            your antimatter was at the time of Armageddon. This could be used to purchase new upgrades;
            some affected Pelle mechanics, while others were similar but not identical to
            some older things you used to have.
          </li>
          <li>
            There were a few special upgrades which unlocked new Pelle-specific resources themed
            after the <a href="https://en.wikipedia.org/wiki/Four_Horsemen_of_the_Apocalypse">Four
            Horsemen of the Apocalypse</a>. Each new resource had its own class of upgrades you could
            purchase, as well as a passive effect based on their total.
          </li>
          <li>
            These new resources would be generated by filling up bars at a rate based on the value of
            some other resource in the game. The bar fill states themselves were unaffected by Armageddon
            resets, although their filling <i>rate</i> would be indirectly influenced.
          </li>
        </ul>
        <div className="c-centered-img">
            <CaptionedFigure
              imgPath={loop}
            />
        </div>
        Once he figured out all the basic ideas he wanted in this third version of Pelle, he started work on
        implementing content and got up to around when Eternity Challenges would normally exist, around 1e20
        Eternity Points.

        <h3>Completing Content</h3>
        Ra&apos;s content pacing was a point of contention for a long time because it was (and depending on
        who you ask, still is) inherently slow and <i>very</i> idle. We ended up discussing the idea of a memory
        mechanic rework multiple times for the better part of a year in order to fix it, but now was when it
        would actually be implemented.
        <br />
        <br />
        When Hevi returned to work on the game for a bit, he admitted to never having personally tested the
        most recent iteration of Ra. Upon saying that, multiple people stepped in to explain the issues with
        the current version and, now that he understood the problems, Hevi suggested the following changes:
        <div className="o-quote-box">
          -make all pets have upgradeable memory and chunk gain (2 separate rebuyable upgrades, something
          like 30% increase with cost multiplier of 4x-10x)
          <br />
          -Make levels cost memories instead of automatically leveling them.
          <br />
          -decrease the memory/chunk gain accordingly, and perhaps scale levels more
        </div>
        <br />
        <div className="c-entries-columns">
          <div className="c-col-wide">
            In terms of actual mechanics, this was a very minimal change - the only new thing was that now you
            had to click a button to level up (instead of it happening automatically) and some new basic upgrades
            altered the progression curve enough that you had to actually interact with the game in order to not
            stall out. Ra would no longer drag you along at a fixed rate of progression because it now asked you
            to put in a minimal amount of game interaction to progress.
            <br />
            <br />
            Besides some minor numerical tweaks we would do between now and the end of 2022, this was basically
            what ended up being the final version of Ra&apos;s content that you can experience in the game now.
            This was definitely in part due to multiple people expressing the sentiment that we just wanted
            something that &quot;worked well enough&quot; so that we could finally release the game.
          </div>
          <div className="c-col-narrow--borderless">
            <CaptionedFigure
              imgPath={memories}
              caption={"An initial prototype for the new memory upgrades in the UI"}
            />
          </div>
        </div>

        <h3>More Disagreement</h3>
        Jazz and Hevi didn&apos;t quite see eye to eye with the design concept for MAD Pelle, partly due
        to miscommunication and partly due to a confusing UI. Many times things weren&apos;t implemented
        in a way that properly followed the original concept that Jazz laid out, and there were a few
        cases where Hevi made seemingly-innocuous changes which in fact altered the design quite drastically
        without him realising it. Needless to say, it ended up being a frustrating experience for both of them.
        <br />
        <br />
        Combined with the general stress and dev fatigue of basically being entirely in charge of the final
        Celestial&apos;s content, Jazz ended up leaving the server temporarily for a mental health
        break. MAD Pelle remained a sore point between the two of them, so a few months later Hevi decided
        it would be better off to try something else for Pelle instead. That was when he attempted to pivot
        the concept for Pelle into the looping idea mentioned earlier.
        <br />
        <br />
        One of the older first-wave testers chimed in about the content at the end of the game after
        being largely silent for the past year or so. They were very repeatedly insistent that the game
        loop in Ra and Lai&apos;tela had been made worse every rework, and that it should be basically
        rewritten from the ground up using... similar mechanics to the very first versions. It was generally
        unclear, but it seemed like they were unaware of how many reworks we had already been through by now.
        <br />
        <br />
        Everyone else was mostly okay with how those two Celestials were shaping up - if only because
        we were tired of the constant overhauls and the current versions were still better than the older ones.
        However, their continued insistence and unwillingness to compromise basically shot whatever was left of
        group and dev morale for about half a year. There was a point where they attempted to pick up the
        rework themselves, but that didn&apos;t go anywhere beyond a couple upgrades on a now-deleted branch.
        <br />
        <br />
        <i>
          With Dan working primarily on his own game, Jazz taking a break from development, and me focusing
          on my education, the development of the Reality Update slowed to a crawl for almost a whole year.
          We made a few comments about this to varying degrees of seriousness, but it seemed like very
          little actually got done without the three of us. Next entry, meaningful progress will pick up
          again with all of us returning, with one of the first things being our solution to the RM squish.
        </i>
      </div>
    </>
  )
}

export default TimeSkip;
