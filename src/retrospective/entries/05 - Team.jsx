import effects from "../../assets/retrospective/5/effect_order.png";
import protGlyphs from "../../assets/retrospective/5/protected_glyphs.png";
import disper from "../../assets/retrospective/5/disper_lore.png";
import { CaptionedFigure } from "./CommonElements";

export const BiggerTeam = () => {
  return (
    <>
      <div>
        <h3>The Second Celestial</h3>
        <i>Again, not referring to the first two Celestials by name because their names were swapped.</i>
        <br />
        <br />
        This Celestial was a bit more disjointed in development compared to the previous one. While Hevi implemented
        the entirety of the first one on his own, this one was a lot more of a collaborative effort due to the
        mechanics being more involved. Most of the original ideas stuck through until release:
        <div className="c-entries-columns">
          <div className="c-col-wide">
            <ul>
              <li>Theming is Glyph-based with a new celestial-specific resource</li>
              <li>You can modify the weighted sum for Glyph level</li>
              <li>There would be an upgrade allowing you to automatically filter your Glyphs</li>
              <li>The Reality would be based on layers and you&apos;d need to complete it 3 times</li>
            </ul>
            Having recently reached the end of the first Celestial, Garnet took it upon himself to start filling in
            these unimplemented ideas that Hevi put forth. He implemented glyph factor weight adjustment, taking
            styling inspiration from the growth sliders in <a href="https://structure.zefiris.su/">Structure Idle</a>.
            <br />
            <br />
            He also wrote much of the Glyph filter code, going through a few iterations of simpler filter logic before
            ultimately settling upon a pair of simple settings (effect count, rarity threshold) and one very extensive
            setting (effect score, known as &quot;advanced mode&quot; at the time). Initially these were split into two
            separate upgrades for different relic shard costs, and together they were the only modes which existed.
            <br />
            <br />
            Glyph presets didn&apos;t exist yet - those would come much later. Similarly, relic shards were
            a pure currency used only for the unlocks; the Glyph rarity boost also didn&apos;t exist either.
          </div>
          <div className="c-col-narrow">
            <CaptionedFigure
              imgPath={effects}
              caption={"An earlier filter version just kept the glyph with the highest effect on a list you specified"}
            />
          </div>
        </div>
        <br />
        <br />
        I made the first version of this Celestial&apos;s Reality and it mostly stayed unchanged until release except
        for some minor rebalancing. I was never really satisfied with how this Reality turned out and hoped I would
        eventually have the time to return to and revamp it before release. It felt too simplistic, which is ironic
        considering what the in-game lore says.
        <br />
        <br />
        My main idea was that I wanted forgettable and super-weak Glyph effects to actually matter again. Many of the
        nerfs and rewards were intended to make you rely on relatively useless effects like the AD multiplier, IP
        multiplier, infinity count multiplier, or Time Theorem generation.
        <br />
        <br />
        As Hevi started working on the next Celestial, he suggested that completing the Eternity layer should unlock
        it. The Reality layer was technically possible right now, but nobody knew the back-door trick to do it without
        stored time (which would require the next Celestial). It would be some time until we came back to this.

        <h3>The Community</h3>
        At this point I was very heavily involved in the server community, which was significantly smaller since it was
        before the Android release. However, there were some (arguably) rampant spammers and immaturity which
        was causing me to feel more distant from the server as time went on. Apparently a lot of the other active people
        felt similarly and were distancing themselves from the server as well.
        <br />
        <br />
        I left the server on December 17th because of that, and in particular a somewhat strong disagreement with Earth
        was what &quot;broke the straw on the camel&apos;s back&quot; and made me actually do it. The disagreement was
        mostly due to how he was handling himself in terms of insisting on having guide pins on every channel. But we
        didn&apos;t ignore the problem - we properly discussed it with each other so we could move forward together.
        Quite frankly, the argument just happened in the wrong place at the wrong time. It was just a difference in
        mindset, one which we were both willing to adjust our behaviors and compromise on. We&apos;ve been close
        friends since then.
        <br />
        <br />
        I returned on December 19th and, while the details are spread across too many places to search, I was given
        the moderator role on the Discord server and would also try to improve the community for the better.
        <br />
        <br />
        Around this time Dan left the server as well, but for unrelated reasons - he was also part of the community,
        but he started to find it too distracting and draining on his free time. He came back after a month or so away
        and tried to tune back his community involvement, mostly staying in the test channel.
        <br />
        <br />
        On a lighter note, on Christmas Hevi publicly announced a teaser for the contents of the Reality Update,
        primarily that it would be a new reset layer which gives you a Glyph, Reality Machines, and a perk. He
        additionally mentioned the existence of the Automator and Black Hole, and nebulous plans for the Celestials.

        <h3>Team Development</h3>
        Hevi had a lot of other stuff going on for a bit, so Garnet and Razen ended up being the primary devs leading
        the coding work. Dan also started contributing this way as well, although it was more weighted towards
        sanity-checking Razen&apos;s refactors and Garnet&apos;s balance changes.
        <br />
        <br />
        It wasn&apos;t really brought up in the last entry, but something that&apos;s been happening more or less
        continuously &quot;in the background&quot; is that Razen was still tirelessly converting the whole game
        into something that uses Vue more properly. There were enough people working on the code at once now that
        we started to occasionally have merge conflicts, but they remained manageable.
        <br />
        <br />
        <div className="o-quote-box">
          Btw it&apos;s really great how all you&apos;re helping me so much, I&apos;ve said it like a million times
          already but I&apos;ll say it again
        </div>
        - Hevi
        <br />
        <br />
        Fun fact: After reading through this very hectic code-filled month, I&apos;m reasonably confident that most
        of the Antimatter Dimensions dev team (at least by now) didn&apos;t actually know Javascript before joining
        in on the code. I know I didn&apos;t, it seemed like Garnet and Razen didn&apos;t either, and I suspect that
        Dan was also the same. We basically all &quot;retrained&quot; from different languages.

        <h3>Earlier Changes</h3>
        The RM bar in the first Celestial retroactively got a &quot;leaking&quot; mechanic which would cause it to
        gradually empty itself over time while you were online, at a rate of a 2% drain per minute. The leak was
        stopped after unlocking the 2nd Celestial. We later ended up removing this mechanic before release.
        <br />
        <br />
        <div className="c-entries-columns">
          <div className="c-col-narrow">
            <CaptionedFigure
              imgPath={protGlyphs}
              caption={"A forgotten prototype of protected slot rendering"}
            />
          </div>
          <div className="c-col-wide">
            Garnet took it upon himself to largely redo the Glyph tab layout and generally fix a lot of odd lingering
            bugs related to Glyphs. He also made a mock-up of protected slots which unfortunately never made it into
            the game. It looked nice, but I suspect it was forgotten amongst all the other things since the protected
            slots weren&apos;t even implemented yet by the end of this entry.
            <br />
            <br />
            Dan&apos;s start on coding for the game originated from theorizing a good way to simulate the black holes
            for offline progress. Initially the they didn&apos;t work offline at all, and then they just applied the
            average speed boost for the offline duration. He and Garnet discussed the details a bunch and he eventually
            wrote some standalone code that split up offline ticks to give similar results to leaving the game open.
          </div>
        </div>

        <h3>Not Very Robust</h3>
        Dan and Garnet were seeing inconsistency with the game&apos;s behavior, having to do with intermittent huge
        boosts or production getting &quot;stuck&quot; until performing some prestige to reset a bunch of variables.
        Sometimes exporting and re-importing would result in wildly different behavior from just letting the game run.
        <br />
        <br />
        At this time there was a large push to simplify the player data as much as possible, since there were many
        redundant values being stored (eg. the cost scaling multiplier was stored, despite it being possible to
        calculate from upgrades and EC6 completions). The game before the Reality Update was very bad about this, and
        we spent a lot of time untangling that moving forward.
        <br />
        <br />
        Dan caught a potentially game-breaking bug with EC8 on one of Razen&apos;s refactors, which pointed out that
        <a href="https://github.com/IvarK/AntimatterDimensionsSourceCode/blob/master/src/core/tickspeed.js#L5-L16">
        &nbsp;galaxy strength stacks very weirdly</a> and can&apos;t be changed due to pre-reality balance.
        This is the main
        reason that there&apos;s no multiplier tab for galaxy strength - we went through and standardized everything
        to be in the order of flat, multiplier, power, but couldn&apos;t do that here. To my knowledge this is the
        only place where that order doesn&apos;t apply, and so we&apos;ve somewhat shamefully hidden that from view.
        <br />
        <br />
        Dan also saw some effects becoming problematically big in the future - he was good at noticing ahead of time
        when things wouldn&apos;t work asymptotically (ie. the scaling is fundamentally broken). In this case it was
        a few achievement rewards, but he also noticed that IP and EP multipliers were starting to contribute a very
        significant proportion of prestige currencies on their own. This eventually led to the achievement for
        completing a Reality without producing antimatter, and was probably part of the inspiration that led him to
        entirely abolish prestige currency multipliers in <a href="https://dan-simon.github.io/misc/fe000000/"> his
        own game</a>.

        <h3>Scrapped Mechanics</h3>
        Hevi had the idea of allowing you to restart the game with a very minor New Game Plus or New Game Minus
        style effect similar to the ending of&nbsp;
        <a href="https://www.decisionproblem.com/paperclips/index2.html">Universal Paperclips</a>. This ended up not
        actually being implemented yet since we were clearly still far away from a completed game, but ideas would
        start coming up in conversation somewhat regularly.
        <br />
        <br />
        Dan did a prototype 3rd Celestial named Disper, whose theme was inspired by an offhand comment Hevi made about
        having just returned from seeing <i>Into the Spider-Verse</i>. There is unfortunately next to no information
        about how Disper worked, since I don&apos;t think anyone at the time other than Dan was able to actually test
        it out. I was out of town to visit family for a couple weeks, and Garnet and Razen were too caught up in their
        own code to spare the time to test either. There were also no gameplay images posted of the content, and the
        code no longer exists on the repository since it was never actually merged into the main branch.
        <br />
        <br />
        My best guess on how it worked (from messages in the channel) is that it was centered around another very
        heavily-nerfed Reality, but there were numerous special upgrades only obtainable within. All of these upgrades
        were of the format where one resource would be boosted weakly based on the value of some other resource. By
        getting enough of those upgrades, you would be able to take and apply them <i>outside</i> of the Reality as
        well. This was what he ended up posting for how to enter his version of it:
        <div className="o-quote-box">
          It requires 1e9 relic shards to unlock right now. To reality in Disper, never uncap replicanti, and enter
          EC10 with autobuyers off to farm dilated time. The &quot;Create a connection between &lt;blank&gt; and
          &lt;blank&gt; expects the blanks to be filled in with glyph type names (so power, infinity, time,
          dilation, or replication).
        </div>
        <div className="c-centered-img">
          <img src={disper} className="o-small-center-img" />
        </div>
        Dan also wrote a small bit of lore for Disper, and this lore was likely part of the inspiration
        for the direction the 3rd Celestial eventually took. Next entry we&apos;ll go into that in more depth.
      </div>
    </>
  )
}

export default BiggerTeam;
