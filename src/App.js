import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer'

function App() {
  const [categories] = useState([
    {
      name: 'Portfolio',
      description: '',
    },
    { name: 'Resume', description: '' },

  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>

            <About></About>
          </>
        ) : (
          <Contact></Contact>
        )}
      </main>
      <footer><Footer></Footer></footer>
    </div>
  );
}

export default App;
