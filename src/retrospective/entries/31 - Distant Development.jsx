import performance from "../../assets/retrospective/31/glyph_tab_performance.png";
import CaptionedFigure from "../common/CaptionedFigure";

export const DistantDevelopment = () => {
  return (
    <>
      <div>
        <i>
          (Sorry for another text-heavy entry this week. Besides a fair bit of interpersonal stuff, these few
          months were otherwise mostly boring bug fixes and extremely minor UI improvements.)
        </i>

        <h3>External Motivation</h3>
        The main reason I still cared about releasing the Reality Update despite the arguments on the dev team
        was that I had been looking for a job in web development and was unemployed at the time - and in order
        to look good to potential employers in that field, I wanted to show off my work on the Reality Update
        both as a completed product (ie. the game itself) and as a demonstration of my ability to work with
        other developers (ie. contribution history on Github). Neither of these would be visible if the game
        was never released.
        <br />
        <br />
        I had a long talk with Hevi about what my options were, especially considering the very legitimate
        reasons the repository was kept private, and we both concluded that it needed to <i>stay</i> private
        until release. However, he suggested a different way forward - Hevi offered to set up an interview
        with the company he was working for, which bypassed the technical portion because he already knew
        what I was capable of. We had been developing together for a few years, after all.
        <br />
        <br />
        This was ultimately how I landed my current position as a software contractor for Vertics Oy. It
        would be some time until my first arrangement started, but this still put my mind somewhat at ease.
        Hevi still suggested that I look for other more reliable positions though, and overall this was still
        the main reason I cared about finishing up the Reality Update, but I now had a fallback plan until then.

        <h3>Following Dan</h3>
        I rejoined development for the Reality Update from afar, with my primary communication with anyone
        involved largely through messages on Github and scattered DMs. This was basically how Dan was doing
        development much earlier, after he left the first time but before rejoining the server on his new and
        current account. However, I stayed firm with my stance that I would continue to refuse communication
        with the 2nd wave dev.
        <br />
        <br />
        There were tons of open Pull Requests waiting for reviews when I started again. Hira and Scar continued
        to code for the game after I left and made many bugfix PRs, but since they were new to the team they
        were (understandably) hesitant to merge in their branches themselves. In the meantime this left the
        process of getting these changes actually in the game to Hevi and the 2nd wave dev.
        <br />
        <br />
        Hevi was somewhat out of the loop here, with many of the fixes in code he had never looked at before,
        so he suggested that the first thing that I do was to review all the outstanding PRs which weren&apos;t
        made by the 2nd wave dev since I was more familiar with the codebase. Then, in an effort to get things
        moving again, he would merge the ones that looked good after review. That would let us properly start
        pushing towards release again without having to worry about a large set of pending, unmerged changes.
        <br />
        <br />
        The other dev&apos;s priorities were elsewhere during this - they instead seemed to care primarily
        about cleaning up every last bit of the codebase that our code linter had warnings on. This was at
        odds with the general workflow we had laid out and followed fairly consistently ever since the days
        of Razen being active. Razen insisted it was preferable to fix and tidy up as we went, rather than
        trying to do it all in one block and disregarding everything else, simply due to the sheer mass of
        code that could reasonably be improved.
        <br />
        <br />
        There was nothing wrong in principle with the 2nd wave dev&apos;s refactoring and cleanup; cleaner
        code is easier to work with. But in practice they would routinely apply these changes inside monolithic
        Pull Requests which affected 40+ files and caused merge conflicts on the majority of already-existing
        PRs, and then insist on theirs being merged in first so that they wouldn&apos;t have to fix them.
        Additionally, this altered and cluttered the <span className="o-code-text">git blame</span> so that a
        large portion of the line changes across the codebase now belonged to them simply moving code around
        or modifying indentation, making it harder to see who implemented what in the past.
        <br />
        <br />
        This was at worst just another annoyance for me because I was fairly proficient at git by then, but I
        didn&apos;t want the less experienced 3rd wave devs to be forced to deal with code conflict resolution
        themselves or be unable to find who they needed to ask for help on some parts of the code. The other dev
        had worked with Razen multiple times in the past; it just seemed like at this point they couldn&apos;t be
        bothered to follow our older practices now that he wasn&apos;t around any more.

        <h3>Argument By Proxy</h3>
        I started making new Pull Requests in order to fix outstanding bugs and improve performance, and one
        of the first things I was told through Hevi was that the 2nd wave dev found &quot;<b>some functional issues
        with your PR but can&apos;t review it.</b>&quot; I pressed for further details and discovered that there
        was a single <i>visual</i> issue they found, which wasn&apos;t actually an issue due to how resource
        balancing was in that part of the game. It was also yet another part of the game I was heavily involved
        in the implementation for which they had never playtested themselves.
        <br />
        <br />
        Later on the arguments came back but in a different form, largely in the way of not agreeing on a
        development pace. Hevi and I wanted to keep the number of active PRs low, simply because more branches means
        more potential for merge conflicts. Due to the pace picking up again and new PRs being made more regularly,
        this meant that we had to merge in older ones more regularly as well to keep up. I was indirectly told that
        for some reason the other dev was getting annoyed whenever I merged anything, despite the fact that I always
        asked Hevi for permission first and was simply the person pressing the button.
        <br />
        <br />
        The other dev continued to insist on being a reviewer for every single PR other than the ones I made, which
        seemed to lead to those other PRs stalling a lot more. They would be commonly added as an initial reviewer
        and then wouldn&apos;t actually review until nearly a week later - usually in response to me asking why we
        haven&apos;t merged yet due to having multiple approving reviews from others - and it would nearly always
        result in some change requests which would take another couple days of back and forth to resolve.

        <h3>Notable Changes</h3>
        There were a handful of fairly significant changes which still happened during this time:
        <ul>
          <li>
            The Glyph tab was (and probably still is) one of the most performance-intensive tabs in the game; I
            made <a href="https://github.com/IvarK/AntimatterDimensionsSourceCode/pull/2622">a Pull Request which
            brought its performance a lot closer to the rest of the game</a>, cutting CPU usage by a bit more
            than half.
          </li>
          <li>
            The Automator had lots of bugs, perhaps partially because nobody else wanted to touch its code.
            I made <a href="https://github.com/IvarK/AntimatterDimensionsSourceCode/pull/2776">a larger PR which
            fixed 8 Automator-related entries on the issue tracker</a>.
          </li>
          <li>
            I ended up chasing down Cloud saving conflict bugs for a while, probably in part due to Hevi being the
            only one regularly testing it on multiple devices. This chase basically continued to post-release too,
            unfortunately.
          </li>
          <li>
            The 3rd Celestial was renamed from &quot;The Enslaved Ones&quot; to &quot;The Nameless Ones&quot; on
            the UI end.
          </li>
          <li>
            Scar did a fair bit of work on improving general visual styling and
            also <a href="https://github.com/IvarK/AntimatterDimensionsSourceCode/pull/2823">made the stylized
            modal for Celestial lore</a>.
          </li>
          <li>
            Hira did some additional refinement on the blob theme, including adding a blob which followed the
            mouse cursor, but unfortunately this caused crashes on some common browsers and had to be removed.
          </li>
        </ul>
        <div className="c-centered-img">
          <CaptionedFigure
            imgPath={performance}
            caption={`Comparison of the Glyph tab CPU impact before and after the performance improvements`}
          />
        </div>
        Besides these functional changes, there were tons and tons of more minor branches full of fixes and
        issue closing. Hira and Scar became regular code contributors at this point and we all frequently reviewed
        each others&apos; branches. Vnge also popped in for reviews every now and then as well.

        <h3>Tipping Point</h3>
        About a month after I rejoined, the 2nd wave dev made a statement about being frustrated with my renewed
        participation in development and insisted that my access to the code repository be <i>forcibly</i> removed
        so that I could no longer work on the Reality Update. Among other things, the statement claimed that every
        contribution I made increased the amount of bugs and crashes in the game, that I was unwilling to interact
        with everyone else, and that I was actively making the UI less responsive - all of which were
        objectively false.
        <br />
        <br />
        After messaging many others on the team for their opinions, Hevi responded to their statement in a way
        that considered more than just his own viewpoint. In addition to his own response, he pointed out I
        wasn&apos;t the only dev who didn&apos;t like their blunt and undescriptive code review style - the new
        3rd wave devs were also feeling similarly discouraged and many of them simply chose to stop participating
        after one or two PRs.
        <br />
        <br />
        Hevi also mentioned that there was &quot;<b>a considerable increase in issue fixing progress</b>&quot; once
        I stepped back in. He also cited his 6 years of professional software development experience, and emphasised
        that &quot;<b>when a project is on the last stretch and severely past the deadline, that&apos;s when results
        matter most,</b>&quot; which is why he was prioritising decisions based on what made the best progress towards
        release.
        <br />
        <br />
        Finally, he wrapped it up by telling the other dev that &quot;<b>Spec doesn&apos;t want you reviewing his PRs,
        it&apos;s either you not reviewing them or him not doing development, and I already concluded which one is more
        harmful towards getting the update out.</b>&quot; So in light of the disagreements, Hevi made it clear that he
        wanted me to continue development.
        <br />
        <br />
        This interaction (understandably) increased their frustrations moving forward, as a couple weeks later they
        overtly accused Hevi about not caring about his own game (&quot;<b>very hard to be motivated to care though,
        since you clearly dont</b>&quot;) when Hevi tried to fix something on one of their branches in order to unblock
        multiple other PRs. Arguments continued happening over smaller and smaller things like text alignment and
        capitalisation, and they even insisted on breaking best-practice web design conventions just because a certain
        graphical design fix didn&apos;t work on less than 3% of all browsers. 
        <br />
        <br />
        At some point, for no publicly-stated reason I could find, the other dev simply stopped being involved in the
        Reality Update&apos;s development altogether. I realise how bad this might sound on the surface, but to anyone
        who is potentially worried - nothing bad happened to them. They are in fact still around and active to this day
        on the Discord server.

        <h3>Unofficial 4th Wave</h3>
        Once people started seeing that I was active in development again, I got messages from a lot of previous
        playtesters who had also left the team or stopped testing when I left the server. Broadly speaking they
        wanted to help with improving the game by giving additional feedback but in an environment they felt more
        comfortable with, which in this case was in our direct messages with each other.
        <br />
        <br />
        And so, in July, an unofficial 4th wave of testers started playing through the game. It consisted almost
        entirely of existing 3rd wave testers, some of whom decided on a whim to play through the game again,
        and others who had stopped playing due to the arguments but now wanted to return and see the game through
        to the end. (There was one exception - a close friend of mine who was never active in the game community
        also joined in too.)
        <br />
        <br />
        I started compiling together and addressing all the bug reports and feature requests from various people
        just like it was any of the other waves of new testers, which yet again meant an initial large influx of
        reports followed by a slower trickle of suggestions as testing pace stabilised into something more steady.
        It was mostly only UI/UX suggestions at this point; some people commented upon how perhaps they got pickier
        as testing went along and weren&apos;t holding the earliest content to the same standards as the later
        things, hence why there were so many suggestions for the earliest content this time around.

        <h3>Too Stable</h3>
        Beyond some final polishing, this 4th wave led to finding an extremely crucial bug for the pacing of
        Lai&apos;tela. Due to the communication barrier in the 3rd wave, all we really knew was that Lai&apos;tela
        was &quot;slow&quot; - we hadn&apos;t realised that it was too slow due specific times and progression
        milestones being forbidden to discuss. Once multiple people told me they were only reaching 1-2 singularity
        milestones <i>per day</i>, I knew something was wrong since I originally paced it out to be 2-3 hours
        per milestone.
        <br />
        <br />
        The bug in question had to do with the mechanics of Lai&apos;tela&apos;s Reality. Amongst other effects,
        the Reality is a tiered one; at higher tiers, the production of higher Dimensions is disabled. A last-moment
        change in the initial implementation, done after balance testing but before the merge, was to change the
        effect on higher Dimensions from &quot;setting <i>production</i> to
        zero&quot; to &quot;setting <i>multipliers</i> to zero&quot; for a better visual appearance.
        <br />
        <br />
        This innocent-looking change actually had some serious knock-on effects:
        <ul>
          <li>
            By zeroing out the multipliers, the reward effect of Infinity Challenge 8 was now also zero beyond the
            first difficulty tier.
          </li>
          <li>
            Infinity Challenge 8&apos;s reward affects all other Antimatter Dimension multipliers except for AD1,
            which meant that they were <i>also</i> set to zero.
          </li>
          <li>
            The severity of the bug was mostly hidden by the fact that we had a safeguard which limits all
            multipliers to a minimum of x1.
          </li>
          <li>
            Completing the Reality past the first tier was now more difficult than it was ever meant to be, causing
            the player to be missing out on a multiplier of potentially x100 or more for the primary spendable
            resource within Lai&apos;tela.
          </li>
        </ul>
        Of course, <a href="https://github.com/IvarK/AntimatterDimensionsSourceCode/pull/2861">we fixed that issue
        after finding it</a>. A lot of people post-release say that it&apos;s still one of the slowest and most boring
        Celestials, but without the efforts of the returning testers... it could&apos;ve been so, so much worse.
        <br />
        <br />
        <i>
          It should be no surprise that the other dev leaving development brought me a ton of relief, since it no
          longer felt like I had to fight for every single thing I wanted to do in the code. Next entry will be the
          final entry, where I discuss the last three features added to the game before wrapping up the devlog.
        </i>
      </div>
    </>
  )
}

export default DistantDevelopment;
