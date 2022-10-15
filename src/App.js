import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer'
import Portfolio from './components/Portfolio';
import Resume from "./components/Resume";

function App() {
  const sections = [
    { name: "About", comp: About },
    { name: "Portfolio", comp: Portfolio },
    { name: "Contact", comp: Contact },
    { name: "Resume", comp: Resume }
  ];

  const [currentSection, setCurrentSection] = useState(sections[0]);
  return (
    <div class="flex-row">
      <Nav
        sections={sections}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <main className="flex display-inline">
        <section className="p-4 ">
          {React.createElement(currentSection.comp, {})}
        </section>
      </main>
      <Footer />
    </div>
  );
}


export default App;
