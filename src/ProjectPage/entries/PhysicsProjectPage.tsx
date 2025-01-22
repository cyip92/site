import React from "react";

import titleImg from "../../assets/projects/physics/optical_table.png";
import periodicTable from "../../assets/projects/physics/IUPAC_Periodic_Table.jpg";
import thesis from "../../assets/projects/physics/Holmium_Thesis.pdf";
import zeeman from "../../assets/projects/physics/Holmium_Zeeman.gif";
import atoms from "../../assets/projects/physics/atoms_false_color.png";
import TwoColumn from "../../common/TwoColumn";
import ".././ProjectPage.css";

const PhysicsProjectPage = () => {
  const bgStyle = {
    backgroundImage: `url("${window.rootURL}/bg/Project_Physics.png")`,
  };

  return (
    <>
      <div className="c-image-bg" style={bgStyle} />
      <div className="c-centered-image">
        <img src={titleImg} className="o-header-image" />
      </div>

      <div>
        <u><h3>Description</h3></u>
        This page describes my work in the Department of Physics at the University of Wisconsin-Madison, wherein I worked
        towards and achieved a doctorate in Physics. My research was done in the Saffman Lab under Dr. Mark Saffman as PI,
        a very prominent name in the field of neutral atom quantum computing. In particular, I worked on his Holmium
        experiment, whose purpose was to leverage its strong magnetic properties for the purposes of quantum information.
        <br />
        <br />
        The Holmium experiment was an experiment primarily aimed towards using neutral holmium atoms
        for the sake of forming qubits (quantum bits) in a quantum computer. Holmium&apos;s complicated electron shell
        configuration leads to some distinct advantages over other simpler elements in certain quantum computing schemes.
        However, as it is a relatively obscure element, the experiment also encompassed a broader set of scientific
        goals oriented towards gaining a better understanding of its largely unmeasured atomic structure.
        <br />
        <div className="c-centered-image">
          <img src={periodicTable} className="o-centered-image" />
          <i>
            Fun fact: Occasionally other atomic physicists (or physicists from other fields) touring the lab were
            completely unaware of what holmium was. We had a periodic table on the wall where we circled it with
            bright red permanent marker.
          </i>
        </div>
        The methods in this lab for manipulating neutral atoms primarily involved using very finely tuned and
        carefully-aligned <a href="https://en.wikipedia.org/wiki/Laser_cooling">lasers</a> and&nbsp;
        <a href="https://en.wikipedia.org/wiki/Magneto-optical_trap">magnetic fields</a> to slow down the movement
        of individual atoms, thereby cooling them to a few thousandths of a degree above absolute zero. After that
        process, they are confined into a volume of a few cubic microns using another&nbsp;
        <a href="https://en.wikipedia.org/wiki/Optical_tweezers">high power and highly-focused laser beam</a> so that
        they can be used for further experiments.
        <br />
        <br />

        <TwoColumn
          leftWeight={3}
          rightWeight={2}
        >
          <>
            <u><h3>My role</h3></u>
            For my first two years of research towards my PhD, I was in training under the previous PhD
            candidate and postdoctoral researcher on the experiment. They taught me much of what I know about atomic
            physics and techniques in experimental laser physics, as well as how to work with the accompanying
            vacuum chamber hardware, radio-frequency electronics, and&nbsp;
            <a href="https://github.com/QuantumQuadrate/CsPyController">experiment control software</a>.
            <br />
            <br />
            As my degree progressed, the other PhD student on the experiment graduated and the postdoc tended to spend
            more time on the other experiment in the lab he was assigned to. Much of the following four years was spent
            in charge of doing independent research on the setup, with a few other researchers (undergraduate and
            master&apos;s students) temporarily joining the project at various points for a couple months at a time.
            <br />
            <br />
            In addition to managing the physical experiment and making measurements to characterize holmium&apos;s
            atomic structure, I also wrote some <a href="https://github.com/cyip92/HolmiumCode">Python code</a> for
            the project. Notable examples were code for simulating the slowing effect of lasers on hot atoms,
            calculating energy levels of holmium&apos;s numerous atomic states when altered by magnetic fields, and
            analyzing of data from high-noise laser and photodiode signals.
          </>
          <>
            <img src={zeeman} className="c-inset-img" />
            <i>
              An image depicting the structure of the internal levels within holmium&apos;s lowest
              state, as the magnetic field is gradually increased.
            </i>
          </>
        </TwoColumn>

        <u><h3>Results</h3></u>
        
        <TwoColumn
          leftWeight={1}
          rightWeight={6}
        >
          <img src={atoms} className="c-inset-img" />
          <>
            I was able to demonstrate the first case of optically trapped cold Holmium, in a cloud with an approximate
            kinetic temperature of 150 microkelvin and radius of 10 microns. Additionally, I made significant progress
            towards measuring individual holmium atoms within our optical trap - a crucial step for using them for the
            purposes of quantum computing.
            <br />
            <br />
            <i>
              The image to the left is a false-color image of one of the earliest datasets of optically trapped
              cold holmium atoms, taken from a CCD camera installed on the experiment.
            </i>
            <br />
            <br />
            I now hold a Physics PhD in the subfield of Atomic Physics, from the University of Wisconsin-Madison.
            My doctoral thesis, which contains significantly more detail of my research during this project,
            can be found <a href={thesis}>here</a>.
          </>
        </TwoColumn>
      </div>
    </>
  )
}

export default PhysicsProjectPage;
