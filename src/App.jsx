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

function App() {
  // const { authenticated } = useContext(Context);
  // console.log(authenticated);
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
          <Route path="/bloghome" element={<HomeBlog />} />
          <Route path="/blog/text" element={<IndividualText />} />
          <Route path="/agradecimento" element={<ThankYouPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
