import { Link } from "react-router-dom";

import infSac from "../../assets/retrospective/19/no_ID8.png";
import e6kNerf from "../../assets/retrospective/19/first_reality_nerf.png";
import companion from "../../assets/retrospective/19/old_companion.png";
import "../styles/Entries.css";
import { CaptionedFigure, ConversationLine } from "./CommonElements";

export const Wave2Prep = () => {
  return (
    <>
      <div>
        <h3>Lockdown</h3>
        With COVID-19 gradually starting to impact everyone&apos;s lives, one of the first things that went out
        of the window was general work-life balance. This is notable here because suddenly Razen, Garnet, and
        Hevi were a lot more active than they had been in the months leading up to now.
        <br />
        <br />
        Razen and Garnet only expressed interest in picking up smaller tasks, but Hevi got some very significant
        coding and organizational work done. He finished up the second half of the Lai&apos;tela rework,
        implementing all the singularity milestones that Jazz drafted up and also mostly overhauling the UI to
        look something a lot more similar to what exists in the released version.
        <br />
        <br />
        Hevi additionally pushed forward on fixing a lot of the lingering bugs in our issue tracker and generally
        got a lot of stalled discussions moving again. The biggest thing that this led to was serious discussion
        about what we needed to do in order to have the game ready for the 2nd wave of playtesters.

        <h3>&quot;The reality update&quot;</h3>
        As everything was starting to close down or otherwise go on some form of a pause in operations due to COVID,
        many people out in the world started panic-buying various things in stores like toilet paper with the idea
        that they were stockpiling for an uncertain future and may need to live entirely out of their houses for
        an indeterminate amount of time.
        <br />
        <br />
        This ended up being the theme for the April Fools&apos; Day update for April 2020. We called it &quot;the
        reality update,&quot; distinguished from &quot;The Reality Update&quot; only by capitalization. The
        very tenuous reasons behind it was because it reflected what was happening in the real world, and it was
        named that way for plausible deniability if people questioned it. All we did was rename a handful of
        the resources in the game; no new content or gimmicks were added.
        <br />
        <br />
        <i>
          (This April Fools Update
          is <a href="https://raw.githack.com/IvarK/IvarK.github.io/toilet-paper/index.html">technically still
          playable via githack</a>, although it&apos;s just a reskin of the game before the Reality Update.)
        </i>
        <br />
        <br />
        Hevi then made a post about it on an announcement channel in the Discord server and on the
        incremental games subreddit, and carefully added at the end &quot;<b>As a footnote, this update is not
        meant to be taken seriously as representative about my viewpoint on the pandemic. Don&apos;t use the update
        as a medical advice.</b>&quot; It was definitely a distasteful joke in hindsight, especially considering
        how much of a lasting effect the pandemic had on the world at large, but that&apos;s what the team culture
        was like at the time.
        <br />
        <br />
        As we continued development, our decisions would gradually become more mindful of others. Amongst a
        few other things, this would lead to our rename of the third Celestial from &quot;The Enslaved
        Ones&quot; to &quot;The Nameless Ones&quot; and a handful of Achievement names being changed to
        avoid certain topics and themes.
        <br />
        <br />
        A minor side note - the Android version also had a fun little April Fools joke update. It was a lot
        less controversial, all it did was make the (useless) &quot;Fix Infinity&quot; button rotate the entire
        game&apos;s layout by 14 degrees clockwise.

        <h3>A Useless Upgrade</h3>
        Dan found out that Infinity Glyph sacrifice (a boost to the per-purchase multiplier for the 8th
        Infinity Dimension) had been accidentally disabled in October 2019. That was nearly half a year ago,
        only shortly after we made the second version of Lai&apos;tela, which meant that the legitimacy of
        all our rebalancing since then was thrown into question. There were some mildly panicked conversations on
        how to fix it:
        <div className="o-quote-box">
          <ConversationLine
            name="Dan"
            text={`Pop quiz, what's the issue with this in lategame?`}
          />
          <img src={infSac} className="c-dialogue-indented c-col-narrow--borderless" />
          <ConversationLine
            name="Jazz"
            text={`8th ID buy10 not applying?`}
          />
          <ConversationLine
            name="Dan"
            text={`Correct. And apparently we don't use it at all, so all testing for IDK how long has
              been without 8th ID buy10 glyph sacrifice effect.`}
          />
          <ConversationLine
            name=""
            text={`Oh my god it's e35000 EP -> e40000 EP just in Ra.`}
          />
          <ConversationLine
            name=""
            text={`And only 1st ID is capped there.`}
          />
        </div>
        We ended up applying a fairly strong nerf to the effect, because otherwise it would have been
        the sole driving factor for growth in Celestial content. The <i>best case scenario</i> was that it
        would undo the balancing fix that <Link to="/ADdevlog/15">Tesseracts</Link> were supposed to
        address, which were implemented the same month that the effect was accidentally disabled.
        <br />
        <br />
        Dan and I tried out a few backup saves we had at various points of the game, but the results
        of the initial nerf were fairly inconclusive. We decided to commit to using the play pace of
        the second wave of testers as feedback to adjust this problem:
        <div className="o-quote-box">
          <ConversationLine
            name="Jazz"
            text={`cube root it, I think`}
          />
          <ConversationLine
            name=""
            text={`actually ^(1/4)`}
          />
          <ConversationLine
            name="Me"
            text={`If that "fixes" it for some definition of the word, then yes`}
          />
          <ConversationLine
            name="Dan"
            text={`So that should work maybe. Let's see what it does to V saves.`}
          />
          <ConversationLine
            name="Jazz"
            text={`I think we'll need to retest Teresa, effarig and enslaved as well`}
          />
          <ConversationLine
            name="Dan"
            text={`I think maybe just push it and adjust when second-wave testers test?`}
          />
          <ConversationLine
            name="Omsi"
            text={`yeah I was just going to say, it seems like just putting it back now so any new stuff
              is correct is the best idea, and then during the second wave we'll get a much better idea of
              the timespan of the update, and we can work from that understanding when readjusting prices`}
          />
        </div>
        <i>(Most of the conversation has been omitted here for brevity; they actually spanned a few hours.)</i>
        <br />
        <br />
        Later on we found that something at the end of Ra was causing a slow runaway, where alternating
        between improving Glyph levels and gaining more Reality Machines was causing accelerated growth,
        &quot;<b>something like 26000, 30000, 34000, 40000, 1 million glyph level.</b>&quot; There were
        a few things we nerfed to bring things back under control:
        <ul>
          <li>
            <b>The 4th Reality Glyph effect which made weak copies of adjacent Glyphs</b> - We replaced it
            with an effect that boosts the strength of the first row of Reality upgrades.
          </li>
          <li>
            <b>Infinity Glyph sacrifice now being functional</b> - We had at least two different attempts
            for successively stronger nerfs until it stopped blowing up the game.
          </li>
          <li>
            <b>Time Glyph&apos;s &quot;5th effect&quot; which raised time shard gain to a power</b> - We
            simply weakened it.
          </li>
          <li>
            <b>Alchemy resource totals scaled upward indefinitely</b> - We made alchemy resources cap at 25000.
          </li>
        </ul>

        <h3>Endless Grind</h3>
        Antimatter Dimensions is an incremental game, and incremental game players can be notorious
        for leaving games open and running well past the &quot;final&quot; pieces of existing content.
        This can often result in people having savefiles with resource totals significantly higher than
        developers intend when new content is released, solely because the typical game flow doesn&apos;t
        expect the player to sit and do the same thing for a whole year or more while some numbers tick upward.
        <br />
        <br />
        This was becoming a problem because a notable portion of people who had been playing the game since
        the previous update were now above 1e6000 Eternity Points by quite a bit. 1e6000 EP is a significant
        breakpoint because some of our cost curves become harsher past that, but those changes weren&apos;t
        retroactively applied to the pre-Reality version of the game. In fact, the curve was so gentle
        (relatively speaking) in the previous version that numbers would run away in a positive feedback
        loop on their own somewhere above 1e10000 EP.
        <br />
        <br />
        The Android version of the game <i>did</i> have the increased scaling, but had a different problem; the
        most common form of cheating in that version was people setting their device clocks to some time
        far in the future. Effectively, it was as if they had left the game open for years or decades
        and did all the grinding that people would have &quot;manually&quot; done on the web version. Generally
        speaking we don&apos;t care much if people cheat (since it&apos;s a single player game), but we were
        concerned about people who decided to cheat on a whim since they&apos;ve beaten the game, and then
        return to the game after the update releases only to have their fun unintentionally ruined by their
        actions more than a year ago.
        <br />
        <br />
        <div className="c-entries-columns">
          <div className="c-col-wide">
            Combining these two things together, we realized the core problem was the fact that we
            didn&apos;t intend for the player to be rewarded more than a handful of Reality Machines
            after their first reality, but theoretically unbounded EP meant theoretically unbounded
            RM. Our solution was to reduce the amount of RM gained when above 1e6000 for the first
            reality.
            <br />
            <br />
            This wasn&apos;t discussed at the time, but we also ultimately capped first-reality RM at
            the value corresponding to 1e8000 EP later on.
          </div>
          <div className="c-col-narrow--borderless">
            <CaptionedFigure
              imgPath={e6kNerf}
              caption={"The reduced RM curve"}
            />
          </div>
        </div>
        
        <h3>A Trophy</h3>
        After we decided on the reduction above 1e6000 EP, some discussion followed about how
        players would react upon seeing a message in-game telling them that their grinding was
        given another layer of diminishing returns. We tossed around some ideas for cosmetic-only
        rewards for those people to soften the blow, as a token of appreciation for their dedication,
        such as a special functionally-useless Glyph that gets awarded if you complete your first
        reality above the threshold.
        <br />
        <br />
        Pichu was pretty adamant on saying that even a special cosmetic-only Glyph shouldn&apos;t
        be missable and Dan agreed, bringing up the point that secret achievements are (for the most
        part) also unmissable. I was in favor of the Glyph as something to &quot;explain&quot; the
        nerf we added at 1e6000 EP - from my experience in open beta testing for another game,
        people can have a tendency to get angry if existing content gets nerfed when a game update
        happens. In my mind the Glyph served the purpose of making the nerf feel less bad.
        <br />
        <br />
        Our compromise between the two was a special cosmetic Glyph which <i>everyone</i> was given,
        called the Companion Glyph:
        <div className="c-entries-columns">
          <div className="c-col-narrow--borderless">
            <CaptionedFigure
              imgPath={companion}
              caption={""}
            />
          </div>
          <div className="c-col-wide">
            <div className="o-quote-box">
              <ConversationLine
                name="Hevi"
                text={`Also what if we make the icon be a heart and call it "companion glyph"`}
              />
              <ConversationLine
                name="Jazz"
                text={`why don't we just give everyone a heart glyph, have the heart glyph record
                  the EP value on first reality, and the heart glyph does nothing but sit there and cutely
                  smile at you, whisper into your dreams politely, plot the demise of all who stand against you`}
              />
              <ConversationLine
                name="Garnet"
                text={`you know what that works`}
              />
              <ConversationLine
                name="Me"
                text={`... I'm on board`}
              />
              <ConversationLine
                name="Garnet"
                text={`everyone gets a companion cube`}
              />
            </div>
            The Companion Glyph had a description congratulating the player for reaching reality content
            and stating the amount of EP for the people who cared about showing off how much pushing they
            did before the update released. On its initial implementation, it also stated what effective
            EP amount it was reduced to if above 1e6000, but we eventually removed that.
            <br />
            <br />
            Companion Glyphs are very overtly a reference to the game Portal, and we even added a
            few custom messages that pop up if you try to delete your Companion Glyph which are more
            or less direct quotes from Portal as well.
          </div>
        </div>
        <br />
        <i>
          These were basically the last steps we had planned in preparation for the second wave of
          testers. Next entry, we&apos;ll go into more detail about how testing continued onward
          when our new playtesters actually joined the team.
        </i>
      </div>
    </>
  )
}

export default Wave2Prep;
