import perks from "../../assets/retrospective/6/tree_restructure.png";
import CaptionedFigure from "../common/CaptionedFigure";
import ConversationLine from "../common/ConversationLine";

export const Rebalancing = () => {
  return (
    <>
      <div>
        <h3>More Content?</h3>
        Considering my vague memory of this part of development, I was expecting to get into the development of
        the 3rd Celestial (The Nameless Ones) this week. Instead, when gathering info, I found more or less
        immediately after the first version of Nameless&apos;s Reality was implemented, all the active testers
        started to find all sorts of balance issues. Development of new content halted while we tried to sort
        through the balancing of earlier content.
        <br />
        <br />
        Unfortunately this means that while many of you might expect this entry to go into Nameless (as I promised),
        that isn&apos;t actually going to be the case. I&apos;ll try to be better at avoiding mistakes like this in
        the future, but there&apos;s only so much I can do considering I&apos;m still largely writing these on a
        week-by-week basis and am making &quot;next week predictions&quot; based on my somewhat flawed memory. Sorry.

        <h3>Possible Regrets</h3>
        Hevi mentioned swapping the first two Celestial names around:
        <div className="o-quote-box">
          The reason to swap teresa and effarig is because boo was kinda one of the first ppl in this server, and
          spec has made a lot of work for teresa
        </div>
        <br />
        Thematically it made sense and on paper it would be a relatively simple change. In practice, this ended
        up causing intermittent bugs over the next few months directly related to things which weren&apos;t
        swapped properly in the code, even though it was otherwise a relatively straightforward find-and-replace
        operation. This would&apos;ve been okay to deal with if it weren&apos;t for the fact that these bugs were
        mixed in with bugs from new content, and sometimes it was hard to tell the difference.
        <br />
        <br />
        <i>
          On the more technical end - the reason this swap ended up so messy was because this was before we had
          set up the GameMechanicState structure or made a proper save migration system. This meant that all
          game mechanics were directly referencing the save state and lots of attributes didn&apos;t get swapped
          between <span className="o-code-text">player.celestials.teresa</span> and&nbsp;
          <span className="o-code-text">player.celestials.effarig</span> properly, especially more complex things
          like the Glyph filter.
        </i>
        <br />
        <br />
        Regardless, the bugginess of the swap led to some of the team being hesitant about large sweeping backend
        changes, even if they shouldn&apos;t affect the game&apos;s behavior itself if done correctly. This train
        of thought ends up coming up again, much much later.
        <br />
        <br />
        From this point onward I&apos;ll be referring to the first two Celestials by their name, in their current
        order in the released game (ie. Teresa is 1st, Effarig is 2nd). Some quotes or snippets might still have
        the wrong names due to the swap still being ongoing at this point; in those cases, I&apos;ll clarify as
        needed.

        <h3>Perk Improvements</h3>
        In the process of making Effarig&apos;s Reality, we found out that one of the Eternity milestones was bugged
        and always applied even when it shouldn&apos;t; in particular, you didn&apos;t need to pass the antimatter
        thresholds to unlock Infinity Dimensions. The lower layers of Effarig&apos;s Reality relied on this bug,
        which resulted in us turning it into a feature by adding a new perk which did exactly that.
        <br />
        <br />
        <div className="c-entries-columns">
          <div className="c-col-narrow">
            <CaptionedFigure
              imgPath={perks}
              caption={"The reorganized perk tree with old functional groupings"}
            />
          </div>
          <div className="c-col-wide">
            As we would find out when some of the testing team later tried a perkless playthrough for fun, this
            change would be the main thing that changed progress from &quot;really scuffed and painful&quot; to
            &quot;literally impossible.&quot;
            <br />
            <br />
            I also did a perk tree revamp - adding colors, rearranging the nodes, and giving
            them all proper IDs and labels instead of &quot;whatever order they were implemented in.&quot; The
            new labels weren&apos;t that good (a letter plus a number) but were still better than just 0-63.
            <br />
            <br />
            Perks were still nowhere near their final version, but this was enough of a change that some
            testers felt like playing through again with the new arrangement because it seemed to offer more
            meaningful choices.
          </div>
        </div>

        <h3>Other Early Content</h3>
        Earth started filling out new content entries for the in-game How to Play (H2P). This was still the very
        old format of an unstyled block of text on a separate webpage, but he was making the first steps towards
        improving information visibility in general. We&apos;ve always wanted the game to be friendly to players
        who aren&apos;t part of the community and/or don&apos;t look up external resources, and up to this point
        many game mechanics were only explained in the testing Discord channel.
        <br />
        <br />
        I made a testing function called <span className="o-code-text">dev.goFast()</span>, which gave a temporary
        game speed multiplier that went away if you reloaded the game. It was removed before release because it
        made it too easy to cheat in a mostly undetectable way. We generally don&apos;t care about cheating, but
        bug reports pre-release mostly consisted of fixing saves; we wanted to reduce the volume of bug reports
        caused by running the game trillions of times faster than intended.
        <br />
        <br />
        Garnet pointed out that it&apos;d be better for the first Glyph to have a fixed rarity as well, which was
        perhaps the first step towards Glyph RNG mitigation. Omsi covertly added music Glyphs at some point in
        development, and we wanted to make them more accessible once the knowledge became known to the team. She
        was thinking it would be behind a secret import, but it eventually got put into the perk shop instead.

        <h3>Game Speed Woes</h3>
        Dan and Garnet discussed if there&apos;d eventually be a long run era for Reality - commenting that if
        black hole upgrades keep coming in and no other things depend on real time, that optimal run length will
        stay forever short. Garnet suggested making Glyph level depend on something that grows with real time as
        a response. This didn&apos;t go anywhere, but this conversation was probably the first hint towards why
        the 5th Celestial is such a dramatic pacing shift.
        <br />
        <br />
        The only thing which stopped near-instant realities being optimal was the fact that dilation autobuyers
        weren&apos;t every tick and max bulk, which felt &quot;weird&quot; and &quot;a bit cheap.&quot; This
        was one of the first notable <b>tick microstructure</b> problems - we used this term as shorthand for
        when the behavior of the game depends strongly on the specifics of what happens during time scales of
        hundreds of milliseconds. In a sense this particular problem still exists on the released version of the
        game (balance depends on it), but it was somewhat mitigated by the bulk upgrades in the Perk Shop.
        <br />
        <br />
        We also had the first of many longer conversations about what we should do with the black hole&apos;s
        game speed boost; it was starting to be a design problem:
        <div className="o-quote-box">
          <ConversationLine
            name="Dan"
            text={`This is actually a fundamental principle I think: as long as everything is affected by the
              wormhole, almost anything that makes long runs good will be OP due to wormholes.`}
          />
          <ConversationLine
            name="Jazz"
            text={`Yeah, because I don't think anyone expected wormholes to get this bad`}
          />
          <ConversationLine
            name="Jazz"
            text={`Honestly at this point I think we need to not introduce new celestials, and just stabilize
              content for a week and see where people get to, and introduce a new Celestial there.`}
          />
          <ConversationLine
            name="Dan"
            text={`I agree, someone needs to test all this (and since I'm still at 1e5 RM on my main save I sort
              of don't want it to be me).`}
          />
        </div>
        (Many extra unrelated comments were cropped and the black holes were still called wormholes at this time.)
        <br />
        <br />
        A lot of features were beginning to scale out of control due to massive game time, with two notable
        already-fixed ones being Time Study 143 (Idle IP multiplier) and Temporal Transcendence (TD multiplier
        based on time). In this case it was the &quot;Like Feasting on a Behind&quot; achievement reward, to
        which we also applied a softcap. Jazz once again mentioned multiple black holes being a bad idea (which
        was a bit tongue-in-cheek since he was the one who originally suggested it and openly admits it) and we
        were all starting to see that point. Reality Machines were around 1e30 now, and this conversation is why
        the first black hole upgrade cost scaling happens there.

        <h3>Controlling the Game</h3>
        There were a few much smaller but still notable problems we needed to fix here.
        <br />
        <br />
        <u>Initial Effarig Glyphs</u>
        <br />
        Hevi suggested what would become Effarig Glyphs and said they should have 7 effects - one related to
        each Celestial. The ideas of being able to equip only one and that they would only be unlocked from
        completing Effarig&apos;s Reality were both in there from the start. He also suggested that the
        &quot;Celestial of Antimatter&quot; effect would actually be a nerf, but that was pointless because
        you could just tell the filter to avoid it while farming Glyphs.
        <br />
        <br />
        After Dan cheated in an Effarig Reality completion for testing, we found out that the game almost
        immediately ran away again. The main culprit was the Glyph level effect, which at the time was
        a pre-instability level multiplier. It was then changed to something which <i>delayed</i> instability,
        both to be more intuitive and accurate to the displayed number. We would find out that some other effects
        were too powerful, but only later on.
        <br />
        <br />
        <u>Replication Glyphs</u>
        <div className="o-quote-box">
          <ConversationLine
            name="Jazz"
            text={`so far every glyph except time glyphs have broken the game`}
          />
          <ConversationLine
            name="Me"
            text={`stacking time shard threshold reduction broke the game at one point iirc`}
          />
        </div>
        <br />
        We found an interaction which required us to weaken <i>two</i> separate effects:
        <ul>
          <li>
            Replication Glyphs were way stronger than time Glyphs for Time Dimensions, which was through the dilation
            upgrade which applies the replicanti multiplier ^0.1 to Time Dimensions as well. This was when Garnet
            added a softcap that made the dilation upgrade give diminishing returns above 1e9000 multiplier
          </li>
          <li>
            Time Dimensions in general were becoming too powerful. I added an increased scaling at 300k upgrades to
            reduce the number of free tickspeed upgrades a while ago, but it was too strong at 300k and too
            weak once progress hit 500k. Garnet modified the increased scaling to vary more smoothly, being easier
            at the start and much harsher at higher values.
          </li>
        </ul>
        <u>Incomplete Resets</u>
        <div className="o-quote-box">
          <ConversationLine
            name="Me"
            text={`My local branch seems to be doing the "keeping some amount of antimatter after reality" thing
              again`}
          />
          <ConversationLine
            name="Me"
            text={`I effectively start each reality with e70k for no reason`}
          />
          <ConversationLine
            name="Dan"
            text={`Does it do it consistently (that is, a significant fraction of the time)? Also, does it do it
              if you turn ND autobuyers off?`}
          />
          <ConversationLine
            name="Me"
            text={`100% and no`}
          />
          <ConversationLine
            name="Me"
            text={`... it totally exists on master right now`}
          />
          <ConversationLine
            name="Dan"
            text={`OK, finally found the bug. You keep something for the first autobuyer tick of a new reality.
              We reset base free galaxies on reality, but, in an oversight, not free galaxies themselves.`}
          />
        </div>
        (Many extra unrelated comments trimmed again.)
        <br />
        <br />
        This was another case of inconsistent variable states not being properly updated, which we hoped to clean
        up. Needless to say, some bugs we found were quite obtuse.

        <h3>Temporary Leave</h3>
        After an incredibly packed and hectic Christmas time, everyone still in education no longer had as much
        free time and needed to get back to studies again. This unfortunately included Dan, who was working on an
        advanced Mathematics degree. He requested to be temporarily removed from the team so he wouldn&apos;t be
        distracted:
        <div className="o-quote-box">
          Sorry to disrupt the conversation, my school starts soon, so from now on for the next four months or so
          I&apos;ll probably barely talk at all and not be online that much. I&apos;m also going to remove myself
          from the repo to avoid what happened before where I saw a bug and felt it was necessary to fix it.
          I&apos;d also like tester removed, just as [another tester]&apos;s tester was removed, except for longer.
        </div>
        <br />
        Looking back on things, especially with this entry and last week&apos;s entry, I feel justified in saying
        that Dan carried a lot of momentum in testing. In particular, he wasn&apos;t afraid to discuss the
        &quot;hard problems&quot; with design and balancing in great detail in order to come up with a working
        solution. He would return, but we would definitely be lacking in the meantime.
        
        <h3>Onward...?</h3>
        Before the end of 2018, Hevi said it would be funny if we released the Reality Update on April Fools&apos;
        Day 2019 - intentionally countering the idea that everyone would think the release announcement is a joke.
        At the time, Razen and I thought it might be feasible to hit that target, but that was with the mindset
        that we&apos;d be carrying on the pace we had been for the past two months.
        <br />
        <br />
        However, with Dan gone and everyone else uncovering all the bugs and poorly future-proofed design behind us,
        that was looking impossible to do. And since we&apos;re still 4 years before the official release,
        you can imagine that things continued to not go as hoped.
        <br />
        <br />
        By this point a fair bit of dust had settled from fixing our relative disregard to balance as we added new
        content. Next week&apos;s entry should actually get into the development of The Nameless Ones. However,
        while we spent a significant amount of effort rebalancing the update here, it was still untested, so I
        don&apos;t necessarily want to promise that that&apos;s where next week is headed.
      </div>
    </>
  )
}

export default Rebalancing;
