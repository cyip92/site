import { Link } from "react-router-dom";
import momentum from "../../assets/retrospective/23/old_momentum.png";
import unbroken from "../../assets/retrospective/23/unbroken_wolfram.png";
import timeskip from "../../assets/retrospective/23/mobile_timeskip.jpg";
import CaptionedFigure from "../common/CaptionedFigure";

const DevlogEntry = () => {
  return (
    <>
      <div>
        <h3>Pondering Changes</h3>
        There was a slight culture shift amongst the team as time went on, which was likely a counter-response
        against the communication barrier between the old and new testers as more people gained full access to
        the rest of the channels. A few of the new testers felt isolated during testing, like their feedback
        wasn&apos;t being considered; now that they were on the other side of the wall, they pushed hard to
        make their voices heard and for snappy decisions to be made. While they had good intentions, this
        also unfortunately drove more of a divide between different groups of people on the team.
        <br />
        <br />
        In a few instances, some new testers suggested changes to speed up certain parts of the game, while
        others were firmly of the standpoint that the pacing was fine as-is and that some waiting is to be
        expected because it&apos;s an incremental game. As we were intently watching the rest of the second
        wave finish up the first 4 Celestials, there were a lot of arguably knee-jerk suggestions for changes
        based on one or two people having trouble or going slower with certain mechanics.
        <br />
        <br />
        We ended up changing very little pacing-wise within the first 4 Celestials, which we decided upon
        after we asked for more detailed feedback once everyone was &quot;unblinded.&quot; It was a careful
        balance between acknowledging feedback and understanding that we shouldn&apos;t let any single
        person&apos;s player experience drastically change the game overall.

        <h3>Fixing the End</h3>
        Glyph Alchemy&apos;s Momentum used to be a gradual time acceleration effect, which gave a game speed
        multiplier that increased as you spent more time in a single Reality. After the old version was properly
        tested, we found that completing a Reality &quot;felt awful&quot; because it reset the momentum timer and
        now realities felt artificially lengthened. It was changed to be an effect that raised all Dimensions
        to a power which gradually strengthened over time up to a cap - how fast it grew was tied to how much
        of the Alchemy resource you had.
        <br />
        <div className="c-centered-img">
          <div className="o-small-center-img">
            <CaptionedFigure
              imgPath={momentum}
              caption={"The old Alchemy Momentum Effect"}
            />
          </div>
        </div>
        Momentum would end up being revisited <i>again</i> in the future, when we found that post-Ra content
        relied on it being at its capped value. This fact only came to light once people were testing through
        Ra and Lai&apos;tela content in one go, quickly enough that it didn&apos;t have enough time to reach
        the cap in between. This was something that otherwise never happened when we tested the two in isolation,
        due to the fact that the Momentum effect kept counting upwards on the offline backups we would start
        Lai&apos;tela with. The solution we went with, which stuck until release, was to add an achievement
        reward obtainable in the middle of Ra that increases its growth rate by x10.
        <br />
        <br />
        General balancing discussion started shifting away from &quot;let&apos;s balance the game in a way
        that makes it future-proof forever&quot; and more towards &quot;let&apos;s balance the game to be
        in control <i>enough</i> for us to finish the game, who cares if it breaks immediately past the
        end.&quot; This was largely because the balancing kept getting harder and harder to nail down, and
        there was no reason for us to aim for an unnecessarily strict goal. To put it bluntly, it was clear
        we were getting tired of constantly rebalancing the game, and so we moved our goalposts a bit.
        (This, of course, unfortunately puts people who want to mod AD with content-extension mods in a
        tough spot.)

        <h3>Unbroken</h3>
        I had an interesting idea for a modified version of the game at this point, inspired by simply
        messing around with Lai&apos;tela mechanics and thinking back to some older brainstorming sessions.
        Normally our less-serious ideas would just be mentioned once and then never again, but many of us
        found this idea mathematically interesting. As a result, it got repeatedly brought up for discussion
        again and again. The tentative name for mod was &quot;Unbroken.&quot;
        <br />
        <br />
        The game loop of the first primary reset (Infinity) revolves around a special number
        called &quot;Infinity,&quot; approximately equal to 2<sup>1024</sup> (ie. 1.79e308), which is the
        largest number which can be expressed in a double-precision floating point number. This acts
        as a limit to how much antimatter you can ever gain; once you reach this point, you must reset your
        antimatter to continue progressing. This gives you a new currency you can use for upgrades to get you
        back to Infinity antimatter even faster. This accelerates to the point where you can reach Infinity
        within a single calculation tick and a special upgrade called &quot;Break Infinity&quot; becomes
        available. &quot;Breaking Infinity&quot; allows you to surpass the Infinity antimatter limit, a
        whole new set of upgrades becomes available, and the game&apos;s content continues upward.
        <br />
        <br />
        <div className="c-entries-columns">
          <div className="c-col-wide">
            The core concept for <i>Unbroken</i> was essentially, &quot;What if Break Infinity didn&apos;t
            exist?&quot; The general game flow until that upgrade would remain largely the same, but things
            would change when you would unlock Break Infinity. The only notable difference would be that
            maxing out autobuyers would instead convert their associated Dimension to work on the Continuum
            mechanic from Lai&apos;tela.
            <br />
            <br />
            Once you reached the old Break Infinity point, the game would start to run calculations to see
            how many <i>fractional</i> ticks it would hypothetically take to reach Infinity, and then multiply
            your gains accordingly. For example, if it took a tenth of a tick to reach Infinity, you would be
            given x10 the Infinity Points every tick instead, as if you had actually done it 10 times.
            <br />
            <br />
            Eventually our talks led towards trying to calculate some results. However, it turned out that
            even preliminary attempts at an answer were already not looking promising even despite having
            many people involved with heavy mathematics backgrounds. One result for <i>less than</i> 8
            Dimensions ended up using hypergeometric functions - a class of functions which I had only
            used sparingly, Dan said &quot;In my classes that type of thing showing up usually means I made
            a mistake,&quot; in response to, and nobody else had ever even heard about.
            <br />
            <br />
            There&apos;s still the possibility of <i>simulating</i> the game in some modified way to perform
            the calculation, but at that point the details were involved enough that we put the idea to the side.
          </div>
          <div className="c-col-narrow--borderless">
            <CaptionedFigure
              imgPath={unbroken}
              caption={"A short snippet of the calculation conversation"}
            />
          </div>
        </div>
        <br />
        This idea came up again much more recently (about a week ago) in a casual conversation
        on the community Discord server, and it led to the realisation that it doesn&apos;t really
        make a whole lot of sense to implement this concept as a modified version of Antimatter
        Dimensions because of the fact that it scraps or otherwise needs to redo perhaps 85% of
        the entire game&apos;s content. If I do ever get around to making this game idea, it&apos;s
        much more likely going to be on its own as a standalone game. The biggest advantage of that
        would be the fact that I could start with something much more workable mathematically.

        <h3>Warping Forwards</h3>
        Since changing device time on the mobile version of the game was the most common way
        to cheat, we had a discussion on how to mitigate that. The entire team was unanimously
        against any sort of <i>harsh</i> anti-cheat mechanisms, because it&apos;s a singleplayer game
        and there aren&apos;t any leaderboards we would need to care about. Nevertheless, we
        still wanted to preemptively avoid bug reports about game conditions which should never
        happen in legitimate play due to cheating.
        <br />
        <br />
        Due to the fact that incremental games are almost entirely founded around the idea of
        passively waiting for progression to happen on its own, there&apos;s massive potential
        for false positives (ie. thinking someone is cheating when they aren&apos;t). There&apos;s
        no obvious way to tell the difference between someone who decided to set their clock a week
        in the future, and someone who simply hasn&apos;t opened the game for a week because they
        know it&apos;ll still progress without their input.
        <br />
        <br />
        The anti-cheat behaviour which which got implemented into the mobile version was something
        that only showed up in conditions related to cheating and faulty system clocks, which we
        figured out was when the clock is changed <i>back</i> to a normal time afterwards:
        <div className="c-centered-img">
          <div className="o-small-center-img">
            <CaptionedFigure
              imgPath={timeskip}
              caption="A sample image of the warning, originally taken in September 2020"
            />
          </div>
        </div>
        This technically gives the chance for one &quot;free&quot; skip ever, which we figured was an
        acceptable compromise. The message served the purpose of letting the player know that we
        are aware of potential cheating, while not irreversibly breaking their save without warning
        when it happens.

        <h3>The Squish</h3>
        Nearly a year before this point, I added <Link to="/ADdevlog/12">a very sloppy formula change</Link> to
        Reality Machine gain that started above 1e1000 RM and progressively reduced the effect of each order
        of magnitude into the exponent - 1e10,000 RM was now 1e2000, 1e100,000 was now 1e3000, etc. This came
        back into the spotlight now as the new second-wave testers were playing through Ra&apos;s content;
        just like now, Ra&apos;s content contained an RM inflation era, where RM gain would massively
        accelerate as more and more upgrades are purchased. Once everyone was made more aware of the existence
        of the formula change, it became colloquially known as the &quot;RM Squish.&quot;
        <br />
        <br />
        We all quickly came to the agreement that it wasn&apos;t a well-designed mechanic, but there was a
        lot of contention on what the best path forward would be. This led to another series of arguments,
        again exacerbated by external stresses, where there were basically two stances:
        <ul>
          <li>
            Remove the formula change entirely and rebalance anything that needs it in order to keep numbers
            in check, the largest culprit being that the black hole (and thus game speed) would be able to
            grow massively again. <b>Motivation: RM remains a meaningful currency as it continues to grow and
            the very unsatisfying number squish is now gone.</b>
          </li>
          <li>
            Keep the formula change, as much as we all disliked it, since we had been through enough rebalances
            at this point that nobody still around was willing to do yet another one. <b>Motivation: Reduces the
            likelihood of getting stuck in rebalancing hell again and avoids the issue of RM becoming
            meaninglessly big like other prestige currencies in pre-Reality mods of the game often do.</b>
          </li>
        </ul>
        Unfortunately for everyone involved, neither side was willing to budge on their stances - which meant
        that these arguments kept happening and people got more and more agitated about the fact
        that someone was going to be dissatisfied about the decision and it could be them.
        <br />
        <br />
        I was working on <a href="https://github.com/IvarK/AntimatterDimensionsSourceCode/pull/1406">a
        very hefty Lai&apos;tela improvement branch</a> at the time, which largely ignored the disagreement and
        focused on making the content more up to our standards of UI/UX. Having to manage these arguments as
        well was a big contribution of stress in my life back then; I was starting to feel less inclined to
        work on the game as a result, since all the contributions I was making were getting lost amongst the
        frequent bickering.
        <br />
        <br />
        Combined with a few months of lockdown and the fact that it was basically crunch time for finishing up
        my degree, I ended up making an announcement to the testing and development team (as well as the game
        community) that I would be entering what I called &quot;Thesis Mode&quot; for the next few months. In
        order to properly focus on finishing up my PhD thesis and degree, I would be staying off of Discord
        and not devoting any time towards testing, development, or reviewing code until I was done.
        <br />
        <br />
        <i>
          Development for the Reality Update would enter an extended lull for the next half a year or so while
          I focused on my education. Next entry, I&apos;ll summarize what happened during then before
          hopping right back into things.
        </i>
      </div>
    </>
  )
}

export default DevlogEntry;
