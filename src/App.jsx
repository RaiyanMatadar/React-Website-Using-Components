import Header from "./components/Header.jsx";
import Slider from "./components/Slider.jsx";
import Work from "./components/Work.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-indigo-500 selection:text-white scroll-smooth" id="app-root">
      {/* Header */}
      <Header />

      {/* Main Content Layout */}
      <main className="flex-grow">
        {/* About Section Divider target */}
        <div id="about" className="sr-only">About Section</div>
        
        {/* Slider / Hero Banner */}
        <Slider />
        
        {/* Work / Services Cards */}
        <Work />
        
        {/* Contact Form with Details */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
