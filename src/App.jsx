import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// TechBackground removed for clean theme

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
      <div className="absolute top-0 left-0 w-full h-full border-4 border-slate-700/50 rounded-full"></div>
      <div className="absolute top-0 left-0 w-full h-full border-4 border-t-sky-500 rounded-full animate-spin"></div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen text-white">

        <Navbar />
        <main className="flex-grow pt-20 relative z-10">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/speakers" element={<Speakers />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/call-for-speakers" element={<CallForSpeakersPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
