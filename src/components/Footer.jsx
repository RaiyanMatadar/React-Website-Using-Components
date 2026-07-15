import { Facebook, Instagram, Linkedin, Github, Laptop } from "lucide-react";

export default function Footer() {
  const currentYear = 2026; 

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { name: "Facebook", href: "https://facebook.com", icon: Facebook },
    { name: "Instagram", href: "https://instagram.com", icon: Instagram },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { name: "GitHub", href: "https://github.com", icon: Github }
  ];

  return (
    <footer className="bg-black text-slate-450 py-16 border-t border-slate-900" id="footer-root">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-slate-900 items-start">
          
          {/* Brand details */}
          <div className="space-y-4" id="footer-brand-section">
            <div className="flex items-center space-x-2">
              <Laptop className="h-5 w-5 text-white" />
              <span className="text-lg font-black text-white tracking-tighter uppercase">
                My Portfolio
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium leading-relaxed max-w-sm">
              Creating high-performance digital experiences with precise visual execution and modern engineering paradigms.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4" id="footer-links-section">
            <h4 className="text-[10px] font-black text-white uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors duration-150"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/*Social Media Links */}
          <div className="space-y-4" id="footer-social-section">
            <h4 className="text-[10px] font-black text-white uppercase tracking-widest">Social Channels</h4>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 rounded border border-slate-900 transition-all duration-150"
                    aria-label={social.name}
                    id={`social-link-${social.name.toLowerCase()}`}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-600" id="footer-copyright-section">
          <p>© {currentYear} My Portfolio. All Rights Reserved.</p>
          <p>Designed & Engineered with React & Tailwind</p>
        </div>

      </div>
    </footer>
  );
}
