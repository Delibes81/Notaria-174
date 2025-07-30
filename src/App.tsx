import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Services from './components/Services';
import Trust from './components/Trust';
import About from './components/About';
import NotaryProfile from './components/NotaryProfile';
import ServiceDetail from './components/ServiceDetail';
import Contact from './components/Contact';
import Footer from './components/Footer';

type Page = 'home' | 'about' | 'notary' | 'services' | 'contact' | 'service-detail';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedService, setSelectedService] = useState<string>('');

  const navigateTo = (page: Page, service?: string) => {
    setCurrentPage(page);
    if (service) {
      setSelectedService(service);
    }
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={navigateTo} />
            <Welcome />
            <Services onNavigate={navigateTo} />
            <Trust />
          </>
        );
      case 'about':
        return <About />;
      case 'notary':
        return <NotaryProfile />;
      case 'services':
        return <Services onNavigate={navigateTo} showAll={true} />;
      case 'service-detail':
        return <ServiceDetail service={selectedService} onNavigate={navigateTo} />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={navigateTo} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;