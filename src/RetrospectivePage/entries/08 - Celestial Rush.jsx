import cel4 from "../../assets/retrospective/8/prototype_V.png";
import cel5 from "../../assets/retrospective/8/prototype_Ra.png";
import automator from "../../assets/retrospective/8/automator.png";
import CaptionedFigure from "../common/CaptionedFigure";

const DevlogEntry = () => {
  return (
    <>
      <div>
        <h3>A Minor Revision</h3>
        Shortly after posting last week&apos;s entry, Kajfik sent me a message with a slight correction since I
        misremembered part of the story - the Android version wasn&apos;t originally written with the same code
        style as the Reality Update, and some parts of it ended up needing to be rewritten to suit it. Kaj was
        not actually given access to the Reality Update repository until some time later, although in the grand
        scheme of things he was still given access very early on during development of the Reality Update.
        <br />
        <br />
        (That section of last week&apos;s entry has been slightly edited accordingly.)
      
        <h3>The Fourth Celestial</h3>
        The next Celestial after Nameless was V, the Celestial of Achievements. Hevi wanted a paradigm shift here,
        starting with a more unique unlocking condition:
        <div className="o-quote-box">
          when you unlock the achievement celestial, it has additional things you need to do to unlock the rest of it,
          like &quot;get x realities, y eternities, z infinities, a antimatter, b dilated time...&quot;
        </div>
        He also specifically wanted this Celestial to be the point where you no longer had to choose between time
        studies - you would be able to buy all of them.
        <br />
        <br />
        The overall concept was for their Reality to be a generic nerfed effect which reduced numbers but otherwise
        didn&apos;t do anything massively punishing. Instead, the uniqueness of V&apos;s Reality would come from the
        fact that your goal is no longer simply &quot;Reach 1e4000 EP&quot; - rather, it would be a set of&nbsp;
        <i>other</i> goals you would need to complete under the nerf:
        <br />
        <div className="c-centered-img">
          <img src={cel4} className="o-small-center-img" />
        </div>
        As a thematic note - each V-Achievement&apos;s name is based on a particular movie, although a few are
        potentially vague or ambiguous. According to Hevi, these are what the official references are:
        <ul>
          <li>
            Glyph Knight - <a href="https://en.wikipedia.org/wiki/The_Dark_Knight_Rises">The Dark Knight Rises
            (2012)</a>
          </li>
          <li>
            Antistellar - <a href="https://en.wikipedia.org/wiki/Interstellar_(film)">Interstellar (2014)</a>
          </li>
          <li>
            Matterception - <a href="https://en.wikipedia.org/wiki/Inception">Inception (2010)</a>
          </li>
          <li>
            Se7en Deadly Matters - <a href="https://en.wikipedia.org/wiki/Seven_(1995_film)">Se7en (1995)</a>
          </li>
          <li>
            Eternal Sunshine - <a href="https://en.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind">Eternal
            Sunshine of the Spotless Mind (2004)</a>
          </li>
          <li>
            Young Boy - <a href="https://en.wikipedia.org/wiki/Oldboy_(2003_film)">Oldboy (2003)</a>
          </li>
        </ul>
        (Note: The old image shows &quot;Running Man&quot; which is likely based off
        of <a href="https://en.wikipedia.org/wiki/The_Running_Man_(1987_film)">1987 film</a>, which was renamed
        to &quot;<a href="https://en.wikipedia.org/wiki/Cool_Runnings">Cool Runnings</a>&quot; before eventually
        being replaced by Glyph Knight.)
        <br />
        <br />
        Upgrades for certain V-achievement counts weren&apos;t made yet - those would come later.

        <h3>The Fifth Celestial</h3>
        Shortly after implementing the content for V, Hevi immediately jumped into brainstorming ideas for Ra, the
        fifth Celestial whose title was The Celestial of the Forgotten. Its theme was going back to old upgrades
        you got a very long time ago and strengthening them significantly, making them relevant again.
        <br />
        <br />
        The core mechanic for Ra wasn&apos;t directly inspired by anything according to Hevi, but Omsi and I pointed
        out that it looked strikingly similar to Fluffy in Trimps. It&apos;s hard to tell if there was inspiration
        from any other sources since it&apos;s not a unique system. The initial implementation had the following:
        <div className="c-entries-columns">
          <div className="c-col-equal">
            <ul>
              <li>
                You get a companion from Teresa which gets experience per Reality, depending on Glyph level. The
                first level takes 50 exp and the requirement is multiplied by 1.4 each level
              </li>
              <li>
                Infinity upgrades can be charged every 3 levels, starting at level 2. They gain new formulas, most
                based on Teresa level. Charged upgrades can be changed at will
              </li>
              <li>
                Level 10: An exp multiplier which you could set to idle or active mode - idle gives 2x exp on
                automatic realities and active gives 4x exp for manual realities
              </li>
              <li>
                Level 25: Unlock the next Celestial
              </li>
              <li>
                Level 50: A multiplier to both Glyph level and RM based on Teresa level
              </li>
              <li>
                Ra&apos;s Reality would have galaxies and dimboosts disabled
              </li>
              <li>
                You would gain an exp multiplier to Teresa based on your highest EP gained on Teresa&apos;s run
              </li>
            </ul>
          </div>
          <div className="c-col-equal">
            <CaptionedFigure
              imgPath={cel5}
            />
          </div>
        </div>
        Some of the initial mechanics stayed all the way until release, but there were notable differences:
        <ul>
          <li>
            Teresa was the only Celestial which gained this leveling mechanic
          </li>
          <li>
            Levels scaled much higher, up to 100, with a very steep exponential curve
          </li>
          <li>
            Progress was mostly driven by active play, requiring frequent and short realities
          </li>
        </ul>
        This would end up being the first of many different iterations of Ra before we finally settled on an
        idea we&apos;d be comfortable sticking with. We&apos;re going to come back to this again and again;
        it&apos;s impossible to ignore, considering how much this ended up influencing development of the rest
        of the update.

        <h3>Automator Improvements</h3>
        <div className="c-entries-columns">
          <div className="c-col-narrow--borderless">
            <CaptionedFigure
              imgPath={automator}
            />
          </div>
          <div className="c-col-wide">
            Razen decided to start working on improving the Automator, first adding comments and labels
            which wouldn&apos;t contribute to the line count limit. He also started looking into finite automata
            to make a proper compiler which could give error feedback.
            <br />
            <br />
            Pichu started a conversation about the Automator being hard to use, and we found that most testers
            never touched it at all until close to 50 realities in. As a team, we came to the consensus that
            the Automator should be as inviting as possible and ideally not something you have to fight or
            struggle with.
            <br />
            <br />
            Our first steps, driven from this conversation, were to make commands unlock for free based on reality
            count, removing the line count limit, and generally making it more approachable. All of the other
            changes and improvements to the Automator which made it to release came very gradually.
            <br />
            <br />
            In addition to technical backend changes, Razen also got started on a substantial UI rework for the
            Automator as well.
          </div>
        </div>

        <h3>Time to Test?</h3>
        Perks got a few changes:
        <ul>
          <li>
            The 13-achievement chain was shortened down to 6 perks which each gave a few rows per perk
          </li>
          <li>
            We added a perk that gave RM equal to twice your reality count (this was removed later on)
          </li>
          <li>
            RNG mitigation was improved - a new perk guaranteed at least one Glyph choice would be uncommon
            rarity or better (we eventually removed the perk and made it the game&apos;s default behavior)
          </li>
        </ul>
        Dan realized that Eternity Challenge 10 was the primary barrier to completing Effarig Reality, and a
        few days later discovered the trick to completing it using stored time. Initially this felt unintentional
        and almost like an exploit, but the old lore ended up being accidentally suitable for it. We decided to
        fully lean into the idea and keep it - with the only change being to make the lore hint at it more strongly.
        Since Effarig Reality was now <i>properly</i> completable as opposed to requiring cheating, we now had an
        idea of where Effarig Glyphs fall progression-wise.
        <br />
        <br />
        We briefly pondered disabling automatic Eternity Challenge completion within Celestial realities, but
        then left it in as a backup for people who couldn&apos;t figure out the &quot;proper&quot; way to complete
        Effarig. However, auto-EC was still incredibly slow and took longer than a day to reach EC10.
        <br />
        <br />
        A couple of somewhat inactive testers returned and wanted to playtest again, but after some discussion we
        concluded that none of the recent content could be reasonably tested until we worked through all of
        the poor balancing we ignored:
        <ul>
          <li>
            Garnet was still in the middle of finalizing his set of current-endgame softcaps to prevent the
            game from running away
          </li>
          <li>
            Effarig Glyphs still immediately broke the game from being too powerful
          </li>
          <li>
            The 3rd Black Hole was entirely kept in check by an implemented but untested cost scaling increase
          </li>
          <li>
            Pretty much all of the post-Effarig content had not been tested at all due to being sequential
          </li>
        </ul>

        <h3>Reworking Content</h3>
        Hevi had expressed that he found the current state of Nameless to be &quot;fucking boring&quot; and wanted
        to make a substantial change to it. We had a lot of ideas for improving Nameless&apos;s game mechanics, some
        of which got scrapped and some of which ended up actually making it into the released game in some way:
        <ul>
          <li>
            <b>Charging Ramp Up</b>: storing time for longer would raise the actual amount of time stored to some
            small power, where the ramping time could be adjustable to either cap out quickly or be slower
            but cap at a higher strength
          </li>
          <li>
            <b>Automatic Discharge</b>: allow the black hole to discharge while storing, removing the need to
            micromanage charging for the rest of the game
          </li>
          <li>
            <b>Improved Offline Progress</b>: real time (not game time) could be stored and then used to simulate
            a fast Reality, giving you the same rewards as if you had repeatedly done that simulated reality for
            the entire duration
          </li>
        </ul>
        Garnet came up with a tentative concept for a re-worked Nameless Reality, which would end up being the core
        inspiration for every future version of it leading up to release. He presented his idea, which he called
        &quot;pretty half baked&quot; at the time:
        <ul>
          <li>
            The other Celestials bound up the Reality very tightly, adding lots of nerfs and extra caps.
            They left gaps; while building the prison, they broke a few things they did not notice or thought
            trivial. The goal is to find these weaknesses and exploit them.
          </li>
          <li>
            For example, the &quot;bonus based on slowest challenge time&quot; might have come uncapped. If
            the player goes and does them inside EC12, they can get a huge boost. Maybe some EC has an
            unlimited number of completions.
          </li>
          <li>
            This would require hints in the quotes, but it&apos;s doable. Stored time could be a currency
            to unlock hints, if the puzzles are tough, basically letting the player turn their time into information
          </li>
        </ul>
        The next entry will go into the actual rework of The Nameless Ones in much greater detail. Spoiler alert:
        We won&apos;t be done with Nameless for a while.
      </div>
    </>
  )
}

export default DevlogEntry;
