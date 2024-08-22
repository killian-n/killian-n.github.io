import { ThemeProvider } from '@emotion/react';
import Theme from './Theme';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/Home';
import ProjectsPage from './pages/Projects';
import ResumePage from './pages/Resume';
import AboutPage from './pages/About';
import { useEffect, useState } from 'react';
import { initParticlesEngine } from '@tsparticles/react';

import { loadSlim } from '@tsparticles/slim'; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (init) {
    return (
      <>
        <ThemeProvider theme={Theme}>
          <Router>
            <NavBar></NavBar>
            <Routes>
              <Route path="/" element={<HomePage></HomePage>} />
              <Route path="/Projects" element={<ProjectsPage />} />
              <Route path="/About" element={<AboutPage />} />
              <Route path="/Resume" element={<ResumePage />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
