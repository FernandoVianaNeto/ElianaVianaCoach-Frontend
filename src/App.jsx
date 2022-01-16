import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { Especialidades } from './pages/Especialidades';
import { Contact } from './pages/Contact';
import { ContactTestimony } from './pages/ContactTestimony';
import { AboutMe } from './pages/AboutMe';

// Blog pages

import { HomeBlog } from './pages/Blog/HomeBlog';
import { IndividualText } from './pages/Blog/IndividualText';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/especialidades" element={<Especialidades />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/enviardepoimento" element={<ContactTestimony />} />
        <Route path="maissobremim" element={<AboutMe />} />
        <Route path="/bloghome" element={<HomeBlog />} />
        <Route path="/blog/text" element={<IndividualText />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
