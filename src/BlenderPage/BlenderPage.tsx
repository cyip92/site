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
import week15 from "../assets/blender/15-cardinal.png";
import week16 from "../assets/blender/16-cutter_kirby_pt1.png";
import week17 from "../assets/blender/17-cutter_kirby_pt2.gif";
import week18 from "../assets/blender/18-kirby_tree.png";
import week19 from "../assets/blender/19-DDR_machine.png";
import week20 from "../assets/blender/20-beat_saber_kirby.png";
import week21 from "../assets/blender/21-kirby_skyblock.png";
import week22 from "../assets/blender/22-kirby_poses.png";
import week23 from "../assets/blender/23-pressed_blob.gif";
import week24 from "../assets/blender/24-cook_kirby.png";
import week25 from "../assets/blender/25-air_ride_formation1.png";

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
  {
    week: 15,
    title: "Cardinal",
    date: "26 January 2025",
    short: `A small, cute red bird`,
    description: `Last weekend was the <a href="https://puzzles.mit.edu/">MIT Mystery Hunt</a>, which is an event
      called a puzzle hunt. Puzzle hunts are a series of riddle-like puzzles which typically demand a
      combination of broad knowledge, a bit of expertise in common ciphers and encodings, and an eye for extracting
      information hidden in otherwise innocuous formats. Answers to individual puzzles are often words or phrases
      which are inputs to metapuzzles, which themselves have an answer typically reliant on solving enough of the
      individual feeder puzzles. This often culminates in one final metapuzzle for the entire hunt - a puzzle which
      can effectively be considered the marker for completing the hunt when solved.
      <br />
      <br />
      The MIT Mystery Hunt is particularly notable because it happens yearly and is widely regarded as the largest
      and most significant hunt of the year within puzzle-hunting communities. Besides a temporary pause during the
      pandemic, MITMH occurrs on-campus at MIT and many people fly in from around the US (and even some
      internationally) just to participate in it. The puzzles from the 2025 hunt in particular are
      accessible <a href="https://www.two-pi-noir.agency">here</a> through a public access login.
      <br />
      <br />
      I was participating in the hunt on Team Cardinality and a lot of our tools, Discord servers, and our own
      puzzle hunts use a red cardinal as part of the iconography. We ended up winning this year, being the first
      team to complete the final puzzle before any other teams. Everyone on the team was pretty satisfied with
      our group efforts overall, and mentally speaking I was riding that good feeling for most of the week. To
      probably no surprise, that inspired me to make a cardinal for this week's project.`,
    technical: `I took the time to watch a few videos about using Blender which were targetted at using more nuanced
      techniques. One of the things I found out very quickly was that some of the tutorials I looked at when
      starting out were more oriented towards getting a task done and not learning how to properly use Blender. More
      importantly however, I also learned that Blender is extremely powerful and has a lot of capabilities which
      I simply haven't been taking advantage of.
      <br />
      <br />
      Needless to say, I have a better sense of where I stand in my learning at this point. I think I know enough
      of the basics that I could make most things in Blender given enough time. It seems like I'm at the point
      where I need to learn to optimise my workflow so that I can spend less time on simpler tasks and thus free
      up additional time to put into extra details instead.
      <br />
      <br />
      With that in mind I went pretty heavily into learning how to use various modifiers as time-saving measures
      as well as tools to do things which I would've otherwise written off as impractical due to being too
      time-consuming. This week's much more detailed bird is the end result of that, and I'm fairly happy with
      how it turned out!`,
    image: week15,
  },
  {
    week: 16,
    title: "Cutter Kirby (part 1)",
    date: "02 February 2025",
    short: `The model for another animated Kirby`,
    description: `I went through a few more tutorials on rigging which were very good on the technical
      end, but I was finding it hard to properly absorb the information without an actual project to
      follow along with applying the techniques. I decided that I wanted to do something related to
      rigging and animation again this week.
      <br />
      <br />
      One thing that got emphasized was the fact that when rigging up a model, it is very important to
      understand how the rig will eventually be used - as such, it doesn't make much sense to rig a model
      without a very clear idea of the final outcome. I was a bit short on ideas for the first half of
      the week, but I eventually settled on something I'd be satisfied with making.
      <br />
      <br />
      The goal was to make an animation of Kirby using the Cutter copy ability; the Kirby model alone is
      detailed enough that I wouldn't feel like I was being lazy, and then the rigging and animation
      would be almost an entirely new process. However, other things in life got in my way this week,
      and I couldn't spend as much time as I wanted on Blender.`,
    technical: `I had quite a few false starts on this week's model, at one point scrapping half of what I had
      done so far because it just didn't have a good foundation and further modifications were getting more and
      more headache-inducing to make.
      <br />
      <br />
      Somewhere during the process I had an eye-opening moment, Drawfee (ie. the content creators who tangentially
      inspired this whole thing) had a saying they would sometimes use - "Delete Your Art". Amongst other things,
      it suggests that you shouldn't be so emotionally attached to your work in progress that you're afraid to get
      rid of it. I thought it was interesting to experience that myself here, and it was also a neat parallel to
      draw with similar times where I had to delete or redo large swaths of code as well.
      <br />
      <br />
      My Blender work ended up being pretty slow this week, so all I have to show so far is just the model. Next
      week I'll be diving into making a proper rig for this model and then animating it throwing the cutter blade
      like a boomerang, in the same style that Kirby throws it in <i>Kirby and the Forgotten Land</i>.`,
    image: week16,
  },
  {
    week: 17,
    title: "Cutter Kirby (part 2)",
    date: "09 February 2025",
    short: `A Fully-animated Cutter Kirby`,
    description: `I got fully into the weeds of animation this week, which unexpectedly ended up being pretty
      unrelated to the rigging studying I was doing. Nevertheless, I pressed onward and completed my animated Kirby
      for this week as well. Overall it was actually kind of fun, if a bit tedious since this was my first time
      animating anything properly.
      <br />
      <br />
      I'm not sure if I'm going to continue learning much more about making animations moving forward. It was
      a neat learning experience, one which I'm glad I went through, but also it doesn't seem like the best thing
      to focus on based on my current goal of being able to use these models for game development. Perhaps I might
      revisit this in the future though.`,
    technical: `This week was mostly making keyframes and generally learning the basics of animation; I used
      almost none of the things I learned from rigging so far. Overall it was fairly straightforward, but just
      very time-consuming. Nevertheless, I think I'm reasonably happy with how the final result came out.
      <br />
      <br />
      The grass definitely behaves weirdly, which I mostly owe due to the fact that it was thrown in there as an
      afterthought and done entirely within the Blender particle system as opposed to anything more proper such
      as modeling actual blades of grass. When asking my partner for feedback on this, our conversation led towards
      making a proper world environment at some point as opposed to just hacking together background things
      through the particle system.
      <br />
      <br />
      That definitely gives me some ideas for future weeks.`,
    image: week17,
  },
  {
    week: 18,
    title: "Kirby and Friends",
    date: "16 February 2025",
    short: `A few Kirby series characters in a field of grass`,
    description: `I went into this week with the initial plan to make more of an environment scene rather than
      something character-focused or object-focused, but I kind of strayed off and back towards Kirby again once
      I got started. My initial thought was just to add the Kirby and Waddle Dee in so that it wasn't an empty
      scene, and then make their background semi-realistic or at least vaguely stylised realism.
      <br />
      <br />
      When I was messing around with the grass, I stumbled upon what the field looks like below, and then realised
      that having a semi-realistic field of grass and a tree would've been a bit awkward at a minimum and possibly
      very jarring in the worst case. So I switched gears and decided to keep the rest stylised, and then ended up
      making Whispy Woods for the tree instead of a realistic one.
      <br />
      <br />
      All in all, I'm fairly satisfied with this even if I strayed away from my original idea.`,
    technical: `At this point I can make a Kirby from scratch within maybe 15 minutes, but the Waddle Dee ended up
      being more involved than I expected - mostly due to trying to make the bandana knot look somewhat reasonable.
      I thought about giving him his iconic spear as well, but ended up deciding against that mostly because it had
      another cloth knot and I already wasn't terribly satisfied with how the bandana turned out.
      <br />
      <br />
      The grass and everything in Whispy's canopy were my first time messing around with geometry nodes, which
      were honestly pretty neat to configure overall. It'll probably take me a few more times with those before
      I can use them in a tactful way just like it took me for shaders though.`,
    image: week18,
  },
  {
    week: 19,
    title: "DDR Machine",
    date: "23 February 2025",
    short: `A recreation of a Dance Dance Revolution arcade cabinet from memory`,
    description: `I was at a loss of ideas when the weekend came around, so I thought about what I've done so far
      and what I'm ultimately aiming for. There are lots of things I would like to do, although many need my
      workflow to be more optimised so I don't spend months making each project. One big thing is that I haven't
      really done anything original yet; most of my projects have been taking references of already-existing objects
      or concepts, remaking them in Blender, and then possibly arranging them into a scene.
      <br />
      <br />
      I wanted to going to try something at least somewhat new, so this week was completely referenceless for
      the first time. I also thought a bit about anything else that I had wanted to do but haven't done yet,
      and I remembered that I haven't done any rigid geometric objects yet either.
      <br />
      <br />
      So I decided that this week I was going to try to make a DDR arcade cabinet from memory. The best part was that
      it's been probably 4-5 years since I last saw one of these in person. I definitely remembered that a ton of
      the surfaces had lots of decals, logos, and general fancy graphic designs, although my memory was fuzzy
      enough that I didn't feel comfortable trying to recreate any of those - so it definitely looks a bit plain.
      `,
    technical: `I didn't learn much new in the way of technical skills this week, but the whole experience
      opened up my eyes a bit more on just being creative. I found that not having a reference was actually quite
      freeing, because often I'd spend maybe a bit too much time trying to get all the proportions just right. I
      think moving forward I'm going to do what I can to reduce my reliance on references and see how my skills
      develop from there.
      <br />
      <br />
      I had the realisation partway through that I was likely mixing design aspects from different generations of
      arcade cabinets, but I just continued pushing forward and produced something that probably looks realistic at
      a glance. Overall I'm happy with it, even if it might look really strange to anyone more familiar with dancing
      rhythm game machines.
      <br />
      <br />
      As I was finishing up this summary, I went and looked up how well I did just out of curiosity. Amusingly, I
      seem to have made some kind of a mixture of  
      <a href="https://www.libertygames.co.uk/images/1/products/1587_dance-dance-dance-revolution-supernova.jpg">
        an older DDR machine
      </a>, 
      <a href="https://www.libertygames.co.uk/images/1/products/5664_konami-dance-dance-a.jpg">
        an newer DDR A machine
      </a>, and
      <a href="https://www.arcade-museum.com/images-game/39/in-the-groove-2-39792.jpg">
        an ITG machine
      </a>.
      `,
    image: week19,
  },
  {
    week: 20,
    title: "Beat Saber Kirby",
    date: "02 March 2025",
    short: `Kirby with a VR Headset on, playing Beat Saber`,
    description: `
      Considering how long ago I started playing rhythm games, it should be no surprise that I still play them
      nowadays too. As part of keeping myself healthy and active, I play about an hour of Beat Saber three times
      a week because it turns out to be very excellent exercise.
      <br />
      <br />
      This week I decided to lean into that this time, while still approaching an idea which would be less reliant
      on external references; of course I could just keep my VR headset nearby and use it for asset references while
      I put this together, but I still want to start relying less on those from now on. I think the only thing I
      referenced this week was the saber colours, since I use custom colours which aren't red/blue when I play.
      <br />
      <br />
      Choosing Kirby as the main subject had two main reasons behind it: I have yet to do a properly humanoid figure
      so far and learning that at the same time as some other things felt like a bit too much, and I was doubtful
      any references would exist for Kirby wearing a VR headset (although I didn't look). I'm possibly still
      approaching this journey of learning a bit on the slow end, but I want to make sure that I continue doing it
      regularly rather than risk burning out or spending too much time on it over more important things.
      `,
    technical: `
      Due to other things going on, I ended up not getting the chance to work on this until Sunday - so the
      entire thing was done in one busy afternoon. I feel like there are many things I wanted to spend more time
      on, but I'm still reasonably satisfied with how it turned out. I had to take a few liberties in the headset
      design for Kirby since he's basically all head, but it's still nice to slowly ease into making somewhat
      original things again rather than replicating existing things even more.
      <br />
      <br />
      I was hoping that I would have some time to properly learn more about Blender's lighting system, but doing
      this in one day didn't really leave me time to look at that once I was finished with the main part of the
      project unfortunately. Maybe next week I'll be able to give it a try.
      `,
    image: week20,
  },
  {
    week: 21,
    title: "Skyblock Kirby",
    date: "09 March 2025",
    short: `A sad Kirby playing the old style of vanilla Skyblock`,
    description: `
      I think this was the first time I experienced art block, which was interesting. It was the middle of the
      day on Saturday and I was torn between some kind of a floating sky island and a large spaceship, but I
      wasn't feeling inspired. I started on a floating island and got nowhere before deciding on something a
      bit more concrete and based on a meme I was sent earlier in the week.
      <br />
      <br />
      The idea was simple - in the early days of Minecraft, there was a custom map that started you off on a
      floating island in the middle of an endless void, and all it gave you was a tree, some dirt, and a pair of
      water and lava buckets. In principle you can grow the tree endlessly, and the water and lava can flow into
      each other to create cobblestone indefinitely. The concept has since been expanded using mods, resource
      packs, and even additional vanilla mechanics as the game continues to be updated.
      <br />
      <br />
      I decided that my project this week was going to be a sad Kirby looking at his failed attempt at setting up
      an infinite cobblestone generator.
      `,
    technical: `
      This week was a very texture and shader-heavy project. I had a lot of fun messing around with generating
      pixellated textures using noise maps, although admittedly I also went a bit heavier on referencing some
      of the original assets in Minecraft in order to keep the colour palette and look similar.
      <br />
      <br />
      I'm actually really proud of this one, which is satisfying to say because I feel like this is happening
      more as I pick up more experience.
      `,
    image: week21,
  },
  {
    week: 22,
    title: "Kirby Poses",
    date: "16 March 2025",
    short: `Kirby in various poses to show off a model rig`,
    description: `
      I realised that I was somehow spending both less and more time on every Kirby I've made so far. I can
      throw together the basic shape of a Kirby in about 5-10 minutes, but I've ended up spending more time
      refining it to have increased detail and/or modifiability. Overall it's been helpful in
      teaching and reinforcing Blender skills, but in the long run I would like to make larger and more
      detailed pieces - spending 30-40 minutes every week on Kirby wouldn't be a good use of my time. 
      <br />
      <br />
      So I spent the time to make a proper Kirby model this week, with carefully-adjusted proportions and
      various modifiers and constraints applied to make it adjustable and multi-purpose enough to be dropped
      into any future projects. I told myself I would hold off on this because I was wary of constantly
      importing a bad model, but I think I am now skilled enough to make a decent one to use moving forward.
      <br />
      <br />
      It's kind of funny to think about how the reason I've made so many Kirby pieces is because I have a Kirby
      plush sitting on my desk, but it's still been helpful in many ways.
      `,
    technical: `
      The main thing I did this week was model rigging. Once I set up all the constraints and component
      relationships, I thought I could just pose Kirby in various different ways and be done with
      it. However, it became a lot clearer in different poses that I had a lot of tweaking to do to get the
      body part proportions and shapes to look good.
      <br />
      <br />
      I also figured it would be a really simple straightforward rig, since Kirby is basically a ball surrounded
      by 4 smaller balls. But when looking up various reference images of Kirby in various poses, I realised
      that having a few extra pivot points really adds a lot in terms of his pose expressiveness. By the end, my
      Kirby rig had more or less a human limb structure for arms and legs to get that extra detail.
      <br />
      <br />
      I have an Kirby-based animation planned for next week, so this week's Blender project will be particularly
      useful for that one in terms of laying down groundwork.
      `,
    image: week22,
  },
  {
    week: 23,
    title: "Pressed Blob",
    date: "23 March 2025",
    short: `A blob getting squished by Kirby operating a mechanical press`,
    description: `
      I've been playing Minecraft with friends on and off over the past month and I have a fairly large collection
      of animated Google Blob emoji. I thought it would be fun to combine both of those together, which gave me
      a clear idea of a goal while also allowing some creative liberties due to it likely being original.
      <br />
      <br />
      The visual inspiration was taken from a fairly popular Minecraft mod called Create, where the core thing it
      adds is a rotary power system and a collection of machines that use it. The first power source you
      can access is a manual hand crank, which I decided to use my Kirby rig for. It definitely saved a lot of
      work for the cranking animation.
      <br />
      <br />
      Create is a very satisfying-looking mod and often lends itself to making builds which are a mixture of
      visually striking <i>and</i> functional, which makes it one of my favourite mods in modern Minecraft. A fun
      note that I didn't realize until I was pretty deep into making this - you can't actually use this
      configuration in-game, the hand crank doesn't give enough power to the press with this gear ratio.
      `,
    technical: `
      This one was pretty heavy on textures and drivers. I am enjoying making procedural pixel textures, although
      I might consider using something like Aseprite in the future so I can properly fine-tune the appearance.
      Regardless, I got a lot of practice with adjusting UV maps so that all the textures fit the models properly.
      <br />
      <br />
      I started using Python scripts with the drivers to simplify some of the animations and make certain attributes
      more consistent. I'm also very glad that I gave my Kirby rig the extra flexibility, because I needed it in
      order to stretch and squish his body to make the animation look a bit more natural.
      <br />
      <br />
      I'm very proud of this one, despite it effectively taking two weeks to finish. I think I might
      continue the trend of larger multi-week projects moving forward, although that depends on what I end
      up thinking about doing next week.
      `,
    image: week23,
  },
  {
    week: 24,
    title: "Cook Kirby",
    date: "30 March 2025",
    short: `A quick and simple Kirby with the Cook copy ability`,
    description: `
      It was my partner's birthday this weekend, so we ended up going out to get the ingredients for
      a special lunch that day - Sichuan mala hot pot. We both already love cooking, so it was a fun
      time in the kitchen overall for both of us. Needless to say, that was my inspiration for this week.
      <br />
      <br />
      I typically do most of my Blender stuff on the weekends, so for better or worse spending a bunch
      of time together on Saturday for his birthday meant that I lost most of the time I would normally
      spend on this habit. Combine that with a particularly busy work week and a somewhat busy early
      Sunday, and that left me with basically just the evening to do this and write up
      something quick to put on my site.
      <br />
      <br />
      Finally, with the general lack of ideas I had this week for what to do with Blender, I ended up
      throwing this together in about an hour or two since I still needed to do my workout that I also
      typically do on Saturdays. So this week is a simple model instead of a more in-depth one.
      `,
    technical: `
      There's honestly not really much detail to give about this one, other than the fact that it made
      me buckle down and see just how much I could do when placed into a time crunch. I'm fairly
      satisfied that what I can accomplish is a short time has come this far, because earlier on
      something of this level of detail would've probably taken me the whole day instead.
      `,
    image: week24,
  },
  {
    week: 25,
    title: "Air Ride Formation (part 1)",
    date: "06 April 2025",
    short: `A set of three Kirbies on Air Ride machines`,
    description: `
      I had a burst of inspiration for this one and decided that it was a big enough project
      to devote two weeks to. It came from I was watching the Nintendo Direct earlier in the
      week, where a lot of new games were being shown for the upcoming Switch 2. A sequel to the
      (very old) racing game Kirby Air Ride was announced, and I <i>immediately</i> knew that I
      had to make this week's Blender project about the original game. I spent so much time
      playing that game as a kid and I wanted to give a proper tribute to it now.
      <br />
      <br />
      The overall idea was to make a group of 4 Kirbies, each riding some of my favourite machines
      in the game. I made three of them so far, and I am planning to make the last one (whose
      machine will be a much more detailed model) next week. If I have the time, I might also
      give all of them copy ability hats.
      `,
    technical: `
      I didn't really learn to do anything new this week, but I've definitely been starting to use
      various hotkeys more regularly and just generally streamline my workflow through the amount
      of practice I've been getting. Next week I'm hoping to dive into Blender's lighting and rendering
      system properly, as I haven't had the chance to do so yet.
      `,
    image: week25,
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
