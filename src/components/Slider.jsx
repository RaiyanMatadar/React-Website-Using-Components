import { ArrowRight } from "lucide-react";

export default function Slider() {
  return (
    <section 
      id="home" 
      className="relative bg-white py-20 md:py-32 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Text */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left" id="slider-content">
            <span className="inline-flex items-center px-3 py-1 rounded bg-black text-white text-[10px] font-extrabold uppercase tracking-widest">
              Available for Freelance & Full-time
            </span>
            <h1 
              id="slider-heading" 
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-black tracking-tighter uppercase leading-[0.95] sm:leading-[0.9]"
            >
              Welcome to<br />
              <span className="text-black bg-yellow-300 px-2 select-all inline-block mt-2">My Portfolio</span>
            </h1>
            <p 
              id="slider-paragraph" 
              className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed"
            >
              I am a passionate Web Developer creating modern, responsive, and user-friendly websites using HTML, CSS, JavaScript, and React.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <a 
                href="#services" 
                className="inline-flex items-center justify-center px-8 py-4 bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-slate-800 transition-all duration-150 border-2 border-black"
                id="slider-explore-btn"
              >
                Explore More
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-slate-50 transition-all duration-150 border-2 border-black"
                id="slider-contact-btn"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:col-span-5 flex justify-center" id="slider-image-container">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Bold offset layout shadow */}
              <div className="absolute inset-0 bg-black rounded-lg translate-x-3 translate-y-3"></div>
              <div className="relative bg-white p-2 rounded-lg border-2 border-black">
                <img 
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&h=450&q=80" 
                  alt="Web Development Workspace" 
                  referrerPolicy="no-referrer"
                  className="rounded-md w-full h-auto object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                  id="slider-hero-image"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
