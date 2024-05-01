import cel6 from "../../assets/retrospective/10/prototype_Laitela.png";
import cel7 from "../../assets/retrospective/10/prototype_Pelle.png";
import shop from "../../assets/retrospective/10/shop_tab.png";
import vGoals from "../../assets/retrospective/10/V_difficulty.png";
import reactivity from "../../assets/retrospective/10/reactive.png";
import CaptionedFigure from "../common/CaptionedFigure";
import TwoColumn from "../../common/TwoColumn";

const DevlogEntry = () => {
  return (
    <>
      <div>
        <h3>A Fake Update</h3>
        April Fools&apos; Day had arrived and we were nowhere near being able to release the Reality Update
        like we had jokingly hoped to. Instead we did a fake update on April 1st which was unofficially
        called the SHAME update. 
        <br />
        <br />
        It didn&apos;t add anything beyond a snarky joke about a sense of pride and accomplishment and an
        import code which applied a global 10x slowdown to game speed. We reverted this &quot;update&quot;
        a few days later, with the only hints of it ever happening being a Secret Achievement named SHAME
        ON ME.

        <h3>The Last Two Celestials</h3>
        <TwoColumn
          leftWeight={2}
          rightWeight={3}
        >
          <img src={cel6} className="c-inset-img" />
          <img src={cel7} className="c-inset-img" />
        </TwoColumn>
        A very bare-bones version of the 6th Celestial (Lai&apos;tela, The Celestial of Dimensions) was added
        to the game, with the main idea being a set of four new Dimensions which produced resources on a
        slower interval. All of the surrounding mechanics which these new Dimensions were meant to feed into
        and interact with were at best... confused and unorganized for a while.
        <br />
        <br />
        Hevi then got started on content for the final Celestial (Pelle, The Celestial of Antimatter), with the
        general idea that its Reality would remove just about everything that counted as an upgrade or boost.
        This initial version never went any farther than &quot;you can only do every type of prestige once,&quot;
        although you were allowed to freely exit and enter its Reality.

        <h3>Another Shop</h3>
        <div className="c-centered-img">
          <img src={shop} className="o-small-center-img" />
        </div>
        The pre-Reality version of the game on Kongregate already had an In-App Purchase system using Kreds,
        but Hevi wanted to expand it since the preferred place to play the game is on the official GitHub
        webpage. This system was a set of permanent upgrades purchasable with a currency only obtainable
        through spending real money, although these upgrades would stay even after a complete game reset.
        The currency was given the (crass) name of STD Coins, short for &quot;Support The Developer&quot;
        Coins.
        <br />
        <br />
        Perhaps unlike some other games out there, these paid upgrades were pretty much immediately forgotten
        about and rarely ever addressed throughout playtesting. As a result, the game was written
        and balanced entirely without considering a &quot;pay-to-win&quot; approach, and in fact some of
        the upgrades are pointlessly weak for most of the game.

        <h3>Shifting Balance</h3>
        Perk Shop upgrades were uncapped in the initial implementation, which was an issue because
        progression post-Teresa was getting trivialized by a handful of people who had done 50k+ realities
        and had way more upgrades than others. This was a fairly big motivator for capping the Perk Point
        Shop and then (much later down the line) offering a different upgrade which raised these caps.
        <br />
        <br />
        <TwoColumn
          leftWeight={1}
          rightWeight={2}
          rightBorder={true}
        >
          <>
            Dan started testing through V and found that, while he believed the overall concept was solid,
            it needed quite a few fixes and changes:
            <ul>
              <li>
                Doing V-achievements was useless until you had 6 of them, at which point you got your first
                extra Time Study - and all your options for the first extra study were incredibly weak.
              </li>
              <li>
                Running Man (complete all Eternity Challenges within X seconds) was effectively free with
                the fast automatic Eternity Challenge upgrade.
              </li>
              <li>
                Matterception was weird to even attempt because the only way to enter an Eternity Challenge
                and Time Dilation simultaneously was to enter the challenge while already in Dilation, but
                also while not having enough IP to eternity.
              </li>
              <li>
                The whole Celestial was generally way too easy and gave roughly a third of all V-Achievements
                almost immediately.
              </li>
            </ul>  
          </>
          <CaptionedFigure
            imgPath={vGoals}
            caption={`A snippet of code changes showing just how much V's goals needed to be increased`}
          />
        </TwoColumn>
        <br />
        Dan moved the very first step of the V unlock to an achievement only attainable within
        Nameless, which technically meant that it was possible to start on V before actually completing
        Nameless. (This wasn&apos;t a concern in practice because V&apos;s initial unlock was too difficult
        to complete without the Nameless reward.) He then ended up&nbsp;
        <a href="https://github.com/IvarK/AntimatterDimensionsSourceCode/pull/535">rebalancing V</a> and
        fixing all the problems he mentioned.
        <br />
        <br />
        He was mostly satisfied with the rebalance and started doing the same with Ra as well, but that
        part of the game was a lot harder to fix as RM was inflating very strongly and charged Infinity
        upgrades were too powerful.

        <h3>Various Small Changes</h3>
        Tickspeed wasn&apos;t retroactive/dynamic at this point yet, which is to say - the numerical value
        of Tickspeed only ever updated when a galaxy or Tickspeed upgrade was <i>purchased</i>. This started to show
        up more and more as inexplicable drops in production and messed with the process of balancing new mechanics.
        A surprising number of inconsistent bugs disappeared once we made it update continuously every game tick.
        <br />
        <br />
        Razen made a reactivity safeguard which still exists in the final version of the game. Vue reactivity is
        very important for a responsive interface, but it incurs a notable performance decrease at large scale. While
        this checker was also technically a performance hit, it was still significantly less than what would result if
        the entire save file was made reactive. He continued on to add a few other safeguards, such as a checker for
        if anything became <span className="o-code-text">NaN</span> or <span className="o-code-text">Infinity</span>.
        <div className="c-centered-img">
          <img src={reactivity} className="o-small-center-img" />
        </div>
        Present-day modders who have added or are currently adding content to the completed game often run into these
        checkers and call them very annoying safeguards - but the fact is that they ended up being extremely helpful
        in development because they would almost always trigger as a side effect from something breaking. All of the
        safeguards would then halt the game and intentionally throw an error which would tell us exactly where
        the bad code was.
        <br />
        <br />
        Hevi started replaying the game from the very beginning, redoing the visual design on the whole
        interface for the Modern UI theme. Omsi and Garnet also joined in on properly polishing it up for
        use, and Razen&apos;s general behind-the-scenes work on refactoring the UI to be Vue-based meant
        that many of the subtabs beyond the Dimensions subtabs didn&apos;t actually need two separate versions.

        <h3>Dev Fatigue</h3>
        It was becoming more common for people to discuss the idea of more playtesters, but the general
        opinion was that the game was still too unpolished for them to be particularly useful. Everyone
        agreed that above all else, the Automator needed a drastic improvement before we brought on new people.
        <br />
        <br />
        Conversations about the state of the update and team in general started coming up more and more:
        <ul>
          <li>
            Most of the active devs realized that developing the game was starting to cut into coursework,
            job productivity, and/or sleep
          </li>
          <li>
            A lot of the testers expressed dismay about how it seemed like progress had gone nowhere in the
            past few months
          </li>
          <li>
            We considered releasing the update &quot;early&quot; or split up so that we
            didn&apos;t have to spend another year or more on it, but we already announced 7 Celestials and
            that this was the final update - an announcement we found out nobody wanted to go back on.
          </li>
          <li>
            The game itself still required a significant amount of polish overall, as many mechanics were
            still completely unexplained in-game
          </li>
        </ul>
        Garnet, Dan, and I agreed that the initial sloppiness of Glyph effect formulas was by far the
        main contributing factor to not only the poor balancing, but also some fairly severe development
        fatigue. We also all expressed, in some way, that given an ideal world and limitless time, we&apos;d
        completely rewrite every single Glyph effect formula to be more future-proof. This came out of an
        incredibly mathy conversation which spanned almost a week on and off amongst everything else, which
        led us to conclude that the game balancing was mathematically way sloppier than any of us liked...
        but because we were so far in, our hands were effectively tied since none of us wanted to do a
        rewrite of the entire Reality Update.
        <br />
        <br />
        From this conversation, we also found out that one of the old time Glyph effects was fundamentally
        overpowered in a  way which we couldn&apos;t counter-nerf - it was an effect which reduced the
        multiplier between free Tickspeed upgrades from Time Dimensions. It was scrapped and replaced with
        an eternity count multiplier, but this would eventually come back to bite us when we found out that
        completing Nameless&apos; Reality relied on the old Glyph effect.
        <br />
        <br />
        Over the next month or so testing drastically slowed down as a bunch of us needed to take breaks
        for various reasons:
        <ul>
          <li>
            <b>Razen</b>: Restructuring the Automator parsing caused a fair bit of burnout for him; for a
            while he went to the background and prioritized code format cleanup and standardization.
          </li>
          <li>
            <b>Garnet</b>: Between working on the Automator and the new UI, he was starting to feel
            overwhelmed and many of us suggested he take a break considering all he&apos;d done recently.
          </li>
          <li>
            <b>Dan</b>: He believed that a lot of the objections he raised about balancing fell on deaf
            ears since they rarely got directly addressed. Also, he wanted to rework Ra after rebalancing V,
            but it ended up being a lot more drawn-out and complicated than expected, and he didn&apos;t
            want to &quot;keep coding the update until 2020.&quot;
          </li>
          <li>
            <b>Me</b>: I had been slacking on my Physics research somewhat and it was starting
            to catch up to me, and additionally I had a conference coming up which I was trying to get
            meaningful results for.
          </li>
        </ul>
        However, things would end up picking up again after everyone took a break for a few weeks. Next entry,
        we&apos;ll be getting into the month of Garnet&apos;s Automator overhaul and my complete rewrite
        of Ra&apos;s mechanics.
      </div>
    </>
  )
}

export default DevlogEntry;
