import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';

import { AuthProvider } from './Context/AuthContext';

import { Home } from './pages/Home';
import { Especialidades } from './pages/Especialidades';
import { Contact } from './pages/Contact';
import { ContactTestimony } from './pages/ContactTestimony';
import { AboutMe } from './pages/AboutMe';
import { ThankYouPage } from './pages/ThankYouPage';

// Blog pages

import { HomeBlog } from './pages/Blog/HomeBlog';
import { IndividualText } from './pages/Blog/IndividualText';
import { Login } from './pages/BackOffice/Login';
import { Management } from './pages/BackOffice/Management';
import { EditText } from './pages/BackOffice/EditText';
import { Clients } from './pages/BackOffice/Clients';
import { Testimonys } from './pages/BackOffice/Testimonys';
import { Orcamentos } from './pages/BackOffice/Orçamentos';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/especialidades" element={<Especialidades />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/enviardepoimento" element={<ContactTestimony />} />
          <Route path="/maissobremim" element={<AboutMe />} />
          <Route path="/blog/login" element={<Login />} />
          <Route path="/blog/gerenciamento" element={<Management />} />
          <Route path="/blog/gerenciamento/clientes" element={<Clients />} />
          <Route path="/blog/gerenciamento/depoimentos" element={<Testimonys />} />
          <Route path="/blog/gerenciamento/orcamentos" element={<Orcamentos />} />
          <Route path="/bloghome" element={<HomeBlog />} />
          <Route path="/blog/text" element={<IndividualText />} />
          <Route path="/blog/editartexto/:id" element={<EditText />} />
          <Route path="/agradecimento" element={<ThankYouPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
