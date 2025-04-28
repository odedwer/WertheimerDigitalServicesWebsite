import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollReveal from './components/ScrollReveal';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';
import LayoutContact from './layouts/LayoutSignin';

// Views
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    document.body.classList.add('is-loaded');
  }, []);

  return (
    <ScrollReveal>
      <Routes>
        <Route
          path="/"
          element={
            <LayoutDefault>
              <Home />
            </LayoutDefault>
          }
        />
        <Route
          path="/contact"
          element={
            <LayoutContact>
              <Contact />
            </LayoutContact>
          }
        />
      </Routes>
    </ScrollReveal>
  );
}

export default App;
