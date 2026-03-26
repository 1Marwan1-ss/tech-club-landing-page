import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-900">
      <Navbar />  
      <Hero />

      <main className="flex-grow container mx-auto px-6 py-16">
        <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-800">
          Upcoming Workshops
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <Card
            title="React & Tailwind Workshop"
            date="April 10, 2026"
            description="Master modern web development by building responsive interfaces with React components and Tailwind utility classes."
          />
          <Card
            title="Containerizing with Docker"
            date="April 24, 2026"
            description="Learn how to package your web applications into isolated, portable containers for seamless deployment."
          />
          <Card
            title="Intro to NLP Tech Talk"
            date="May 5, 2026"
            description="Join our guest speakers as we dive into Natural Language Processing concepts and how machines understand human text."
          />

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;