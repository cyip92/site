import weakAD from '../../assets/retrospective/2/admultlv2.png';
import challenge from '../../assets/retrospective/2/autochall.png';
import dilPow from '../../assets/retrospective/2/dilationpow.png';
import largeIPow from '../../assets/retrospective/2/ipow.png';
import zeroMult from '../../assets/retrospective/2/mult0.png';
import useless from '../../assets/retrospective/2/repdtmult.png';
import duplicity from '../../assets/retrospective/2/duplicity.png';
import "../styles/Entries.css";
import CaptionedFigure from "./CommonElements";

export const WaveZero = () => {
  return (
    <>
      <div>
        <h1>Wave Zero Testers</h1>
        <h3>Gameplay and Testing</h3>
        On July 27th 2018, Hevi shared the test link with the rest of the testing team in the patch testing channel.
        Many long-term members of the Antimatter Dimensions Discord server are aware of the fact that we periodically
        brought in “waves” of new testers throughout development. Officially speaking there were three waves of
        testers, which occurred in August 2019, April 2020, and August 2021.
        <br />
        <br />
        I hadn&apos;t realized it until I went through the old messages, but a lot of the events at the time
        paralleled the start of the “official” tester waves. There was initially mass chaos as everyone in the testing
        channel was trying to figure out why they suddenly had unexpected unread notifications, followed
        by gradually settling down and realizing that &quot;it&apos;s actually happening.&quot;
        <br />
        <br />
        The game was still quite unpolished and incomplete at this point, but even just the &quot;wow factor&quot;
        of new stuff caused a lot of excitement. Naturally, due to the much higher volume of testing, bugs of varying
        degrees of seriousness were now popping up left and right. Omsi and Hevi were doing an amazing job at fixing
        bugs quickly and adjusting parts of the game using the feedback from the testing team, and at the time they
        were the only two code devs on the team.
        <br />
        <br />
        Compared to the final state of the game, it was still quite &quot;bad&quot; by many standards:
        <ul>
          <li>
            All achievements returned gradually over 4 days (0.9x per reality) and still couldn&apos;t be completed
            early - you were forced to wait
          </li>
          <li>
            The second reality took about 8 days to complete, much of which was spent waiting for achievements
            or time theorems (for the reality study, which still cost 5e9 TT)
          </li>
          <li>
            Reality Machine scaling wasn&apos;t linear below 10, so the majority of players felt like it
            wasn&apos;t worth pushing for more
          </li>
          <li>
            You didn&apos;t have a choice for your glyphs, every reality would just give you whatever the next
            pre-seeded glyph would be
          </li>
          <li>
            The first glyph&apos;s effect was the only thing which wasn&apos;t random, and everything else in
            glyph generation was competely random without any worst-case mitigation logic
          </li>
        </ul>
        There was only one test channel when things started up, although a few hours after the internal release,
        Hevi made two more test-specific channels - one for bug reports and one for suggestions. These two channels
        ultimately ended up being temporary (with all their contents eventually being ported into the Github repo),
        but until then they did a good job keeping things organized.

        <h3>Community Management</h3>
        It would be nearly a month until anything official was posted about testing starting up again, although many
        testers dropped hints about it in more casual settings almost immediately. On the 30th, just a few days after
        it began, Hevi told the team: <b>Don&apos;t post anything about the update without my permission, no
        &quot;funny spoilers that nobody is going to get xD&quot;</b> which set the expectation that testers should
        be tight-lipped about content moving forward.
        <br />
        <br />
        Anyone who returned to the game after a very long break will be all too familiar with feeling clueless about
        the game mechanics. Most of the testers felt this way as well, although there were concerns about the
        implcations of testers asking basic questions (eg. how to do IC4/IC5) publicly. This is because the fact that
        Reality was a new reset layer, and many people in the community at the time didn&apos;t expect the next update
        to be another reset. This fact would still remain unknown until the end of the year (which is to say, nearly
        half a year later).
        <br />
        <br />
        Despite these spoiler concerns, some of the much older testers weren&apos;t mindful of this. This would cause
        occasional on-and-off heated conversations about people&apos;s suitability for the team over the next few
        months. A few of these did eventually lead to said people getting removed from the team after they continued
        blabbing even after being directly confronted about it from Hevi himself.

        <h3>Development Progress</h3>
        Over the next month and a half or so, there were piles upon piles of bugs which got uncovered and needed to be
        fixed. Besides those fixes, there were also a few new features added:
        <ul>
          <li>
            <b>[Mid Aug 2018]</b> The third row of reality upgrades (Telemechanical Process was three separate
            upgrades on the first draft, replacing Eternal Flow and Paradoxical Forever)
          </li>
          <li>
            <b>[Late Aug 2018]</b> Glyph choice, choosing from 3 options (for a brief period of time, this would give
            you a dialog with 3 identical options for your first glyph)
          </li>
          <li>
            <b>[Early Sept 2018]</b> The perk tree was presented as an idea, although not implemented yet
          </li>
        </ul>
        
        <div className="c-entries-columns">
          <div className="c-col-wide">
            And naturally, a few things were suggested or made which ultimately didn&apos;t get into the final version
            of the game. Here&apos;s the first two notable ones, and there will certainly be many more in the future:
            <ul>
              <li>
                Testers figured out that you could &quot;peek&quot; at your next glyph result and then refresh the page
                if you wanted to push more to make it stronger first. This led to the tester (and later on code
                contrbutor) Iker writing a quick script which displayed the next 15 or so glyphs
              </li>
              <li>
                A new glyph type: Glyph of duplicity (suggested as an idea; a similar concept was implemented briefly
                as a reality glyph effect far in the future, but then all traces were removed)
              </li>
            </ul>
          </div>
          <div className="c-col-narrow">
            <CaptionedFigure
              imgPath={duplicity}
              caption={"The teaser image Omsi posted of a Glyph of Duplicity and its effect"}
            />
          </div>
        </div>
        As people reached the end of the existing content (3rd row of Reality upgrades), it became clear that glyph
        effect values needed some very serious rebalancing. The actual values in the glyph effect formulas started off
        as throwing numbers at the wall and seeing what stuck, and this resulted in wildly inconsistent relative
        strength. Here are a few of the more amusing examples from the testing channels that people posted:
        <div className="c-figure-group">
          <div className="c-figure-row">
            <CaptionedFigure
              containerClass="c-single-figure"
              imgPath={weakAD}
              caption={"Some effects were comically weak"}
            />
            <CaptionedFigure
              containerClass="c-single-figure"
              imgPath={largeIPow}
              caption={"Others, unbelievably strong"}
            />
            <CaptionedFigure
              containerClass="c-single-figure"
              imgPath={challenge}
              caption={"And one was useless to the point of eventually getting replaced"}
            />
          </div>
          <div className="c-figure-row">
            <CaptionedFigure
              containerClass="c-single-figure"
              imgPath={dilPow}
              caption={"The weakest effects at low level/rarity almost rounded down to nothing"}
            />
            <CaptionedFigure
              containerClass="c-single-figure"
              imgPath={useless}
              caption={"Or sometimes, actually nothing"}
            />
            <CaptionedFigure
              containerClass="c-single-figure"
              imgPath={zeroMult}
              caption={"... or even worse"}
            />
          </div>
        </div>
        <br />
        This caused testing at the forefront to pause for a week or so while everyone tried to work through what was
        causing the numbers to be uncontrollable and how to fix that. It turned out this would be the first of many
        times throughout development this would happen - not only for glyph effects, but just in general.
        <br />
        <br />
        Bug reports and fixes continued to come in and new content was gradually being added to the game, and then
        at one point Hevi had a random idea out of the blue. It involved the black hole, a javascript canvas animation,
        and some fairly heavy physics/maths. Luckily, I had... most of the skillset to help out with that. Next entry,
        we&apos;ll get into my first code contributions to the game.
        <br />
        <br />
        <i>(Jeez, at this rate of entries, we might be here for a while.)</i>
        <br />
        <br />
      </div>
    </>
  )
}

export default WaveZero;
