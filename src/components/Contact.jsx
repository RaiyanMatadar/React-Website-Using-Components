import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Contact Form Submission Data:", formData);
    
    setIsSubmitted(true);
    
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      message: ""
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20" id="contact-header">
          <span className="text-xs font-black uppercase tracking-widest text-slate-400">Get In Touch</span>
          <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tighter uppercase mt-2">
            Connect <span className="bg-yellow-300 px-2">With Me</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            Have an exciting project or want to collaborate? Send me a message and let's construct something amazing.
          </p>
        </div>

        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="contact-container">
          
          {/* Column 1: Contact Information */}
          <div className="lg:col-span-5 space-y-8 bg-slate-50 p-8 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" id="contact-details-panel">
            <div>
              <h3 className="text-lg font-black text-black uppercase tracking-tight">Contact Information</h3>
              <p className="mt-2 text-sm text-slate-600 font-medium leading-relaxed">
                Feel free to reach out via email, phone, or standard mail. I usually respond within 24 business hours.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email Address */}
              <div className="flex items-start space-x-4">
                <div className="bg-black text-white p-3 rounded border border-black shadow">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email</p>
                  <a 
                    href="mailto:info@example.com" 
                    className="mt-0.5 block text-sm font-bold text-black hover:underline transition-colors"
                  >
                    info@example.com
                  </a>
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex items-start space-x-4">
                <div className="bg-black text-white p-3 rounded border border-black shadow">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Phone</p>
                  <a 
                    href="tel:+919876543210" 
                    className="mt-0.5 block text-sm font-bold text-black hover:underline transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="bg-black text-white p-3 rounded border border-black shadow">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Address</p>
                  <p className="mt-0.5 text-sm font-bold text-black">
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>
            </div>

            {/* Card footer */}
            <div className="pt-6 border-t border-slate-200">
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wide">
                Looking forward to our conversation!
              </p>
            </div>
          </div>

          {/*Form */}
          <div className="lg:col-span-7" id="contact-form-panel">
            {isSubmitted && (
              <div className="mb-6 p-4 bg-teal-50 border-2 border-teal-800 text-teal-900 rounded-lg flex items-center space-x-3 shadow-[3px_3px_0px_0px_rgba(20,110,90,1)]" id="contact-success-banner">
                <CheckCircle2 className="h-5 w-5 text-teal-800 shrink-0" />
                <div>
                  <p className="font-black uppercase tracking-wider text-xs">Message Sent Successfully!</p>
                  <p className="text-xs text-teal-900 font-medium mt-0.5">Your data has been logged to the web console. Thank you for reaching out!</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
              {/* Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-black uppercase tracking-widest text-black mb-1.5">
                    Full Name <span className="text-yellow-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="block w-full rounded-lg border-2 border-black px-4 py-3 text-sm text-black bg-slate-50 placeholder:text-slate-400 focus:bg-white focus:ring-1 focus:ring-black outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-black uppercase tracking-widest text-black mb-1.5">
                    Email Address <span className="text-yellow-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="block w-full rounded-lg border-2 border-black px-4 py-3 text-sm text-black bg-slate-50 placeholder:text-slate-400 focus:bg-white focus:ring-1 focus:ring-black outline-none transition-all"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-xs font-black uppercase tracking-widest text-black mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="block w-full rounded-lg border-2 border-black px-4 py-3 text-sm text-black bg-slate-50 placeholder:text-slate-400 focus:bg-white focus:ring-1 focus:ring-black outline-none transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-black uppercase tracking-widest text-black mb-1.5">
                  Message <span className="text-yellow-600">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project, timeline, or query..."
                  className="block w-full rounded-lg border-2 border-black px-4 py-3 text-sm text-black bg-slate-50 placeholder:text-slate-400 focus:bg-white focus:ring-1 focus:ring-black outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-4 border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-xs font-black uppercase tracking-widest text-white bg-black hover:bg-slate-800 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                  id="contact-submit-btn"
                >
                  Send Message
                  <Send className="ml-2 h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
