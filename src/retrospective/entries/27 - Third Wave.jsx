import list from "../../assets/retrospective/27/AP_list.png";
import set from "../../assets/retrospective/27/old_set_preview.png";
import CaptionedFigure from "../common/CaptionedFigure";

export const Wave3Test = () => {
  return (
    <>
      <div>
        <h3>Fairly Polished</h3>
        After the first few days, it was clear that the experience of the 3rd wave was <i>not</i> going to be
        riddled with random bugs and crashes. Our goal was that the game was more or less complete
        (except Pelle) by the time the 3rd wave started, and that was pretty much the case when it came
        to game mechanics.
        <br />
        <br />
        Instead, what we ended up getting as feedback was numerous smaller UI/UX tweaks and suggestions,
        many of which were added to the game within a few days. We once again promoted the idea that the
        testers should be very picky with how the game feels, down to the level of suggesting improvements
        for minor inconveniences like having to switch tabs a lot.
        <br />
        <br />
        There were, of course, small text inconsistencies and 2-3 pixel misalignments that slipped through
        the cracks which the new testers found and reported too. I think that overall this attention to
        detail contributed a lot towards the fact that, in my opinion, the interface and UX of the game
        upon release was way smoother than many other incremental games out there.

        <h3>A Large Pool</h3>
        We had a huge amount of variation across all the 3rd wave testers:
        <ul>
          <li>
            Two people approached the update with almost a speedrunner mindset, a few who were forced to
            be more idle on account of having a busy job or lots of coursework, and we had basically
            everything in between. 
          </li>
          <li>
            Due to the size of the team now, we basically had complete time zone coverage and the new
            channel was more or less continuously active for the first few weeks.
          </li>
          <li>
            A few people were more comfortable keeping to themselves and not being too involved in the
            test discussion; they were however still very responsive when directly prompted for feedback
            in the testing channels or in DMs.
          </li>
        </ul>
        Needless to say, having such a large 3rd wave was overall a huge benefit. The game got by far
        the widest spread of testing this round in terms of activity and playstyles this wave.
        <br />
        <br />
        Looking back on it, probably another reason why we were so hesitant to have large early waves
        was because the community used to be very small; we simply didn&apos;t have many options to
        choose from. But now the Android version of the game had been out for a couple years, and the
        community had vastly grown as a result. In fact, many of the 3rd wave testers originally found
        the game through the Android version rather than the web version.

        <h3>Automator Points</h3>
        When the 3rd wave started, the unlocking condition for the Automator was simply completing 5
        realities, and it would immediately give you full functionality for everything you unlocked.
        A lot of feedback led us to realise that this was problematic:
        <ul>
          <li>
            It was overwhelming to a lot of new testers, especially to those without programming
            experience.
          </li>
          <li>
            Many felt it unlocked too early; at 5 realities, a lot of testers felt obligated to
            immediately put huge efforts toward automating 60 Eternity Challenges one-by-one
            with precise conditions tailored to their specific game state.
          </li>
          <li>
            This was then often followed up by feeling like they wasted their time, since
            often scripts were shortened by 40-90% with just a few more realities worth
            of upgrades.
          </li>
          <li>
            There was the expectation that post-release people would want to copy-paste other
            Automator scripts. A set-and-forget script is a lot harder to write at 5 realities
            since it would depend heavily on other factors like upgrades, perks, or Glyphs.
          </li>
          <li>
            Earlier scripts are generally significantly longer, and we wanted to cut out save
            bloat whenever possible due to Cloud storage costs.
          </li>
          <li>
            There was one particularly memorable time when one of the new testers, Hira, set
            out to write such a &quot;master script&quot; that did everything it could, assuming
            minimal other progression. The result was a single script which had 2557 lines,
            59,634 characters - large enough that it took up more than 2/3 of the savefile back then.
          </li>
        </ul>

        <div className="c-centered-img">
          <CaptionedFigure
            imgPath={list}
          />
        </div>

        Our solution to this was an unlock system where you needed a total of 100 &quot;Automator
        Points&quot; (AP) in order to unlock the Automator. We then made it so that unlocking the
        black hole, getting certain upgrades/perks, or simply completing more realities all gave
        you AP as well. We were careful in the balancing of how AP values were assigned:
        <ul>
          <li>
            AP was only given by things which already improved automation in general, whether
            that meant that it would simplify script-writing or it was required to fill in a
            gap that the Automator didn&apos;t cover.
          </li>
          <li>
            Point values were fairly even across the board, with most things only giving 5-10 AP,
            meaning that you had to get a lot of them in order to get 100 total.
          </li>
          <li>
            While you only needed 100 AP, there was a <i>total</i> of 400 AP available; we didn&apos;t
            want the player to feel like they had to go any particular direction with their
            progress or derail their plans in order to get the Automator.
          </li>
        </ul>
        There was some disagreement about the change, since this moved the unlock from 5
        realities to something closer to 15-20. The pushback however was heavily skewed
        towards people who had prior programming experience, and there was some degree of the
        complaints happening because it was functionally a nerf. However, the fact that at
        least half of the wave 3 testers said that it was very overwhelming and/or tedious before
        the change made us feel like it was more worth it overall.

        <h3>Missing Functionality?</h3>
        I&apos;m not sure if there will be a better point to mention this in the future, so I might as
        well mention it now - at this stage of development it was still unclear if we were going to have
        a New Game Plus/Minus system where you could play <i>the entire game</i> again with a minor boost or
        penalty. The Automator was something occasionally brought up here; if you had to play through again,
        some of us hoped the Automator would automate the game in its entirety from start to finish, letting
        you do repeat playthroughs entirely hands-off.
        <br />
        <br />
        This would&apos;ve added a significant amount of extra work in terms of additional commands and
        testing, and was ultimately irrelevant because we scrapped the entire NG+/- concept before release.
        However, these conversations often pointed out that the Automator is by no means complete and is in
        fact missing a lot of functionality which is only covered by features in other parts of the game.
        <br />
        <br />
        It was a questionable decision depending on who you ask, but it was very much intentional. We never
        intended for the Automator to do everything on its own - it was simply never a design target when
        we already had various essential pieces of automation given elsewhere.

        <h3>Broke It</h3>
        We weren&apos;t entirely bug-free, as there were two notable instances of people stumbling across
        serious bugs. Thankfully, due to our insistence on making frequent backup saves, at most only
        a few hours were lost in both cases.
        <br />
        <br />
        The first case was relatively mundane - in between a few bugfix branches, a console crash slipped
        through and the first tester to experience it also had some programming experience as well. They
        attempted to debug it themselves and stumbled across a save property
        called <span className="o-code-text">player.devMode</span>, which they toggled on to see if it
        would help.
        <br />
        <br />
        That feature turned out to do nothing else but make every single subtab accessible... which
        irreversibly bricked his save because many later tabs were performing checks on resources
        which weren&apos;t initialised through proper progression. We removed
        the <span className="o-code-text">devMode</span> functionality, as it apparently wasn&apos;t made
        with a broad understanding of the game&apos;s behaviour in mind and would largely only serve
        to break people&apos;s saves.
        <br />
        <br />
        The second case was more serious. One of the new testers on speedrunner pace had just entered
        Nameless&apos;s Reality for the first time and they weren&apos;t entirely convinced that the
        game was behaving correctly. Due to our particularly strong information restriction around
        that part of the game, what ended up happening was that I got a message out of the blue
        from them, asking if they could screen-share their game just to be sure.
        <br />
        <br />
        I was, at the time, casually playing games with some of the other testers when this happened,
        and we all hopped into the tester-exclusive voice channel together. It turned out that a
        refactor to standardise resetting functions went wrong, allowing you to complete an Infinity
        inside of Nameless despite not reaching the goal of 1e1e15 antimatter, which would then
        proceed to give you 1e9e15 Infinity Points and immediately unlock Imaginary Machines - a
        mechanic which was 2 Celestials later.
        <br />
        <br />
        The other testers were amused at how suddenly this popped up overall, and apparently this
        was one of the most enjoyable bug reports they experienced even if they wouldn&apos;t know
        the specifics until they reached the content themselves. Luckily they only lost at most
        half a day of progress, and the laughs we had were all in good fun.

        <h3>Other Various Changes</h3>
        
        <div className="c-entries-columns">
          <div className="c-col-wide">
            We made a bunch of smaller, less notable changes from feedback:
            <ul>
              <li>
                The perk tree was given preset positions and the ability to disable physics. One common
                thing across all tester waves was a large amount of amusement from playing around with
                the perk tree, which we used
                the <a href="https://visjs.github.io/vis-network/docs/network/index.html">Vis Network</a> library
                for.
              </li>
              <li>
                Cloud save conflict tracking and a broad &quot;progress comparison&quot; code was added to
                determine if it was safe to overwrite data. This ended up having enough weird edge cases
                that we&apos;d be chasing down bugs for this for a while.
              </li>
              <li>
                A modal to display groups of Glyphs was made. A large amount of motivation to make this
                was to make it easier for players to share a set of Glyphs, whether it was a set to use
                or a set of choices for next Reality. Omsi massively improved the layout after my
                initial prototypes.
              </li>
              <li>
                Many of the older testers, mainly the two writers of the game (Jazz and Saturnus) and a
                few of the 2nd wave testers, together drafted up the missing in-game lore for
                Celestials 4-6.
              </li>
            </ul>
          </div>
          <div className="c-col-narrow--borderless">
            <CaptionedFigure
              imgPath={set}
              caption="An old prototype of the Glyph set modal"
            />
          </div>
        </div>

        <h3>New Developers</h3>
        Out of all the new people in the 3rd wave, 6 of them wanted to help with coding the game
        after they reached the unblinding point. Two of them (Hira and Scar) would then go on to
        become regular (and extremely helpful) code contributors from then on, until the release
        of the game.
        <br />
        <br />
        <i>
          The experience of the 3rd wave testers was very exciting and by far the most varied we
          had seen through the game. Due to differing pacing, testing happened over a more extended
          period this time; this entry stops somewhere in the middle of it. It looked like everything
          was going very smoothly, but for the developers it was anything but. Next week, we&apos;ll
          see the other side of &quot;the wall&quot; - what was happening in the old tester and
          patch development channels.
        </i>
      </div>
    </>
  )
}

export default Wave3Test;
