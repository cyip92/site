import glyphSac from "../../assets/retrospective/4/old_sacrifice.png";
import newUI from "../../assets/retrospective/4/new_UI.png";
import multipliers from "../../assets/retrospective/4/console_mults.png";
import "../styles/Entries.css";
import { CaptionedFigure } from "./CommonElements";

export const Motivation = () => {
  return (
    <>
      <div>
        <h3>Celestial Brainstorming</h3>
        On November 2nd 2018, Hevi posted his first idea for Celestials:
        <div className="o-quote-box">
          There are seven of them and you need to defeat them one by one. Each has its own mechanic and upon
          defeating them you get powerful bonuses.
        </div>
        <br />
        The idea behind the names of the Celestials was that they were all references to people who were in some
        way meaningful to Hevi throughout the development of the Reality update. Here are all the Celestial names
        which ended up in the final release of the game; all but 3 and 7 were basically finalized in the
        conversation that day:
        <ol>
          <li>
            <b>Teresa</b> - Boo; this is the romanized Japanese name for&nbsp;
            <a href="https://en.wikipedia.org/wiki/Characters_of_the_Mario_franchise#Enemy_characters">the Mario
            franchise character</a> with that name
          </li>
          <li>
            <b>Effarig</b> - Me; my discord profile pic has often been mistaken for a giraffe, and
            &quot;effarig&quot; is &quot;giraffe&quot; backwards
          </li>
          <li>
            <b>The Nameless Ones</b> - The entire testing team as a collective; there&apos;s more story behind
            this name which I&apos;ll get into later
          </li>
          <li>
            <b>V</b> - Hevi&apos;s girlfriend; this is a nickname she often goes by
          </li>
          <li>
            <b>Ra</b> - Razenpok; it&apos;s simply his name but shortened
          </li>
          <li>
            <b>Lai&apos;tela</b> - Omsi; her name backwards is a reference to the Finnish soap opera character&nbsp;
            <a href="https://fi.wikipedia.org/wiki/Ismo_Laitela">Ismo Laitela</a>
          </li>
          <li>
            <b>Pelle</b> - Hevi; his name, but anagrammed
          </li>
        </ol>
        There were two other names initially brought up which didn&apos;t make it into the final game - Tapoto
        and Heiv. Tapoto was meant to be a reference to Alexitato, who jokingly refers to himself as a potato
        sometimes, and Heiv was what the last Celestial was named before it was changed to Pelle.
        <br />
        <br />
        For anyone reading this who is not part of the Antimatter Dimensions community and doesn&apos;t recognize
        some names - Boo and Alexitato were two community moderators who were around since the very beginning of
        the game and community&apos;s creation, and played a very pivotal role in getting everything off the ground.
        Any other names I mention from here on out without context can be assumed to be referring to one of the
        people on the team.
        <br />
        <br />
        Testers were earnestly setting up for fully automated realities now that the automator was consistently
        functional. This informed the design of Celestials; from this point forward in progression, the player was
        expected to have their automation in full swing in order to actually progress.
        <br />
        <br />
        There was a brief period of brainstorming for an &quot;Automator Celestial&quot; which had timed or
        otherwise limited conditions which could only realistically be completed with a custom script, but then we
        decided we didn&apos;t want to turn the game into a programming game. It did however plant the seed for the
        idea that the game could give you &quot;officially sanctioned&quot; code snippets that you wouldn&apos;t have
        to write yourself, since that was one of the proposed rewards. This idea eventually turned into the in-game
        script templates.

        <h3>The First Celestial</h3>
        I&apos;m avoiding referring to this Celestial by name in this entry - this is because we ended up
        swapping the names (but not the content/mechanics) later on; initially #1 was Effarig and #2 was Teresa.
        Avoiding their names here means I can avoid that ambiguity until I actually discuss the name switch.
        <br />
        <br />
        The first Celestial&apos;s content in terms of upgrades was mostly implemented in the form that you can see
        in-game on the released version. The only surface-level differences were that eternity upgrades and glyph
        undo weren&apos;t implemented - those would end up being added later. The overall &quot;fill a bar with a
        resource&quot; idea was inspired by a similar mechanic in the incremental
        <a href="https://sneekxy.nmtechgroup.com/monies2/"> MONIES²</a>.
        <br />
        <br />
        We expected every Celestial to have their own Reality, but wanted all 7 of them to play out uniquely. The
        concept for the 1st Celestial&apos;s Reality was for it to be structurally like a typical Reality, except
        a bunch of mechanics are heavily nerfed. Purchasing the reality study at the bottom of the tree was the
        requirement to complete it, and the strength of its completion reward would scale up endlessly based on how
        much antimatter you could reach under its restrictions, as opposed to it being a one-and-done challenge.
        While many games out there have a similar Endless mechanic, this case was directly inspired by the
        Challenge² mechanic in the incremental <a href="https://trimps.github.io/">Trimps</a>.
        <br />
        <br />
        <div className="c-entries-columns">
          <div className="c-col-narrow">
            <CaptionedFigure
              imgPath={glyphSac}
              caption={`We were bad at color contrast back then, but this was the only example image I could find
                of the old effects`}
            />
          </div>
          <div className="c-col-wide">
            The Reality reward was never changed; it was always a massive Glyph sacrifice boost after the first
            completion which altered how sacrifice affected the game overall. However, three effects
            ended up being changed later on; at this point, they were different:
            <ul>
              <li>
                <b>Power</b> delayed remote galaxy scaling* (the 2nd, much harsher scaling) instead of distant
                scaling, but its effect scaled in such a way that completing the Reality for the first time
                effectively removed it entirely
              </li>
              <li>
                <b>Infinity</b> used to be significantly stronger, before it caused some runaway issues later
                on in the game
              </li>
              <li>
                <b>Replication</b> added a flat additional +X% replication chance, which turned into a
                ridiculous-looking tens of millions after completing the Reality and yet was still super weak in
                the grand scheme of things
              </li>
            </ul>
            <i>
              * Cosmic Conglomerate&apos;s old effect was actually the second half of Scour to Empower, which
              initially only let you sacrifice Power and Time Glyphs.
            </i>
          </div>
        </div>
        
        <h3>Pre-Celestial Changes</h3>
        As much as we were trying to push forward and get the ball rolling on new features, that wasn&apos;t
        everything that was going on. There were three fairly notable changes to earlier content which got
        mentioned:
        <div className="c-entries-columns">
          <div className="c-col-wide">
            <ul>
              <li>
                <b>Modern UI</b> - An idea Hevi came along with, which prompted a discussion about how other
                incrementals had done UI overhauls which weren&apos;t well-received. He then clarified:&nbsp;
                <i>
                  &quot;My idea was to add the UI overhaul as an option and leave the old minimalist UI also I know
                  that many players like the minimalism, but I also know that it drives others away from the game
                  because many prefer visuals&quot;
                </i>
              </li>
              <li>
                <b>PEC Perk line</b> - The PEC perk line is the set of perks which auto-completes Eternity
                Challenges, sometimes informally called the <b>Pichu Perks</b> because they came pretty much
                directly out of Pichu complaining that ECs had no way to be idled without a complete automator
                script. Initial intervals were 12-8-6-4-2 hours per completion, but it would be shortened multiple
                times over development.
              </li>
              <li>
                <b>Multiple Hotkeys</b> - The functionality to hold multiple hotkeys at once was only mentioned
                in passing by Omsi, but it would become a very well-liked feature as testing went on.
              </li>
            </ul>
          </div>
          <div className="c-col-narrow">
            <CaptionedFigure
              imgPath={newUI}
              caption={"An early prototype of the Modern UI"}
            />
          </div>
        </div>
        <div className="c-entries-columns">
          <div className="c-col-narrow">
            <CaptionedFigure
              imgPath={multipliers}
              caption={"The initial \"Multiplier Tab\" was basically a long console printout"}
            />
          </div>
          <div className="c-col-wide">
            I brought up the idea of a multiplier tab a few more times, although this time our conversations actually
            went somewhere now that Razen and Garnet were around and able to offer more informed feedback due to
            having some amount of professional programming experience. We spitballed a few ideas of structuring
            effects in a way that would allow them to be dynamically applied to both the game and such a listing,
            but then figured that would be either too performance-heavy (updating once per tick) or bug-prone
            (improper cache invalidation).
            <br />
            <br />
            In the end we agreed that it would would be a mess without basically hardcoding the entire game&apos;s
            formulas, which was a bad idea at this time because that would mean that any new mechanics would
            effectively need to be typed in twice in two separate parts of the code.
            <br />
            <br />
            I wrote a very minimal multiplier listing in the dev functions which was helpful for a short period of
            time though.
          </div>
        </div>
        <br />
        There was some mild annoyance brought up about Reality not being split up into two updates, considering
        the magnitude of all the added content and the apparent trend that it wasn&apos;t slowing down any time soon.
        In response, Hevi said:
        <div className="o-quote-box">
          Oh and btw the reason I don&apos;t want to split the update is that I&apos;ve already said numerous times
          that it&apos;s the last update AND I fear that if I release it in separate bits, the actual last update
          gets less attention.
        </div>

        <h3>Team Dynamics</h3>
        The makeup of the team changed a fair bit during this time - three people left the team, one forcibly (due
        to being somewhat prone to spam the testing channels) and two willingly (being discontent with the state of
        the game being largely broken or prone to rapid runaways). However, we also gained two heavy hitters who were
        extremely influential in shaping the Reality Update as a whole:
        <ul>
          <li>
            <b>Dan</b> - To say that he was a mathematical powerhouse would be an understatement; he analyzed the
            game mechanics and how they interacted to a much greater depth than probably anyone else on the team.
            He would eventually contribute code to the game too, but it would be some time until that happened.
            Dan also made the incremental <a href="https://dan-simon.github.io/misc/fe000000/">FE000000 </a>
            (sometimes also called Hex, after the notation which he also made), and ideas would often end up getting
            passed between that game and the Reality update.
          </li>
          <li>
            <b>Garnet</b> - He was actually a mobile-oriented player initially and is the reason why the Glyph tab
            has some leftover jQuery code in it which allows for minimal touchscreen device support. He started
            writing code for the game in December and eventually ended up being our primary Automator dev, rewriting
            the Automator code in its entirety and replacing what snippets I&apos;ve shown here so far with much of
            what exists in release.
          </li>
        </ul>
        Dan and Garnet also played a non-negligible amount of NG+3 (the most popular modified version of pre-Reality
        Antimatter Dimensions, with its own new reset layer) and found that Reality felt more properly paced out and
        offered better initial automation. This would be a topic we would revisit intermittently, but we were
        largely satisfied with pacing even this early on. I don&apos;t want to get into the habit of comparing
        Reality to the old NG+3, but it was the most obvious thing to compare and it slightly informed some
        future design choices, so I can&apos;t entirely ignore it.
        <br />
        <br />
        Earth started expressing interest in coding for AD, and largely got his foot in the door in a similar way
        that I did - through UI and visual improvements. For those of you counting at home, this brings us
        up to 7 developers of varying degrees of motivation and expertise.
        <br />
        <br />
        At this point Hevi started showing some slight signs of dev fatigue, mentioning that he was having trouble
        finding the time to think deeply about the game. He had been consistently pinging me for feedback since I
        was generally the most involved in testing and was also willing to dip my hands in the code if needed.
        I enjoyed the experience and continued to keep pushing onward, but it was starting to become clear that
        finishing the update was going to be a marathon, not a sprint.

        <h3>Nerfs Abound</h3>
        Replication Glyphs were insanely powerful at this point; the replication multiplier power effect was
        reaching the thousands, and the Glyph level factor effect didn&apos;t have a softcap. This resulted
        in the game breaking if you equipped 5 of them as early as the beginning of Celestial 1. This is something
        which Garnet first found out, and he proceeded to largely rebalance much of that part of the game himself.
        He ended up making replicanti Glyphs stack more weakly, and added the Glyph level instability scaling in
        order to bring Glyph levels back down from 70k.
        <br />
        <br />
        I added the increased scaling for free tickspeed upgrades above 300k and Infinity Dimension hardcap which
        eventually turned into Tesseracts, but my reasoning to do so wasn&apos;t explicitly mentioned until this
        point. It seemed like some people on the team at the time really disliked when the game would suddenly
        run away uncontrollably, so my caps were more or less a direct response to that:
        <div className="o-quote-box">
          The circumstances around it were that we recently had a runaway effect that killed like 3 tester saves,
          and that nobody wanted to test at all because of that. So my thought was that bringing down the nerf
          hammer really hard was the only feasible way to get people to be okay with testing again, and that we
          could lighten it up again later on
        </div>
        <br />
        It was almost certainly a gradual process, but this was likely when I started pivoting towards emphasizing
        maintaining tester motivation and momentum over pure, raw content addition. I wasn&apos;t keen on having
        even more testers walk away from the game due to potentially avoidable reasons.
        <br />
        <br />
        <br />
        Next week, I&apos;ll get into Celestial 2 content and some fairly notable organizational changes. (How did
        this entry get even <i>longer</i> than last week&apos;s entry?)
      </div>
    </>
  )
}

export default Motivation;
