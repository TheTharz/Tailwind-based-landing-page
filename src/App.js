import './index.css';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import NewsLetter from './components/NewsLetter';
import Cards from './components/Cards';
import Footer from './components/Footer';
//this was created using tailwind
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <NewsLetter/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
