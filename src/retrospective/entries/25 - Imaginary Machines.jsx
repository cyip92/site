import { Link } from "react-router-dom";
import glyphTooltip from "../../assets/retrospective/25/improved_glyphs.png";
import upgrades from "../../assets/retrospective/25/iU_wip.png";
import { CaptionedFigure, ConversationLine } from "./CommonElements";

export const ImaginaryMachines = () => {
  return (
    <>
      <div>
        <h3>Boo &quot;Drama&quot;</h3>
        <i>
          (This section isn&apos;t strictly related to development and could be skipped if you don&apos;t
          care much for the game community. However, considering much of my audience here is from there,
          I felt like it would be a glaring omission if I didn&apos;t briefly talk about this bit of
          history. The most heated parts of this happened more or less right when I returned.)
        </i>
        <br />
        <br />
        Back in July 2020 there was a series of interactions between Boo and various community members
        which prompted much of the active community to consider if he was still fit to be a server mod.
        The short summary of events was:
        <ul>
          <li>
            After a particularly bad interaction with a relatively popular community member, Hevi
            revoked his mod privileges.
          </li>
          <li>
            We had some talks within the mod-specific channel and eventually in a group DM where
            we also brought in Boo to discuss everything together.
          </li>
          <li>
            In part due to trust issues, Hevi decided to change the link to the test version of the game
            to something else so that Boo no longer had access.
          </li>
          <li>
            After some more lengthy discussion, we concluded that this whole ordeal was an overreaction.
            Boo was brought back on the testing and moderation teams again.
          </li>
        </ul>
        Things seemed to calm down for a while, although I don&apos;t know exactly how it all went due
        to working on my degree. However, in March 2021 there was another intense argument where quite
        a few people mentioned that he wasn&apos;t setting a good example as a moderator. His response
        to that was that anyone who didn&apos;t like the moderation should just leave the server. So I
        left the Discord server, and a few people on the testing team ended up following along.
        <br />
        <br />
        This sparked quite an uproar, although I&apos;m going to gloss over the details. After a
        few days, Boo chose to step down from the moderation team and many people who left gradually
        felt comfortable enough to return (myself included, although a few current testers and prospective
        3rd wave testers didn&apos;t). Then, after a couple more weeks he left the server entirely after
        someone was tired of him making backhanded remarks about the mod team and called him out on it.
        He never returned and, at some point a few months later, had someone pass along the message
        that he no longer wanted anything to do with the Discord server.
        <br />
        <br />
        There was something which, depending on who you ask, remained unaddressed. The first
        Celestial&apos;s name on release was still based on Boo, despite him not being around any more
        and many people harbouring a lasting negative opinion of him. It even came up in testing a few
        times - people asked if we were planning to rename the first Celestial because of this.
        <br />
        <br />
        At the end of the day Antimatter Dimensions was Hevi&apos;s game, so he was the one making the
        calls. His view was that despite what happened, Boo was still a very important person because
        he helped get the community going in its earliest days. However, the unfortunate truth is that
        as the culture evolved over the years, his largely unchanged demeanour was no longer appropriate.

        <h3>Unsquishing</h3>
        The first big thing we tackled when I got back was the RM squish. The idea came in a DM from Jazz,
        in the form a list of mechanics which I relayed to the rest of the team as he was still trying
        to distance himself from the team due to previous disagreements. It was an entire new
        system to replace the squish, called Imaginary Machines:
        <div className="o-quote-box">
          the tldr is that we literally merge together a few of the late-game softcaps into a separate
          mechanic, similar to how tesseracts work
          <br />
          1: Hardcap RM at e1000. 
          <br />
          2; Unlock a new tab which shows &quot;Imaginary Machines&quot; which are based off what you
          would&apos;ve gotten in RM if the hardcap (and the squish) didn&apos;t exist.
          <br />
          3: The basic thing they do is improve all RM effects at a reduce rate (like the softcap), and
          have (pseudo) RM buyables. 
          <br />
          4: However they don&apos;t have wormhole buyables, meaning you have a decently ok reason to
          pause tickspeed inflation and keep it low (e1000 levels)
          <br />
          5: Allows you to add some new mechanics and stuff to do (for example, raising RM hardcaps
          which would now be a separate bonus, and be a huge bonus (as well as be differing in
          Tickspeed/buyable reward)
          <br />
          6? - Add a mechanic that lets you spend iM (done as not allowing you to gain any past
          the hardcap) on a singularity/DE boost which allows you to have something to do and lets
          lai&apos;tela push to a round number for Pelle
          <br />
          7? - It&apos;s possible for iM to be log(theoretical RM), meaning it becomes a completely
          different, careful spending method as it&apos;s quadratic numbers from 1000-1e8
          <br />
          8? - give you something to do with Pelle and could create a gameplay link
          <br />
          hence, some effort/rebalancing required but it creates a sort of unified late-game fix
          mechanic and offers a few neat things to do
        </div>
        <br />
        This was basically another instance of us taking a long-standing balance problem and
        reskinning it as a new set of mechanics and upgrades, just like we did with&nbsp;
        <Link to="/ADdevlog/15">Tesseracts</Link>:
        <div className="o-quote-box">
          <ConversationLine
            name="Me"
            text={`I think it would be worth some amount of effort because it should lead to the
              end of the game being much cleaner imo`}
          />
          <ConversationLine
            name="Pichu"
            text={`sounds like a bunch of caps but sugarcoated`}
          />
          <ConversationLine
            name=""
            text={`which i guess is fair`}
          />
          <ConversationLine
            name="Dan"
            text={`I mean it I think literally involves turning a softcap into a hardcap plus a new thing`}
          />
          <ConversationLine
            name="Hevi"
            text={`But does that screw balance then?`}
          />
          <ConversationLine
            name="Pichu"
            text={`shouldnt mess with any real balanced sections`}
          />
          <ConversationLine
            name=""
            text={`thats pretty much exactly on the threshold of balanced to unbalanced`}
          />
        </div>
        Pretty much everyone was on board with it; people who wanted the RM squish removed would
        get their wish, and the people who begrudgingly accepted it as necessary now had a well
        thought-out alternative. Any additional work that this new idea would require was also
        largely work we had to do regardless.

        <h3>Other Changes</h3>
        <div className="c-entries-columns">
          <div className="c-col-wide">
            I decided to ease myself back into development by playing through all of Reality content again.
            This was also partially because the last time I experienced the earliest new content, it
            had completely different balancing due to numerous changes to upgrades and perk structure since then.
            This seemed to spark enough interest for a bunch of other testers to join in on repeat
            playthroughs as well.
            <br />
            <br />
            Additionally, I was a lot pickier on UI and UX this time through the game, and amassed a
            fairly long list of relatively minor changes and text improvements to do as I went along.
            This mindset was something we ended up passing along to the 3rd wave of testers so that
            we could end up with a really polished interface on release.
            <br />
            <br />
            There was also a lot of general bug and issue cleanup during our playthroughs along with the
            long list of minor tweaks, which prolonged development time for Imaginary Machine content.
            Some notable things which were added/changed during this time:
            <ul>
              <li>
                We nerfed the EU2 perk; seeing the entirety of the 2nd wave get it as their 3rd perk
                suggested that it was too strong compared to other options. Originally it gave you
                the second row of Eternity upgrades immediately, but now it only gives them to you
                once you&apos;re within 1e10 EP of their cost.
              </li>
              <li>
                Omsi greatly improved the Glyph tooltip visuals, bringing them more in line with
                what they are now.
              </li>
              <li>
                I added the ability to hide tabs and subtabs to reduce interface clutter for places
                that you no longer interact with as you progress.
              </li>
              <li>
                Ra-Nameless&apos;s per-level boost used to be +0.01 power to stored time, but was
                reduced to be a multiplicative x20 instead in order to keep game speed multipliers
                more in check.
              </li>
            </ul>
          </div>
          <div className="c-col-narrow--borderless">
            <CaptionedFigure
              imgPath={glyphTooltip}
              caption={"Before and after the Glyph tooltip change"}
            />
          </div>
        </div>

        <h3>Tying It Together</h3>
        A month or so later, Jazz and I started trying to hammer out all the specific details
        on Imaginary Machines, which would later be commonly abbreviated as <b>iM</b>. We decided
        on the following ideas for the mechanics:
        <ul>
          <li>
            Imaginary Machines (iM) unlock at the Reality Machine (RM) hardcap of 1e1000 and are
            intended to be a complete surprise. Their maximum value is based on a hypothetical
            uncapped RM value.
          </li>
          <li>
            iM generates in a way that approaches a cap at a rate that slows down exponentially
            as it gets closer, borrowing the Chroma mechanic from Hex.
          </li>
          <li>
            You unlock a new set of upgrades whose primary intent is boosting post-Reality
            and Celestial era mechanics. We wanted to stay away from pre-Reality mechanics
            as much as feasible.
          </li>
          <li>
            Some upgrades are repeatable and some single-purchase. The single-purchase upgrades
            would be locked behind special conditions, identically to how RM upgrades were in
            order to provide some sense of symmetry.
          </li>
          <li>
            iM content was meant to bridge the gap from Ra to Lai&apos;tela to be more interesting
            than just increasing numbers, as well as to allow for a more cohesive connection
            between Lai&apos;tela&apos;s mechanics and the rest of the game.
          </li>
        </ul>
        There were a few things we considered but didn&apos;t go through with - iM was also meant
        to smooth over the end of Ra by boosting things like Glyph alchemy, and we wanted to
        leave open the possibility for iM content to extend into Pelle in case we struggled
        to come up with something interesting.
        <div className="c-centered-img">
          <CaptionedFigure
            imgPath={upgrades}
            caption={`Imaginary Upgrades during iM development, with lots of empty spaces and
              a few things that ended up changing.`}
          />
        </div>
        This also resulted in all of Lai&apos;tela content needing to be rebalanced and
        pace-adjusted again. It was a collaborative effort amongst me, Jazz, and Dan; I
        aimed for a general target of &quot;an hour or two between meaningful singularity
        milestones,&quot; and they helped out with numerical tuning and minor design tweaks
        when things would inevitably run away due to the existence of new upgrades.
        <br />
        <br />
        Numbers in the game exploded at least 5 times in the process of tweaking Lai&apos;tela
        balancing, but this time we were able to address them without too much fuss since we
        weren&apos;t as burnt out and didn&apos;t need to future-proof mechanics quite as strongly.
        This was where quite a few of the more seemingly-random caps in the game had to be introduced,
        such as:
        <ul>
          <li>
            Cosmic Conglomerate moving Remote Galaxy scaling to 100k as opposed to removing it entirely
          </li>
          <li>
            Time Dimension 8 being effectively capped at 1e8 purchases
          </li>
          <li>
            All repeatable singularity milestones suddenly getting a lot harder to reach near the
            end of Lai&apos;tela
          </li>
        </ul>
        I made a comment about &quot;running on fumes of content&quot; and this last stretch of
        balancing felt like the game was absolutely on the verge of falling apart. We were taking full
        advantage of the fact that none of this would matter once entering Pelle, which was perhaps the
        only thing we agreed upon for Pelle&apos;s content at the time.
        <br />
        <br />
        This all culminated in <a href="https://github.com/IvarK/AntimatterDimensionsSourceCode/pull/1682">a
        fairly substantial Pull Request</a> which changed 81 files pretty much by necessity due to how
        widespread the new mechanics were planned out to be. However, deep within the initial implementation
        of Imaginary Machines was a tiny last-minute change which seemed innocuous but actually entirely
        messed up the pacing of a somewhat core mechanic in the later half of its content. It remained
        hidden for about a year, but I&apos;ll mention that when it comes up again.
        <br />
        <br />
        <i>
          Imaginary Machines took up the bulk of development for a few months, probably to no surprise
          due to the fact that it contained another round of rebalancing. Next entry, we&apos;ll get
          into more about Looping Pelle and preparation for bringing on the 3rd wave of testers.
        </i>
      </div>
    </>
  )
}

export default ImaginaryMachines;
