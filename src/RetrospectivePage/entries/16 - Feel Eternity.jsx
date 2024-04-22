import darknessGlyph from "../../assets/retrospective/16/glyph_of_darkness.png";
import firstNav from "../../assets/retrospective/16/first_nav.png";
import CaptionedFigure from "../common/CaptionedFigure";

export const FeelEternity = () => {
  return (
    <>
      <div>
        <h3>Massive Changes</h3>
        Our approach towards fixing issues in earlier content changed drastically, in part due to
        Garnet&apos;s Glyph tester, but probably moreso because all of the first wave testers
        completed Nameless during this month. That meant that we had a ton of fresh people to look
        at the new and &quot;experimental&quot; later Celestial content who weren&apos;t burnt
        out or otherwise uninterested in continuing to test the game due to everything being
        unbalanced or broken.
        <br />
        <br />
        The new perspectives and ideas the first wave brought generally led to the team being a
        lot more willing to make sweeping changes to the game in order to fix some long-standing
        problems, and this also extended somewhat into content much further in the past that we
        might not have changed otherwise.

        <h3>A Full-on Rebalance</h3>
        Dimension power effects were still multiplicative, but many of them had very sloppy
        softcaps which only applied when stacking multiple together, and they all applied
        inconsistently due to the fact that different types of Dimensions were stronger
        or weaker with their effects on the rest of the game. This led to us finally doing
        a <a href="https://github.com/IvarK/AntimatterDimensionsSourceCode/pull/984">more thorough rework</a>.
        <br />
        <br />
        This was <i>actually</i> when we committed to replacing the tickspeed effect with an eternity
        count multiplier - with all the other rebalancing we had on the horizon, it seemed
        relatively natural to do it at this point. We also looked at the Replicanti Glyph level
        factor and considered changing that too, but it seemed too crucial to early balancing
        (which was something that none of us wanted to touch).
        <br />
        <br />
        Garnet used the Glyph tester on a save at the end of the current content in order to see
        how Reality Machine count was reduced by the rebalance, and found that we had reduced endgame
        Reality Machines from 1e1900 to 1e1600, which was 1e7900 to 1e4000 in terms of &quot;raw,
        un-softcapped RM.&quot; It was a fairly significant reduction which we hoped was going to be
        enough until the end of the final Celestial. He also found out that the game had so
        many mechanics now and that there were so many potentially viable sets that the tester was
        taking nearly an hour to run to completion now - it had unfortunately run through
        most of its usefulness at this point.

        <h3>New Cracks</h3>
        As the rest of the testers reached and completed Nameless&apos;s Reality, the main
        takeaway we got from their experiences was that we needed to clarify the lore for
        Nameless - at the time their quotes were very disorganized, which resulted as some of
        the hints being misinterpreted as taunts instead.
        <br />
        <br />
        After replacing the tickspeed effect, Garnet realized that Nameless had now become
        impossible to complete and set about changing some mechanics to fix that. This is
        eventually how the &quot;Feel Eternity&quot; mechanic was implemented - since Nameless
        was so reliant on the effect we removed, it was instead made heavily reliant on the
        effect which now replaced it in order to minimize the amount of changing we needed to
        do overall.
        <br />
        <br />
        We also realized that the &quot;Secret Time Study&quot; had now become a requirement,
        as opposed to a nice bonus that made things easier, and considered our options to make
        it more obvious. The decision we went with was to make it have a subtle visual flicker.
        It would still remain in the same spot as the Time Study for the secret achievement,
        which was something that some playtesters found odd and some devs found annoying
        to maintain in the code.

        <h3>Another Lai&apos;tela Rework?</h3>
        The general reception to this version of Lai&apos;tela was that it felt too detached
        from the main game both in mechanics and theme. Thematically, the name &quot;Higgs
        Boson&quot; felt like too much of a concrete entity rather than an abstract resource,
        which contrasted somewhat with the rest of the game&apos;s resources. Mechanically,
        people found lots of issues as they playtested its content:
        <div className="c-entries-columns">
          <div className="c-col-wide">
            <ul>
              <li>
                It was weird that it immediately introduced three new resources nearly simultaneously,
                yet none of them actually affected the game until you progressed enough that you
                could buy upgrades with them.
              </li>
              <li>
                Nothing you could do in the rest of the game could speed it up; it was an entirely
                external system that just happened to boost earlier parts of the game.
              </li>
              <li>
                It was severely lacking in automation; the &quot;optimal&quot; Annihilation reset
                duration was getting shorter and shorter and, since there was no &quot;Max
                All&quot; button on that page or any built-in automation, getting the same amount
                of additional progress would require more and more clicks over the same period of time.
              </li>
              <li>
                The long-term resource structure was weird - Dark Energy was only useful for the
                one-time upgrades and then was forever useless.
              </li>
              <li>
                All the upgrades (chance, interval, multiplier) did largely the same thing, so it
                felt odd that we had three different categories at all.
              </li>
            </ul>
            We spent a lot of time tossing ideas around for a rework which would fix all these problems,
            but every conversation was mildly confusing since most people willing to discuss suggestions
            had their own ideas for an entire system to implement as a replacement and a few people were
            somewhat unwilling to compromise. At one point there were some suggestions for yet another
            new Glyph type which had new effects and the tentative name of &quot;Glyph of
            Darkness,&quot; but like most things during these conversations it never actually made
            it into the game.
          </div>
          <div className="c-col-narrow--borderless">
            <CaptionedFigure
              imgPath={darknessGlyph}
              caption={`Tentative effects of a new Glyph type; at this point of development, Glyph
                levels were capped at 10,000`}
            />
          </div>
        </div>
        <br />
        It would be a bit more time before we actually all agreed upon some kind of a new system to
        replace what we already had, but it was now something that we had on our minds.

        <h3>The Earliest Bits</h3>
        We had issues with the Dimension Purchase (aka. &quot;Buy 10&quot;) multiplier requiring
        certain game events to occur in order to properly update it (eg. performing an Infinity or
        Eternity reset), and this was making it harder to figure out the balancing of the respective
        Power Glyph and Effarig Glyph effects.
        <br />
        <br />
        The most fool-proof way to fix this was to modify the code to make the Purchase multiplier
        dynamically calculated every tick instead of relying on certain occasional events. This
        ended up being a crucial setup step to making the later mechanic &quot;Continuum&quot; even
        possible, because the form of the boost Continuum gives is a continually scaling boost to
        this multiplier which could be updated potentially every game tick.
        <br />
        <br />
        This presented a slight problem because the older version of Normal Challenge 7 was
        incompatible with this system - it used to be a Challenge that made the purchase multiplier
        randomized per purchase. A very brief discussion led us to all believe that it wasn&apos;t
        a good challenge anyway, and so Omsi asked in the public <b>#suggestions</b> Discord channel for
        a potential replacement idea so that we could go ahead with the code refactor. It ended up being replaced
        with a Challenge where the Purchase multiplier itself instead started at 1x and only increased
        as you gained Dimensional Boosts.
        <br />
        <br />
        At this time Garnet also had an idea for a &quot;crazy C7&quot; replacement which
        sounded novel. Unfortunately this was another mechanic that a dev thought would be
        cool, got implemented on a temporary branch, and then never got tested by anyone else:
        <div className="o-quote-box">
          quickly tried out a &quot;Each dimension converts the dimension two above it (or antimatter)
          to the dimension above it, at 0.1% efficiency&quot;
          <br />
          it&apos;s kind of a mind fuck
          <br />
          I&apos;m watching the first dimension cycle between 0 and 1000, and the second dimension
          ticking up one at a time as a result
          <br />
          and the cycling gets faster and faster
          <br />
          (once you make everything round to integer amounts of dimension, it&apos;s kind of
          incredibly hard...)
        </div>

        <h3>Other Changes</h3>
        With the new Achievement system the first wave tested, where you could finally manually
        complete the Achievement requirements again to get them early, everyone found that the
        older Achievement perks were now super weak and in need of a buff. Additionally, it became
        a lot more apparent which later Achievements were simply time sinks, which led us to reducing
        the requirements for  Achievement 131 (2 billion banked infinities, down from 5 billion) and
        Achievement 134 (1e18,000 Replicanti, down from 1e20,000).
        <br />
        <br />
        <div className="c-entries-columns">
          <div className="c-col-narrow--borderless">
            <CaptionedFigure
              imgPath={firstNav}
              caption={"First in-game image of Celestial Navigation"}
            />
          </div>
          <div className="c-col-wide">
            People on the team started worrying about the fact that more and more players were getting extremely
            far past all the new nerfs we added that started at 1e4000 EP. There were a few ideas,
            such as reducing just the first Reality and giving a &quot;Trophy Glyph&quot; for people who specifically
            grinded very very far. This didn&apos;t go anywhere immediately, although it did likely plant
            the idea for the &quot;Companion Glyph&quot; and some first-Reality reductions which we would
            implement later on.
          </div>
        </div>
        <br />
        Garnet also started working on getting Celestial Navigation content into the game itself too.
        There was no background image yet, but a lot of the initial paths were laid out and never
        really changed afterward. This was partially because the initial formatting was a bit obtuse
        and hard to understand, and partially because nobody really understood how the code for the
        spirals were supposed to work.
        <br />
        <br />
        <i>
          The big event for next week&apos;s entry is that Dan joins development again... sort of.
        </i>
      </div>
    </>
  )
}

export default FeelEternity;
