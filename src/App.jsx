import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { Especialidades } from './pages/Especialidades';
import { Contact } from './pages/Contact';
import { ContactTestimony } from './pages/ContactTestimony';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/especialidades" element={<Especialidades />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/enviardepoimento" element={<ContactTestimony />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
