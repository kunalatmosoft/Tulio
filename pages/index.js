import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
    </div>
  );
}
