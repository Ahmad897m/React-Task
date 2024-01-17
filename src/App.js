import './App.css';
import React from 'react';
import "./assest/js/script";
import {Helmet} from 'react-helmet';
import Header from './components/Header/Header';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import Features from './components/Features/Features';
import Packages from './components/Packages/Packages';
import Projects from './components/Projects/Projects';
import Team from './components/Team/Team';
import Support from './components/Support/Support';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet='utf-8' />
        <title>Company project using React.js</title>
      </Helmet>
    <Header />
    <WhatWeDo />
    <Features />
    <Packages />
    <Projects />
    <Team />
    <Support />
    <Footer />
    </div>
  );
}

export default App;
