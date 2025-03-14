import { Link } from "react-router-dom";
import React from "react";

import titleImg from "../../assets/projects/antimatterdimensions/AD_title_image.png";
import dimensions from "../../assets/projects/antimatterdimensions/dim_cascade.png";
import automator from "../../assets/projects/antimatterdimensions/automator.png";
import TwoColumn from "../../common/TwoColumn";
import ".././ProjectPage.css";

const AntimatterDimensionsProjectPage = () => {
  const bgStyle = {
    backgroundImage: `url("${window.rootURL}/bg/Project_AD.png")`,
    filter: "blur(0.1rem)",
  };

  return (
    <>
      <div className="c-image-bg" style={bgStyle} />
      <div className="c-centered-image">
        <img src={titleImg} className="o-header-image" />
      </div>

      <div>
        <u><h3>Description</h3></u>
        This page describes my work on a web-based game in remote collaboration with many other software and Web
        developers from around the world. My contribution leaned heavily towards the technical end of development,
        implementing many new game mechanics and addressing numerous bug reports, but I also played a strong role
        in guiding the design and balancing of the game overall. The game has been officially released and can be
        played <a href="https://ivark.github.io/AntimatterDimensions/">here</a>, or downloaded to play locally on
        PC (via Steam) or Android (via the Google Play Store).
        <br />
        <br />
        Antimatter Dimensions is an Idle Incremental game originally created by a Finnish developer who goes by the
        online alias of Hevipelle. The distinction between Idle and Incremental games is somewhat disagreed upon, but
        both typically include a primary game loop (ie. the player&apos;s second-by-second actions) which is heavily
        simplified - often it is as simple as clicking buttons to make numbers go up or waiting for them
        to go up on their own. Having a bare-bones structure at this level of gameplay allows the design of the
        game to focus on the <i>secondary</i> game loop (ie. what the player chooses to do on longer time scales).
        <br />
        <br />
        <TwoColumn
          leftWeight={1}
          rightWeight={2}
        >
          <>
            <img src={dimensions} className="c-inset-img" />
            <i>An sample of the game&apos;s dimension counts</i>
          </>
          <>
            This typically takes a game based on repetitive grinding or waiting and turns it into a game of
            resource allocation or automation management. As an example, one could imagine taking a game where the
            player is a worker in an assembly line, and turning it into a different game by replacing the worker with
            a robot and then telling the player that their job is now to manage all the robots working on the assembly
            line.
            <br />
            <br />
            In Antimatter Dimensions, the main objective is to generate extremely large amounts of antimatter, reaching
            amounts of 10 to the power of multiple quadrillions by the end of the game. This is done automatically
            through a set of 8 dimensions which cascade; the 8th dimension produces 7th dimensions, each 7th dimension
            produces 6th dimensions, etc. all the way down to the 1st dimension which itself produces antimatter.
            <br />
            <br />
            Production speeds up as the game progresses and upgrades are purchased, and new features and game mechanics
            are introduced which allow gameplay decisions on longer time spans to be made. At the same time, older
            features are continually automated away so that the player&apos;s attention can stay focused on a sliding
            window of a relatively small set of mechanics, even as the game complexity ramps up.
          </>
        </TwoColumn>

        <u><h3>My role</h3></u>
        The development team for Antimatter Dimensions consisted of about 5 developers and 20 playtesters in
        a semi-professional environment; the exact size of the team varied over time. It was largely a passion
        project, one which I stayed with and contributed code on for approximately 5 years. The game was written using
        the Vue.js framework, using git for version control. The code repository is now open-source, with the Github
        repository available <a href="https://github.com/IvarK/AntimatterDimensionsSourceCode">here</a>.
        <br />
        <br />
        At the start of my time on the team, I was simply a playtester who was supposed to closely scrutinize the game,
        give general gameplay feedback, and report bugs. I was brought on to the team near the end of the Time Dilation
        update, but made the vast majority of my contributions to the Reality Update - the final content update of the
        game which took 4.5 years to finish.
        <TwoColumn
          leftWeight={1}
          rightWeight={1}
        >  
          <>
            In the Autumn of 2018, during the earliest stages of the Reality Update, I rapidly transitioned from being
            a playtester to being a full-on game developer who would fix bugs, implement player suggestions for
            improvements, rebalance game mechanics as needed, and give code reviews to other developers when requested.
            <br />
            <br />
            Over the next few years I would gradually pick up more roles and responsibilities, including being the
            primary UI/UX designer for most of the later content, implementing most of the mid-to-late game content,
            maintaining the game&apos;s built-in custom automation scripting language and fixing the majority of the
            remaining pre-release bugs due to the other developers being unavailable or having moved on.
          </>
          <>
            <img src={automator} className="c-inset-img" />
            <i>An image of the editor for the in-game Automator and its associated documentation page</i>
          </>
        </TwoColumn>
        <br />
        The game was released during December 2022; from that point onward I was the sole developer in charge of
        fixing any post-release bugs submitted by the community and otherwise maintaining the code in a usable state.
        In July 2023, we declared the game complete, made the code open-source, and have decided that it is no longer
        receiving further gameplay-changing updates. However, we are still keeping an eye out for any necessary Node.js
        package updates we may need to do for security purposes.
        <br />
        <br />
        I also wrote <Link to="/ADdevlog">a long-form retrospective</Link> summarizing the development journey
        which the whole team went through for this content update in much greater detail. This started in September 2023
        and received weekly posts until the final entry in May 2024.


        <u><h3>Results</h3></u>
        Antimatter Dimensions is playable for free on
        <a href="https://ivark.github.io/AntimatterDimensions/"> web browsers </a>
        and <a href="https://store.steampowered.com/app/1399720/Antimatter_Dimensions/"> Steam</a>.
        Chrome, Firefox, and Edge are the officially supported browsers; while the web version is playable to an extent
        on mobile browsers, those are not supported and may be buggy and/or have usability issues. A mobile port to
        Android devices was also released on the Google Play Store in April 2024, with an interface properly optimised
        for mobile resolutions and inputs.
      </div>
    </>
  )
}

export default AntimatterDimensionsProjectPage;
