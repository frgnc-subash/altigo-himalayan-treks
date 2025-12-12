import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
import React, { useState, memo } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaAngleDown,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

const StaticBackground = memo(() => (
  <div className="absolute inset-0 z-0 pointer-events-none">
    <img
      src="/assets/bg1.webp"
      alt="Himalayas"
      className="w-full h-full object-cover opacity-40"
    />
    <div className="absolute inset-0 bg-black/60" />
  </div>
));

// --- 2. MEMOIZED NAVBAR WRAPPER ---
// Ensures the Navbar doesn't flicker/repaint on form state changes
const MemoizedNavbar = memo(() => <Navbar />);

// --- 3. MEMOIZED LEFT CONTENT ---
// This text never changes, so it shouldn't re-render
const StaticLeftContent = memo(() => (
  <div className="space-y-10 animate-fade-in-up">
    <div>
      <span className="inline-block py-1 px-3 rounded-full bg-[#084EA8]/20 border border-[#084EA8]/50 text-[#3b82f6] text-[10px] font-bold uppercase tracking-widest mb-4">
        24/7 Support
      </span>
      <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
        Let's Start Your <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          Himalayan Journey
        </span>
      </h2>
      <p className="text-gray-400 text-sm md:text-base max-w-md leading-relaxed">
        Have questions about a trek? Need a custom itinerary? Our team of Sherpa
        experts is ready to help you plan the adventure of a lifetime.
      </p>
    </div>

    {/* Contact Cards - Removed Backdrop Blur for Performance */}
    <div className="space-y-4">
      <div className="group flex items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer">
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-[#084EA8] group-hover:scale-110 transition-all duration-300">
          <FaMapMarkerAlt size={18} />
        </div>
        <div className="ml-5">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
            Visit Us
          </h4>
          <p className="text-white font-medium">
            Thamel Marg, Kathmandu, Nepal
          </p>
        </div>
      </div>

      <div className="group flex items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer">
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-[#084EA8] group-hover:scale-110 transition-all duration-300">
          <FaPhoneAlt size={18} />
        </div>
        <div className="ml-5">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
            Call Us
          </h4>
          <p className="text-white font-medium">+977 980-123-4567</p>
        </div>
      </div>

      <div className="group flex items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer">
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-[#084EA8] group-hover:scale-110 transition-all duration-300">
          <FaEnvelope size={18} />
        </div>
        <div className="ml-5">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
            Email Us
          </h4>
          <p className="text-white font-medium">hello@mounttreks.com</p>
        </div>
      </div>
    </div>

    <div className="flex gap-4 pt-4">
      {[FaWhatsapp, FaInstagram, FaFacebookF, FaTwitter].map((Icon, idx) => (
        <a
          key={idx}
          href="#"
          className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#084EA8] hover:border-[#084EA8] transition-all duration-300"
        >
          <Icon />
        </a>
      ))}
    </div>
  </div>
));

// --- 4. FORM COMPONENT (ISOLATED STATE) ---
// Only this component re-renders when typing
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-[#084EA8] to-purple-600 rounded-2xl opacity-20 blur-xl pointer-events-none"></div>
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-100">
        <h3 className="text-2xl font-black text-gray-900 mb-6">
          Send a Message
        </h3>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider ml-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm font-medium rounded-lg px-4 py-3 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#084EA8]/50 focus:border-[#084EA8] transition-all"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider ml-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm font-medium rounded-lg px-4 py-3 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#084EA8]/50 focus:border-[#084EA8] transition-all"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider ml-1">
              Interested In
            </label>
            <div className="relative">
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm font-medium rounded-lg px-4 py-3 appearance-none focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#084EA8]/50 focus:border-[#084EA8] transition-all cursor-pointer"
              >
                <option value="" disabled>
                  Select a Trek or Topic
                </option>
                <option value="Everest Base Camp">Everest Base Camp</option>
                <option value="Annapurna Circuit">Annapurna Circuit</option>
                <option value="Manaslu Trek">Manaslu Trek</option>
                <option value="Custom Itinerary">Custom Itinerary</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                <FaAngleDown className="transform text-xs" />
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider ml-1">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your plans..."
              className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm font-medium rounded-lg px-4 py-3 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#084EA8]/50 focus:border-[#084EA8] transition-all resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white font-bold py-3.5 rounded-xl hover:bg-[#084EA8] hover:-translate-y-0.5 shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

// --- 5. MAIN PAGE LAYOUT ---
const Contact = () => {
  return (
    <>
      <MemoizedNavbar />
      <section className="relative w-full min-h-screen flex items-center bg-black font-sans py-20 pt-28 lg:pt-32 overflow-hidden">
        <StaticBackground />
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <StaticLeftContent />
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
