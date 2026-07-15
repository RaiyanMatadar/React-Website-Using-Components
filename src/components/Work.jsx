import { useState } from "react";
import { Globe, Code, Palette, ArrowRight, X } from "lucide-react";

function WorkCard({ id, image, icon: Icon, title, description, onReadMore }) {
  return (
    <div
      className="group bg-white rounded-lg border-2 border-black overflow-hidden flex flex-col h-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200"
      id={`work-card-${id}`}
    >
      {/* Card Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b-2 border-black">
        <img
          src={image}
          alt={title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale contrast-115 group-hover:grayscale-0 transition-all duration-300"
          id={`work-card-image-${id}`}
        />
        <div className="absolute top-4 left-4 bg-black text-white p-2.5 rounded border border-black shadow">
          <Icon className="h-4 w-4" />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-black text-black uppercase tracking-tight mb-2">
          {title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow font-medium">
          {description}
        </p>
        <div className="pt-2 border-t border-slate-100">
          <button
            onClick={() => onReadMore({ title, description, image, icon: Icon })}
            className="inline-flex items-center text-xs font-black uppercase tracking-widest text-black hover:underline group/btn"
            id={`work-card-btn-${id}`}
          >
            Read More
            <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const [selectedWork, setSelectedWork] = useState(null);

  // temporarily dummy data 
  const works = [
    {
      id: "web-dev",
      title: "Web Development",
      description: "Build responsive and attractive websites using modern web technologies.",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=500&h=300&q=80",
      icon: Globe,
      detailedText: "Creating high-performance, robust, and accessible web solutions tailored to specific business requirements. Specializing in semantic HTML5, modern CSS layouts (Grid and Flexbox), and native JavaScript APIs to deliver highly responsive digital architectures."
    },
    {
      id: "react-projects",
      title: "React Projects",
      description: "Create reusable UI components and dynamic web applications using React.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=500&h=300&q=80",
      icon: Code,
      detailedText: "Building scalable single-page and server-rendered frontend systems. Focusing on state management, structural design patterns, custom React hooks, and optimal performance techniques such as lazy loading and component memoization."
    },
    {
      id: "ui-design",
      title: "UI Design",
      description: "Design clean, simple, and user-friendly interfaces for websites.",
      image: "https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&w=500&h=300&q=80",
      icon: Palette,
      detailedText: "Designing interactive mockups, user flows, and wireframes. Focusing on clean grid alignments, elegant typography hierarchies, high-contrast accessible color schemas, and custom iconography that provide frictionless pathways for users."
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20" id="work-header">
          <span className="text-xs font-black uppercase tracking-widest text-slate-400">My Expertise</span>
          <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tighter uppercase mt-2">
            My Services & <span className="bg-yellow-300 px-2">Expertise</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            A look into the key services and technical disciplines I offer to help bring your ideas to life on the web.
          </p>
        </div>

        {/* Responsive Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="work-grid">
          {works.map((work) => (
            <WorkCard
              key={work.id}
              id={work.id}
              image={work.image}
              icon={work.icon}
              title={work.title}
              description={work.description}
              onReadMore={(cardData) => {
                console.log(`Read More clicked for: ${cardData.title}`);
                setSelectedWork({ ...cardData, detailedText: work.detailedText });
              }}
            />
          ))}
        </div>

      </div>

      {/* Modern Detail Modal */}
      {selectedWork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          id="work-modal"
          onClick={() => setSelectedWork(null)}
        >
          <div
            className="bg-white rounded-lg max-w-lg w-full overflow-hidden border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative"
            id="work-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedWork(null)}
              className="absolute top-4 right-4 bg-white p-1.5 rounded border-2 border-black text-black hover:bg-slate-105 transition-colors"
              id="work-modal-close"
            >
              <X className="h-4 w-4" />
            </button>
            <img
              src={selectedWork.image}
              alt={selectedWork.title}
              referrerPolicy="no-referrer"
              className="w-full h-48 object-cover border-b-2 border-black grayscale contrast-110"
            />
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-black text-white p-2 rounded">
                  <selectedWork.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-black text-black uppercase tracking-tight">{selectedWork.title}</h3>
              </div>
              <p className="text-slate-600 text-sm font-bold mb-4">
                {selectedWork.description}
              </p>
              <div className="border-t-2 border-black pt-4">
                <p className="text-slate-400 text-[10px] uppercase tracking-widest font-black mb-2">Deep Dive</p>
                <p className="text-slate-800 text-sm leading-relaxed font-medium">
                  {selectedWork.detailedText}
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedWork(null)}
                  className="px-6 py-2.5 bg-black hover:bg-slate-800 text-white rounded text-xs font-black uppercase tracking-wider border-2 border-black transition-all"
                >
                  Close Explorer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
