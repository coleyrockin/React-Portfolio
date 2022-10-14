import React from "react";

function Navigation({ sections, currentSection, setCurrentSection }) {
  return (
    <nav className="text-2xl">B O Y D

      <nav className="flex sm:justify-center space-x-4">
        {
          sections.map(({ name, comp }) => (
            <div
              className={`p-1 ${name === currentSection.name && "text-amber-400"
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