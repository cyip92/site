import darkFix from "../../assets/retrospective/28/dark_theme.png";
import CaptionedFigure from "../common/CaptionedFigure";
import TwoColumn from "../../common/TwoColumn";

const DevlogEntry = () => {
  return (
    <>
      <div>
        <i>
          This entry is chock full of me airing some frustrations about the development process, so apologies
          if this week comes across as excessively negative. It was a high concentration of stress in a short
          period of time, within the context of also addressing most of the 3rd wave reports which were
          continually coming in at a rate of maybe 3-5 per day.
        </i>

        <h3>Code Structure</h3>
        One of the older testers started to do some code work while I was away, and by this point some people
        were starting to get somewhat frustrated with how they were structuring their branches and conducting
        their code reviews.
        <br />
        <br />
        This started with their two gigantic Pull Requests that were made while I was gone. In fairness
        to them, they were still new and nobody else around was actively merging or otherwise pushing forward
        on development at the time... but moving forward they often kept insisting on huge PRs like this, very
        often scope-creeping other people&apos;s PRs with otherwise unrelated bugs or features.
        <br />
        <br />
        After merging in those two huge PRs, various bugs surfaced over the course of the following few weeks.
        Admittedly this was partly the fault of myself and the other reviewers; we&apos;re all working together
        as a team, so we share the responsibilities. However, the fact is that it&apos;s harder to catch these
        things when (for example) the same file is changed for 3 different unrelated reasons which could have
        otherwise been 3 separate PRs, and it&apos;s similarly difficult when a few functions are split off
        or moved into 2-3 different files and there are 70 other changed files to search through.
        <br />
        <br />
        To no surprise, most of the existing devs were exhausted and just wanted to get the game released. We
        obviously wanted to keep the codebase looking relatively clean and to hold ourselves to not making the
        code quality any <i>worse</i>, but that also meant that large sweeping refactors which don&apos;t
        functionally change the game were generally off the table. That was unfortunately what an ever-increasing
        proportion of the new dev&apos;s PRs were.

        <h3>Micromanaging</h3>
        As the 3rd wave went on, the blind testing channel gradually emptied out in terms of activity. This was
        for two reasons - we separated each Celestial&apos;s content into their own separate Discord thread,
        and a lot of testers were becoming uncomfortable with talking there in general.
        <br />
        <br />
        The idea for using separate Discord threads for each Celestial was a good idea on paper; everyone
        agreed with it as it kept potential content spoilers to a minimum. Unfortunately, due to differing play
        paces, this ended up strongly isolating testers once they reached the first Celestial. Often there
        would be at most one active playtester in any given Celestial thread, because by the time they got
        there, the previous people had already finished and moved onward. We had taken a group of 13 testers
        and effectively split them across 7 different places.
        <br />
        <br />
        When people started to unlock the Automator, we hoped everyone would individually work their way
        through to see how approachable it was. How this ended up being enforced was a ban on sharing Automator
        scripts on the server, and as a result various devs would have to get what feedback they could through
        DMs with individual testers. It <i>mostly</i> worked, except that many people started to express discomfort
        with talking in the testing channels due to how harsh the communication barriers were set up. A
        few decided that it just wasn&apos;t worth the effort to do both, and simply continued on in DMs only.
        <br />
        <br />
        These both caused general playtesting activity on the server to drop off a cliff after about a third
        of the new testers reached Celestials. Many of them kept in close contact with various devs via DMs,
        which meant that we were thankfully still getting some amount of useful feedback, but most of us
        were hoping that said feedback would come in a more natural way - through group conversations
        instead of specific prompted questions in a one-on-one setting.
        <br />
        <br />
        Someone jokingly said that they were the &quot;<b>wave 3 testers, otherwise known as the DM-feedback
        testers</b>&quot; in one of the later Celestial channels, which was reasonably accurate by then.

        <h3>Stalling</h3>
        This was also when some people were starting to get impatient about development getting slowed down.
        From the messages at the time, Hevi and I were at least. The new dev insisted on being a code reviewer
        for every single active Pull Request and would routinely have many rounds of minor back-and-forth comments
        and requested modifications over multiple days. This often made even the simplest of changes take close
        to a week to actually get merged in.
        <br />
        <br />
        By the time the 3rd wave started, this was happening to nearly every PR that contained fixes for problems
        the new testers were running into. It was more than just an isolated incident; it was becoming a pattern,
        and people wanted it to stop:
        <div className="o-quote-box">
          or else it&apos;s going to be a week of back and forth of tiny fixes before the testers actually see it
          <br />
          I don&apos;t want to add this PR to the list of PRs that are sitting in limbo of &quot;almost done and not
          merged in yet because we keep finding all 20 bugs in it 3 at a time with a 2-day turnaround on every
          review&quot;
        </div>
        <br />
        There was also a point in time where the new dev was incapable of testing any changes due to an
        unresolved local merge on one of their own branches for nearly a whole week, yet they still insisted
        on reviewing everything. This was again something that people thought was unreasonable:
        <div className="o-quote-box">
          we can&apos;t have most PRs blocked by your unresolved merge, this kinda defeats the purpose of multiple
          branches and developers in the first place
        </div>
        <br />
        We set the expectation in the past that not everyone had to be involved in every code change, and
        that in the event that a reviewer was unfamiliar with that code or was otherwise busy, they would
        say so and let the code go in for the sake of testing it. This is something the new dev
        had witnessed for a few months before they started contributing themselves, but seemed to largely
        disregard for whatever reason. It would end up being a continually growing source of frustration
        for the other active developers.

        <h3>Subjectivity</h3>
        Things escalated even more when we got into an argument about how to display certain values in
        Glyph Alchemy. The newer dev was very adamant about their way of displaying being the correct one
        when there were in fact at least three different potentially equally-valid options to choose between.
        <br />
        <br />
        <TwoColumn
          leftWeight={5}
          rightWeight={4}
          rightBorder={true}
        >
          <>
            This was a particularly frustrating argument because I was the one who wrote Glyph Alchemy and it
            later turned out that they had never actually played it themselves on account of it being past
            unblinding for their wave. Our solution we ended up going with was to simplify the mechanics so
            that the values in question didn&apos;t need to be shown any more.
            <br />
            <br />
            We had a different incident relating to unreadable text on dark themes, which I decided to fix.
            I was told to revert the change because they would rather have the source code look a very
            particular way that was functionally the same:
            <div className="o-quote-box">
              ... to be blunt, you&apos;ve been saying you were planning to do this for the better part of the last
              2 months and it&apos;s still remained unfixed even after it being brought up by w3 testers maybe 3-4
              times in total; I would prefer keeping it in for the sake of it actually being fixed, and you
              can feel free to refactor it later if you want
              <br />
              I don&apos;t see how explicit definitions of props instead of implicit defaults elsewhere in the code
              is worse to the point of calling one acceptable and the other unreadable
            </div>
            <br />
            <i>
              (Side note: It&apos;s typically accepted in programming that explicit data is better than implicit
              data, arguably as popularised by The Zen of Python nearly 20 years ago. By some standards I was
              being told to make my code <u>less</u> readable.)
            </i>
          </>
          <CaptionedFigure
            imgPath={darkFix}
            caption={`Being told the fix was added to the game "5 days ago" when it was still unfixed`}
          />
        </TwoColumn>
        <br />
        After having my code style micromanaged, I was then straight-up lied to about the fix already
        being in the game.

        <h3>Unfixing Bugs</h3>
        Hevi appeared out of the blue one day and wanted to know everything that happened in
        the past 2 months of testing. Once we caught him up, he went right to work on fixing bugs and
        addressing many stale issues which many of the rest of us forgot about. That day we knocked out
        a total of 29 issues through repo cleanup across the two branches he and I made - nearly a
        quarter of the total issue count at the time.
        <br />
        <br />
        Due to time zone differences, he reviewed my branch and merged in his first before heading to
        sleep. I then resolved merge conflicts, got a code review from Dan, resolved his comments,
        and merged my branch in before heading off for the night as well. With Hevi being a rare
        appearance and this one day giving us such significant progress towards release, I wanted to
        do everything I could to keep his motivation for Antimatter Dimensions high. In this case it
        meant going along with the
        almost <a href="https://en.wikipedia.org/wiki/Agile_software_development">Agile</a>-like
        development pace he wanted, which was admittedly something I was already on board with.
        <br />
        <br />
        The next day, I found that the new dev had forcibly reverted the repository to the state before
        my merge, claiming that they weren&apos;t done reviewing it despite being active in the other
        testing channels that night. They were aware that Dan and I were looking at it together for
        a couple hours, but never expressed interest in reviewing it. This clearly frustrated me,
        as the revert &quot;<b><i>unfixed</i> 7 issues and, at best, changed one unfixed bug into a
        different unfixed bug.</b>&quot; In the interest of not having a back-and-forth commit/revert
        war, I did the suggested whitespace and code indentation changes from their review and then
        reapplied the commits, promising to properly address the other bug in a future PR.
        <br />
        <br />
        To this date there have only been two forced reverts on
        the <span className="o-code-text">master</span> branch in the <i>entire</i> history of the
        repository. The first time was an incident in 2017 where Hevi was on vacation and someone
        pushed additional game content containing a &quot;9th Dimension&quot; without his permission.
        The code revert was done by another dev at the time, under Hevi&apos;s direct request since
        he was unable to himself. The second time was this incident right here, done with the sole
        discretion of this new dev when getting no response after a mere 7 minutes of waiting, with
        zero contact with Hevi about it. To say this was against our typical practices would be an
        understatement.
        <br />
        <br />
        <i>
          I don&apos;t have a smooth segue into the next entry this time. This roughly brings us
          up to where the previous entry ended, time-wise. Next week, we&apos;ll be going into
          the rest of the wave 3 testing experience as well as a bit more developer tension.
        </i>
      </div>
    </>
  )
}

export default DevlogEntry;
