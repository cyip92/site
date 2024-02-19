import compression from "../../assets/retrospective/12/Time_compression.png";
import glyphSets from "../../assets/retrospective/12/glyph_sets_tickspeed.png";
import nameless from "../../assets/retrospective/12/Hevi_Nameless_runaway.png";
import squish from "../../assets/retrospective/12/softcap_RM.png";
import { CaptionedFigure } from "./CommonElements";

export const TimeCompression = () => {
  return (
    <>
      <div>
        <h3>Time Compression</h3>
        The next Ra capstone mechanic we would work on was for Nameless. Since the theme of Nameless was time,
        we decided that we would make it something inspired by Time Dilation mechanics. After about
        a week of brainstorming, we settled down on a mechanic called&nbsp;
        <a href="https://github.com/IvarK/AntimatterDimensionsSourceCode/pull/651">Time Compression</a>:
        <ul>
          <li>
            We added a new partial reset called Time Compression, which you needed at least 1e5,000,000 time
            shards to unlock within a Reality. This partial reset occurred at the same &quot;layer&quot; as Time
            Dilation; it would perform an Eternity-level reset and then place you into a modified Eternity.
          </li>
          <li>
            Inside Time Compression, the Time Dilation penalty is applied <i>twice</i>, Time Dimensions and
            their effects are disabled, and game speed is modified to ignore the Black Holes and run at a fixed
            rate of 1e100 times slower than normal.
          </li>
          <li>
            Exiting Compression rewards a permanent resource called Entanglement, which is based on best
            progress ever and therefore not &quot;farmable&quot; through repeated attempts. The maximum possible
            Entanglement was 308, which was exactly enough to purchase every upgrade.
          </li>
          <li>
            Entanglement could be fully refunded and re-allocated amongst Time Compression upgrades every Reality
            in a similar way to Time Theorems and Time Studies.
          </li>
          <li>
            Time Compression upgrades had an additional condition to &quot;activate&quot; which generally required
            different Glyphs to be equipped and weren&apos;t easy to all activate simultaneously. In many cases
            you would also have to equip a Glyph or two which was otherwise &quot;bad,&quot; as a trade-off to
            make particular upgrades active.
          </li>
        </ul>
        <div className="c-centered-img">
          <div className="o-small-center-img">
            <CaptionedFigure
              imgPath={compression}
              caption={`This was also incidentally when I started learning some basic CSS, although it was
                still fairly clear that this layout was mostly copied from the Time Dilation subtab.`}
            />
          </div>
        </div>
        As we were working on Ra, we had the idea that every capstone mechanic would have one part which affected
        Lai&apos;tela if you had it unlocked. This version of Ra unlocked Lai&apos;tela when all Celestials were
        at level 20, so it was entirely possible to have gotten to the next Celestial without unlocking&nbsp;
        <i>any</i> of the capstone mechanics. The last Time Compression upgrade in the list applied the Lai&apos;tela
        buff, which had the activation condition of simply unlocking Lai&apos;tela in the first place. (Dark
        Matter was simply called &quot;Matter&quot; by now; we would change that once we got around to reworking
        its content later on.) 
        <br />
        <br />
        We eventually removed Time Compression from the game, due to a combination of poor balancing, usability
        issues, and bad interactions with other content. However, our development priorities shifted shortly
        after it was implemented, which I&apos;ll come back to at the end of this entry. As a result,
        Time Compression would remain largely untested and ended up staying in the game until March 2020, a bit
        over half a year later.

        <h3>Nameless Revisited</h3>
        Earth was the third person to test Nameless (after Dan and I did) and we found that some of our initial
        hints were misleading and/or needed revision. More importantly, Nameless was seeming to be just as much of
        a &quot;Glyph puzzle&quot; as Effarig was. For a brief period of time we actually had Nameless insult
        you if you attempted to use an Effarig Glyph, but then decided that a better solution was to boost all
        Glyphs within Nameless to be a <i>minimum</i> of level 5000.
        <br />
        <br />
        A few weeks later, Iker went through Nameless next and had a bafflingly easy time. Now you could get
        through using just about any Glyphs, and you didn&apos;t need to use half of the &quot;cracks&quot; either.
        We found out that this was because Dimensional sacrifice was always applying to the highest available
        Dimension, which was an effect which we had (probably unintentionally) disabled when the puzzle version
        was first made.
        <br />
        <br />
        Garnet made a relatively small and quick bugfix branch to disable sacrifice and address the other
        feedback, but this was the first hint that maintaining the behavior of Nameless Reality was going
        to be a pain moving forward. In the code, Nameless was effectively a set of particular edge cases
        which were &quot;locked in&quot; as intended behavior at the time of implementation, and we had to
        continually add special behavior for in order to make sure it still functioned while we worked on other
        parts of the game. It was almost the textbook definition of &quot;having to support awful legacy code.&quot;
        <br />
        <br />
        <div className="c-entries-columns">
          <div className="c-col-narrow--borderless">
            Hevi would eventually test Nameless as well and once again things didn&apos;t work as
            intended - this time in the form of an unexpected runaway. In the interim, I had implemented the
            DBNR perk (which made Dimension Boosts no longer reset resources) and it wasn&apos;t properly
            accounting for how Challenges worked within Nameless. Naturally, this wouldn&apos;t be the last
            time something like this happened either.
          </div>
          <div className="c-col-wide">
            <CaptionedFigure
              imgPath={nameless}
            />
          </div>
        </div>
        
        <h3>Other Testing</h3>
        I had an idea which was meant to slightly speed up gameplay by making the Achievement multiplier
        smoother - x1.03 per Achievement and then another x1.184 to bring a full row back in line with the
        original x1.5. This ended up being implemented incorrectly, with the x1.03 applied <i>in addition
        to</i> the x1.5, which was then scaled back to x1.25 when it was found to be too strong. This naturally
        sped up pre-Reality gameplay compared to before the update; it was the first of many visible changes which
        would initially be implemented in the Reality Update, but exposed to the public much sooner when it was
        ported into the Android version of the game.
        <br />
        <br />
        Now that the Automator block editor was created and (technically) functional, we poked Pichu to test
        it - he was pretty vocal about being the resident non-coder and wanted to make sure the game was still
        approachable to non-programmers. Throughout this time, he ran into a lot of buggy behavior in the initial
        implementation. Some of the trouble came from the layout being unpolished and not providing enough user
        feedback from actions, but most of it came from the fact that the game still internally stores
        scripts as if it was using the text editor, and the conversion between text and block on the frontend
        was very inconsistent and occasionally crashed the game.
        <br />
        <br />
        Besides the block editor, overall we started feeling confident in suggesting that people start playtesting
        again. However, very quickly we found that a lot of cleanup and refactoring during our reworks
        wasn&apos;t cleanly executed. Many bugs appeared as side effects, most of which were immediately uncovered
        by anyone who started a new playthrough.
        <br />
        <br />
        The Android version got a dedicated Discord channel (back in March, a few months ago), but that
        channel mostly only contained brief conversations between Hevi, Kaj, Omsi, and the occasional
        tester. Kaj was brought on to the Reality testing team in the beginning of July and started
        playing through right at new content, and ran face-first into the aforementioned bugs. As someone
        who was new to the team and didn&apos;t know about the mechanics already, he also pointed out that
        we hadn&apos;t explicitly mentioned how most of the mechanics worked in-game. In an effort to fix this,
        Earth continued to fill out the in-game How To Play information for all game mechanics up to Lai&apos;tela,
        and Iker took that information out of the separate webpage and placed it into a searchable modal within the
        game itself.

        <h3>Hubris</h3>
        <div className="c-entries-columns">
          <div className="c-col-narrow">
            <CaptionedFigure
              imgPath={glyphSets}
              caption="A snippet of a spreadsheet I posted which compared Glyphs in late Ra"
            />
          </div>
          <div className="c-col-wide">
            Now that the numbers in the game seemed to be properly in control, we took that as a free
            license to go nuts with the new upgrades in Glyph Alchemy and Time Compression. Everything
            seemed to go smoothly, but we experienced a different form of game mechanics running away.
            Numbers were <i>gradually</i> increasing, and individual mechanics and upgrades could sneakily
            grow without us realizing they were too large until it was (in a sense) too late.
            <br />
            <br />
            Some Glyph set analysis showed that a full set of time Glyphs was causing Time Dimensions
            to be disproportionately strong compared to any other set - to the point that it was
            typically giving 3-4 times more free tickspeed upgrades and an extra 100 orders of magnitude
            in Reality Machines. With the old Nameless reward (Time Dimensions raised Infinity Dimension
            purchase caps) and the slew of minor upgrades which made Time Dimensions affect most things
            to a very weak degree, this was causing time Glyphs to indirectly be better in nearly every
            way than all other Glyphs just through the sheer force of large numbers.
            <br />
            <br />
            Ironically, Dan&apos;s asymptotic analysis probably could&apos;ve prevented this preemptively,
            but his absence made him less of a developer and more of an intermittent playtester who was
            less aware of mechanics as they were being made. From his perspective, he only saw things being
            added to the game as the primary testing branch was updated, which meant that he only saw Ra
            content once the majority of it was reworked and both Alchemy and Compression were added at once.
          </div>
        </div>
        <br />
        There were a few instances of numbers overflowing&nbsp;
        <span className="o-code-text">break_infinity.js</span> - that is, the results
        of calculations being larger than 10 to the power of 1.8e308 (the largest number expressible in
        double-precision floating point). For example, Time Study 193 overflowed when eternity count got
        too large, and a few cases of replicanti calculations had intermediate values which overflowed
        before we redid some of the math.
        <br />
        <br />
        Since we were approaching the end of the game content-wise, most of us were starting to agree that
        we wanted it to end at e9e15 (ie. 10 to the power of 9 quadrillion; the point where&nbsp;
        <span className="o-code-text">break_infinity.js</span> starts losing precision). However, this was
        incompatible design-wise with how many Reality Machines the player would have at that point. I
        ended up implementing a very harsh softcap to the formula in order to keep other numbers in check:
        <div className="c-centered-img">
          <img src={squish} className="o-small-center-img" />
        </div>
        <br />
        This was a very sloppy cap which was primarily there as a fallback solution to a tricky problem
        we didn&apos;t want to discuss at the time. It went largely unnoticed even after I mentioned it
        in the Discord channel, but it would be removed in the future once more people became aware of
        it and voiced their rightful opinions about it being poorly designed.

        <h3>Getting Ready</h3>
        The rest of the time until the end of August was spent doing a mass-cleanup of all the lingering bugs
        on the Github issue tracker - there was one point where we had nearly 200 unresolved issues. Admittedly,
        this was a combination of bugs, suggestions, and reminders for code cleanup, but probably at least
        half of the issues were fixable bugs. After our mass-fixing, we got this number back down to 120.
        <br />
        <br />
        Our development time and attention was generally split between brainstorming more ideas for the
        remaining two Ra capstone mechanics and resolving issues on the Github. However, something else
        came up which stole all of our focus for a bit. This was what I would arguably call the first
        big milestone of development for the Reality Update - we started discussing who we would want to
        add to the team in the first official wave of new testers.
      </div>
    </>
  )
}

export default TimeCompression;
