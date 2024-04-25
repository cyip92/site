import studies from "../../assets/retrospective/29/invalid_studies.png";
import template from "../../assets/retrospective/29/script_template.gif";
import glyphSac from "../../assets/retrospective/29/glyph_sac_pre-nudge.png";
import celnav from "../../assets/retrospective/29/3d_pen_celnav.png";
import CaptionedFigure from "../common/CaptionedFigure";

const DevlogEntry = () => {
  return (
    <>
      <div>
        <h3>Slightly Broken</h3>
        All throughout developing the update, ever since before the <i>first</i> wave, there was
        one game mechanic which never behaved entirely correctly. It always had some amount
        of instability, strange display bugs, weird edge case behaviour, or messy special cases
        in the code, but it never got bad enough to warrant focused attention over other things.
        This mechanic was the Time Study tree.
        <br />
        <br />
        By the time we added Space Theorems and Triad Studies, the code had gotten to the point
        where it was full of band-aid fix after band-aid fix. Normal Time Studies, Eternity
        Challenge Studies, Dilation Studies, and Triad Studies all had almost entirely different
        internal structures and all the logical checks which were sloppily glued together due to
        a lack of standardisation.
        <br />
        <br />
        <div className="c-entries-columns">
          <div className="c-col-wide">
            As people in the 3rd wave reached and passed through V, they found more and more of these
            weird edge cases and odd display bugs, as well as a few instances where Time Study trees
            would simply fail to import Triad or EC studies altogether or deduct the wrong amount of
            Space Theorems when imported.
            <br />
            <br />
            It got to the point where it was a better idea to rewrite all of the Time Study logic
            rather than continuing to patch up all of the weird behaviour which kept sneaking through.
            Time Studies are a general core mechanic that affects basically everything in the game, so
            it was a fairly involved rewrite. I worked together on it with one of the new testers,
            Vnge, and he did a very good job at catching bugs and reviewing it as it was coming together.
          </div>
          <div className="c-col-narrow--borderless">
            <CaptionedFigure
              imgPath={studies}
              caption="This detailed info was basically impossible to do before the rewrite"
            />
          </div>
        </div>

        <h3>Script Templates</h3>
        In a further attempt to make the Automator more approachable to non-programmers, I made a
        new feature called Automator templates:
        <ul>
          <li>
            The goal of this feature was to add an option for players who wanted a set-and-forget
            solution to the Automator, but for whatever reason, didn&apos;t want to look for and
            copy-paste someone else&apos;s script.
          </li>
          <li>
            Automator templates were a set of effectively pre-written script segments that the
            game would create for you to paste into the script editor.
          </li>
          <li>
            These script segments would be generated based on user input, meaning that the player
            could use their own Time Studies or configure it to stop whenever they want.
          </li>
          <li>
            Warnings would pop up when generating templates for the more common edge cases that
            people might not notice, potentially reducing headaches from debugging.
          </li>
        </ul>
        Script templates were, in effect, dumbed-down functions that you could copy-paste into the
        Automator. I&apos;m unsure how helpful this feature was in the grand scheme of things, but
        at least the idea was there and perhaps it helped a few people.
        <div className="c-centered-img">
          <CaptionedFigure
            imgPath={template}
          />
        </div>
        On the backend this relied heavily upon the Time Study refactor mentioned earlier, because
        previously all of the game-checking logic relied on the game&apos;s <i>current</i> state and
        was crammed into a single function for importing Time Study strings. All it would do was
        attempt to buy all the studies sequentially and silently fail to buy any inaccessible ones,
        which was okay for basic functionality and gameplay but useless for anything requiring more nuance.
        <br />
        <br />
        However it was impossible to do any kind of structure verification unless you cared about the
        game <i>right this instant</i>. Due to the preemptive debugging we wanted to add, the game now
        had to do all that verification on a different game state, which meant the aforementioned
        Time Study refactor was essential to get this feature to be usable.

        <h3>&quot;Complete&quot; Automation</h3>
        I believe script templates were the last significant thing added to the Automator before release.
        We still had lots of bugs to fix, but it was basically done otherwise. The functionality
        of the Automator was in an odd middle ground where it felt powerful enough to do most of the
        things necessary in the game, but was still very lacking in capability compared to a
        full-on programming language.
        <br />
        <br />
        Later on we would end up entirely removing the ability to define variables within scripts,
        separating it out into its own dedicated panel. This vastly simplified the backend program
        flow because it was full of odd special cases for the <span className="o-code-text">define</span> command,
        but was yet another step towards it not being an actual programming language since the concept of
        a variable no longer existed - you could only define shorthands for <i>constant</i> values.
        <br />
        <br />
        In addition to leaving out some game mechanic automation, it was also an intentional choice to
        leave out some <i>programming</i> functionality in order to reduce development workload. There
        were still no classes, functions, mathematical operations, or variable reassignments allowed in
        the Automator. We figured that if it&apos;s far enough away from a programming language,
        programmers won&apos;t be expecting that level of functionality and non-programmers
        might find the reduced complexity more approachable.

        <h3>Continued Frustrations</h3>
        New Year 2022 was approaching and we wanted to do an official development update about Automator
        templates to celebrate. I ended up getting into another argument with the new dev when I showed
        a gameplay video I wanted to add with the post itself. In this case it was because the video
        in question had a few extra things in the UI which revealed the existence of a second black hole.
        <br />
        <br />
        My view on it was the same as it had been for all the other reveals we had done up to then - a
        tiny bit of extra information is a nice easter egg to include for the attentive. Their stance
        was that it was an unnecessary bit of information that detracted away from the main point, and
        that I had to remake the video to exclude it. A few others chipped in about how, while it
        technically reveals information, it&apos;s information which you have immediate access to upon
        opening the game anyway and so it was probably fine.
        <br />
        <br />
        Once again, the debate got heated and they started pulling up messages from old conversations which
        backed up their side... from multiple years ago, before they were even part of the team. They were
        going fully into maintaining strict information control, as they had been for the entire duration
        of the 3rd wave, and we knew how everyone involved viewed <i>that</i>.
        <br />
        <br />
        I was of the firm belief that the culture of the team and its view on reveals had changed since
        then, but of course it wasn&apos;t my decision alone to make. I held a vote for what should be
        done with the video, and the results were 8-2 in favour of keeping the video as-is. It was
        posted without changes, but the fact that the argument went this far before a decision was
        not a good sign.

        <h3>Minor Things</h3>
        There were a few other somewhat notable things that happened, but not with enough detail or
        content to really warrant dedicated sections:
        <div className="c-entries-columns">
          <div className="c-col-wide">
            <ul>
              <li>
                One of the new testers, GirixK, got a 3D printing pen and wanted to test it out on
                something. They considered a blob, but then thought that something made of lines would
                be better and decided to draw out Celestial Navigation.
              </li>
              <li>
                The iM upgrade which set Glyph sacrifice totals to 1e100 showed us that some of the effect
                values were weird numbers. This set off a series of &quot;cap-nudging&quot; changes where
                we slightly altered formulas across the game so that their final values were nice round
                numbers. We then found out that infinity sacrifice couldn&apos;t be nudged above x19
                due to how sensitive balancing is on it.
              </li>
              <li>
                We made a dedicated Speedrun mode which was just the regular game with some timing
                milestone tracking. Another of the new testers, Lars, was heavily involved due to
                already being involved in the game&apos;s speedrunning scene for pre-Reality. He
                also ended up working on a ton of stuff which will show up in the next entry as well.
              </li>
            </ul>
          </div>
          <div className="c-col-narrow--borderless">
            <CaptionedFigure
              imgPath={glyphSac}
              caption="The previous values at the cap, which also only got applied to the basic 5 types back then"
            />
          </div>
        </div>
        <div className="c-centered-img">
          <div className="o-small-center-img">
            <CaptionedFigure
              imgPath={celnav}
              caption="GirixK's printed version of Celestial Navigation"
            />
          </div>
        </div>

        <h3>Making A Statement</h3>
        The arguments kept getting worse, and eventually it got to the point where I couldn&apos;t
        just sit there and do nothing about it. So, I posted a very long-winded message that said
        I was frustrated about the state of development due to the following:
        <ul>
          <li>
            The new dev would only consider other viewpoints when given objective proof, something
            which rarely exists for UI/UX. That was almost all of what we were working on, now
            that content was nearly finished.
          </li>
          <li>
            They often left reviews which were irrelevant nitpicks, on Pull Requests they
            weren&apos;t even requested as a reviewer on. Occasionally they even straight-up said
            some code changes were bad and should be reverted, with no elaboration. This was
            pushing away some new potential long-term devs from the 3rd wave.
          </li>
          <li>
            It was becoming a trend that they would only stop arguing when an overwhelming
            majority of people was against them. It became more necessary to get the rest
            of the team involved to reach any kind of decision, which I wanted to avoid.
          </li>
          <li>
            4 months had passed since I first pointed this out, and nothing improved about the
            arguments despite me specifically bringing up some potential ways to improve things
            moving forward. I had done this <i>multiple</i> times in the past, and each time was
            acknowledged but never acted upon on their end.
          </li>
        </ul>
        Then, I said that I didn&apos;t expect the update to be released without my continued
        contribution. I followed that up with the decision that, in order to preserve my motivation
        to actually work on the game to push it towards release, I was going to be ignoring any
        further comments or statements of any kind coming from the new dev. My reasoning was that
        if they had a legitimate complaint, they wouldn&apos;t be the only one mentioning it.
        <br />
        <br />
        Almost any metric of productivity for development can be spoofed, inflated, or otherwise
        manipulated to make someone look like they did the most, and that&apos;s not even considering
        that you <a href="https://en.wikipedia.org/wiki/Lies,_damned_lies,_and_statistics">could
        use statistical analysis or carefully limited data to cleverly reframe the situation</a>.
        The entire commit history of anything that made it into the update
        is <a href="https://github.com/IvarK/AntimatterDimensionsSourceCode">publicly
        available</a>, and you can go and see for yourself - look at the automatically-generated statistics,
        do a filtered search to see how many of the issues/PRs involve me
        (ie. <span className="o-code-text">involves:cyip92</span>), or even copy the repository and run some
        sophisticated git commands to count whatever you want.
        <br />
        <br />
        This is one of the few times in my life I would consider my arrogance to be justified by any
        reasonable metric.
        <br />
        <br />
        My whole statement became informally known as &quot;The Elephant,&quot; which created a very
        tense atmosphere within the testing channels that nobody wanted to address. This included the
        new dev, even though it directly prompted them for a response. They basically pretended it
        never happened, never referred to it, and didn&apos;t change anything about how they were
        conducting themselves.
        <br />
        <br />
        <i>
          Two weeks after this incident, I left the server and would not return until shortly after
          the game was released nearly a year later. This was largely unplanned, and a fair bit
          of stuff still got done during those weeks. Next week we&apos;ll be seeing what happened
          during then, followed by where development ended up going after I left.
        </i>
      </div>
    </>
  )
}

export default DevlogEntry;
