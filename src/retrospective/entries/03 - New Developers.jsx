import oldPerks from '../../assets/retrospective/3/old_perks.png';
import challenges from '../../assets/retrospective/3/challenge_IDs.png';
import runaway from '../../assets/retrospective/3/runaway_AM.png';
import automator from '../../assets/retrospective/3/old_automator.png';
import tophat from '../../assets/retrospective/3/automator_hat.jpg';
import "../styles/Entries.css";
import CaptionedFigure from "./CommonElements";

export const NewDevs = () => {
  return (
    <>
      <div>
      <h3>&quot;Physically Realistic&quot;</h3>
      On September 7th 2018, Hevi pitched the idea that it would be cool to have an “realistic” black hole. Of course,
      with him being a huge movie fan, he brought up Interstellar as the inspiration - it&apos;s a fairly major plot
      point that time passes slower when you are close to a black hole. He asked if I could make an animation where
      a planet was orbiting a black hole, with that slowdown factor determining the black hole&apos;s time factor.
      <br />
      <br />
      The last time I did any orbital mechanics was 2013. It also gradually came to light that there was no way to
      make a realistic black hole for the game:
      <ul>
        <li>
          The highest possible speedup factor with a stable orbit around a non-rotating black hole is √3
        </li>
        <li>
          An actual orbit would result in a continually varying speedup factor
        </li>
        <li>
          Effects from special relativity more than cancel out the gravitational time dilation
        </li>
        <li>
          Calculations for <i>relativistic</i> orbits are pretty awful even by the standards of physicists
        </li>
      </ul>
      Luckily, Hevi said that I should feel free to ignore any parts of the realism that can&apos;t be feasibly
      implemented, which meant that most of this could be brushed under the rug and ignored. As a result, pretty much
      none of the code that went in initially was actually realistic. Even the particle trails in the animation are
      entirely bogus and not at all scientifically-accurate orbital paths.
      <br />
      <br />
      People who have played the game up to this point will probably notice that there is no planet orbiting the black
      hole in the final version of the game. This is because its orbit was basically meaningless when you approach 100%
      uptime, so we decided to remove it. The unused code for the planet still exists in the game though, and it can
      calculate a mostly realistic orbit!


      <h3>Perk Tree</h3>
      We all collectively drafted up content for the perk tree over the month of September. The guiding design
      principle was that there should be many different categories of perks laid out in a way where you&apos;d have
      the freedom to prioritize some areas over others. A lot of the ideas were aimed at addressing what testers
      were currently the most annoyed at.
      <br />
      <br />
      <div className="c-entries-columns">
        <div className="c-col-wide">
          The initial perks... weren&apos;t good, but they often felt good simply because not having them was even
          worse. Some examples of what we had initially:
          <ul>
            <li>
              The starting perk was the same (but didn&apos;t remove the achievement requirement)
            </li>
            <li>
              We had perks which gave you more lines of code in the automator
            </li>
            <li>
              Autobuy Time Theorems was 4 separate perks and capped at 1 &quot;buy max&quot;/sec
            </li>
            <li>
              Some glyph perks: +1 level (twice), +1 choice (4 total), and +5% rarity
            </li>
            <li>
              There was a weaker SAM which started you with 100 antimatter
            </li>
            <li>
              There used to be a whopping <i>13 achievement perks</i>; each one gave you another row at the beginning
              of the reality
            </li>
            <li>
              None of these existed yet: ANR (galaxies and boosts don&apos;t reset resources), TTF (time theorems
              don&apos;t spend resources), PASS (passive Time Study boosts), and all PEC perks (passive EC completion)
            </li>
          </ul>
        </div>
        <div className="c-col-narrow">
          <CaptionedFigure
            imgPath={oldPerks}
            caption={"The first \"complete\" version of the perk system"}
          />
        </div>
      </div>


      <h3>My contributions</h3>
      A pause for personal context - while I do have lots of general coding experience, I had never touched anything
      having to do with Javascript before this point. Anyone who has coding experience will tell you that programming
      languages beyond your first one are easier, but I was still jumping into this from mostly nothing.
      <br />
      <br />
      The first evidence of me wanting to contribute was on September 11th, when I said
      <div className="o-quote-box">
        I kinda want to ask for permission to contribute to the AD code, if only for the purposes of adding info
        tooltips everywhere.
      </div>
      Jump forward a couple days and I&apos;d made
      <a href="https://github.com/IvarK/AntimatterDimensionsSourceCode/pull/3"> a Pull Request doing exactly that</a>.
      <div className="o-quote-box">
        I think without exaggeration, about 60% of all the JS I&apos;ve ever written was today on the test repo.
      </div>
      <br />
      I proceeded to add more additional information, quality-of-life text, and layout changes so that the game fit on
      the screen better and required less tab-hopping. In fact, over time I became known as the &quot;QoL text guy&quot;
      as people started noticing all the dynamic text I was adding to the game. I suggested the idea to do a
      &quot;multiplier tab&quot; a few times, but that wouldn&apos;t go anywhere for a while.
      <br />
      <br />
      The first thing I did for game mechanics was bulk Eternity Challenge completion, which was added some time in
      mid-September while we were expanding perk content. However, I quickly became more involved over these two months,
      as some crucial balancing changes needed to be made and both Hevi and Omsi were somewhat busy at the time.
      <br />
      <br />
      The game was in fact very broken for a solid few weeks in October, before permission was given to merge in a
      bunch of caps I made on <a href="https://github.com/IvarK/AntimatterDimensionsSourceCode/pull/47">two </a>
      of <a href="https://github.com/IvarK/AntimatterDimensionsSourceCode/pull/49">my branches</a>. I was part of a
      handful of testers at the forefront of content who had the best sense of how all the mechanics were balanced,
      so it made sense for me to be the one to make the changes.


      <h3>Improving the Code</h3>
      <div className="c-entries-columns">
        <div className="c-col-narrow">
          <CaptionedFigure
            imgPath={challenges}
            caption={"Some old data formatting was... interesting"}
          />
        </div>
        <div className="c-col-wide">
          On September 15th, Razenpok joined the dev team! Initially his main role was migrating all of AD into
          using Vue.js, something he&apos;d be doing gradually for the next few months as we continued developing
          content. Changing the game&apos;s code to use the Vue.js framework was something which Hevi really wanted
          to do, and now the circumstances were just right for that to actually happen.
          <br />
          <br />
          Over the course of the update, Razen would end up generally cleaning up the code and making it more
          maintainable, which was much appreciated by everyone else working on the code. The code had quite a lot of
          skeletons in the closet which needed to be cleaned out though, and a few of them gave some amusing reactions
          when they were found (see left).
          <br />
          <br />
          Razen also played a big role in pushing the development of Antimatter Dimensions towards something a lot
          more structured and professional, which was important for organizational purposes now that there were five
          of us (Hevi, Omsi, Razen, Iker, and me) working on the game&apos;s code at once. As a side note - Hevi
          made a Trello board, but we eventually ended up moving almost everything to Github.
        </div>
      </div>
      

      <h3>Community Dynamics</h3>
      One of the much older testers on the team wasn&apos;t taking anything seriously and was basically getting on
      everyone&apos;s bad sides partially out of annoyance and partially because he was the source of maybe 80% of
      the content leaks to the public (largely due to negligence). At some point his discord got deleted, and even
      though he returned on a new account, he wasn&apos;t made a tester again.
      <br />
      <br />
      For a similar reason, slabdrill was also removed from the team, although his leaks were often a lot more
      deliberate. It came to light that he had a spoiler channel on his own server, and that was a general source of
      leak concerns for a while. Since two people were removed because of content spoilers, the test link was changed.
      <br />
      <br />
      A couple new testers were individually brought on at this time, since development was still very early on and
      there wasn&apos;t a cohesive update to test yet. At this point our system for onboarding was largely one of
      approaching people individually, and we had an informal list of people in mind.
      <br />
      <br />
      Hevi made a dev post showing off the glyph tab with heavy black-box redaction, which strongly implied
      (but didn&apos;t actually state) that the update would contain a prestige layer. He mostly did so in
      order to showcase that stuff has been happening.


      <h3>Development Progress</h3>
      The automator was very clunky, and the main obstacle to usability was that you were limited by line count and
      loading a tree took up most of your line budget. Study buying was something which was added in early September
      but didn&apos;t properly work until Hevi fixed it in October. As you can see from below, it was also a fairly
      expensive command to unlock.
      <div className="c-figure-group">
        <div className="c-figure-row">
          <CaptionedFigure
            containerClass="c-single-figure--small"
            imgPath={automator}
            caption={"A sample script in the old Automator, showing the bare-bones styling and line count limit"}
          />
          <CaptionedFigure
            containerClass="c-single-figure--small"
            imgPath={tophat}
            caption={
              `Command documentation was entirely limited to a giant tooltip on each of these commands. Some testers
              called this tree the command top-hat.`
            }
          />
        </div>
      </div>
      <br />
      We made the 1st row of Reality Upgrades repeatable and added the 4th row, which remained basically unchanged
      all the way up to release. Then we added the 5th row and suddenly found ourselves in another numerical runaway
      situation.
      <div className="c-centered-img">
        <img src={runaway} className="o-small-center-img" />
      </div>
      <br />
      This time was due to Temporal Transcendence being too powerful initially and giving nearly a e5M multiplier
      because we didn&apos;t expect time played to get that high. Jazz had mentioned that he couldn&apos;t see
      anything good coming from the game running a million times faster, and that proved to be prophetic
      considering how we had to handle the last few celestials of content.
      <br />
      <br />
      There was a brief conversation on Celestial names; the names for Celestials 1, 2, 4, and 6 were pretty much
      immediately decided, although not necessarily in those positions. According to Hevi,
      <a href="https://fi.wikipedia.org/wiki/Ismo_Laitela"> the person Celestial 6 was inspired by</a> (they don&apos;t
      have an English wikipedia page, sorry) is actually somewhat of a Finnish meme. At this point, there&apos;s around
      9k code commits left to go in the update. Next post, we see how the first Celestial&apos;s content was added.
      </div>
    </>
  )
}

export default NewDevs;
