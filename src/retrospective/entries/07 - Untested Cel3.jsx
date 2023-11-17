import cel3Tab from "../../assets/retrospective/7/prototype_enslaved.png";
import ree from "../../assets/retrospective/7/notation_ree.gif";
import "../styles/Entries.css";
import { CaptionedFigure, ConversationLine } from "./CommonElements";

export const FirstCel3 = () => {
  return (
    <>
      <div>
        <h3>Politically Incorrect?</h3>
        When the 3rd Celestial&apos;s content was originally made, their name was &quot;The Enslaved Ones,&quot;
        replacing &quot;Tapoto&quot; in the list. This sparked some discussion about if the name was appropriate
        and, if we didn&apos;t change it, if people would interpret it as condoning slavery. We debated on renaming
        the Celestial to something less objectionable, and we ultimately decided that would be the safer option.
        <br />
        <br />
        This conversation didn&apos;t actually happen until a few months before release, somewhere in the summer
        of 2022. A reminder for context - that would be 3.5 years after this first implementation. It wouldn&apos;t
        be sensible for me to hold off on discussing this until near the end of the devlog or to ignore it entirely,
        so I&apos;m briefly commenting on it here. The decision to rename wasn&apos;t clear-cut though, and those
        details require some surrounding context as to why it wasn&apos;t an obvious choice. I can&apos;t jump
        the gun on that part, so you&apos;ll just have to bear with me until we eventually get there.
        <br />
        <br />
        I&apos;ll do my best to refer to them as &quot;The Nameless Ones&quot; or &quot;Nameless&quot; for the
        content I write, but some snippets from the past still use the older name and I would like to keep those
        in their original form. To me these are a part of the development history, and I think in those cases
        it&apos;s more important to prefer information accurate to their original sources rather than editing
        and pretending it never happened.

        <h3>The Third Celestial</h3>
        <div className="c-entries-columns">
          <div className="c-col-equal--bordered">
            <CaptionedFigure
              imgPath={cel3Tab}
              caption={"The in-game tab for the 3rd Celestial"}
            />
          </div>
          <div className="c-col-equal">
            Nameless was the first Celestial which ended up being changed significantly by the time the game was
            released. The overall structure of its content was mostly the same, with the ability to store extra
            running time and release it later all at once in a single big burst. Stored game time was also used
            as a currency to unlock new features, but storing &quot;real time&quot; didn&apos;t exist yet.
            <br />
            <br />
            Nameless&apos;s Reality was nothing at all like what exists now. It disabled Infinity Dimensions,
            Time Dimensions, and Replicanti, but in return gave you a 3rd black hole (still called wormholes
            back then). There was also a minor idea of connecting infinities to time in some vague way which was
            never fully fleshed out.
            <br />
            <br />
            Dan may have been the only one to actually have tested the Reality when it was implemented, and
            according to him it was very easy and straightforward.
          </div>
        </div>
        <br />
        Was that it? Yup, and a lot would happen between now and the next time we looked at all the game
        mechanics within Nameless. 
        
        <h3>Adding Lore</h3>
        <b><i>Content warning: Brief descriptions of psychological torture in this section</i></b>
        <br />
        <br />
        Jazz started writing some minimal lore - so far only Teresa&apos;s lore was written. Some time was spent
        writing concrete lore for the 2nd and 3rd Celestials and then deciding on some vague themes for the
        later ones:
        <div className="o-quote-box">
          Since Teresa is uppity, I&apos;ve made Effarig &apos;down to earth&apos;. Enslaved is the classic
          &apos;old one chained to the basement&apos;, V... I&apos;m not sure about. Ra, being forgotten,
          will probably think of you as a &apos;big bro&apos; as you imprinted on him with your very existence.
        </div>
        <br />
        The idea behind The Nameless Ones is that they represent a collective consciousness of the whole testing team,
        and some of the in-game lines allude to the fact that the testing team itself was volatile since many people
        joined and left over time. The original name of &quot;The Enslaved Ones&quot; wasn&apos;t entirely just
        the (tasteless) joke of testers being chained up in Hevi&apos;s basement, and in fact had some external basis:
        <div className="o-quote-box">
          <ConversationLine
            name="Hevi"
            text={`And Enslaved I thought to be somewhat a "hive mind" tortured soul`}
          />
          <ConversationLine
            name="Hevi"
            text={`But my vision of him was somewhat inspired by The Abyss Watchers from DS3`}
          />
          <ConversationLine
            name="Jazz"
            text={`I don't particularly like the idea of having multiple 'enslaved' locked up in the basement`}
          />
          <ConversationLine
            name="Hevi"
            text={`I mean he could just have multiple souls within him`}
          />
          <ConversationLine
            name="Jazz"
            text={`I mean, it's a metaphor for the testers... but hmm. The testers have rotated over time, right?`}
          />
          <ConversationLine
            name="Jazz"
            text={`The torture involves him making clones of himself, painfully and dramatically, splitting apart
            to create new workers, new variations of him. They live for a random time and die in front of the
            main one.`}
          />
          <ConversationLine
            name="Jazz"
            text={`so basically it's constantly watching yourself be born, grow, and die.`}
          />
        </div>
        <br />
        The lore continued being somewhat dark, while also hinting towards the player actually being the antagonist
        to the Celestials. Jazz also mentioned some interplay between the Celestials which didn&apos;t make it
        fully into the game other than being mentioned in passing in the lore for the final Celestial:
        <br />
        <div className="o-quote-box">
          Ra will probably have some unknown relation to the Enslaved. (Time/Forgotten, duh). However, with
          whatever the Enslaved did that caused the torture of him, Ra also got hit by a punishment... cast
          down alone... and then they all forgot about him. Even the Enslaved, due to his torture, forgot about
          things that aren&apos;t his domain.
          <br />
          <br />
          And when you find Ra, the celestially white celestial... you are basically their star. The savior. Being
          alone for arguably as long as the Enslaved was tortured is torture in itself... and, well, anyone in a
          situation like that will imprint themselves on the first thing they see. That&apos;s you.
        </div>

        <h3>Notation Break</h3>
        After the craziness of the first two Celestials, it seemed like most of us needed a more casual break
        from serious development. We all got a bit distracted and made a few new notations:
        <ul>
          <li>
            <b>Roman</b> - Razen made this one and snuck it in before everyone else got on the notation bandwagon.
          </li>
          <li>
            <b>Imperial</b> - Jazz came up with the idea, Garnet thought it would be funny and implemented it.
          </li>
          <li>
            <b>Zalgo</b> - This one was one I made myself, because I was really into Unicode combining characters
            at the time.
          </li>
          <li>
            <b>Dots</b> - Garnet found that Unicode had lots of dot characters and decided to make a notation with it.
          </li>
          <li>
            <b>Clock</b> - This one was also Razen&apos;s doing, with some formula advice from Garnet.
          </li>
          <li>
            <b>Hex</b> - This was a notation that Dan wrote and used extensively throughout testing because it has
            some <a href="https://dan-simon.github.io/misc/what-the-hex/index.html"> neat mathematical properties </a>
            over vast ranges of numbers. Incidentally, this would help us standardize the UI sizing in the future
            due to being exactly 8 characters in length.
          </li>
          <li>
            <b>ALL</b> - This was also one I did; the name was inspired by the game
            <a href="https://store.steampowered.com/app/736260/Baba_Is_You/"> Baba is You</a>, although I don&apos;t
            remember where the idea came from.
          </li>
        </ul>
        <div className="c-entries-columns">
          <div className="c-col-wide">
            There were also a few scrapped notations:
            <ul>
              <li>
                <b>Color</b> - This was one Omsi made a very long time ago (January of <b>2018</b>, nearly a year
                beforehand) which got brought up again. It ended up getting removed and I think that was largely
                because we wanted to keep notations as pure Unicode characters instead of doing some hacky HTML
                support across the entire game.
              </li>
              <li>
                <b>Community</b> - This was a notation like Imperial, which used the names of a bunch of well-known
                users in the game community instead of measurements. Earth tried to gather a list of names, but
                it was eventually decided that we didn&apos;t want to show directed favoritism in the game itself.
              </li>
              <li>
                <b>Ree</b> - Razen made this one as a joke and I found it unreasonably amusing.
              </li>
              <li>
                <b>Words</b> - This was another one Razen made as a joke, which was simply Scientific notation except
                every number was spelled out (ie. "3.21e52" turned into "three.twooneefivetwo").
              </li>
            </ul>
          </div>
          <div className="c-col-narrow">
            <CaptionedFigure
              imgPath={ree}
              caption={"Ree Notation"}
            />
          </div>
        </div>
        <br />
        We&apos;d end up adding a handful more notations over time, and much later in the year we separated out the
        notation code into its own&nbsp;
        <a href="https://github.com/antimatter-dimensions/notations">independent Github repository</a>.

        <h3>Android Version</h3>
        At the end of January, Kajfik, the person who would become the sole developer for the Android version of
        Antimatter Dimensions, randomly messaged a good portion of the tester team out of the blue to ask if they&apos;d
        like to test the Android version as well.
        <br />
        <br />
        He was already in contact with Hevi about this, but amusingly Hevi never mentioned this anywhere on the server -
        not in the test channel, nor in the moderator channel. Because of that, anyone Kaj contacted ended up extremely
        suspicious about it because he was their first point of contact.
        <br />
        <br />
        It was eventually confirmed by Omsi and Razen that this port to Android was legitimate, but it was still an
        interesting experience for everyone involved. Kajfik of course went onward to write the Android port of the
        game with only pre-Reality content, initially with a relatively small subset of Reality testers being the only
        people giving feedback via DMs.
        <br />
        <br />
        <s>
          The majority of the code was structured as similar as possible to the web version of the Reality Update,
          which allowed him to not have to rewrite or refactor everything when working on Reality content. Because he
          was rewriting the game from scratch, he would frequently ask why we did things a certain way and whether or
          not they could be changed.
        </s>
        &nbsp;Over time this would result in a lot of usability improvements, suggestions, and Quality-of-Life features
        bouncing between the Android version and the web version, to the benefit of both.
        <br />
        <br />
        <i>
          Edit: Kajfik sent me a message shortly after I posted this entry, correcting me about something I
          misremembered - he did not, in fact, have access to the Reality Update code for a fair bit of time and
          therefore couldn&apos;t follow the more organized codebase from scratch. As such, much of the preceding
          paragraph is somewhat inaccurate.
        </i>

        <h3>No Time To Stop</h3>
        Dan returned in the beginning of February, much earlier than the 4 months he originally stated. He had been
        DMing a few testers individually to report bugs and balance issues, but the activity was much more intermittent
        due to not being on the server. He eventually expressed interest in returning, saying to someone in their DMs:
        <div className="o-quote-box">
          I left so I could get off to a good start in my classes without having to worry about coding AD. But I think
          I&apos;m ready to be re-added now if you want.
        </div>
        <br />
        He hopped right back into testing what content he could, as well as getting some &quot;big
        picture&quot; conversations going about the state of testing. In particular, he pointed out that most of the
        developers were too tied up in implementing new content, QoL features, and reworks to properly retest the older
        rebalanced content. This was a problem because that meant none of the (arguably) most thorough testers at the
        time were actually scrutinizing the reworked parts.
        <br />
        <br />
        This lined up with the fact that many comments had been made at various points about how testing the game
        and coding for the game at the same time was really difficult and infeasible. Razen said he didn&apos;t intend
        to give the game a full playthrough until it was complete, but Dan, Garnet, and I were less lucky after having
        broken our saves numerous times due to runaways or accidentally running them through a local branch which was
        in the middle of a rework or rebalance.
        <br />
        <br />
        Hevi probably wasn&apos;t entirely aware that the earlier content was still untested due to his intermittent
        activity in the testing channel. He kept pushing forward and brainstormed three more Celestial themes to
        implement: &quot;The Forgotten&quot; (effects and things that you haven&apos;t used or thought about in a long
        time), Achievements, and Antimatter. He hadn&apos;t settled on the one &quot;missing&quot; Celestial theme yet
        (Dimensions), but you can now see that the overall ideas for Celestials were pretty much set in the earliest
        parts of development.
        <br />
        <br />
        The next entry will have the development of the next Celestial in it - and yes, this happened before we
        actually confirmed that the 3rd Celestial&apos;s content was actually well-designed and balanced.
      </div>
    </>
  )
}

export default FirstCel3;
