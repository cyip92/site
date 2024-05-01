import cel6Tab from "../../assets/retrospective/14/Laitela_upg.png";
import cel6Upg from "../../assets/retrospective/14/DE_upg.png";
import alteredTime from "../../assets/retrospective/14/altered_time.png";
import navIdea from "../../assets/retrospective/14/nav_prototype.png";
import navSketch from "../../assets/retrospective/14/nav_sketch.jpg";
import CaptionedFigure from "../common/CaptionedFigure";
import TwoColumn from "../../common/TwoColumn";

const DevlogEntry = () => {
  return (
    <>
      <div>
        <h3>The Sixth Celestial</h3>
        While Omsi, Kaj, Garnet, and I were working through and fixing the bugs that the new testers ran
        into, Hevi decided to go forward with a long-planned rework of Lai&apos;tela&apos;s content.
        The original version only added a single new resource called Matter - it made the Antimatter
        Dimension cost curve scale slower, allowing you to purchase more upgrades for the same amount
        of antimatter. This was produced via a set of new slower-ticking cascading Dimensions which
        acted like Replicanti; there was only a percent chance to produce and they would only produce
        a few times per second.
        <br />
        <br />
        Lai&apos;tela&apos;s Reality was a very strong power-based nerf which gave a reward that scaled in a
        similar manner to Teresa&apos;s Reality; the reward got stronger as you reached higher amounts
        of antimatter within. It disabled the effects of tickspeed entirely and applied something around
        a ^0.02 or ^0.03 effect to all Dimension multipliers, which massively decreased nearly everything
        in the game. The numerical value of the power effect increased as you progressed through
        Lai&apos;tela more, but it scaled so slowly that the nerf was forever extremely harsh.
        <div className="c-centered-img">
          <div className="o-small-center-img">
            <CaptionedFigure imgPath={cel6Tab} />
          </div>
        </div>
        The second version of Lai&apos;tela kept the old Dimensions and Reality, but had a rework to have
        more resources to interact with and to be more thematically based on particle physics ideas. The
        layout and appearance was given a black-and-white motif; Hevi thought it would be cool to combine
        this with the final Celestial being primarily black visuals, as a stark contrast between the two.
        This version had all these resources and mechanics which interacted tightly with each other:
        <TwoColumn
          leftWeight={2}
          rightWeight={1}
        >
          <>
            <ul>
              <li>
                <b>Dark Matter</b>: Matter was simply renamed to this, which kept the same effect of
                improving the AD cost scaling.
              </li>
              <li>
                <b>Annihilation</b>: This was a partial prestige which reset Dark Matter and its Dimensions,
                but gave a new resource called Higgs Bosons.
              </li>
              <li>
                <b>Higgs Bosons</b>: These gave your Dimensions a tiny chance to also generate Dark Energy
                every time they ticked, which scaled up logarithmically with how many you had. Additionally,
                they could be spent to purchase repeatable upgrades.
              </li>
              <li>
                <b>Dark Energy</b>: This new resource was used primarily for powerful one-time purchases.
              </li>
            </ul>
          </>
          <CaptionedFigure imgPath={cel6Upg} />
        </TwoColumn>

        <h3>Ra&apos;s Third Capstone</h3>
        We continued to fill out Ra&apos;s content with Teresa&apos;s capstone mechanic. Considering how
        Effarig&apos;s (Glyph Alchemy) and Nameless&apos;s (Time Compression) mechanics were very involved,
        we opted for a simpler approach this time. We called it &quot;Glyph Alteration&quot; (eventually
        renamed to &quot;Altered Glyphs&quot;) and the initial idea was more or less the final idea as well:
        <ul>
          <li>
            Each Glyph type would gain three &quot;improvements&quot; applied to three of its effects; one would
            gain a new additional effect, one would be massively boosted, and one would give a boost that scaled
            up with your total Glyph sacrifice in that type.
          </li>
          <li>
            Improvements for any given Glyph type are unlocked by getting that particular type&apos;s Glyph
            sacrifice total above certain thresholds; each of the three improvements had their own threshold
            value.
          </li>
        </ul>
        
        <TwoColumn
          leftWeight={1}
          rightWeight={2}
          leftBorder={true}
        >
          <CaptionedFigure
            imgPath={alteredTime}
            caption={"An Altered Glyph with the old tickspeed threshold effect"}
          />
          <>
            This mechanic was an attempt at a late-game solution to the fact that Glyph sacrifice was a boring
            mechanic to many testers. It was mostly just an irrelevant upward-ticking resource counter and there
            wasn&apos;t any meaningful player action that could be done to influence it other than simply more
            grinding. In a sense it was <i>still</i> boring even after adding Glyph Alteration, but at least it
            was one more unique thing that the player could meaningfully put some focus on in order to progress
            besides just looping quick realities within Ra.
            <br />
            <br />
            Glyph Alteration was linked to Teresa because they were the only Celestial that had a mechanic worth
            returning to, and repeating Teresa&apos;s Reality with more progression specifically boosts Glyph
            sacrifice. In addition to adding an incentive to pay attention to Glyph sacrifice again, we also
            modified the formula for sacrifice value to ramp up much more quickly above Glyph level 10,000 in
            order to give additional value to pushing higher despite the harsh level instability softcap.
          </>
        </TwoColumn>
        <br />
        All of the new Altered effects we added were pretty much exactly what you can see in-game in the
        final version save for one difference - the additional effect for Power Glyphs was a multiplier
        to Dark Matter Dimensions (in Lai&apos;tela) instead of a cost reduction for Antimatter Galaxies.

        <h3>Celestial Navigation</h3>
        When we were talking through all the parts of the game which were lacking in-game information,
        we found that almost all of Celestial content lacked a clear direction or &quot;next step&quot;
        that the game pointed towards. This was when Garnet came up with the idea of having a graphical
        &quot;sort of multiverse map you were navigating&quot; which would give an aesthetically-pleasing
        list of sequential requirements which would direct you through all the Celestial content.
        <br />
        <br />
        Omsi made a very brief mock-up of the idea, and that was enough to get a lot of general support
        amongst the team to go forward with it. Garnet got to work with planning out all the progression
        milestones which would appear, and then started defining all the vector graphics elements which
        would eventually turn into the Celestial Navigation subtab in the released version of the game.
        <br />
        <br />
        <div className="c-figure-group">
          <div className="c-figure-row">
            <CaptionedFigure
              containerClass="c-single-figure--small"
              imgPath={navIdea}
              caption={"Omsi's mock-up, explaining the concept in pictorial form"}
            />
            <CaptionedFigure
              containerClass="c-single-figure--small"
              imgPath={navSketch}
              caption={"A hand-drawn sketch that Garnet did as he was planning how to lay everything out"}
            />
          </div>
        </div>

        <h3>&quot;Promotion&quot;</h3>
        The way we managed the first wave was that the new testers would gain access to the development
        channel after completing Nameless&apos;s Reality. Of course, we had more content past that,
        but remaining unspoiled during Nameless was our top priority - Omsi made the comment that new
        tester experiences were rare and hard to come by, which was something everyone broadly agreed
        with and was particularly important for Nameless content.
        <br />
        <br />
        Two of the first-wave testers reached the end of Nameless and were given access within the month.
        They were free to continue onwards, but were also told that any further content was much less
        tested and polished, and to a degree a bit more experimental - something that the future waves
        of testers would also be told, although where exactly this transition point occurred in the game
        would be pushed further for the other waves. After poking and prodding them for as much feedback
        as we could about the Nameless experience, we turned towards talking about the second wave of testers.
        <br />
        <br />
        At this point in development, we were somewhat expecting to only have two waves of testers - so
        considering that the second wave would be the last wave before release, we decided that we needed
        to hold off for a while before bringing them on. It became very clear through the feedback from
        the first wave that the game still needed a lot more polish to get it up to everyone&apos;s
        standards. And perhaps more importantly, we hadn&apos;t actually finished adding content
        yet since the final Celestial had basically nothing in it. The second wave wouldn&apos;t
        happen until a few more months from now.
        <br />
        <br />

        <h3>Miscellaneous Things</h3>
        One of the new testers discovered that they could pause and unpause the Black Hole for extremely
        short periods of time to essentially turn it into an on-demand time skip. Many people were against
        keeping this behavior in the game because it was a massive advantage for people who were willing
        to micromanage it. The annoyingness of this process was further accentuated by the fact that
        there were no controls or information in the header of the game at the time - the only way you
        knew anything about what the Black Hole was doing was by going to its specific subtab to check
        it, at which point you could choose to pause or unpause it if you wanted. This broke the flow of
        the game quite badly if you decided to commit to this strategy, since you would constantly need
        to hop between tabs.
        <br />
        <br />
        Our solution to curtail the excessive micromanaging was to make the Black Hole accelerate
        logarithmically to its peak speed over 5 seconds after it&apos;s unpaused. This
        ended up making it so that if the player wanted to ration or otherwise save up their increased
        Black Hole speed for multiple uses, they either wouldn&apos;t be able to use it to its fullest
        potential or would only be able to use the full speed boost a limited number of times per Black
        Hole activation.
        <br />
        <br />
        There was a fair bit of touch-up with the Automator visuals, mostly having to do with proper
        syntax coloring and more &quot;professionally formatted&quot; command documentation. Once we
        were all fairly confident that the Automator actually looked nice (as opposed to &quot;janky
        but functional&quot;), Hevi went forward and made&nbsp;
        <a href="https://www.youtube.com/watch?v=687i6dUkBlk">the official Automator trailer</a> for
        the game and posted it in the official <b>#development</b> Discord channel. 
        <br />
        <br />
        Pichu was generally very vocal about having the game give you a built-in Glyph tester so that
        it didn&apos;t feel like you had to constantly guess at what the right set of Glyphs
        was - something that many of us wanted, but all the devs thought that the game was too
        technically demanding to allow that to happen without basically simulating the entire
        game twice. He had just completed Nameless himself and found that the &quot;correct Glyph
        set&quot; problem was very noticeable there, and went about making a table outlining the
        importance of each Glyph effect at each Celestial.
        <br />
        <br />
        It didn&apos;t seem like he ever completely filled out the entire table, but something he
        did realize was that the old free tickspeed threshold effect on time Glyphs was very powerful
        throughout all of Celestial content. I thought we had replaced that with an eternity count
        multiplier by now (as alluded to in a previous entry), but it seems like it wouldn&apos;t
        actually be replaced until at least the &quot;end&quot; of the first wave of testers - if
        not later.
        <br />
        <br />
        <i>
          I&apos;ve been mentally exhausted with packing and moving my stuff lately - I don&apos;t
          know where the next entry is headed, but hopefully I should be more clear-headed when writing
          it.
        </i>
      </div>
    </>
  )
}

export default DevlogEntry;
