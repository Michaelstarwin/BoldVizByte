import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/layout/Layout';
import LoadingScreen from './components/ui/LoadingScreen';
import Home from './pages/Home';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

import About from './pages/About';
import ServiceDetail from './pages/ServiceDetail';
import ServiceApplication from './pages/forms/ServiceApplication';
import JobApplication from './pages/forms/JobApplication';
import InternshipApplication from './pages/forms/InternshipApplication';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Scroll to top on route change (handled by ScrollToTop util but good to ensure)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <AuthProvider>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:slug" element={<ServiceDetail />} />
            <Route path="careers" element={<Careers />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="apply-service" element={<ServiceApplication />} />
            <Route path="careers/apply-job" element={<JobApplication />} />
            <Route path="careers/apply-internship" element={<InternshipApplication />} />
            <Route path="privacy-policy" element={<Privacy />} />
            <Route path="terms-conditions" element={<Terms />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      )}
    </AuthProvider>
  );
}

export default App;
