import { ThemeProvider } from '@emotion/react';
import Theme from './Theme';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/Home';
import ProjectsPage from './pages/Projects';
import ResumePage from './pages/Resume';
import AboutPage from './pages/About';
import { useEffect, useState, useRef } from 'react';
import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavContext } from './components/NavContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function App() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const navRef = useRef<HTMLElement | null>(null);

  const [navHeight, setNavHeight] = useState(0);
  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.clientHeight);
    }
  });

  if (init) {
    return (
      <>
        <ThemeProvider theme={Theme}>
          <Router>
            <NavContext.Provider value={navHeight}>
              <NavBar ref={navRef}></NavBar>
              <Routes>
                <Route path="/" element={<HomePage></HomePage>} />
                <Route path="/Projects" element={<ProjectsPage />} />
                <Route path="/About" element={<AboutPage />} />
                <Route path="/Resume" element={<ResumePage />} />
              </Routes>
            </NavContext.Provider>
          </Router>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
