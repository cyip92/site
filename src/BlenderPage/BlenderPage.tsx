import { Helmet, HelmetProvider } from "react-helmet-async";
import React from "react";

import "./styles/BlenderPage.css";

import BlenderEntry from "./BlenderEntry";
import BlenderIntro from "./BlenderIntro";

import week01 from "../assets/blender/01-blob.png";
import week02 from "../assets/blender/02-kirby.png";
import week03 from "../assets/blender/03-pikablob.png";
import week04 from "../assets/blender/04-blobbird.png";
import week05 from "../assets/blender/05-ror2_assets_1.png";
import week06 from "../assets/blender/06-sword_kirby.png";
import week07 from "../assets/blender/07-ror2_assets_2.png";
import week08 from "../assets/blender/08-BBG.png";
import week09 from "../assets/blender/09-pichu.png";
import week10 from "../assets/blender/10-pigeon.png";
import week11 from "../assets/blender/11-kirby_food.png";
import week12 from "../assets/blender/12-katamari_ball.png";
import week13 from "../assets/blender/13-carrot_cake.png";
import week14 from "../assets/blender/14-walking_kirby.gif";

export const BlenderEntryContent: Array<BlenderEntryType> = [
  {
    week: 1,
    title: "Blob",
    date: "20 October 2024",
    short: `A simple, blocky Google Blob for my first Blender project`,
    description: `This was the first thing I made, and it was something based off of the
      <a href="https://en.wikipedia.org/wiki/Blob_emoji">Google Blob emoji</a>. This was pretty much entirely
      because the first people I told about my Blender commitment were people I first met online, and my
      "online personality" has in some ways become centred around these Blobs. It looks super blocky, but at
      this point I was happy enough with it that I called it done.`,
    technical: `This model was basically entirely meshwork. I extruded the facial features outward because I
      thought it would be funny to come back to this and 3D print a Blob in the future. These bits wouldn't
      really show up on a physical object if they were flat to the body instead, but honestly that was a weak
      reason at best.`,
    image: week01,
  },
  {
    week: 2,
    title: "Kirby",
    date: "27 October 2024",
    short: `A rendition of Kirby primarily using a Kirby plush as a reference`,
    description: `At this point I preferred objects with simpler shapes, just because I was still getting
      accustomed to the Blender interface and tools. So naturally I looked around my flat and decided - what better
      "simple object" practice could I get than the Kirby plush sitting on my nightstand?`,
    technical: `After making the Blob last week, I realised that I was kind of overcomplicating the process of
      making a sphere with evenly-spaced mesh nodes, especially with how much time I spent dissolving extra bits
      to simplify the object. I just went with a straightforward isosphere this time, which admittedly gave Kirby
      a bit of a "golf ball" appearance.`,
    image: week02,
  },
  {
    week: 3,
    title: "\"pikablob\"",
    date: "3 November 2024",
    short: `A slightly more involved Blob, based off of the head of a Pikachu`,
    description: `In keeping with the "simple or round object" theme, I decided to do another variant of Blob. I also
      took this as an opportunity to redo my initial Blob mesh and turn it into something a bit less... chunky in case
      I end up doing other Blob variants in the future. But at this point, I don't think I would have been satisfied
      with making Blobs forever - nevertheless, a more solid base would be nice to have.`,
    technical: `I took this project as a chance to properly start toying around with more tools in Blender which I was
      unfamiliar with. In particular I messed around a lot with modifiers on this in order to project the facial
      features onto the Blob's surface, although I didn't actually incorporate them on the surface mesh. It did allow
      me to have them much less visibly sticking out though.`,
    image: week03,
  },
  {
    week: 4,
    title: "\"blobbird\"",
    date: "10 November 2024",
    short: `A simple Blob with a much more detailed friend`,
    description: `This week I decided that if I stuck to simpler objects, I'd never actually make any meaningful
      progress in learning how to make anything interesting. So I had an idea to take a quick Blob and spice
      up the whole project in general - I was going to make a European robin and stick it on top as well. To no
      surprise, the majority of my time on this week's project was spent on making the bird.`,
    technical: `I really dove into the new tools this week, shaping the bird's body with metaballs and the legs with
      NURBS surfaces. I also had my first exposure to making shaders, mostly in an attempt to give the wings a
      gradient effect without manually assigning colours to a few hundred faces. And then lastly, in an attempt to
      make some mock feathers, I learned how to use Blender's particle system to make some short, fuzzy hair.
      <br/><br/>
      Overall the project was framed weirdly because you almost can't see any of those intricate details and
      most of the end result is yet another simple Blob. I'm actually proud of the robin though.`,
    image: week04,
  },
  {
    week: 5,
    title: "Shock Collar and Bolt Amethyst",
    date: "17 November 2024",
    short: `A couple of assets for a game mod I am working on`,
    description: `I'm making a mod for the roguelike game
      <a href="https://store.steampowered.com/app/632360/Risk_of_Rain_2/">Risk of Rain 2</a> with a few friends,
      and part of the mod is adding some new items. Because every item in the game also shows up in the world as
      a 3D object, this means that we also need some models for the items we're adding. I was hoping to knock out
      some simpler models for every item we planned, but I ended up getting too sick to concentrate on anything
      partway through the week.`,
    technical: `This week was mostly getting very familiar with common tools and hotkeys to streamline my modeling
      process. After doing the first item, I realised that I was going a lot slower than I'd hoped - which is to be
      expected when starting out, but I had been doing this long enough that I think it was worth trying to focus
      a bit more on speed now too.`,
    image: week05,
  },
  {
    week: 6,
    title: "Sword Kirby",
    date: "24 November 2024",
    short: `A Kirby that's more than just a few spheres and ovals`,
    description: `I had the idea that making variants of Blobs or Kirby would be nice for weeks where I'm very busy
      with other things or otherwise feel the need to slow down a bit. Well, the sickness I got last week led all
      the way up to this weekend, so I ended up making this week's model pretty much entirely in one afternoon and
      evening.`,
    technical: `I remade the Kirby model again, instead of taking the old "golf ball" Kirby as a starting point. I
      had a friend point out triangle count on some of my older models, so I decided that I should also start
      simplifying the object meshes when possible as I finalise each project. I also got the chance to mess around
      more properly with material properties on this Kirby as well.`,
    image: week06,
  },
  {
    week: 7,
    title: "Sparking Kunai and Galvanized Gem",
    date: "1 December 2024",
    short: `A couple more game mod assets`,
    description: `Our Risk of Rain 2 mod has the overall aesthetic theme of lightning. The Sparking Kunai is
      relatively generic by video game standards, but the Galvanized "Gem" is actually based off of
      <a href="https://www.google.com/search?q=black+tourmaline&udm=2">black tourmaline</a> crystals. I did some
      brief research when looking into various gemstones for inspiration, and found that black tourmaline actually
      has piezoelectric properties - it produces minor amounts of electricity when compressed. And yes, I do realise
      that I made a raw crystal and not a gemstone.
      <br /><br />
      I ended up deciding that I was going to stick to two game assets per week instead of trying to knock out
      the rest of our items in one go - partially because I'd rather spend the time to refine each model instead
      of rushing them, and partially because we still need to discuss which items we're keeping and which ones
      we aren't.`,
    technical: `I really properly spent some time on shaders this week, tweaking parameters so that they would mimic
      what these objects look like in real life as well as possible. It was also the first time I properly made one
      without consulting any outside references for information, which made me happy.`,
    image: week07,
  },
  {
    week: 8,
    title: "Bismuth Hopper Crystal",
    date: "8 December 2024",
    short: `A stylized bismuth crystal, spelling out "BBG"`,
    description: `I was feeling really ambitious and decided to make a
      <a href="https://www.google.com/search?q=bismuth+crystal&udm=2">bismuth crystal</a> this week. It was also
      meant to double as a logo for a currently-secret thing which goes by the abbreviation "BBG". Unfortunately,
      I don't think I was able to pull off most of the visual effects I wanted to with this one.`,
    technical: `There was a bunch of shader tweaking to get a reasonably appropriate blend of colours this week,
      since bismuth crystals are a very particular mixture of colours rather than just random parts of the rainbow.
      I also spent a lot of time getting familiar with splitting and merging surfaces.
      <br /><br />
      To be honest, I'm not entirely proud of how this one turned out. I definitely want to come back to this when
      I'm more experienced and perhaps have an actual physical bismuth crystal to reference - some parts of the
      geometry were very unclear based on online photographs alone.`,
    image: week08,
  },
  {
    week: 9,
    title: "Pichu",
    date: "15 December 2024",
    short: `A small cute mouse pokemon`,
    description: `I was in a pokemon mood this week, and thought that a Pichu would be a fun idea to try. Luckily
      I had a Pichu plushie to use as a physical reference, but when it came to the detailing I found out parts of
      said plushie were incorrect and ended up having to pull up some online references.`,
    technical: `This week was my first foray into sculpting models in Blender, and it was an experience to say the
      least. I definitely see how it's a very powerful method for making models, but right now I'm still
      at the level of "spending the entire evening massaging a Pichu." Nevertheless, it was fun and informative.
      <br /><br />
      I also properly inset all the facial and skin features into the mesh itself this time, rather than making a
      separate object and extruding it outward a tiny bit. Overall I'm kinda proud of this one, even though it felt
      like I was fighting to get the correct body proportions the entire time.`,
    image: week09,
  },
  {
    week: 10,
    title: "Pigeon",
    date: "22 December 2024",
    short: `A silly-looking pigeon`,
    description: `I felt like giving another attempt at making some kind of bird this week, and for a bit I was
      trying to decide between a cockatiel and a Rowlet (a pokemon). While I was out for some errands, I happened
      across a flock of nearly a hundred pigeons in the park - and they were all just calmly wandering
      around. I always thought pigeons were cute, so I decided to stick around and take a lot of reference
      pictures; the plan for this week was now a pigeon.`,
    technical: `I didn't really do a whole lot of new stuff this week, but it was a good run through almost
      everything I learned so far. I really dove into making textures for pretty much every visible surface on
      the model, although I'm not particularly satisfied with how the feather textures turned out. Next time I
      make a bird, I might look into making actual feathers rather than trying to texture it procedurally.
      <br /><br />
      The pigeon itself looks a bit weird to me looking back on it all, and there's clear bits where it could
      use more polish (eg. where different textures/surfaces meet) but unfortunately I didn't give myself as
      much time on this as I wanted to. I'm at least somewhat proud of the feet though.`,
    image: week10,
  },
  {
    week: 11,
    title: "Kirby at Dinner",
    date: "29 December 2024",
    short: `Kirby eating a bunch of food`,
    description: `My Christmas was full of lots of food, so I thought it would be fun to make this week's
      project themed similarly. Of course, with the overall relaxing atmosphere of the holiday season, I also
      wanted to do something a bit less serious as well. I glanced at my Kirby plush with the idea of food in
      mind, and a very obvious idea presented itself.`,
    technical: `I did a small bit of new shader work this time, but I think the biggest thing I realised this
      week was the fact that this idea had a lot of smaller individual components. I figured out partway in that
      I'd be working on this forever if I spent too long on every single individual asset in the scene, so I
      prioritised finishing single objects instead of spending forever perfecting shaders and shaping.
      <br /><br />
      I am honestly kind of proud of how this one turned out! Of course the scene could have been filled out
      with even more food objects and maybe some kind of a background, but for a simpler setting I am pretty
      satisfied with what I put together.`,
    image: week11,
  },
  {
    week: 12,
    title: "Katamari Ball",
    date: "05 January 2025",
    short: `A colourful Katamari from the game series Katamari Damacy`,
    description: `Partway through the week I watched my partner play through We Love Katamari REROLL, which
      was interesting to see from the perspective of someone wanting to pick up 3D modeling skills. The game
      is full of a lot of low-poly objects which still have enough detail to communicate what they are in a fun
      stylized way. I am still unsure right now, but I think that may be the style of modeling I want to aim for
      in the long run myself.`,
    technical: `I chose this in particular because I realised that a lot of my other projects so far have been
      mostly soft and/or very round objects which have shapes which can very easily hide mistakes and
      imperfections. The karamari ball may be round, but it is also very geometric with some particular
      visual aspects which are crucial to get correct. I figured this would be my chance to replicate an object
      which has a lot less wiggle room for sloppiness.
      <br /><br />
      Looking back on this, I think I should learn how to make Blender objects with scripts when necessary. I
      made this via lots of composing, cutting, and simplifying meshes - it ended up being somewhat of a pain,
      and the final product is still a very cluttered mesh (~5000 triangles). In hindsight it would have probably
      produced a better result if I started with scripting instead.`,
    image: week12,
  },
  {
    week: 13,
    title: "Carrot Cake",
    date: "12 January 2025",
    short: `A slice of carrot cake on a kitchen counter`,
    description: `My birthday was this week, and my partner decided to bake me a carrot cake as a birthday cake!
      I mostly took this week easy and didn't put a whole lot of time into Blender, and then ended up doing the
      whole thing on Sunday again. I don't want to drop the ongoing habit, and regardless I still enjoy making
      things in Blender once I get going on an idea.`,
    technical: `Despite putting this together in one go, I still wanted to give it the proper amount of time and
      attention. I decided that for a piece that was otherwise going to be pretty simple, I would direct a lot more
      effort into the smaller details in shaping and texturing. As a result, a lot of the individual assets are
      more intricately shaped than many of my previous weeks. I spent a fair bit of time comparing what was on my
      screen to the actual physical objects in my hand or in the kitchen this time.
      <br /><br />
      I think I might spend less time trying to make really detailed shaders for a bit, at least until I have
      the proper knowledge and/or experience to come up with something that looks properly good. The surface is
      relatively faithful to our actual kitchen countertop, but the carrot cake texture leaves much to be improved
      upon.`,
    image: week13,
  },
  {
    week: 14,
    title: "Walking Kirby",
    date: "19 January 2025",
    short: `An animated Kirby walking down a Path`,
    description: `My partner and I were planning out what needs to be done for a game he needs to make for his
      Uni work, and one set of tasks on his Gantt Chart was entirely focussed on visual design. He is of course
      perfectly capable of handling and 2D art and design himself, but things didn't work out when grouping up
      with classmates from other disciplines - the 3D modeler he was supposed to be working with ended
      up having to repeat some classes and therefore couldn't work with him this year.
      <br />
      <br />
      I decided this would be as good a time as any to offer my help, and he pointed out that while I've
      definitely improved a lot since I started, I still needed to learn a pretty crucial thing in order to make
      something usable in games - 3D model rigging. Onward to the next step in my journey!`,
    technical: `This one's a little rough around the edges if you look really closely, but overall I'm actually
      very happy with it! Of course, with this being my first time going into rigging and animation, I
      fell back to a simpler shape again just so I could get my bearings. Kirby's shape being pretty much a set of
      spheres individually connected to the centre body made it very easy to animate him.
      <br />
      <br />
      I had a lot of fun making this, it felt like a great combination between the modeling skills I've been
      picking up lately and some pretty basic scripting and programming in Python for the rigging.`,
    image: week14,
  },
];

export type BlenderEntryType = {
  week: number;
  title: string;
  date: string;
  short: string;
  description: string;
  technical?: string;
  image: string;
};

const BlenderPage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>3D Modeling</title>
        </Helmet>
      </HelmetProvider>
        <div className="c-page-layout c-grayscale-content-bg">
        <div className="c-image-bg c-blender-bg" />
        <BlenderIntro />
        <br/>
        <h2>My Blender Projects</h2>
        <div className="c-projects">
          { BlenderEntryContent.map(p => <BlenderEntry entryInfo={p} key={p.week} />) }
        </div>
      </div>
    </>
  )
}

export default BlenderPage;
