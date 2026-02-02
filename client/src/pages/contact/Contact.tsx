import React, { useState, memo } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaAngleDown,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaChevronDown,
  FaRegCalendarAlt,
  FaShieldAlt,
  FaMapMarkedAlt,
  FaHiking,
  FaMapMarkerAlt,
} from "react-icons/fa";

import contactBg from "../../assets/backgrounds/bg1.jpeg";

const API_URL = "https://mount-treks.onrender.com/api/send-email";

const socialLinks = [
  { Icon: FaFacebookF, url: "https://facebook.com/mounttreks" },
  { Icon: FaInstagram, url: "https://instagram.com/mounttreks" },
  { Icon: FaWhatsapp, url: "https://wa.me/9779707921000" },
];

const StaticBackground = memo(() => (
  <div className="absolute inset-0 z-0 pointer-events-none">
    <img
      src={contactBg}
      alt="Himalayas"
      className="w-full h-full object-cover object-center opacity-40"
    />
    <div className="absolute inset-0 bg-black/70" />
  </div>
));

const StaticHeader = memo(() => (
  <div className="animate-fade-in-up text-center lg:text-left mb-10 lg:mb-0">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
      Let's Start Your <br className="hidden sm:block" />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
        Himalayan Journey
      </span>
    </h2>
    <p className="text-gray-400 text-sm md:text-base max-w-lg lg:max-w-md mx-auto lg:mx-0 leading-relaxed">
      Have questions about a trek? Need a custom itinerary? Our team of Sherpa
      experts is ready to help you plan the adventure of a lifetime.
    </p>
  </div>
));

const StaticContactDetails = memo(() => (
  <div className="space-y-6 mt-8 lg:mt-10">
    <div className="relative w-full h-48 sm:h-64 lg:h-52 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
      <iframe
        title="Mount Treks Office Location"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3532.06325946146!2d85.30326007546747!3d27.715077976179426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDQyJzU0LjMiTiA4NcKwMTgnMjEuMCJF!5e0!3m2!1sen!2snp!4v1710000000000!5m2!1sen!2snp"
        className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
      <div className="group flex items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
        <div className="shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-primary transition-all">
          <FaMapMarkerAlt size={18} />
        </div>
        <div className="ml-4">
          <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
            Visit Us
          </h4>
          <p className="text-white text-sm sm:text-base font-medium">
            Thamel Area - Yapikhya Marg, Kathmandu
          </p>
        </div>
      </div>
      <div className="group flex items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
        <div className="shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-primary transition-all">
          <FaPhoneAlt size={18} />
        </div>
        <div className="ml-4">
          <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
            Call Us
          </h4>
          <p className="text-white text-sm sm:text-base font-medium">
            +977 9707921000
          </p>
        </div>
      </div>

      <div className="group flex items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
        <div className="shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-primary transition-all">
          <FaEnvelope size={18} />
        </div>
        <div className="ml-4">
          <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
            Email Us
          </h4>
          <p className="text-white text-sm sm:text-base font-medium">
            info@mounttreks.com
          </p>
        </div>
      </div>
    </div>

    <div className="flex justify-center lg:justify-start gap-4 pt-2">
      {socialLinks.map((social, idx) => (
        <a
          key={idx}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all duration-300"
        >
          <social.Icon size={18} />
        </a>
      ))}
    </div>
  </div>
));

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({
          type: "success",
          message: "Message sent! Our experts will reach out shortly.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(result.error || "Submission failed");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full">
      <div className="absolute -inset-1 bg-linear-to-r from-primary to-purple-600 rounded-2xl opacity-20 blur-xl pointer-events-none"></div>
      <div className="relative bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 border border-gray-100">
        <h3 className="text-2xl font-black text-gray-900 mb-8 text-center sm:text-left">
          Send a Message
        </h3>
        {status.type && (
          <div
            className={`mb-6 p-4 rounded-lg text-sm font-medium ${status.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}
          >
            {status.message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-hidden"
            />
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-hidden"
            />
          </div>
          <div className="relative">
            <select
              required
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-3.5 appearance-none focus:ring-2 focus:ring-primary/50 cursor-pointer outline-hidden"
            >
              <option value="" disabled>
                Select a Topic
              </option>
              <option value="packages">Packages</option>
              <option value="materials">Materials</option>
              <option value="custom-itinerary">Custom Itinerary</option>
              <option value="other">Other topics</option>
            </select>
            <FaAngleDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none text-xs" />
          </div>
          <textarea
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            placeholder="Tell us about your plans..."
            className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/50 transition-all resize-none outline-hidden"
          ></textarea>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-primary hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    {
      icon: FaRegCalendarAlt,
      q: "What is the best time for Himalayan trekking?",
      a: "The best trekking seasons are Spring (March to May) and Autumn (September to November) when skies are clear and temperatures are moderate.",
    },
    {
      icon: FaShieldAlt,
      q: "Do I need insurance for high-altitude treks?",
      a: "Yes, comprehensive travel insurance that specifically covers emergency helicopter evacuation up to 6,000m is mandatory for all our treks.",
    },
    {
      icon: FaMapMarkedAlt,
      q: "Can I customize a private trekking itinerary?",
      a: "Absolutely! We specialize in custom itineraries. Simply mention your requirements in the contact form or WhatsApp us.",
    },
    {
      icon: FaHiking,
      q: "Are the treks suitable for beginners?",
      a: "We offer treks ranging from easy to challenging. Our Ghorepani Poon Hill trek is perfect for beginners, while Everest Base Camp requires more stamina.",
    },
  ];

  return (
    <div className="mt-16 sm:mt-24 w-full pb-10">
      <div className="text-center mb-10">
        <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
          Common Questions
        </h3>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
      </div>
      <div className="grid gap-3 max-w-5xl mx-auto">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden transition-all"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex items-center justify-between p-4 sm:p-6 text-left focus:outline-hidden"
            >
              <div className="flex items-center gap-4">
                <faq.icon
                  className={`text-lg sm:text-xl shrink-0 ${openIndex === idx ? "text-primary" : "text-gray-500"}`}
                />
                <span className="text-sm sm:text-base font-bold text-white group-hover:text-primary transition-colors">
                  {faq.q}
                </span>
              </div>
              <FaChevronDown
                className={`shrink-0 text-gray-500 transition-transform duration-300 ${openIndex === idx ? "rotate-180 text-primary" : ""}`}
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${openIndex === idx ? "max-h-60 opacity-100 p-4 sm:p-6 pt-0 sm:pl-17" : "max-h-0 opacity-0 overflow-hidden"}`}
            >
              <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <section className="relative w-full min-h-screen bg-black font-sans py-12 sm:py-20 pt-28 lg:pt-36 overflow-x-hidden">
      <StaticBackground />
      <div className="relative z-10 container mx-auto px-4 sm:px-8 lg:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 flex flex-col">
            <StaticHeader />
            <div className="hidden lg:block mt-auto">
              <StaticContactDetails />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <ContactForm />
            <div className="block lg:hidden mt-12">
              <StaticContactDetails />
            </div>
          </div>
        </div>
        <FAQSection />
      </div>
    </section>
  );
};

export default Contact;
