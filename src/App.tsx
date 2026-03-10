import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import ServiceTimes from './components/ServiceTimes';
import Ministries from './components/Ministries';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './globals.css';
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Welcome />
      <ServiceTimes />
      <Ministries />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;