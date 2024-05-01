import notation from "../../assets/retrospective/30/blob_notation.png";
import blob from "../../assets/retrospective/30/prototype_blob.png";
import cel7AM from "../../assets/retrospective/30/cel7_AM_mult_ref.png";
import bars from "../../assets/retrospective/30/all_bars.png";
import commits from "../../assets/retrospective/30/commit_graph.png";
import CaptionedFigure from "../common/CaptionedFigure";
import TwoColumn from "../../common/TwoColumn";

const DevlogEntry = () => {
  return (
    <>
      <div>
        <h3>Pelle&apos;s Final Version</h3>
        We couldn&apos;t decide on what we wanted out of a Pelle redesign - the only thing it seemed like we
        all agreed upon was that the existing version wasn&apos;t going to cut it. Beyond that, a few Google
        Docs were made over the past few months so that everyone could share their ideas for brainstorming,
        and it seemed like there were probably 4-5 different mutually-exclusive ideas every single time.
        <br />
        <br />
        In the interest of actually getting something into the game, Hevi made the executive decision to
        throw something together. He took bits and pieces of each idea and combined them together into
        what we had upon release. Pelle was largely meant to be a victory lap through the pre-Reality
        stage of the game; it wasn&apos;t supposed to be difficult but rather just... differently balanced:
        <TwoColumn
          leftWeight={1}
          rightWeight={1}
          rightBorder={true}
        >
          <>
            <ul>
              <li>
                Armageddon and the Doomed state were kept; entering Pelle for the first time <i>Doomed</i> your
                game, applying a very long list of restrictions to your game and generally making it feel like
                the beginning again. Armageddon would put you back at the start of Doomed, and you could never
                leave it.
              </li>
              <li>
                Performing an Armageddon reset gave a new resource called Remnants. In order to increase your
                Remnant total, you would need to progress further than your last Armageddon.
              </li>
              <li>
                Remnants produced a new currency called Reality Shards, which were used for Pelle-specific
                upgrades meant to counterbalance the Doomed nerfs.
              </li>
              <li>
                At certain largely undisclosed points of progression, a Pelle Strike would occur (causing an
                additional nerf to be permanently applied moving forward) and a Pelle Rift would open up (unlocking
                a new Pelle-specific resource which is obtained by draining some other resource).
              </li>
              <li>
                Pelle Rifts had milestones which gave additional upgrades upon reaching certain percentages. Upon
                filling all 5 rifts, the final ending sequence of the game begins.
              </li>
            </ul>
          </>
          <CaptionedFigure
            imgPath={cel7AM}
            caption={`A reference sheet we put together when coming up with an AD multiplier Pelle upgrade.
              Currency values increased surprisingly smoothly when placed on a logarithmic scale, but this still
              resulted with a wacky formula.`}
          />
        </TwoColumn>
        The ending of the game starts when you unlock a Galaxy Generator, which gets limited unless you
        intentionally drain all your rifts one by one. Upon draining all rifts, the Generator becomes
        unlimited and the game gives the appearance of gradually corrupting itself as all your numbers
        run away towards 1e9e15 - the precision limit of <span className="o-code-text">break_infinity.js</span>.
        Finally, all numbers gradually get replaced by the same &quot;<b>END</b>&quot; text, and then the credits roll.
        <br />
        <div className="c-centered-img">
          <CaptionedFigure
            imgPath={bars}
            caption={`A snapshot of the first version of Pelle with the finalized mechanics. We hadn't
              changed theming yet, so resources were still named after the Horsemen of the Apocalypse. The
              layout also left much to be desired.`}
          />
        </div>
        <br />
        Quite a few people lost interest in testing after seeing what happened behind the scenes, so there
        were very few left who were in a good position to contribute to Pelle. Nevertheless, it was a very
        collaborative group effort amongst anyone who <i>was</i> still around. There were two separate threads
        within the testing channels created for Pelle - one for discussing the design ideas and one for playtesting
        once it was put into the game.
        <br />
        <br />
        The initial design was a large conglomeration of ideas, but it was then shaped into its final version
        in large part by Jazz and Hevi. Nearer the end of the design phase and for the majority of the playtesting,
        Lars (one of the 3rd wave testers) did a lot of work with them as well in order to refine the overall experience.
        We had a few iterations of UI touch-up once Pelle was complete; in addition to a branch made by Lars, two more
        Pull Requests were opened up afterwards, one by me and another by Scar.

        <h3>Blobs!</h3>
        Amongst the various 3rd wave testers who contributed to the game&apos;s code, Hira started some work
        on a new visual theme for the game. Even before this point, he was already notably very involved in
        testing for the game - he translated a very large portion of the Japanese localization for the
        Android version, and also made a special large-number notation specifically
        using <a href="https://en.wikipedia.org/wiki/Blob_emoji">Google Blob emoji</a>.
        <br />
        <br />
        The new theme he put together was one entirely based on blob emoji which, while cute, were also arguably
        a core part of the Discord community&apos;s culture at this point as well. There were a few special
        things added to this theme in addition to the simple colour and button reskinning - some animations
        were replaced by blobs as well (eg. Tachyon particles and the Black Hole). Perhaps the most notable
        addition that makes the theme unique was an overlaid visual effect that caused it to rain blobs
        across the game&apos;s viewport when you used that theme.
        <br />
        <br />
        <div className="c-figure-group">
          <div className="c-figure-row">
            <CaptionedFigure
              containerClass="c-single-figure--small"
              imgPath={notation}
              caption={`Blobs used in the game's font file, placed in the Unicode "private use" block`}
            />
            <CaptionedFigure
              containerClass="c-single-figure--small"
              imgPath={blob}
              caption={`An older image from when Hira was adjusting the falling "Blob snowflake" effect`}
            />
          </div>
        </div>

        <h3>The Archivist</h3>
        Since the update was nearly finished, we started discussing all the various things that we had
        deferred until later on. One of the things which got moving more or less immediately was gathering
        information for a proper credits list. The majority of the work for this was done by GirixK and Pichu.
        <br />
        <br />
        We wanted to get a comprehensive list of people who had ever, at some point, been a tester for the
        game. To do this, we needed to put together a list of people who had at least one message in any
        testing-related channel, and Discord&apos;s message searching capabilities were very limited back then.
        <br />
        <br />
        The first attempt at a list was GirixK&apos;s &quot;blobnana&quot; account. The idea behind this account
        was straightforward - they would bring this new account in and ask a moderator to give it testing channel
        access. Then, they would go through and sequentially block every person in the channel in order to
        collapse their messages down into a single &quot;X blocked messages&quot; line on the screen - this
        would in principle hide every single message until the next unblocked person, and they could keep
        doing this until they reached the beginning of the channel. When the whole process was complete, that
        account&apos;s block list would contain exactly the list we were looking for. Unfortunately, Discord
        didn&apos;t handle it gracefully and instead constantly crashed after a few hundred blocked messages.
        <br />
        <br />
        The second attempt, which was ultimately what happened, was Pichu&apos;s idea. He also put together a list,
        although I&apos;m not sure how he did it after GirixK&apos;s failed attempt, and then suggested that he would
        anonymously message everyone on it:
        <div className="o-quote-box">
          let me explain the credits ideas before i go ahead and start
          <br />
          personally i think giving too many people credits is better than too few, and giving too high
          titles is better than too low
          <br />
          i plan on making a &quot;antimatter dimensions archivist&quot; alt and messaging everyone
          (including you) about what name and title they want in the credits
          <br />
          keeping it open, im not restricting anyone to any specific catagory
          <br />
          and then im gonna compile a spreadsheet with the responses and then post that
          <br />
          any opposition?
        </div>
        Everyone thought this was a good idea, so he went through with it.
        This included many people who were no longer on the Discord server for various reasons, since a few of
        these people were either banned or otherwise broadly disliked. That being said, it was with the intent
        of making sure nobody was left out and that presence was based purely on having contributed in some way.
        <br />
        <br />
        Incidentally, this also gave us some message count statistics. Each person was looked up in case we
        decided that there would be some kind of a cut-off for people being &quot;inactive enough&quot; that
        they weren&apos;t actually contributing. I don&apos;t think we actually made such a cut-off, although
        there were many people who simply never responded or were from far enough in the past that their
        Discord accounts were deleted and nobody noticed.

        <h3>Inaction</h3>
        <i>
          (I don&apos;t want to make this part too personal, but I feel the need to properly motivate why
          I got back into development. I could claim that I did it out of the kindness of my heart, but the
          fact is that it was actually a personal decision made in spite of everything else.)
        </i>
        <br />
        <br />
        In the beginning of February 2022, I decided that I had enough of being ignored and disrespected
        by the 2nd wave dev, and left the Discord server. I went radio silent for a few days, pondering what
        exactly I was going to do next considering that something I had dedicated so much of my free time
        in the past few years to was locked up in a Github repository which was inaccessible to the public.
        <br />
        <br />
        <TwoColumn
          leftWeight={2}
          rightWeight={1}
          rightBorder={true}
        >
          <>
            About a month later, I reached out to Hevi to see how development was going. When I left, the
            game&apos;s content was fully complete all the way to the ending - in principle it only needed
            bug fixing in order to be released. I had also heard unofficially that the other dev was saying
            that my development practices were making the codebase harder to work with and heavily implied
            that things would be smoother without me. With those things in mind and the fast development
            pace leading up to my departure, I expected the game to be nearly ready for release by now.
            <br />
            <br />
            I was instead told that very few bugs had actually been fixed beyond the Pull Requests which
            already existed at the time I left, which took most of a month to actually merge in, and that
            the total number of entries on the issue tracker was basically unchanged. It was discouraging
            to hear that the Reality Update was potentially never going to see the light of day at this pace.
            I put those thoughts aside for a while and checked back in again in May, two months later, only
            to be told that the 2nd wave dev had also become much less active and progress drastically
            slowed after the first month.
          </>
          <CaptionedFigure
            imgPath={commits}
            caption={`A graph showing code commit frequency, posted on the server during the lull in activity`}
          />
        </TwoColumn>
        <br />
        <i>
          Seeing the apparent lack of progress over the 3 months I was gone from development, especially
          considering the circumstances at the time, I concluded that the game wasn&apos;t going to be
          completed without my involvement. I had another personal interest (beyond a sunk cost) in
          seeing the update eventually get released, which I&apos;ll elaborate on a bit more in the
          next entry. Primarily though, we&apos;ll get into how I picked up development from
          outside of the Discord server and progress on the Reality Update got moving again.
        </i>
      </div>
    </>
  )
}

export default DevlogEntry;
