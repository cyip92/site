import upgrades from "../../assets/retrospective/11/Ra_upgrade_grid.png";
import mults from "../../assets/retrospective/11/Ra_memory_mults.png";
import sketch from "../../assets/retrospective/11/alchemy_sketch.jpg";
import reality from "../../assets/retrospective/11/reality_glyph_conditions.png";
import automatorPR from "../../assets/retrospective/11/automator_size.png";
import blockmato from "../../assets/retrospective/11/blockmato_prototype.png";
import CaptionedFigure from "../common/CaptionedFigure";

export const Rawork = () => {
  return (
    <>
      <div>
        <h3>Fragmented Development</h3>
        Dan left the Antimatter Dimensions Discord server again in the beginning of the month, in order to
        reduce the amount of time he was committing to the game. I was mistaken on how long he would be
        away when I last mentioned it, which was because I mixed up that leaving event with this one - this
        time I&apos;m confident that he would be away from the server for an extended period of time.
        <br />
        <br />
        The circumstances were different than before; he left the server but didn&apos;t actually stop testing.
        Instead, he forked the public version of the pre-Reality game, made the repository private, and then
        specifically gave access to the other developers. The testing feedback he gave was purely in the form
        of issues on the issue tracker on this new repo, which we checked from time to time.
        
        <h3>Ra, 2nd Version</h3>
        I took it upon myself to make Ra&apos;s content more interesting than the first version, which
        was basically a progress bar whose fill rate was almost entirely dependent upon how quickly you
        can complete a Reality over and over. It was strictly worse to spend longer than a couple seconds
        per Reality, and almost nothing noticeably sped up progress.
        <br />
        <br />
        My idea for the 2nd version of Ra was that instead of Teresa being the only Celestial you level up,
        you now have all four of the previous Celestials. Each previous Celestial would have their own
        upgrades, vaguely matching their original themes, and you would need to fill out all of them to
        unlock the next Celestial. To everyone&apos;s surprise, the game was actually staying in control
        now, so we had lots of room to grow with all these upgrades.
        <br />
        <br />
        There were a few things we all agreed on for the overall design:
        <ul>
          <li>
            Ra was going to be a massive improvement to automation and grind reduction; people were getting
            tired of repeatedly grinding Effarig Glyphs for all the right effects and a high enough rarity.
          </li>
          <li>
            The new upgrades were a dumping ground for a lot of unimplemented suggestions we had amassed;
            many of them were good but simply didn&apos;t have an appropriate place in progression until now.
          </li>
          <li>
            We wanted each Celestial within Ra to have some kind of a paradigm shift as their final upgrade.
          </li>
          <li>
            Glyph sets you use for various purposes should end up drastically changing, as various
            mechanics became (relatively) weaker and stronger through the new upgrades.
          </li>
        </ul>
        <img src={upgrades} className="c-centered-img" />
        <div className="c-entries-columns">
          <div className="c-col-wide">
            It was at this point that I realized that while I could code in Javascript pretty confidently,
            I had no idea how to do anything beyond basic HTML without any CSS. This was pretty evident
            from the fact that the initial interface for Ra was very large, copy-pasted from the old visual
            elements, and misaligned. Needless to say, it was time for me to start learning that properly too.
            <br />
            <br />
            Another issue with the first version of Ra was that it was devoid of any player choice, which
            is something I aimed to fix through its Reality. It was an easy Reality to complete, and reward
            was originally a multiplier to Teresa memories based loosely on how well you did. I modified it
            so that it would give you multipliers to all four types of memories, but all the multipliers
            scaled on different things which were impossible to maximize simultaneously. The Reality now
            acted as a switch, which you would primarily enter in order to change which Celestial&apos;s
            memories you wanted to focus on.
          </div>
          <div className="c-col-narrow">
            <CaptionedFigure
              imgPath={mults}
              caption={`The "other resources" tooltip with the different multipliers`}
            />
          </div>
        </div>

        <h3>Glyph Alchemy</h3>      
        Glyph Alchemy is the “capstone mechanic” for Ra-Effarig. It was originally suggested
        probably 4-5 months beforehand and then mentioned again intermittently every couple weeks, so
        we saw this as a good opportunity to implement this long-running idea. Alchemy was originally
        Garnet&apos;s idea, and I implemented it with mechanics heavily inspired by&nbsp;
        <a href="https://nagshell.github.io/elemental-inception-incremental/Historian/Historian.html">
          Stage Three of The First Alkahistorian
        </a>. Below is an excerpt of the original idea, with some fluff trimmed out:
        <div className="o-quote-box">
          Sacrificing in &quot;alchemy mode&quot; causes a sacrificed glyph to be turned into a new
          resource
          <br />
          Alchemy-sacrificed glyphs cannot bring the total resource value above the
          glyph&apos;s level and only itself adds 1% of its level to the total.  Each resource,
          including combined ones, gives some relatively minor boost based on its current total
          <br />
          Alchemy resources can be combined in a reaction of sorts that uses up reactants to generate
          products, and this is how compound resources are generated.  For the sake of balance, a
          product can only be produced if all reactants have higher current totals
          <br />
          The whole alchemy system has a <span className="o-sic" /> instability rating which is simply
          compound / all which causes all compound aspects to decay based on how much total compound
          resources you have
          <br />
          this means that getting a much higher-tier resource would require at least some amount of
          thought. Perhaps the highest tier can be immune to decay as well so that alchemy isn&apos;t
          just constantly fighting decay.
        </div>
        <i>
          The full text for this, as well as a few other ideas and visual prototypes, can be seen on&nbsp;
          <a href="https://github.com/IvarK/AntimatterDimensionsSourceCode/issues/590">
            the Github issue for Glyph Alchemy
          </a>.
        </i>
        <br />
        <br />
        We hoped to design Alchemy in a way that required the player to choose which reactions
        to run at once instead of just turning everything on and forgetting about it, and the
        (not actually implemented) decay mechanic was one idea we put forward to enforce that.
        Unfortunately, with how Alchemy fit in the greater context of the game and a general
        aversion to decaying mechanics on the testing team, we were never able to accomplish that.
        <br />
        <br />
        <div className="c-entries-columns">
          <div className="c-col-narrow--borderless">
            <CaptionedFigure
              imgPath={sketch}
            />
          </div>
          <div className="c-col-wide">
            Balancing all the reaction coefficients was a bit tricky, so in order to do so I went with
            three constraints:&nbsp;
            <b>
              &quot;all T2 require 1.5 T1 total, reality takes equal amounts of all T1, and all T4
              contribute equally to reality when the resource cap is accounted for&quot;
            </b>.
            Then I wrote some code in Mathematica which let me adjust all the weights and see all of these
            values update immediately, and manually changed all of the weights until it looked good enough.
            <br />
            <br />
            The interface for Glyph Alchemy was inspired by the fact that real-world Alchemy is filled with
            symbols which would be unrecognizable by modern standards, combined with Glyph theming being
            entirely Greek letters. I made a few sketches of an interface on paper and then got tons of help
            from Razen on getting that into the game. He then cleaned up my code a fair bit, which led to the&nbsp;
            <a href ="https://github.com/IvarK/AntimatterDimensionsSourceCode/pull/611">
              Pull Request that added Glyph Alchemy to the game
            </a>
            &nbsp;very much being a joint effort between the two of us.
          </div>
        </div>
        <br />
        The final mechanic of the Glyph Alchemy system was that the central resource would allow you to
        create a new Glyph type - Reality Glyphs. Initially, Reality Glyphs were simply a hybrid Glyph
        type which let you pick any set of effects from the 5 basic (non-Effarig) types. How
        many effects you could choose was based on four different conditions using resources from
        different parts of the game.
        <div className="c-centered-img">
          <img src={reality} className="o-small-center-img" />
        </div>

        <h3>New Automator</h3>
        <div className="c-entries-columns">
          <div className="c-col-wide">
            Garnet started working with Razen on the Automator lexer and parser, which together formed the
            backend code that turns all the text you type into something that the game can run as a sequence
            of commands. Through this month there was a lot of back and forth between Garnet and the team
            about what general structure was the most useful or intuitive to use, and as a result a lot of
            commands were renamed or had their format otherwise modified.
            <br />
            <br />
            Like some other things he did, Garnet wasn&apos;t particularly forward on giving progress
            updates on his Automator rework in the testing channel as it was being worked on. When his branch
            was finally ready for review, we only saw the final result:&nbsp;
            <a href="https://github.com/IvarK/AntimatterDimensionsSourceCode/pull/616">
              a very hefty Pull Request
            </a>
            &nbsp;that had a somewhat inflated line count change (due to a new code library) but nevertheless
            still had a few thousand lines of actual additions within it.
            <br />
            <br />
            We had multiple discussions of holding the player&apos;s hand with a basic Automator tutorial,
            so that people unfamiliar with coding could still use it without an external reference.
            Unfortunately that never went anywhere, mostly because all of the active devs were still too
            tied up in all the other things they were working on with the game.
            <br />
            <br />
            Hevi presented the idea of a drag-and-drop &quot;easy mode&quot; (as he called) version of the Automator,
            which would turn into what we now know as the block editor mode. At this point, he was fairly intermittent
            in his appearances within the testing channel due to some craziness going on with his life. However there
            was one day in particular where Hevi was around, got into a groove, and wrote the majority of the block
            editor&apos;s code all at once.
            <br />
            <br />
            He and Garnet basically took over the testing channel with Automator discussion that day, and
            by the end there were nearly a thousand messages between the two of them. From basically nothing,
            there was now a functional block editor for the Automator:
          </div>
          <div className="c-col-narrow">
            <CaptionedFigure
              imgPath={automatorPR}
              caption={`Some of the team's reaction to Garnet's Automator rework`}
            />
          </div>
        </div>
        <div className="c-centered-img">
          <img src={blockmato} className="o-small-center-img" />
        </div>
        <br />
        <i>
          A fun side note: Garnet was the one to coin the word &quot;au<b>tomato</b>&quot; and it became a joke
          amongst the testing team (and eventually the game community) to refer to the Automator as &quot;the
          tomato&quot; or similar phrases.
        </i>

        <h3>Minor Reveals</h3>
        Partway through this month, Omsi got permission from Hevi to post a minor update to the official&nbsp;
        <b>#development</b> channel on the Discord server about improved formatting in the game&apos;s news ticker.
        Many of us team we pushed for this to continue to happen weekly in order to showcase the general
        improvements and Quality-of-Life features that we were adding in the Reality Update, which we actually did
        for some time. No actual new content would be revealed for quite a while though, as there were still concerns
        about spoiling novel content and/or having it stolen.
        <br />
        <br />
        Glyph Alchemy was a focus of this entry - in part due to the fact that I&apos;m pretty proud of how
        it turned out overall, even if we didn&apos;t quite get the full design we wanted out of it. Ra v2
        wasn&apos;t actually finished yet though, since this was only one of the four planned &quot;capstone
        mechanics&quot; for it. Next entry, we&apos;ll be getting into how we spent a similar amount of time on
        the capstone mechanic for Nameless - a mechanic which was unfortunately entirely scrapped. In fact, it
        was so thoroughly removed that almost no hints of its mechanics made it into the final released version
        of the Reality Update, not even in spirit or as inspiration for something else that <i>did</i>.
      </div>
    </>
  )
}

export default Rawork;
