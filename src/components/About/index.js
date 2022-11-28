import React from 'react';
import ImgMe from "../../assets/images/MeBGrm.png"

function About() {
  return (
    <section class="about" className="flex flex-row">

      <img className="center object-contain" height={160} width={160} src={ImgMe} alt="Boyd" />
      <p className="p-2">Full Stack Web Developer with certificate from Southern Methodist University Coding Boot Camp. Specializing in the MERN stack, and aspiring to learn more computer languages, expand my knowledge, and become a Software Engineer.</p>
    </section >
  );
}

export default About;