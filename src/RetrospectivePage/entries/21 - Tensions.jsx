export const Wave2Tension = () => {
  return (
    <>
      <div>
        This entry isn&apos;t going to cover a particularly long period of time and is (perhaps
        unfortunately) very text-heavy. The length of content snuck up on me and didn&apos;t properly hit
        until one of moderators (at the time) said that it might be cool to make an announcement about
        how active testing was during the second wave:
        <br />
        <div className="o-quote-box">
          Approximately two weeks ago we introduce a new wave of testers to the Reality update.
          They are working through content without spoilers (and dealing with constant patches).
          The dev team wants to thank them, but also give an insight into how active that channel
          has been.  Two weeks, almost 12,000 messages.
        </div>
        <br />
        It was at that point I realized that I had unknowingly scrolled through more than ten thousand
        messages, and that maybe I should cut this one a bit short despite basically covering the same
        span of time as last week.
        
        <h3>Handling &quot;Drama&quot;</h3>
        There will be some brief stints of &quot;internet drama&quot; here, as many people
        would refer to it. As much as I would like to avoid it entirely, some disagreements amongst
        the team actually severely affected development. Sometimes it was indirectly by bringing
        down team morale and causing progress to stall, and other times it raised practical
        barriers which made development more difficult.
        <br />
        <br />
        I&apos;ve done my best in the past to give proper credit by name to people where it&apos;s
        due, especially because I want to make it clear that the update was a team effort overall.
        However, I&apos;m going to maintain a personal policy of not naming people by name if they
        ended up (for some reason or another) having a largely negative effect on some part of
        development. Defamation is obviously bad, and I don&apos;t want anyone to get dog-piled
        for something they did more than a year ago.
        <br />
        <br />
        Yes, some of the more active people in the game community (or part of the testing team) may
        know exactly who I&apos;m referring to in some cases - but no, I won&apos;t be publicly
        confirming or denying any speculation on people&apos;s identities.

        <h3>More Rules</h3>
        In addition to worries about older playtesters potentially &quot;spoiling&quot; the 2nd
        wave, we had concerns about the new testers with the most progression doing the
        same for the others. At the end of the day, the goal of the separation was to try to maximize
        the number of &quot;new experiences&quot; we could get from the new testers. This ran counter
        to the fact that the new testers were able to talk freely with each other within the new
        channels and was also not indicative of the general new player experience for
        people on the Discord server.
        <br />
        <br />
        Nevertheless, we still wanted to try because we had no idea how likely a new player
        would be able to figure out how to do later content entirely on their own (particularly
        Nameless Reality). We wanted the game to be amenable to people who don&apos;t actively seek
        out guides or advice, so that a player who is completely unaware of or doesn&apos;t want to
        involve themselves with the community can still have a good gameplay experience.
        <br />
        <br />
        Once the new testers started reaching Celestials, we all collectively drafted up a message
        to relay to them about what we hoped to get out of the artificial communication barrier:
        <div className="o-quote-box">
          I think what we mostly seemed to agree on is that you can talk about anything as long as
          it doesn&apos;t directly or indirectly say anything along the lines of &quot;X is better
          than Y at your stage&quot; or &quot;you should try Z&quot;
          <br />
          <br />
          So for some concrete examples, things like &quot;wow my glyph sacrifice is pretty
          powerful&quot; and showing a picture of your sacrifice values or talking about a cool new
          feature cel1 gives you are both okay even though not everyone has reached sacrifice or
          cel1 yet - the idea being that it&apos;s not a huge surprise that more content/upgrades
          exists, and the existence of said things doesn&apos;t inherently tell other people what
          they should or shouldn&apos;t do.
          <br />
          <br />
          A few examples of things which are not okay would be:
          <br />
          - telling a hypothetical new tester to not finish their first reality until they have at least 6 RM
          <br />
          - telling someone which glyph they should pick out of their choices, based on what you learned
          from playing through yourself
          <br />
          - telling other people what glyphs and/or upgrades they should have before doing something
        </div>
        <br />
        The stricter rulings on communication unfortunately ended up souring a few people&apos;s
        experiences with playtesting, which leads right into the next section of this week&apos;s
        entry...

        <h3>Alienation</h3>
        There was a short conversation in <b>#patch-discussion</b> (ie. the &quot;casual, no gameplay
        talk&quot; channel) which was sparked by one of the previous testers mentioning
        in <b>#blind-patch-testing</b> (ie. the &quot;new testers only&quot; channel) that a certain
        part of the game seemed extremely hard to do. The exchange got started with one of older
        playtesters responding to that comment in the only way they could - by Discord-pinging them
        in the discussion channel to bring the conversation to a place where they could join in.
        A brief outline of the conversation was:
        <ul>
          <li>
            Older tester brings the difficulty conversation to the common channel
          </li>
          <li>
            A few other testers also join in and start discussing mechanics balancing
          </li>
          <li>
             Someone realizes they can&apos;t mention a particular topic on account
             of it being a Celestial-level mechanic
          </li>
          <li>
            New testers start questioning the separation in the first place, as now they
            can&apos;t properly participate in the conversation
          </li>
        </ul>
        This was, by most people&apos;s thoughts, pretty clearly against the spirit of the channel separation.
        Unfortunately, instead of ending it there with perhaps a stern comment or two, this ended up escalating
        and - to say it like Garnet did - leading to everyone &quot;having laid their souls
        bare&quot; in <b>#patch-testing</b> (ie. the &quot;old tester&quot; channel) about personal
        opinions on how we&apos;ve been managing testing as a whole.
        <br />
        <br />
        As much as we tried to emphasize the importance of the separation after this incident, the fact
        is that we messed up and didn&apos;t give a proper answer. This led to some overall frustration
        across the entire team, but it was particularly strong for the two people in the center of it - the
        old tester who started the conversation (we&apos;ll call them <b>A</b>) and the new tester
        who brought up the topic in the first place (we&apos;ll call them <b>B</b>).
        <br />
        <br />
        <b>A</b>&apos;s issue with the team was more long-standing. They had been contributing
        intermittently to the game up to this point, but sometimes they had iffy ideas and/or
        questionable code quality. As a team we generally had a habit of jokingly tossing out
        half-baked ideas which never went anywhere, and we often poked fun about bugs in the code.
        Unfortunately <b>A</b> ended up taking a lot of these jokes personally, thinking that
        their ideas were being actively ignored or that their code quality was being directly insulted.
        <br />
        <br />
        This combined with the overall atmosphere of development fatigue and lockdown
        isolation in exactly the wrong way. With everyone being tired of all the long,
        drawn-out conversations about game mechanic reworks, we started looking for ways
        to distill down and shortcut endless discussions into something usable to push the game
        forward. Doing that often meant a few things got ignored or skipped past, and that&apos;s
        what ultimately led to <b>A</b> taking a long extended break from the community
        entirely - they felt like nobody wanted them around any more.
        <br />
        <br />
        <b>B</b> was someone a few of us knew before the 2nd wave started and even put in good
        words on behalf of. It came as a shock to all of us about how persistent they were about
        the separation being bad for testing, which was part of the reason this escalated
        so much in the first place. <b>B</b> also directly told one of the other new testers exactly which
        Glyphs to use in Teresa, which was something we wanted to avoid since it meant we had
        one less chance to see how feasible a guideless playthrough was.
        <br />
        <br />
        This was unfortunately not the end of our disagreements, but the next time would be a
        fair way into the future. However, despite all of the rough patches, <b>B</b> would
        eventually end up doing some work on the update that nobody else (not even any of
        the devs) wanted to do, so at the end of the day they were very much a good addition to
        the team despite what happened here.

        <h3>The Race</h3>
        At the start of testing, we told the new testers that the &quot;unblinding point&quot;
        was at the end of V, the 4th Celestial. There were some jokes
        about it becoming a race - whoever finished V first would be a &quot;winner&quot; who
        also got the prize of being allowed to spam Hevi with Discord ping notifications
        guilt-free to let him know that they finished the &quot;polished and completed&quot; content. 
        This was of course in addition to gaining access to the rest of the testing channels too.
        <br />
        <br />
        Joke or otherwise, two of the new testers took the idea to heart and were basically
        neck-and-neck for the entirety of their playthrough up through V&apos;s content. One
        of the two was the above-1e6000 EP person mentioned last week and the other
        was someone with a more reasonable amount somewhere slightly above 1e5000 EP.
        <br />
        <br />
        The gap widened between these two testers and the rest of the second wave as time went on,
        and a few weeks into testing they both entered V at nearly the same time while
        everyone else hadn&apos;t even started Celestials at all yet. For the next few hours, all
        of the older testers were on the edge of their seats, watching intently to see who would
        finish V&apos;s content first. They were so close that there was a point where <i>both</i> of
        them had 35/36 V-Achievements at the same time.
        <br />
        <br />
        The two of them ended up finishing their 3-week runs of Reality Update content within
        15 minutes of each other, with the result ending up being almost entirely down to luck
        and figuring out better Glyph sets faster within V. The person who finished first was the
        above-1e6000 EP tester, but everyone agreed that the advantage the increased EP gave had
        long since disappeared by this point.
        <br />
        <br />
        <i>
          (As the two testers neared 36/36 V-Achievements we found that, when
          combined with previous tester experiences, the way to progress through V&apos;s content was
          extremely flexible. Many of us were happy with the fact that we managed to successfully pull
          off a &quot;parallel challenge&quot; mechanic without a strictly forced order, although a few were
          dissatisfied because they felt like that meant it was too easy.)
        </i>

        <h3>Addressing Feedback</h3>
        Despite the communication barrier, we did still get some nice feedback and suggestions
        from the new testers. Some of them were unfortunately things we couldn&apos;t implement,
        either due to skewing balancing too much or being outclassed by a later upgrade they
        couldn&apos;t see yet, but overall some good changes definitely came out of the whole process.
        <br />
        <br />
        One particular Glyph effect was pointed out because it stacked strangely - the effect that
        gives a Dilated Time multiplier based on the amount of Replicanti. (In the current game
        this is the &quot;Multiply Dilated Time gain by +X per 1e10000 replicanti&quot; effect.) Internally
        it was stored as a number much smaller than 1. This meant multiplicative stacking was out
        of the question (it would make the effect <i>worse</i>) but the additive stacking meant
        that the first Glyph with the effect was the only meaningful one and having 3 of them meant
        that you effectively had an extra x3 Dilated Time - an almost meaningless multiplier at
        that point of the game.
        <br />
        <br />
        We pondered replacing it with a different, more well-designed effect, but realized that
        it was too important for the existing game balance to replace. Instead, we modified the
        stacking to be a strange compromise function which stacked multiplicatively, but also
        multiplied the total by an extra factor per Glyph in order to make the total get <i>larger</i> as
        you appended more copies of the effect.
        <br />
        <br />
        Automatic Eternity Challenge completion also came up, but was a trickier topic to discuss.
        It was a very underpowered set of perks - the way that it works is that it gives you a
        single completion of the earliest incomplete Eternity Challenge for every X amount of <i>real
        time</i>, which makes it possibly the only mechanic <i>not</i> affected by game speed modifiers before
        the 5th Celestial. Making the mechanic behave this way was a very deliberate choice because
        it wasn&apos;t meant to be something people relied on; it was a fallback plan
        for people who don&apos;t have a proper automator script written yet.
        <br />
        <br />
        The problem with improving automatic EC completion too much was the fact that it was also
        the &quot;get out of jail free&quot; card which allowed players who didn&apos;t know how
        to complete Effarig&apos;s Reality layer to simply wait for the perks to complete
        EC10 for them. In the beginning of wave 2, the perk series had the intervals
        set to 6/4/2/1/0.5 hours, meaning that it was a whole 23 hours at max speed for the backup
        plan to work. We buffed it to 120/80/50/30/20 minutes due to some suggestions from the new
        testers, bringing the time down to just over 15 hours instead. (We would later further
        shorten that perk path to only contain three perks at 60/40/20 minutes before release.)
        <br />
        <br />
        Related to the puzzle aspect of Effarig&apos;s Reality layer, we found that the first
        two testers to get there were very confused on how they were supposed to get through it.
        Neither of them ended up using automatic EC, which was
        very likely due to the changes we made in response to their confusion. We&nbsp;
        <a href="https://github.com/IvarK/AntimatterDimensionsSourceCode/pull/1358/files">reworded
        the in-game lore</a> to more directly hint at the intended solution of charging the black hole
        and using the stored time within Effarig&apos;s Reality. 
        <br />
        <br />
        <br />
        <i>
          Things should settle down a bit more for the next entry, where I hope to get into continued
          development on the 5th and 6th Celestials, as well as the beginnings of the first proper
          draft of the 7th Celestial.
        </i>
      </div>
    </>
  )
}

export default Wave2Tension;
