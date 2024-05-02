import celnav from "../../assets/retrospective/32/pelle_celnav.png";
import sigil from "../../assets/retrospective/32/sigil.png";
import effects from "../../assets/retrospective/32/mult_code.png";
import multTab from "../../assets/retrospective/32/mult_tab.png";
import cosmetics from "../../assets/retrospective/32/early_cosmetics.png";
import tree from "../../assets/retrospective/32/tree_preview.png";
import CaptionedFigure from "../common/CaptionedFigure";
import TwoColumn from "../../common/TwoColumn";

const DevlogEntry = () => {
  return (
    <>
      <div>
        <h3>Pelle Navigation</h3>
        This was the first feature implemented during the final part of development and it was
        arguably the only <i>required</i> one. Celestial Navigation was mostly an afterthought to many
        of us, but we couldn&apos;t release the game quite yet - Navigation would&apos;ve otherwise ended
        most of the way through Lai&apos;tela&apos;s content.
        <br />
        <br />
        The actual mechanics of Pelle had been finalised shortly after I left the server almost
        half a year beforehand, but nobody had touched Navigation at all. This may have been
        partially because Garnet was the one who wrote the vast majority of its code - it was
        somewhat obtuse, and he was long gone and unavailable to ask for help. I took it upon
        myself to sort through and figure out what was going on in there so that it would
        actually get done.
        <br />
        <br />
        Hevi had an idea for what he wanted - a five-spoked spiral, one for each rift. The only
        arc-drawing functionality we had was a logarithmic spiral segment with unclear input
        parameters, and using circular arcs for the spokes looked strange. Regardless, I managed
        to cobble something together for the rifts and an additional really huge spiral for when
        the Galaxy Generator is unlocked.
        <br />
        <br />
        <div className="c-figure-group">
          <div className="c-figure-row">
            <CaptionedFigure
              containerClass="c-single-figure--small"
              imgPath={celnav}
              caption={`An earlier sample of Pelle's Celestial Navigation while it was
                being worked on. The icon in the center was initially a galaxy emoji before
                we realised that it didn't have spiral arms on some browsers.`}
            />
            <CaptionedFigure
              containerClass="c-single-figure--small"
              imgPath={sigil}
              caption={`The Pelle sigil that Jazz and Mirai decided upon together.`}
            />
          </div>
        </div>
        <br />
        As a finishing touch, Jazz worked together with one of the community artists (Mirai) to
        produce an intricate sigil for Pelle. I laid out a basic framework for more detailed
        composite shapes, although it was only used for this and a &quot;custom&quot; galaxy symbol on the
        main Pelle node due to browser-dependent font rendering issues. The Pelle sigil was
        added to the background of the entire Navigation page, slowly getting drawn in as
        the game approaches its ending.
        <br />
        <br />
        The <a href="https://github.com/IvarK/AntimatterDimensionsSourceCode/pull/2921">Pull Request
        for this feature</a> was a large collaborative effort amongst Jazz, Scar,
        Hira, and me, with art credit going out to Mirai&apos;s work.

        <h3>Multiplier Tab</h3>
        The second feature was one which had been mentioned here and there during development
        that I seriously wanted in the game - the multiplier tab. The only other person who
        seemed similarly enthusiastic about it was Iker, whose activity was intermittent at
        the start and nearly non-existent by the time I returned from completing my degree.
        <br />
        <br />
        <TwoColumn
          leftWeight={9}
          rightWeight={5}
          leftBorder={true}
        >
          <CaptionedFigure
            imgPath={effects}
            caption={`An example in the code of how inconsistently all of our various effects
              were applied.`}
          />
          <>
            Unfortunately this meant
            that <a href="https://github.com/IvarK/AntimatterDimensionsSourceCode/pull/1714">the
            old branch which Iker was working on for this feature</a> was effectively abandoned.
            I really wanted this feature in the game, not only because I thought it was a cool
            concept, but also because it was a potential solution to a problem many large-number
            incrementals can fall prey to. When numbers get large and numerous enough, it starts
            getting difficult to see which game mechanics are relevant and which aren&apos;t; the
            multiplier tab would split up everything and present them in a way that made it clearer
            how much each bit was contributing.
            <br />
            <br />
            Iker had been talking together with Razen about how to best structure the code with
            the multiplier tab in mind, and it seemed like every time the conclusion was the same.
            We either needed a much higher degree of standardisation for all the game&apos;s effects
            in order to dynamically determine the multiplier structure, or we&apos;d have to
            effectively input every formula change and adjustment <i>twice</i> - once for the actual
            game and once for the multiplier tab.
          </>
        </TwoColumn>
        <br />
        I considered the fact that we were done with balancing and making content and simply
        took the second option - I copied every relevant formula and effect into a new part
        of the game&apos;s already-existing &quot;Game Database&quot; object. Individual effects were
        hardcoded copied data, which were put together into a tree structure as dynamically
        as was feasible before the game presents it to the player as a set of nested collapsible
        boxes. This approach was clearly not future-proofed, but we were well past adding new
        mechanics and upgrades ourselves.
        <div className="c-centered-img">
          <CaptionedFigure
            imgPath={multTab}
            caption={`An image of the multiplier tab, with upgrades expanded out with many layers
              of depth to show off functionality.`}
          />
        </div>
        There were a few deliberate omissions or strange-looking decisions we had to make
        for this feature:
        <ul>
          <li>
            The logic behind how we split up Tickspeed into upgrade count and galaxies was
            questionable at best, as it was the only case that one effect was getting raised
            to the power of another.
          </li>
          <li>
            Multipliers couldn&apos;t be reasonably broken down while under a dilation effect
            due to the fact that effect values don&apos;t combine the same way under a dilation-type
            nerf; <b>A</b> times <b>B</b> under dilation isn&apos;t the same
            as &quot;dilated <b>A</b>&quot; times &quot;dilated <b>B</b>.&quot;
          </li>
          <li>
            A few effects couldn&apos;t fit into this visualisation at all and just got ignored,
            such as the AD multiplier which is unaffected by Dilation.
          </li>
          <li>
            There is no breakdown for galaxy count because Replicanti galaxies actually stack
            extremely weirdly in a way that game balance relies on, and we didn&apos;t want
            to draw attention to that.
          </li>
        </ul>
        <a href="https://github.com/IvarK/AntimatterDimensionsSourceCode/pull/2988">Finalising
        the code to be added to the game</a> was largely amongst Dan, Hira, and I for this feature.
        It ended up having a few rounds of bug reports and PRs later on after it was initially merged,
        because the hardcoded copy-paste approach missed a few edge cases.

        <h3>Glyph Cosmetics</h3>
        <TwoColumn
          leftWeight={2}
          rightWeight={1}
          rightBorder={true}
        >
          <>
            The last feature was an extension of the optional &quot;premium&quot; features which cost
            actual money to purchase. The idea mainly belonged to Hevi and Jazz, although we quickly
            realised it would be more conducive to make a group chat to discuss the details together
            instead of constantly relaying messages to each other. We brought Dan along too, as he had
            some interest in the feature as well.
            <br />
            <br />
            This cosmetics system added a new purchase where you could get &quot;Glyph cosmetic
            sets.&quot; Each set contains a handful of symbols and border/background colour combinations,
            which you could use for reskinning your Glyphs. You could do so entirely independently,
            taking symbols and colours from multiple different sets (or the defaults), and the game would
            even allow you to apply a specific appearance to individual Glyphs if you wanted.
          </>
          <CaptionedFigure
            imgPath={cosmetics}
            caption={`An early prototype of the Glyph appearance customization interface.`}
          />
        </TwoColumn>
        <br />
        There were a few ideas that Dan, Jazz, and I discussed in terms of allowing the player to
        eventually get all the cosmetic sets for free, including something about a &quot;lootbox to
        give a random set&quot; and adding an additional mechanic that would allow &quot;recycling
        lootboxes&quot; with a not-so-obvious interaction that would eventually let you get all sets.
        After some confused discussions, we decided that we were overcomplicating things and went with
        allowing the player to have one set of their choice after finishing the game. This set would
        persist if you went through and completed it again and again, so eventually getting all
        sets &quot;simply&quot; meant beating the game 35 times.
        <br />
        <br />
        Besides the new options menu that needed to be made, this required a fairly substantial rewrite
        of how Glyph rendering worked. We deemed this necessary because while we didn&apos;t balance
        the game around anything requiring real money, this feature would in principle use it and we
        wanted to put in a good amount of care into making it reasonably robust. In addition to the four
        of us in that brief group chat, Lars and Hira contributed
        by <a href="https://github.com/IvarK/AntimatterDimensionsSourceCode/pull/3187">reviewing the
        feature</a> before it was merged in.

        <h3>The Final Stretch</h3>
        <TwoColumn
          leftWeight={1}
          rightWeight={2}
          leftBorder={true}
        >
          <CaptionedFigure
            imgPath={tree}
            caption={`The Study Tree visualizer`}
          />
          <>
            In the middle of all these new things, Scar implemented a really nice-looking Time Study tree
            visualiser inside the import modal. The rest of us (mostly Hira, Dan, Lars, and I) worked
            through and fixed most of the other outstanding bugs. Everything else that went unfixed before
            release was either declared out of scope (due to not adding any more content) or too
            difficult/impractical to properly fix.
            <br />
            <br />
            Some time in early November 2022, Hevi announced that there would be one final sanity check for
            the game. He notified all the testers on Discord, saying that for anyone still around, the game
            would be getting released soon and this would be the last time to test things. Since content had
            already been checked for pacing very recently with the unofficial 4th wave, this was largely just
            to make sure that everything still worked in general.
            <br />
            <br />
            This retest was done under the premise that it was okay to use a few specific dev testing functions
            to artificially speed up or time-skip the game - as long as only those functions were used, it
            would effectively be indistinguishable from actually waiting for long periods of time. When that
            was done, we did <a href="https://github.com/IvarK/AntimatterDimensionsSourceCode/pull/3208">a final
            cleanup PR</a> to remove most of the dev debugging tools and anything else which would never be
            used post-release.
          </>
        </TwoColumn>
        <br />
        For as long as the game&apos;s community existed, it was a running joke that the next game update would
        always occur &quot;in 5 hours.&quot; Hevi thought it would be fun to post &quot;5 hours&quot; in
        the <b>#development</b> channel, 5 hours before the actual release. Then he followed it up
        with &quot;4 hours&quot; exactly one hour later, heavily implying that it was more than just the same
        joke the server had heard thousands of times before.
        <br />
        <br />
        <b>
          True to his word, 4 hours later at 15:01 UTC on December 17, 2022, he officially released
          the Reality Update for Antimatter Dimensions to the public.
        </b>
      </div>
    </>
  )
}

export default DevlogEntry;
