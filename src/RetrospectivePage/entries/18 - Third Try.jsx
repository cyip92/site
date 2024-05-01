import oldCel6 from "../../assets/retrospective/18/cel6_layer_down.png";
import multTab from "../../assets/retrospective/18/mult_tab_sketch.jpg";
import CaptionedFigure from "../common/CaptionedFigure";
import ConversationLine from "../common/ConversationLine";
import TwoColumn from "../../common/TwoColumn";

const DevlogEntry = () => {
  return (
    <>
      <div>
        <h3>Secondary Resources</h3>
        We originally wanted Ra&apos;s content to tend towards longer realities because there wasn&apos;t any
        other way to balance it numerically, but another part of that discussion was that the game was having
        performance issues on slower devices when constantly looping shorter realities. This was something
        that was generally on our minds, but now it was becoming an actual practical concern. In a
        sense we didn&apos;t have a choice any more, we <i>had</i> to make this change.
        <br />
        <br />
        The main progression in every version of Ra was centered around an experience (called memories) and
        leveling system which contained each of the previous Celestials. Ra&apos;s original implementation was
        structured so that you would gain memories based on certain resource values. This only occurred upon
        completing a reality after unlocking Ra, and maximizing memory gain largely meant completing realities
        as quickly as possible due to how game speed multipliers interacted with the game.
        <br />
        <br />
        In order to incentivize staying in a single reality for a long time instead of constantly repeating short
        ones, we added a new set of resources which passively generated memories over time. These resources were
        called &quot;memory chunks&quot; and you would gain slowly over time only within Ra&apos;s Reality.
        They were named this pretty much from the start, and unfortunately we never went back to rename them
        something more distinguishable.
        <br />
        <br />
        Memory generation was specifically implemented in a way that wasn&apos;t affected by game speed multipliers,
        which was the first of many mechanics nearer the end of the game&apos;s content which strayed away from the
        idea that game speed should affect everything.

        <h3>Entropy</h3>
        With Ra being provisionally complete for a third time, attention shifted towards giving
        Lai&apos;tela a third attempt as well. A lot more time was spent trying to figure out what we needed
        to change here; we already had all of Ra&apos;s upgrades and mechanics in place, we just needed to
        alter the progression pace to be more suitable. Lai&apos;tela was still only a half-complete Celestial.
        <br />
        <br />
        The first thing was its Reality; the original left you with nothing to do after entering. I had
        an idea which seemed interesting at first - it fed all the main currencies through the
        prestige formulas <i>twice</i>. It was neat in concept, but ended up being &quot;Teresa&apos;s
        reality with the only real distinction that it&apos;s like 150x worse.&quot;
        <br />
        <TwoColumn
          leftWeight={2}
          rightWeight={1}
          rightBorder={true}
        >
          <>
            Omsi had the idea for adding a new resource specific to the Reality, and that
            ended up leading to our final version even despite the rest of the game changing around it:
            <div className="o-quote-box">
              <ConversationLine
                name="Omsi"
                text={`maybe you could add some sort of other effect? just throwing things out, what if there
                  was "entropy" that increased faster based on your antimatter, and the more entropy you have,
                  you get some sort of buff, but at 100% entropy you're forced to end the reality (like
                  failing an ec, but you keep your record)`}
              />
              <ConversationLine
                name="Me"
                text={`I was also thinking about the reward structure for a bit too, and I feel like doing it
                  once for a reward but then being able to repeat it again for a higher reward but harder could
                  be cool if the nerf structure works out with that`}
              />
              <ConversationLine
                name="Me"
                text={`kinda like ECs, but instead of the goal changing, the goal stays the same but the
                  challenge gets harder`}
              />
              <ConversationLine
                name="Me"
                text={`since Laitela adds dimensions, it might be thematic if the second time through all 8th
                dim production is disabled, then the third time through 7-8th dims are disabled, etc`}
              />
              <ConversationLine
                name="Omsi"
                text={`you could even have the goal be destroying the reality with entropy, and the reward
                based off how fast you do it`}
              />
            </div>
          </>
          <CaptionedFigure
            imgPath={oldCel6}
            caption={`The description of the first attempted new Lai'tela Reality`}
          />
        </TwoColumn>
        <br />
        The full concept we went with was a combination of these two ideas in that conversation -
        Lai&apos;tela&apos;s Reality used a special resource called Entropy which acted as a time limit:
        <ul>
          <li>
            The baseline nerfs for the reality were a harsh reduction to Infinity Point and Eternity Point
            gain, as well as an effect which starts your game speed at x1 and smoothly brings back all
            of your multipliers back over the span of 10 minutes.
          </li>
          <li>
            Entropy accumulates based on your current antimatter - the more antimatter you have, the faster
            it increases.
          </li>
          <li>
            Once it reaches 100%, the reality is <i>destabilized</i> (ie. completed), your antimatter gets
            set to zero, and all production is completely disabled.
          </li>
          <li>
            You gain a multiplier for your Dark Matter Dimensions which gets bigger as you destabilize the
            reality faster and faster.
          </li>
          <li>
            Destabilizing the reality within 30 seconds causes the reality to disable production for the
            highest still-active Antimatter, Infinity, and Time Dimensions. The reward then scales even
            higher if you try destabilizing again with one less Dimension.
          </li>
        </ul>
        We kept this behavior until release for the most part, with the only difference being that destabilization
        was changed to kick you out of the reality instead of keeping you there with nothing.

        <h3>Resource Restructure</h3>
        We then tried to fix the confusion people had with resources in Lai&apos;tela. Garnet was the one
        who came up with the original idea, but between the idea being implemented incorrectly and Garnet
        not participating in development any more, nobody still on the team really understood what the goal
        or intent with the old system was. Some of us felt it added a prestige reset mechanic purely for the
        sake of adding one - something we seriously wanted to avoid as it&apos;s arguably a general issue
        some lower-quality incremental and idle games have.
        <br />
        <br />
        After a long-winded yet productive discussion between Jazz and me, we came up with a new resource
        system which was easier to follow and centered around a more meaningfully structured prestige system:
        <ul>
          <li>
            <b>Dark Matter</b>: Its buff to Dimension cost scaling would now depend on the maximum ever
            value instead of the current value.
          </li>
          <li>
            <b>Dark Matter Dimensions</b>: Production was guaranteed instead of chance-based, and that
            upgrade was replaced with one that produced Dark Energy.
          </li>
          <li>
            <b>Higgs Boson</b>/<b>Anomaly</b>: These resources were removed.
          </li>
          <li>
            <b>Dark Energy</b>: This resource now had the sole purpose of accumulating up to a
            player-defined cap. Any extra amounts gained when at the cap are lost.
          </li>
          <li>
            <b>Singularity</b>: If Dark Energy is capped, you could reset it to zero for a singularity.
            You could scale the cap in steps of x10 and each step would gain you <i>more than</i> x10
            as many singularities, so longer resets (within reason) are encouraged.
          </li>
          <li>
            <b>Singularity Milestones</b>: Singularities were meant to be less of a currency and more of a
            statistic that continually counts up, &quot;passively&quot; providing upgrade effects and never
            being spent. Milestones replaced all other forms of upgrades in Lai&apos;tela besides
            Dark Matter and its Dimensions.
          </li>
        </ul>
        This newer version focused very strongly on the idea that prestige resets shouldn&apos;t be so
        punishing that it completely halts your progress. Amongst some commentary and feedback from
        older versions of Lai&apos;tela content, most of this suggestion was placed into a large issue
        on <a href="https://github.com/IvarK/AntimatterDimensionsSourceCode/issues/933#issuecomment-596171882">a
        Github issue</a> we had for the sole purpose of keeping track of our attempts to fix this
        Celestial&apos;s content. Many of the mechanics in this version of Lai&apos;tela ended up staying
        through until the game&apos;s release.

        <h3>A Longer Project</h3>
        The overall process for this new version of Lai&apos;tela was more drawn-out due to the fact that
        we were rewriting almost all of it from the ground up again and only really keeping the theme.
        The first bits of it was largely getting rid of mechanics we didn&apos;t need any more, and
        we found that Time Compression was one of them. The thing which started the conversation
        was a comment I made while working through the Lai&apos;tela rework:
        <div className="o-quote-box">
          Also last night I came to the realization that balancing for Time Compression is just... busted now
          <br />
          Way too easy now, and the rewards are way too powerful, and I&apos;m not sure if I really want to
          bother rebalancing it instead of scrapping it and adding something else more minor there instead
          since it seems like opinions on compression were generally mixed
        </div>
        <br />
        The rest of the team generally agreed on removing Time Compression&apos;s mechanics, so&nbsp;
        <a href="https://github.com/IvarK/AntimatterDimensionsSourceCode/commit/868d96f290ad197e0e194d066d4e99c2b952fe17">
          we did it
        </a>. Thankfully, due to our improved code practices, entirely removing this mechanic was a clean process
        that didn&apos;t end up causing any lingering bugs unlike some of our older refactors.
        <br />
        <br />
        Along with that, this first Pull Request also added a mechanic called Continuum (originally
        Garnet&apos;s idea) into Lai&apos;tela to replace the slower cost scaling reward on Dark Matter.
        This mechanic replaces the whole system of Dimension purchase upgrades with something we felt was
        fairly unique:
        <ul>
          <li>
            Instead of purchasing upgrades at discrete values of antimatter, a Dimension&apos;s upgrade
            count is now directly tied to antimatter.
          </li>
          <li>
            Purchase count could be fractional, meaning that production scaled upward smoothly instead
            of in jumps.
          </li>
          <li>
            Antimatter was now never spent, meaning that antimatter amount became strictly increasing
            unless you performed a prestige reset.
          </li>
          <li>
            A multiplier to this &quot;Continuum purchase count&quot; is a lot easier to understand numerically
            than an equivalent &quot;Dimension costs scale up X% slower&quot; effect.
          </li>
        </ul>
        We were pretty satisfied with this idea overall; it was a good QoL feature, provided some very
        minor lag reduction and UI stability, and had a much more intuitive concept for its strength.

        <h3>Other Minor Things</h3>
        Iker started to do some more serious work on the multiplier tab and sketched up some prototypes
        and potential code structures. He had been intermittently poking at it here and there, being
        somewhat hesitant to do anything big due to Razen not being around, but we all decided that he
        should feel free to just go forward and start working on it anyway.
        <div className="c-centered-img">
          <div className="o-small-center-img">
            <CaptionedFigure
              imgPath={multTab}
              caption={"One of Iker's UI sketches for the multiplier tab"}
            />
          </div>
        </div>
        <br />
        Triad Studies were implemented into V and caused a similar issue to the older Reality Glyphs
        where there were so many options that we started to worry about overwhelming the player with
        all of the possibilities. In addition to that, we found that they were simply way too powerful
        and largely trivialized all of the content within V, so we ended up moving them entirely
        to &quot;hard V&quot; content which was much farther into the game (near the tail end of Ra).
        <br />
        <br />
        The typical workflow on the testing team seemed to have settled down into something stable, if a
        bit slow and disorganized due to the sheer amount of content reworks we ended up doing. But this
        status quo was about to change due to something that nobody could&apos;ve seen coming back when
        we started development more than a year prior. Everyone&apos;s priorities on just about everything
        changed due to the start of the global COVID-19 lockdowns.
      </div>
    </>
  )
}

export default DevlogEntry;
