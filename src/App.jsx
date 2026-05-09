import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats'; // [NUEVO]
import { Products } from './components/Products';
import { Footer } from './components/Footer'; // [NUEVO]

function App() {
  return (
    <main className="bg-black text-white selection:bg-orange-500/30">
      <Navbar />
      <Hero />
      <Stats /> {/* [NUEVO] */}
      <Products />
      <Footer /> {/* [NUEVO] */}
    </main>
  );
}

export default App;