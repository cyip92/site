import triad from "../../assets/retrospective/15/triad_sketch.png";
import glyphTest from "../../assets/retrospective/15/glyph_tester.png";
import infGlyph from "../../assets/retrospective/15/inf_glyph.png";
import { CaptionedFigure } from "./CommonElements";

export const VRework = () => {
  return (
    <>
      <div>
        <h3>&quot;Original&quot; Ideas</h3>
        Amongst all the other things we were doing, every week we had a very brief 10-15 minute conversation
        on the topic of the next minor content reveal to send in the <b>#development</b> Discord channel. This time
        things were a bit... contentious though, as the NG+3 developers had just recently announced a feature
        they were implementing called &quot;Bosonic Glyphs.&quot;
        <br />
        <br />
        This was a very overt action which practically confirmed that testers who were worried about revealing
        too much were justified. Even to community members who weren&apos;t part of the testing team, there
        was almost no way this wasn&apos;t a direct attempt to one-up the Reality Update. It took what minimal
        information was revealed about Glyphs, tried to reverse-engineer what they actually were, and then tried
        to release the same content within NG+3 before we released the official version.
        <br />
        <br />
        Shortly after the idea was announced, it was renamed to &quot;Bosonic Runes&quot; in a half-hearted
        attempt to make it less obvious, but the damage was already done. Soon after, in a way that confused
        almost everyone in the community, the head NG+3 dev announced a few more things they planned to do
        which caused nobody to take them seriously any more:
        <ul>
          <li>
            Their version of the game would have <i>multiple</i> new prestige reset mechanics, one of which was
            sloppily shoved in <i>between</i> already-existing planned ones specifically due to how Bosonic Runes
            were implemented.
          </li>
          <li>
            NG+3 was going to have infinitely many Celestials, which was entirely based on an incorrect
            understanding of what a single Celestial&apos;s content was.
          </li>
          <li>
            Celestials would have a dynamic difficulty, as if a Celestial&apos;s mechanics could be entirely
            tuned up and down based on a single number.
          </li>
        </ul>
        It may seem like I&apos;m only saying this to have a cheap laugh at some older &quot;drama,&quot; but
        this whole thing did have a couple effects which carried forward - the testing team now more or less
        unanimously agreed that we couldn&apos;t really reveal anything of substance from the Reality update
        any more, and as a result the weekly <b>#development</b> messages mostly stopped for a while.

        <h3>Extending Content</h3>
        V wasn&apos;t included in the separated portion of the first wave&apos;s testing because we didn&apos;t expect
        it to be properly balanced. However, we did (naively) assume that everything up to and including Nameless was
        complete and didn&apos;t need any changes. It was at this point we properly revisited it, and there were
        two main issues with the first version we made:
        <ul>
          <li>
            It was <i>still</i> too easy and a lot of the targets were relatively uninteresting to reach; the
            goals were so low that you could complete all of V by entering its reality 3-4 times without any
            real changes.
          </li>
          <li>
            Due to the structure of the rewards (1 &quot;locked study&quot; per 3 V-Achievements, no other
            upgrades), the boosts from V were very front-loaded and the tail end of V was just going through
            the motions in order to move on to Ra.
          </li>
        </ul>
        V&apos;s capstone in Ra was also still uncertain, although with the new testers moving onward, we had
        a few new perspectives to work with. Since this was being brainstormed concurrently with the V
        rebalance and we were having trouble actually deciding on an idea, we ended up making it an extension
        of all of V&apos;s original mechanics. Three separate ideas converged together into what ended up being
        V&apos;s capstone mechanic, colloquially named &quot;Hard V&quot;:
        <ul>
          <li>
            V would unlock a set of new, even more difficult goals to reach within its reality after reaching
            V level 25.
          </li>
          <li>
            In order to further increase the difficulty, you would unlock the ability to create &quot;Cursed
            Glyphs&quot; which have strictly bad effects but are nevertheless required to be equipped.
          </li>
          <li>
            Since V&apos;s original reward was related to Time Studies, we added a set of new Time Studies
            unlocked with Hard V.
          </li>
        </ul>
        These new studies fit the theme of &quot;forgotten upgrades&quot; because they were placed near the
        bottom of the tree around a lot of otherwise weak or useless existing ones. They would eventually
        become the Triad Studies, which required all three studies of each group to be purchased first.
        <br />
        <br />
        <div className="c-entries-columns">
          <div className="c-col-wide">
            <CaptionedFigure
              imgPath={triad}
              caption={"A very old mock-up of what Triads would be"}
            />
          </div>
          <div className="c-col-narrow--borderless">
            To smooth out the experience of the main part of V, we modified the &quot;locked studies&quot; to
            cost different numbers of V-Achievements and added a set of upgrades which you gained purely from
            having a certain number of V-Achievements. This went a long way towards making progression within
            V more &quot;granular&quot; - there was meaningful progression beyond simply getting a massive boost
            from the extra Replicanti Galaxy Time Studies on the Active/Passive/Idle split.
          </div>
        </div>

        <h3>Glyph Testing</h3>
        In the process of the second rebalance of V, Garnet made a very heavy-duty Glyph-testing function
        which basically brute-forced every reasonable Glyph combination and then returned a printout of some
        parts of the game state. This was a pretty crucial tool for the actual numerical changes he made
        during the V rebalance.
        <br />
        <br />
        <div className="c-entries-columns">
          <div className="c-col-narrow--borderless">
              Pichu mentioned that this seemed basically like the &quot;Celestial Judgement&quot; idea he wanted
            which would simulate a Glyph set for you, but then Garnet mentioned that it was a lot more limited,
            very slow, and couldn&apos;t work as a general-purpose function:
            <div className="o-quote-box">
              so the thing this does is reload a save, put some glyphs on, and run whatever automator script
              is selected, then see how far it gets after 5 seconds. For celestial judgement, you have a more
              complex thing to run besides &quot;wait 5 seconds&quot;
            </div> 
          </div>
          <div className="c-col-wide">
            <CaptionedFigure
              imgPath={glyphTest}
              caption={"An example print-out of the Glyph tester"}
            />
          </div>
        </div>
        <br />
        Garnet ended up using his Glyph tester fairly regularly to test out what balancing looked like in
        the mid-Celestial part of the game, although he&apos;d end up being the only one doing so since
        nobody else could get it to consistently work. We ended up finding out a myriad of interesting
        balancing quirks through his testing:
        <ul>
          <li>
            Dilation Glyphs were the strongest choice in Se7en Deadly Matters (Infinity Points within
            Eternity Challenge 7) by a long shot, due to the Dilation upgrade that gives IP based on
            Dilated Time.
          </li>
          <li>
            In most cases, the Effarig antimatter effect (the one which increases antimatter production
            from 10^x to 10^(x+n)) was basically <i>required</i> to get the best production.
          </li>
          <li>
            Through an Infinity Glyph sneaking into the top of a test run, we saw that the Infinity
            Dimension purchase caps were probably one of the few things keeping the game from exploding.
          </li>
        </ul>

        <h3>Now It&apos;s a Feature</h3>
        As we dove deeper into the history and inner workings of the game, many of us got annoyed about
        how Infinity Dimensions were balanced. In particular, the fact that the lower Dimensions had
        higher per-purchase multipliers and that they all got capped at a seemingly-arbitrary value of
        2 million purchases was a big sticking point because neither of those were explained in-game
        yet were extremely crucial for balancing for more or less the entirety of the game.
        <br />
        <br />
        <div className="c-entries-columns">
          <div className="c-col-narrow">
            <CaptionedFigure
              imgPath={infGlyph}
              caption={`Garnet discovering the sneaky Infinity Glyph. The numbers are Effarig Glyphs
                with different sets of effects.`}
            />
          </div>
          <div className="c-col-wide">
            This was when Jazz had the idea to take the sloppy and poorly-explained hardcap and bring it
            into the spotlight as a repeatable upgrade, and Garnet added to the idea by suggesting that
            the cost curve should be extremely steep in order to distinguish it from other repeatable
            upgrades in the game. The idea was that each time you purchased it and raised the cap, you
            would get a significant boost to your production - a boost on par with some of the other
            paradigm-shift upgrades earlier in the game.
            <br />
            <br />
            The concept for these widely-spaced upgrades got implemented into the game as Tesseracts,
            and you only get a handful of them at various points throughout the rest of the game. From
            the outset, this replaced the old Nameless reward since we generally felt the game post-Nameless
            had some serious pacing issues. For obvious reasons we would have to pace out all that content
            again, but at this point it was worth it since it seemed to be a more future-proof upgrade
            than what we already had.
          </div>
        </div>
        <br />

        <h3>A Fun Diversion</h3>
        We decided that it would be a fun event to gradually publicly reveal the names of all the
        basic Glyph types. This was jokingly presented as an &quot;unoriginality check&quot; for
        the NG+3 devs, to see if they would immediately latch on to and attempt to copy the
        official names, but it also ended up being a much-needed morale boost after we spent
        the past 2 weeks realizing that everything beyond Nameless was horrendously unbalanced.
        <br />
        <br />
        The Glyph names were revealed through a series of minor events in the <b>#development</b> channel
        run by Omsi, although many of the details have been lost to time since those messages
        were temporary and only obliquely mentioned within the tester channels. From my best guess,
        this is what happened during those two days:
        <ul>
          <li>
            <b>Power</b>, <b>Infinity</b>, and <b>Replication</b> were each revealed through three
            rounds of a collaborative game of hangman where people would vote for each letter through
            Discord reactions. In an amusing twist, the community was struggling very hard to
            guess &quot;POWER&quot; from &quot;_O_ER&quot; and some joking comments were made
            about the lack of coordination in the votes before Omsi gave a minor helping hand.
          </li>
          <li>
            <b>Time</b> was revealed through a game of Mastermind, likely because it was short
            and probably obvious enough that hangman would&apos;ve been immediately solved. The theme
            of the game and knowledge that it was only four letters long still led to it being guessed
            very quickly though.
          </li>
          <li>
            <b>Dilation</b> was done through a reverse-hangman kind of game, where the top three voted
            letters would be <i>removed</i> and there were a limited number of times the community was
            allowed to remove a &quot;correct&quot; letter.
          </li>
        </ul>
        Omsi then ended the whole event with a very brief video that had some distorted audio and an
        ending frame of an Effarig symbol with static, which was never actually revealed during
        the event but instead only during this one moment as an easter egg for anyone who scrutinized
        the video close enough.
        <br />
        <br />
        <br />
        <i>
          This should be the last rush-job of a devlog entry since I&apos;m moving in just a
          few days from now. Next week things will be more polished, I promise.
        </i>
      </div>
    </>
  )
}

export default VRework;
