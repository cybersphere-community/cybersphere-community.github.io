import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/PageTransition';
import CyberGlobe from './components/canvas/CyberGlobe';
import LoadingScreen from './components/LoadingScreen';

// Lazy load pages for performance optimization
const Home = lazy(() => import('./pages/Home'));
const Events = lazy(() => import('./pages/Events'));
const Articles = lazy(() => import('./pages/Articles'));
const Speakers = lazy(() => import('./pages/Speakers'));
const Team = lazy(() => import('./pages/Team'));
const Contact = lazy(() => import('./pages/Contact'));
const CallForSpeakersPage = lazy(() => import('./pages/CallForSpeakersPage'));

// Loading component
const PageLoader = () => (
  <div className="flex justify-center items-center custom-min-h-screen">
    <div className="relative w-16 h-16">
      <div className="absolute top-0 left-0 w-full h-full border-4 border-slate-700/50 rounded-full dark:border-slate-300/20"></div>
      <div className="absolute top-0 left-0 w-full h-full border-4 border-t-sky-500 rounded-full animate-spin"></div>
    </div>
  </div>
);

// We need a sub-component to use the `useLocation` hook provided by `Router`
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/events" element={<PageTransition><Events /></PageTransition>} />
        <Route path="/articles" element={<PageTransition><Articles /></PageTransition>} />
        <Route path="/speakers" element={<PageTransition><Speakers /></PageTransition>} />
        <Route path="/team" element={<PageTransition><Team /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/call-for-speakers" element={<PageTransition><CallForSpeakersPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate initial loading time or wait for window.onload
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
      }, 500); // Match CSS transition duration
    }, 2000); // Keep loading screen for at least 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {loading && <LoadingScreen isFadeOut={fadeOut} />}
      <Router>
        <div className="flex flex-col min-h-screen text-slate-800 dark:text-slate-200 transition-colors duration-300">
          <CyberGlobe />
          <Navbar />
          <main className="flex-grow pt-20 relative z-10">
            <Suspense fallback={<PageLoader />}>
              <AnimatedRoutes />
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
