import React from 'react';
import ImgMe from "../../assets/images/MeBGrm.png"

function About() {
  return (
    <section class="about" className="flex flex-row">

      <img className="center" height={200} width={175} src={ImgMe} alt="Boyd" />
      <p className="p-2">Recently earned a certificate in Full Stack Web Development from the SMU Coding Boot Camp. Aspire to learn more languages, expand knowledge, and become a software engineer in the future.</p>
    </section >
  );
}

export default About;