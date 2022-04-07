
import { GlobalStyles } from './styles/Global';
import Navbar from './components/Navbar';
import WelcomeSection from './components/WelcomeSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    
    <>
  
     <GlobalStyles />
      <Navbar />
      <WelcomeSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
  
    </>

    
  );
}

export default App;
