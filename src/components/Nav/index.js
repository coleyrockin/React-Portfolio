import React from "react";


function Navigation({ sections, currentSection, setCurrentSection }) {
  return (

    <nav>
      <h3 class="ml9">
        <span className="m-4">
          <span class="letters">B O Y D</span>
        </span>
      </h3>

      <nav className="text-2xl bold flex align-center justify-evenly">
        {
          sections.map(({ name, comp }) => (
            <div
              className={`p-1 ${name === currentSection.name && "text-sky-500"
                }`}
              key={name}
              onClick={() => setCurrentSection({ name, comp })}
            >
              {name}
            </div>
          ))
        }

      </nav >
    </nav>

  );
}

export default Navigation;