import doomed from "../../assets/retrospective/26/disabled_doomed.gif";
import pelle from "../../assets/retrospective/26/pelle_res.png";
import event from "../../assets/retrospective/26/automator_event_log.gif";
import blobCode from "../../assets/retrospective/26/automator_blob.png";
import blob from '../../assets/blob.png';
import CaptionedFigure from "../common/CaptionedFigure";

export const Wave3Selection = () => {
  return (
    <>
      <div>
        <h3>Cloud Saving</h3>
        Hevi implemented in-game Cloud saving, allowing you to save the game to your Google account and load
        the game data from another computer. This came somewhat out of the blue, and was primarily motivated
        by him wanting to be able to test the game both at home and during breaks at his workplace.
        <br />
        <br />
        Cloud saving for Antimatter Dimensions is done through Google Firebase, which is free but has
        limitations on how much data you can use. An app can go above the set limits, but then it&apos;s no
        longer free and starts costing more money per total GB stored. This was an already-existing feature
        for the Android version of the game, where the audience was large enough that usage was well above
        the free threshold. Therefore, we now had an additional goal to keep file sizes as small as feasible.
        <br />
        <br />
        We did what we could to reduce file sizes, most notably adding
        the <a href="https://github.com/nodeca/pako">pako compression library</a> to the codebase in order to
        do something more sophisticated than regular Base64 compression
        using <span className="o-code-text">atob()</span> and <span className="o-code-text">btoa()</span>. This
        reduced savefile sizes down to 15-20 kB, from 50-60 kB (fairly typical for larger incremental games).
        We also generally kept an eye out for opportunities to combine multiple values in sets/arrays into
        bitmasks and/or remove older save props which were no longer used.

        <h3>The Last Wave</h3>
        Shortly after finishing the code for Imaginary Machines, we decided to get some discussion going on
        a 3rd wave of testers. The state of the game at this point was almost entirely complete, except for
        Pelle. We figured that this was close enough to warrant discussing the process of bringing on more
        people, and all agreed that this would be the final wave of new testers.
        <br />
        <br />
        We made a few changes on how we determined candidates for the 3rd wave compared to previous waves:
        <ul>
          <li>
            Since this would be the last group, we were willing to take in more people than previously. This
            is partially because the previous times were often with the pretence that we&apos;d
            have &quot;another wave to bring everyone else on&quot; in the future.
          </li>
          <li>
            Considering some of the more heated debates in the past caused development to effectively halt,
            much of the team placed a higher emphasis on choosing people with the
            appropriate &quot;soft&quot; social skills to positively interact with the rest of the team.
          </li>
          <li>
            Any non-tester moderators were also given access to the test channels along with the 3rd wave; until
            this point, testing and server administrative roles had separate sets of access permissions.
            (While moderators could freely just give themselves the tester roles, they were trusted to not
            do that, and never did.)
          </li>
        </ul>
        We went back and forth on the exact number of people and eventually ended up accepting 13 applicants
        into the 3rd wave. Perhaps based on merit alone we had almost twice as many people who could&apos;ve
        been helpful testers in isolation, but based on the large applicant pool we realised that we could
        afford to be picky:
        <div className="o-quote-box">
          unknown factors are potentially scary when we have 11 people who we all seem to agree are safe picks,
          because that&apos;s enough that we don&apos;t really <i>need</i> to take the risk if the unknown factors are
          potentially a net negative
        </div>
        <br />
        I put a lot of effort in making sure that everyone&apos;s opinions were heard and, since we were able to
        be so selective, that often meant that only one or two people on the team needed to disapprove of a
        candidate for them to be removed from consideration. Most active testers were also generally very
        active in the community and knew of a person&apos;s character based on actual prior interactions
        rather than hearsay from others, which added a bit more legitimacy to these effective &quot;vetos.&quot;
        <br />
        <br />
        Interactions <i>within</i> the 3rd wave testers were also a consideration; we didn&apos;t want to
        bring on any person or groups of people who would obviously cause bickering in the testing channels.
        We were, in some senses, <i>primarily</i> choosing a sub-community who we knew would get along well
        and <i>secondarily</i> picking people based on helpfulness as playtesters. This was... controversial, as
        we&apos;ll see later on.

        <h3>Lack of Hindsight</h3>
        <div className="c-entries-columns">
          <div className="c-col-wide">
            There was a bit more development on Looping Pelle, which was mostly visual prototyping
            (which got forgotten) and some UI layout changes since the initial implementation was still
            extremely rough. The button for entering Pelle&apos;s content was still a tiny default button
            that said &quot;Doom your reality lol&quot; with no extra CSS styling.
            <br />
            <br />
            I got the chance to playtest it a bit shortly after we decided on the 3rd wave, and then ended up
            having another design conversation with Jazz about it. The brief summary is that it somehow managed
            to suffer from the same problems which plagued old versions of Ra and Lai&apos;tela - lack of player
            choice and varied pacing, along with too much automation.
          </div>
          <div className="c-col-narrow">
            <CaptionedFigure
              imgPath={doomed}
              caption={"An animation Omsi made for upgrades disabled when Doomed"}
            />
          </div>
        </div>
        <div className="c-centered-img">
          <CaptionedFigure
            imgPath={pelle}
          />
        </div>
        <br />
        Unfortunately Pelle needed more work, and it would be a fair bit of time before we actually revisited
        it. Very soon all the main devs would end up being occupied by fixing bugs and addressing feedback
        from the new testers for an extended period of time.

        <h3>Backlash</h3>
        The server atmosphere in general was very argument-heavy at the time, and a handful of people who got
        rejected for a lack of soft skills were <i>very</i> vocal about it. I had stepped down from being a
        server moderator a few months prior, largely because it felt like a thankless position that people
        would commonly blame things on, but even then many people were accusing me of &quot;choosing only my
        friends&quot; to be on the testing team. This was unfortunately muddled by the fact that as soon
        as we started, a few of the older testers treated the test team as exactly that - an &quot;in
        group&quot; that had access to places which not everyone could see.
        <br />
        <br />
        However, the truth is that who we brought on to the testing team was a matter of extended team
        discussion; we spent a whole week discussing applicants before making a decision. As said by one
        of the testers shortly after all the tester roles were given out:
        <div className="o-quote-box">
          it&apos;s more &quot;everyone here has agreed to it, because they have different people they can
          and can&apos;t work with&quot;
          <br />
          Go back to that response sheet, list of maybes/nos and a lot of people we were uncertain of are
          based off a single condemnation
          <br />
          it&apos;s a flawed system, but it&apos;s also the system any workplace uses, a good/bad word
          does wonders
          <br />
          If anything, we probably let in enough people that they wondered why we couldn&apos;t open
          the floodgates
          <br />
          forgetting that we valued negatives hugely over positives because, well, everything that
          happened over the past week, month, year
        </div>
        <br />
        There continued to be a lot of finger-pointing and accusations about us being dishonest, and I
        ended up asking for the <span className="o-code-text">???</span> role to get away from it. Like Dan,
        I didn&apos;t want to be involved in the community - but in this case it was because I knew that
        it would affect my ability to focus on development. I understood that this wasn&apos;t a good look
        in terms of the &quot;testers are an elite group&quot; idea, but I was frustrated with being a
        verbal punching bag.

        <h3>Improved Automation</h3>
        At this point the Automator had a lot of bugs in it, which were mostly hidden by the fact that
        we only ever had 1-2 people testing the Automator at any time and most of the bugs were related
        to the seldom-used block editor mode. The text editor was largely written by Garnet and was fairly
        robust, but the block editor (written by Hevi) was much more patchwork and had a lot of code
        within Vue components (ie. code areas typically meant for UI) instead of scripting files. Due
        to both of them being fairly absent, I ended up becoming the main Automator dev on both editors
        for the rest of the update.
        <br />
        <br />
        Since the 3rd wave was going to be the last time that the Automator would get any serious testing
        before release, I had a couple ideas to improve usability that I really wanted to add before they
        were brought on. In addition to fixing numerous bugs and edge cases, there were two large debugging
        features I wanted to add in order to make it more approachable to people who didn&apos;t have prior
        programming experience - more comprehensive error messages and an event log showing status
        information for every executed line.
        <br />
        <div className="c-centered-img">
          <CaptionedFigure
            imgPath={event}
          />
        </div>
        The error messages took the form of an &quot;error log&quot; which scanned through every instance
        of the Automator lexer and parser failing and then attempted to suggest a fix. This ended up being
        much more involved than I expected because:
        <ul>
          <li>
            Sometimes the cause of the error is unclear and the lexer/parser doesn&apos;t have any
            additional useful information to give.
          </li>
          <li>
            Some errors had more than one possible fix, and other errors had no fixes beyond just deleting
            the entire line.
          </li>
          <li>
            In a few cases, single mistakes would cause 2-3 errors at once. Often these extra errors
            couldn&apos;t be automatically filtered out since they could also appear on their own
            in different circumstances.
          </li>
          <li>
            Particularly bad inputs would cause the lexer to fail to process the rest of the script, hiding
            all other potential errors further down.
          </li>
          <li>
            The text and block editors count lines differently, and neither of them count lines in a manner
            one-to-one with what gets shown to the player.
          </li>
        </ul>
        <div className="c-entries-columns">
          <div className="c-col-wide">
            Needless to say, this caused me to gain a much larger appreciation for IDEs (Integrated Development
            Environments) for programming after doing this, because at this point the Automator
            now <i>had</i> an extremely basic one which many of us had all contributed to writing.
            <br />
            <br />
            Making the Automator command event log, while fairly tedious, was ultimately a lot more
            straightforward. I also took this opportunity to add a small little easter egg in the Automator.
            <img
              className="c-inline-icon"
              src={blob}
            />
          </div>
          <div className="c-col-narrow--borderless">
            <CaptionedFigure
              imgPath={blobCode}
            />
          </div>
        </div>
        <br />
        <i>
          Now that we fixed and implemented what we wanted to and many of the new testers were waiting on
          the edge of their seats, we were ready to give the testing link. Next entry, it&apos;s time to
          dive into the start of the 3rd wave&apos;s testing - a large set of new player experiences,
          without any distractions related to the community.
        </i>
      </div>
    </>
  )
}

export default Wave3Selection;
