import commands from '../../assets/retrospective/1/automator_tree.png';
import "../styles/Entries.css";
import CaptionedFigure from "./CommonElements";

export const PreTesting = () => {
  return (
    <>
      <div>
        On June 26th 2018, Hevipelle sent me a message on Discord about testing what was, at the time, a version
        of the game which barely differed at all from the public version of the Time Dilation update. This point
        effectively marked the very beginning of development for the Reality Update. For the following month, I
        was the only playtester. Testing was pretty much entirely confined to my messages with Hevi and a short-lived
        group chat with the two of us and Omsi.
        <br />
        <br />
        The initial version of the Reality Update I was given access to had nearly nothing new at all, which
        shouldn&apos;t really be a surprise - everything has to start somewhere and it was barely a week since
        Time Dilation was released. Quite a bit was added to the game over this first month, but I could definitely
        see how having the entire team wouldn&apos;t have been helpful at this point.
        <br />
        <br />
        When I was initially given the link, all you got from your first Reality reset was a preset power Glyph with
        AD^1.018 (not the ^1.033 you normally get now, and the Companion Glyph didn&apos;t exist yet). The Reality
        unlock used to require 5e9 TT, and this was considered the largest timewall in early testing for a very long
        time. Half of all Glyphs had 0% rarity due to the fact that the distribution by default was negative half of
        the time.
        <br />
        <br />
        Achievements were reset and your only choice was to wait 2 days until you got them all at once. It soon became
        &quot;you get them back row by row and this speeds up with more realities,&quot; but then stayed that way for
        a while. The only way to get them was to wait, repeating them did nothing. This actually turned out to <i>slow
        down</i> your progression compared to a new game because the Achievement multiplier and early rewards are
        very strong at that point. 
        <br />
        <br />
        I don&apos;t mean to discourage people from trying to become a tester for games they like, nor do I want to
        sound like I&apos;m bragging about how the game is so easy now. I&apos;m simply saying this because I feel
        like standing on my soapbox for a moment. In the majority of cases, closed beta testing doesn&apos;t mean
        &quot;you get to play the finished game earlier than everyone else.&quot; - it often also means that the
        versions of the game you&apos;re going to play are going to be way worse in multiple ways from the finished
        product. Being part of a closed beta means that you will be a part of improving the game, even if it means
        having to playtest all the bad things along the way.
        <br />
        <br />
        That comment aside, it&apos;s crazy that this was our starting point. But even the biggest projects and updates
        start with simply pressing enter a few times and writing some code that does new stuff.
        <br />
        <br />
        
        <div className="c-entries-columns">
          <div className="c-col-narrow">
            <CaptionedFigure
              imgPath={commands}
              caption={"The scrapped \"automator command unlock tree\" and its expensive commands"}
            />
          </div>
          <div className="c-col-wide">
            A brief summary of we did during this month:
            <br />
            <li>
              A ton of minor bugs were fixed, like <i>so many</i> bugs. There were numerous times where I needed to fix my
              save using console commands. While I had general programming knowledge, I didn&apos;t know any Javascript yet
              at this point.
            </li>
            <li>
              The first two rows of Reality Upgrades were added, except all of the first row was single-purchase instead of
              repeatable and the costs were also slightly more expensive.
            </li>
            <li>
              The black hole was added (which was originally called the wormhole) but in mechanics only; the animation
              would come later, and would in fact turn out to be one of my first code contributions to the game.
            </li>
            <li>
              The earliest version of the automator was made, which consisted of a text box and about half of the existing
              commands. It unlocked at 3 realities, had a command limit based on reality count, and you had to purchase
              every command for RM.
            </li>
          </div>
        </div>
        <br />
        Throughout this month, not even the testers knew anything about the update at all, not even that it was being
        tested and developed. All of this was going to change near the end of July 2018.
      </div>
    </>
  )
}

export default PreTesting;
