import redaction from "../../assets/retrospective/9/redaction.png";
import cel3 from "../../assets/retrospective/9/cel3_restrictions.png";
import inf from "../../assets/retrospective/9/break_inf_bug.png";
import codefactor from "../../assets/retrospective/9/codefactor.png";
import CaptionedFigure from "../common/CaptionedFigure";
import ConversationLine from "../common/ConversationLine";

const DevlogEntry = () => {
  return (
    <>
      <div>
        Much of the team (especially people who joined early) will happily say that sometimes it looked like
        everything was broken, nothing works, and nobody knows what they&apos;re doing when trying to fix
        it. This was somewhat true, but having week after week of summaries which say only that leads to
        very boring reading. This entry continues that trend a tad, but I&apos;m going to do my best to
        try to steer away from that moving forward.
        
        <h3>Testing Philosophy</h3>
        There were two fairly major changes in mindset amongst the team which started around now and carried
        forward in some way for the rest of the update - a mild internal spoiler policy and an increased
        willingness to change older content.
        <br />
        <br />
        <div className="c-entries-columns">
          <div className="c-col-narrow">
            <CaptionedFigure
              imgPath={redaction}
              caption={`The spoiler agreement led to some interesting-looking conversations. Deleted
                User is Dan's old account.`}
            />
          </div>
          <div className="c-col-wide">
            The spoiler policy was an informal agreement that was based on trust. Some content
            relied on the player figuring out a trick without the game explicitly telling them,
            and we didn&apos;t have a good way of gauging how well someone could do that on their
            own. As a result, some people hid information so that we could get &quot;as much
            data as possible&quot; from each individual experience. The first time this was
            relevant was determining how easily people could complete Eternity Challenge 10 in Effarig Reality.
            <br />
            <br />
            The willingness to change content came out of a desire to get unstuck - we got stalled pretty badly
            in development in the past few months due to the fact that nobody wanted to make any substantial
            changes. Hevi laid out a ton of ideas and mechanics in his implementation rush, but we all (Hevi
            included) agreed that some of these things were impossible to balance with everything else. Notably,
            this was when we decided that the 3rd Black Hole needed to be scrapped - we had just added increased
            costs to the first two, so unlocking a third would immediately undo that.
            <br />
            <br />
            Additionally, we also concluded that it was no longer feasible to preserve the balancing of earlier
            content. Devs started to make tweaks with the mindset that while it would be ideal to keep things the
            same, it&apos;s still fine as long as it&apos;s &quot;close enough&quot; to the past. We also started
            making minor changes in favor of the player for parts of the game which were annoying or disliked.
          </div>
        </div>
        
        <h3>The Nameless Puzzle</h3>
        As alluded to previously, Garnet took it upon himself to turn The Nameless Ones&apos;s Reality into
        something more interesting than just another set of simple numerical reductions. He developed this
        reworked version in secret, casually dropping a &quot;ok I managed to reality in my enslaved&quot; when
        it was done. Dan and I were the first two to test out this reworked version.
        <br />
        <br />
        Nameless Reality now looked a lot closer to the final version in the game - it was structured as a
        puzzle challenge. Finishing it requires you to closely examine all aspects of the Reality in order
        to figure out some unintended interaction that makes completion possible despite the punishing
        restrictions. Post-release this had a somewhat mixed reaction in the game&apos;s community, but
        some people think that figuring out Nameless Reality may have been their favorite part of the Reality
        Update&apos;s content.
        <br />
        <br />
        <b>
          I&apos;m mentioning this here as a warning if you haven&apos;t played through the game, intend to
          play it, and think you would enjoy figuring out the Reality on your own. If this is all true, you
          may want to skip this and any future sections about Nameless.&nbsp;
        </b>
        I don&apos;t intend to hide any information behind spoiler boxes, so there may be information in
        plain sight which can take the puzzle experience away from you.
        <br />
        <br />
        There were many interesting ideas put forth by both Garnet and Dan, although some of them didn&apos;t
        make it into the final version:
        <div className="c-entries-columns">
          <div className="c-col-wide">
            <ul>
              <li>
                A severe cap to AD8 which doesn&apos;t affect AD6 so if you&apos;re in IC1 you can get more galaxies
                there
              </li>
              <li>
                Unlimited EC1 completions and 1 extra completion of some more powerful EC
              </li>
              <li>
                You can buy regular galaxies in EC6
              </li>
              <li>
                Something is not properly dilated, so if you have enough of the dilation Glyph effect you can
                actually do better while dilated
              </li>
              <li>
                Multiple <i>Infinity</i> Challenge completions
              </li>
              <li>
                When dilated, the button still says &quot;dilate time&quot; and you can stack the dilation
                penalty... But when you exit, the Celestials got the math wrong and you get way
                more TP than you should
              </li>
              <li>
                EC7: ID1 produces AD8 rather than AD7
              </li>
              <li>
                EC12: the game is 1e1000x slower, making the bonus based on slowest challenge time useful
              </li>
            </ul>
            Most of the final version of Nameless was already implemented here. From what I gathered from
            the spoiler boxes, all of the restrictions of Nameless Reality except for Time Study 192 were
            added in this initial prototype after I ran through it. The &quot;key interaction&quot; of Nameless
            was already there: Eternity Challenge 6 prevents you from gaining Antimatter Galaxies from 8th
            Dimensions and makes Replicanti Galaxies cheaper. By entering Challenge 10 you can gain AGs from
            6th Dimensions instead, in a way that bypasses the EC6 restriction that only works within Nameless.
            However, the other &quot;cracks&quot; which made the Reality possible were slightly different:
            <ul>
              <li>
                The Reality didn&apos;t boost your Glyph levels up to 5000
              </li>
              <li>
                &quot;Feel Eternity&quot; didn&apos;t exist; there was no need because the Reality was possible
                without it
              </li>
              <li>
                The required Glyph set was different and more strict, apparently requiring a very specific
                set of Effarig effects
              </li>
              <li>
                We had very few hints, limited to the lore (saying to &quot;Search Everywhere&quot;), some
                snide comments in a few achievements, and a handful of strange news tickers which would only
                appear in Nameless
              </li>
            </ul>
          </div>
          <div className="c-col-narrow">
            <CaptionedFigure
              imgPath={cel3}
              caption={`The restrictions of Nameless, as they exist on the released version of the game`}
            />
          </div>
        </div>
        The reward for finishing Nameless Reality was an effect that raised Infinity Dimension purchase
        caps based on your free tickspeed upgrades from Time Dimensions. This was in response to Infinity
        Dimensions being very weak at this point due to many of them hitting their purchase caps.

        <h3>Not Afraid of Glyphs</h3>
        Glyphs always seemed to be the cause of game runaways. Every
        form of explosion happened as a result of a feedback loop where improving Glyph level would give
        stronger Glyphs, using those new Glyphs would allow you to get even stronger ones, and this
        effect would grow so quickly that the game crashed due to numbers becoming too large.
        <br />
        <br />
        We were hoping for one change which would fix everything, but couldn&apos;t pin down a single
        cause. Instead, we ended up completely redoing Glyph balance through a series of major changes:
        <ul>
          <li>
            Dan did a comprehensive rebalance of all Effarig glyph formulas. It was mostly a nerf to all,
            although RM multiplier was buffed and may have itself been the cause of a separate
            runaway which had to be fixed again.
          </li>
          <li>
            Glyph instability already existed as a softcap which provided strong diminishing returns
            if Glyph levels increased above 1000, but Dan and I decided that we needed to apply this
            softcap <i>again</i> above 5000.
          </li>
          <li>
            Glyph power effects were stacking to above ^3, which meant that they alone were becoming
            the majority of production; to curb this we changed all Glyph power effects to be additive
            instead of multiplicative.
          </li>
          <li>
            Infinity Glyph sacrifice was incredibly strong, making Infinity Dimension 8 contribute way
            more than all other Infinity Dimensions combined, and received a fairly heavy nerf.
          </li>
        </ul>
        We also had an upgrade shuffle here:
        <ul>
          <li>
            <b>Old Power Glyph sacrifice</b>: Used to delay Remote (2nd softcap) galaxy scaling, but was moved
            to Cosmic Conglomerate as an upgrade which removed it entirely
          </li>
          <li>
            <b>Old Replication Glyph sacrifice</b>: Gave a few hundred million percent increased replication
            chance, which was effectively moved to Replicative Rapidity
          </li>
          <li>
            <b>Old Cosmic Conglomerate</b>: Used to allow you to sacrifice Infinity, Replication, and Dilation
            Glyphs, but was combined into Scour to Empower so that it would allow you to sacrifice all types
          </li>
          <li>
            <b>Old Replicative Rapidity</b>: Used to be required to make eternity multipliers affect Eternal Flow,
            which we made happen by default
          </li>
          <li>
            <b>New Power Glyph sacrifice</b>: This now affected Distant (1st softcap) galaxy scaling at a much
            weaker rate
          </li>
          <li>
            <b>New Replication Glyph sacrifice</b>: We found that galaxies were becoming disproportionately weighted
            towards Replicanti Galaxies and added a cost increase to them at 1000, which is only delayed by
            sacrificing Replication Glyphs
          </li>
        </ul>
        Glyph generation was improved a bit more - We made power, infinity, and time Glyphs all
        have &quot;primary effects.&quot; If they get generated without their respective power effect
        (eg. &quot;Antimatter Dimension multipliers ^1.137&quot;), one of the existing effects would be forcibly
        changed to be that effect. This was to prevent Glyphs which were completely useless due to their only
        effects being too weak to matter - it was generally agreed that power effects were always useful.

        <h3>Large Numbers</h3>
        Antimatter Dimensions uses an external library called&nbsp;
        <a href="https://github.com/Patashu/break_infinity.js">
          <span className="o-code-text">break_infinity.js</span>&nbsp;
        </a>
        to store its large numbers in a way optimized for performance, which was written by one of the people on the
        dev team (Patashu) specifically for this game in a previous content update. We started running into
        occasional bugs with it, partially because Razen was refactoring it but also partially because the Reality
        Update was effectively acting as a stress test. Luckily Patashu was still around, so we could actually properly
        fix these bugs in ways the library intended.
        <div className="c-centered-img">
          <img src={inf} className="o-small-center-img" />
        </div>
        This was around when Patashu also wrote&nbsp;
        <a href="https://github.com/Patashu/break_eternity.js">
          <span className="o-code-text">break_eternity.js</span>
        </a>,
        which sacrifices some performance in order to get even larger numbers. Some people writing
        content-extension mods for the game have attempted to use break_eternity as a drop-in replacement for
        break_infinity simply because it gives more numerical space to work with, but that&apos;s something
        that most people on the official dev team recommend against precisely because it wasn&apos;t stress-tested
        like break_infinity.

        <h3>Better Organization</h3>
        Garnet tried to make Infinity Challenges relevant again in Nameless, found that IC5 had broken cost scaling,
        and then got distracted with refactoring it. This would become a running trend
        amongst the devs - the old code was very messy and we had recently added ESLint in order
        to improve its readability. Many of us ended up doing some combination of cleanup and actual content,
        although the very start had some rough cleanup since now CodeFactor would assess the code quality on every
        pull request.
        <div className="c-centered-img">
          <img src={codefactor} className="o-small-center-img" />
        </div>
        We moved everything out of the old testing bug/suggestion Discord channels and Trello into Github, and
        set up new channels which were hooked into the repository to post a message whenever a pull request or
        issue was made. Since the repo was private, this required all current and new testers to be given access
        from Hevi. From then forward, the preferred way to report a bug or suggest a feature would be to submit
        an issue on the repository instead of (or in addition to) mentioning it on Discord. A few testers managed
        to slip through the cracks and not get access due to never being around at the same time as Hevi, but the
        devs were still generally attentive enough to catch Discord messages and put them on the GitHub themselves
        as needed.
        <br />
        <br />
        The addition of the GitHub feed channels was very helpful for organization and making all the devs aware
        of changes being made, but it had a negative side effect. Slab somehow gained access to the repo again,
        which caused a lot of the people on the team to panic. We later found out this was because their Discord
        Contributor role was giving him access to the newly-made GitHub feed channels - a role they had because
        of their code contributions to updates near the beginning of the game&apos;s existence.

        <h3>Where Next?</h3>
        There was some concern that we were stuck, with progress stalling very hard compared
        to the previous few months, especially compared to our pace over the winter holidays:
        <div className="o-quote-box">
          <ConversationLine
            name="Pichu"
            text={`i cant wait to check this chat in a year and we finally finished the 5th celestial`}
          />
          <ConversationLine
            name="Garnet"
            text={`pfft that assumes we keep up the pace and that never happens`}
          />
          <ConversationLine
            name="Me"
            text={`hey, balancing is important pichu`}
          />
          <ConversationLine
            name="Garnet"
            text={`and we're trying to have a gentle hand. Yes, you can just add things and cap them
              shortly thereafter. Then the game is just a succession of new features and useless old ones.`}
          />
          <ConversationLine
            name="Pichu"
            text={`im not complaining about balancing, im more expressing my worried about the pace of progress`}
          />
          <ConversationLine
            name="Garnet"
            text={`ah well nothing to be done about that, without more developer time`}
          />
          <ConversationLine
            name="Garnet"
            text={`or, well, technically, if this was a business endeavor, you'd scale back and release
            a smaller product`}
          />
        </div>
        This particular conversation was an interesting one to look back on because Pichu was sometimes known as
        one of the more cynical testers; his estimate of &quot;in a year&quot; would&apos;ve been laughed at as a
        vast overestimation. However, it may come as a surprise that we wouldn&apos;t actually be properly done
        with the 5th Celestial even a year later.
        <br />
        <br />
        To be quite honest - I have no idea what&apos;s in store for us in next week&apos;s entry. Hopefully
        it&apos;s not yet another entry focused on something else that had some really screwed up initial balancing.
      </div>
    </>
  )
}

export default DevlogEntry;
