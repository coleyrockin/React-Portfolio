import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaDatabase } from "react-icons/fa";
import { Mongodb, Mysql, ReactJs, Bulma, Tailwindcss, Nodedotjs, Git, Express } from "@icons-pack/react-simple-icons";
import { DiResponsive } from "react-icons/di";

function Resume() {
  return (
    <article className="">
      <h2 className="flex justify-center text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-sky-300 to-violet-500">Web Development Knowledge</h2>
      <ul className="p-2 m-2 whitespace-pre flex flex-col items-end flex-wrap content-center">
        <li className="flex items-center">HTML <FaHtml5 size={16} /></li>
        <li className="flex items-center">CSS <FaCss3Alt size={16} /></li>
        <li className="flex items-center">Javascript ES6 <FaJsSquare size={16} /></li>
        <li className="flex items-center">MongoDB <Mongodb size={16} /></li>
        <li className="flex items-center">MySQL <Mysql size={20} /></li>
        <li className="flex items-center">React <ReactJs size={16} /></li>
        <li className="flex items-center">Bootstrap <FaBootstrap size={16} /> | BULMA <Bulma size={16} /> | Tailwind <Tailwindcss size={16} /></li>
        <li className="flex items-center">Node.Js < Nodedotjs size={16} /> & various packages</li>
        <li className="flex items-center">Express < Express size={16} /></li>
        <li className="flex items-center">Git < Git size={16} /></li>
        <li className="flex items-center">Database Theory <FaDatabase size={14} /></li>
        <li className="flex items-center">Responsive Design <DiResponsive size={20} /></li>
      </ul>
      <h2 className="flex justify-center font-bold italic text-md">In process of getting AWS Certified while learning JAVA, C#, and Python.</h2>
      <div className="m-3 flex justify-center">
        <a href="https://docs.google.com/document/d/1PMWpUy5Rh3q00oodTrawYEZBw4pIaU-hsEvyHXJepx0/edit?usp=sharing" target="_blank" rel="noreferrer">
          <button className="bg-gradient-to-r from-violet-400 via-pink-400 to-sky-400 text-white font-medium py-2 rounded-full w-32 animate-pulse ">Resume Link</button>
        </a>
      </div>
    </article >

  );
}

export default Resume;