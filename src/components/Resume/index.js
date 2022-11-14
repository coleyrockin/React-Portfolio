import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaDatabase } from "react-icons/fa";
import { Mongodb, Mysql, ReactJs, Bulma, Tailwindcss, Nodedotjs, Git, Express } from "@icons-pack/react-simple-icons";
import { DiResponsive } from "react-icons/di";

function Resume() {
  return (
    <article className="">
      <h2 className="flex justify-center text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-sky-300 to-violet-500">Web Development Knowledge</h2>
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
      <h2 className="flex justify-center text-lg">In process of getting AWS Certified, and learning JAVA, C#, and Python.</h2>
    </article >
  );
}

export default Resume;
