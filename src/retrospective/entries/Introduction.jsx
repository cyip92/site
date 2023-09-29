import { Link } from "react-router-dom";

export const Introduction = () => {
  return (
    <>
      <div>
        <h1>A Retrospective for The Reality Update</h1>
        <a href="https://ivark.github.io/AntimatterDimensions/">Antimatter Dimensions</a> is an Idle Incremental game
        created by a Finnish developer who goes by the online alias of <b>Hevipelle</b>. It started development in
        2016 and had been under long-term development until the end of 2022, when the final content update (called
        The Reality Update) was released. The game continued to get minor updates until July 2023, at which point it
        was considered to be a complete standalone product.
        <br />
        <br />
        This was by far the largest software project I became involved in, which grew to contain
        a <a href="https://github.com/IvarK/AntimatterDimensionsSourceCode">very large codebase in Vue.js</a> over the
        span of the 7 years it had been developed. As this was largely a passion project, many people who were involved
        came and went as time passed. However, at any given point during my 4.5 year time of working on the game, I
        was working closely and collaboratively with 3-5 other developers and a larger group of 15-25 playtesters on
        the team. I started off as a playtester, but soon began to implement and pull-request minor quality-of-life
        features I wanted to see in the game. Gradually I became more and more involved in the coding end of
        developing the game, until I had effectively become the lead developer of the team a couple years in.
        <br />
        <br />
        For a while, I have been promising people a deep dive into the development of the Reality update. There was
        a lot of post-release activity which kept my time commitment relatively high - fixing incoming bug reports,
        implementing highly-backed user suggestions, and providing a relatively small amount of support for people
        changing the code to make mods for the base game. However, now that things have cooled down and I have had
        the spare time to make this website and start getting all my thoughts on the game organized, I am finally
        getting around to writing everything up.
        <br />
        <br />
        Have a question or two about this? I answered all the questions which immediately came to
        mind on a dedicated <Link to="/ADdevlog/FAQ">FAQ Page</Link>.
        <br />
        <br />
        Want to get going on reading what this was all about?
        Here&apos;s the <Link to="/ADdevlog/1">first entry</Link>.
      </div>
    </>
  )
}

export default Introduction;
