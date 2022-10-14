import React from 'react';
import ImgMe from "../../assets/images/MeBGrm.png"

function About() {
  return (
    <section class="about" className='flex'>
      <h1 class="flex-none">About Boyd</h1>
      <img className="flex-none" height={75} width={75} src={ImgMe} alt="Boyd" />
      <p className="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </section >
  );
}

export default About;