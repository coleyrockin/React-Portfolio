import React from 'react';
import ImgMe from "../../assets/images/MeBGrm.png"

function About() {
  return (
    <section class="about" className="flex justify-items-center  w-6/12'">
      <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 justify-items-center items-center'>
        <img className="" height={160} width={160} src={ImgMe} alt="Boyd" />
        <p className="p-2 indent-8 font-medium">Full Stack Web Developer with a background working in the recovery field, customer service, and a strong passion for computer science and business. I earned a certificate in Full Stack Web Development from the Southern Methodist University, Coding Boot Camp in Dallas, TX. Specializing in the MERN stack, I am excited about expanding my knowledge and continuing this journey as a Software Engineer.</p>

        <div>
          <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="8329e5c9-3399-4e92-906a-78eb4548a282" data-share-badge-host="https://www.credly.com">
          </div>
        </div>
      </div >
    </section >



  );
}

export default About;