import { Link } from "react-router-dom";

import effect from "../../assets/retrospective/17/specified_effect.png";
import reduction from "../../assets/retrospective/17/max_reduction.png";
import oldReality from "../../assets/retrospective/17/old_reality.gif";
import navV from "../../assets/retrospective/17/nav_V_unlock.png";
import "../styles/Entries.css";
import { CaptionedFigure } from "./CommonElements";

export const Slower = () => {
  return (
    <>
      <div>
        <h3>A Secret</h3>
        In mid-February we had another discussion about how much of the game up to this point relied on
        playing optimally - this started from thinking about how V required specific Glyph sets, but then
        broadened out to include earlier Celestial content <i>also</i> needing particular sets as well. This
        conversation happened at about the same time Dan made a comment about player optimality
        on one of his side-channels of communication; he still had his own Github repository which he was
        posting issues on, but this was also a few months after he made a new Discord account since he
        deleted his original one.
        <br />
        <br />
        A few of the playtesters were in contact with him on his own Discord server, but the (possibly)
        coincidental timing of these conversations made us decide that the multiple avenues of communication
        was starting to become enough of a headache that we wanted to actually come up with a more convenient
        long-term solution. We invited Dan back to the Antimatter Dimensions Discord server and
        then figured out what we needed to do to avoid him leaving again since at that point it was clear
        that it wasn&apos;t necessarily a problem with Discord itself.
        <br />
        <br />
        There was a new custom role named <span className="o-code-text">???</span> created specifically for
        Dan which, by his request, restricted his access to only the testing channels and nowhere else - as
        far as he could see, the server only contained those channels. Then, as a team, we all agreed to
        try to keep Dan&apos;s existence a secret as letting the server at large know anything about our
        arrangement was extremely likely to raise lots of questions that none of us really wanted to answer.

        <h3>Too Advanced</h3>
        <div className="c-entries-columns">
          <div className="c-col-wide">
            A few of the testers made comments about how the Glyph filter was hard to understand and use
            properly, since the only viable options were the Rarity Threshold mode and the Effect Score
            mode (called &quot;Advanced Mode&quot; back then). Effect Score mode technically gave full
            flexibility over filtering behavior, but how to use it had to be explained enough times that
            we realized that it was worth coming up with an alternative.
            <br />
            <br />
            This was when I decided to implement the &quot;Selected Effect&quot; mode as something in
            between the two modes in terms of flexibility and ease-of-use. The new mode took the Rarity
            Threshold behavior and added a second condition - in order for a Glyph to be chosen, it also
            was required to have some effects out of a user-chosen set. It was less flexible than Effect
            Score, but the intent was to make it more intuitive to use while still being powerful enough
            to not require Effect Score outside of a very small set of situations.

            <h3>External Factors</h3>
            Development in general slowed down a lot at this point, largely due to things going on in
            everyone&apos;s lives outside of the game. Hevi was working on his Bachelor&apos;s Thesis
            and an academic paper, a few of us were prioritizing spending time with close family members
            who were having medical issues, and everyone else was generally struggling with motivation
            due to sickness and the weather. Lulls in conversation and even entire days with less than
            10 messages happened a lot more often.
            <br />
            <br />
            We were at a relative standstill for a few months until Dan returned to the server. By the
            time that happened, Garnet and Razen had largely left the dev team - not due to anything
            that happened amongst the team, but because their priorities had shifted towards
            work and caring for ill family. Obviously we still had numerous playtesters, but that only
            left Hevi, Dan, and me as the three remaining coders on the team moving forward.
          </div>
          <div className="c-col-narrow--borderless">
            <CaptionedFigure
              imgPath={effect}
              caption={`A prototype version of Specified Effect mode, showing the older Glyph Filter
                interface and my relative lack of experience with CSS`}
            />
          </div>
        </div>

        <h3>Grinding Past</h3>
        Most parts of the game have a fallback mechanic of some sorts which allows you to grind something
        else in order to make an otherwise difficult challenge much easier. With the rework of V
        drastically increasing the difficulty of all the goals, suddenly it was very unforgiving if
        you didn&apos;t have the correct set of Glyphs equipped. The main reason we wanted to avoid
        this wasn&apos;t necessarily about avoiding difficulty, but rather to avoid people preferring
        to look up a guide instead of playing through the game on their own.
        <br />
        <br />
        <div className="c-entries-columns">
          <div className="c-col-narrow--borderless">
            <CaptionedFigure
              imgPath={reduction}
              caption={`Initially goal reduction didn't have a limit, leading to some odd behaviour. Now
                it can't go below the easiest tier's goal.`}
            />
          </div>
          <div className="c-col-wide">
            Our fix was to make it so that the player could reduce goals for V-Achievements by spending
            some other resource that is very easy to grind. We first tried relic shards, somewhat because
            we felt weird about the fact that we introduced a new resource and then proceeded to not use
            it much in the rest of the game.
            <br />
            <br />
            After some testing, we found that it was the opposite of what we wanted - instead of something
            that scales upward with progress, we wanted something that scales <i>badly</i> and largely remains
            a linear function of time spent. We changed the goal reduction to use perk points instead,
            due to the fact that reality time doesn&apos;t get much faster at that point of the game and
            performing fast realities doesn&apos;t require a specialized setup.
          </div>
        </div>

        <h3>Reality Glyphs</h3>
        <div className="c-entries-columns">
          <div className="c-col-wide">
            The old mechanics of Reality Glyphs, which let you choose any combination
            of 4/20 &quot;basic&quot; Glyph effects to place on a single Glyph, caused options to massively
            expand at that point in a way which was hard to manage. If there was a particular set of 4
            effects (out of nearly 5 thousand possibilities) that was way stronger than all alternatives,
            not only would we need to find it ourselves and playtest its effects, we&apos;d also need to
            nudge or otherwise communicate to the casual player in-game that they would need to use that set.
            <br />
            <br />
            We decided to change Reality Glyphs to have 4 entirely new and unique effects. These
            wouldn&apos;t end up being the final effects we went with by the time the game released,
            but they were the following:
            <ul>
              <li>
                Increase the level of other equipped Glyphs by a flat amount
              </li>
              <li>
                Increase galaxy strength by a percentage
              </li>
              <li>
                Increase Dimension Boost count by a percentage
              </li>
              <li>
                Copy the two adjacent Glyphs at a small percentage of their original level (entirely
                inspired by the very old &quot;Glyph of Duplicity&quot; concept mentioned
                in <Link to="/ADdevlog/2">one of the first entries</Link>)
              </li>
            </ul>
          </div>
          <div className="c-col-narrow--borderless">
            <CaptionedFigure
              imgPath={oldReality}
              caption={"This version of Reality Glyphs"}
            />
          </div>
        </div>

        <h3>Continuing Onward</h3>
        While Garnet had (for practical purposes) left the dev team, he still had the beginnings of
        Celestial Navigation sitting on an unmerged branch. After fixing a few bugs, we merged that
        into the main branch and Hevi worked on adding some elements for V.
        <div className="c-centered-img">
          <div className="o-small-center-img">
            <CaptionedFigure
              imgPath={navV}
              caption={"An initial idea for V's unlock condition"}
            />
          </div>
        </div>
        Hevi was trying to push for longer single-reality runs in Lai&apos;tela, since up to this
        point the general approach was to repeat short realities over and over in order to gain
        more of every reward resource. After having a lengthy discussion with Dan, we realized
        that because of game speed multipliers affecting everything, we&apos;d need to move
        the &quot;long run era&quot; into Ra instead of putting it off for Lai&apos;tela.
        <br />
        <br />
        There was just no other way to get this to work mathematically that didn&apos;t involve
        using real time or something otherwise unaffected by game speed; waiting 5 times as long
        was equivalent to x5 game speed, and Ra at the time spanned <i>40 orders of magnitude</i> of game
        speed. This was the start of brainstorming for the... <i>third</i> version of Ra - a topic for next
        week&apos;s entry.
      </div>
    </>
  )
}

export default Slower;
