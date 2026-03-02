"use client";

import React, { memo, useState } from "react";
import {
  CalendarDays,
  ChevronDown,
  Facebook,
  Footprints,
  Instagram,
  Mail,
  Map,
  MapPin,
  Phone,
  Shield,
  MessageCircle,
} from "lucide-react";

const API_URL = "https://mount-treks.onrender.com/api/send-email";

const socialLinks = [
  { Icon: Facebook, url: "https://www.facebook.com/profile.php?id=61584054197541" },
  { Icon: Instagram, url: "https://www.instagram.com/altigohimalayantreksofficial/" },
  { Icon: MessageCircle, url: "https://wa.me/9779707921000" },
];

const StaticBackground = memo(function StaticBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <img
        src="/backgrounds/bg1.jpeg"
        alt="Himalayas"
        className="h-full w-full object-cover object-center opacity-40"
      />
      <div className="absolute inset-0 bg-black/70" />
    </div>
  );
});

const StaticHeader = memo(function StaticHeader() {
  return (
    <div className="mb-10 text-center lg:mb-0 lg:text-left">
      <h2 className="mb-4 text-3xl leading-tight font-black text-white sm:text-4xl md:text-5xl">
        Let&apos;s Start Your <br className="hidden sm:block" />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
          Himalayan Journey
        </span>
      </h2>
      <p className="mx-auto max-w-lg text-sm leading-relaxed text-gray-400 md:text-base lg:mx-0 lg:max-w-md">
        Have questions about a trek? Need a custom itinerary? Our team of
        experts is ready to help you plan the adventure of a lifetime.
      </p>
    </div>
  );
});

const StaticContactDetails = memo(function StaticContactDetails() {
  return (
    <div className="mt-8 space-y-6 lg:mt-10">
      <div className="group relative h-48 w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl sm:h-64 lg:h-52">
        <iframe
          title="Mount Treks Office Location"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3532.06325946146!2d85.30326007546747!3d27.715077976179426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDQyJzU0LjMiTiA4NcKwMTgnMjEuMCJF!5e0!3m2!1sen!2snp!4v1710000000000!5m2!1sen!2snp"
          className="h-full w-full grayscale transition-all duration-700 group-hover:grayscale-0"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
        <div className="group flex items-center rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:bg-white/10">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-all group-hover:bg-primary">
            <MapPin size={18} />
          </div>
          <div className="ml-4">
            <h4 className="text-[10px] font-bold tracking-wider text-gray-500 uppercase">
              Visit Us
            </h4>
            <p className="text-sm font-medium text-white sm:text-base">
              Thamel Area - Yapikhya Marg, Kathmandu
            </p>
          </div>
        </div>

        <div className="group flex items-center rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:bg-white/10">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-all group-hover:bg-primary">
            <Phone size={18} />
          </div>
          <div className="ml-4">
            <h4 className="text-[10px] font-bold tracking-wider text-gray-500 uppercase">
              Call Us
            </h4>
            <p className="text-sm font-medium text-white sm:text-base">
              +977 9707921000
            </p>
          </div>
        </div>

        <div className="group flex items-center rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:bg-white/10">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-all group-hover:bg-primary">
            <Mail size={18} />
          </div>
          <div className="ml-4">
            <h4 className="text-[10px] font-bold tracking-wider text-gray-500 uppercase">
              Email Us
            </h4>
            <a
              href="mailto:info@altigohimalayantreks.com"
              className="text-sm font-medium text-white transition-colors hover:text-primary sm:text-base"
            >
              info@altigohimalayantreks.com
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4 pt-2 lg:justify-start">
        {socialLinks.map((social, idx) => (
          <a
            key={idx}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:bg-primary hover:text-white"
          >
            <social.Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  );
});

function ContactForm() {
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
      <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-linear-to-r from-primary to-indigo-600 opacity-20 blur-xl" />
      <div className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-2xl sm:p-8 md:p-12">
        <h3 className="mb-8 text-center text-2xl font-black text-gray-900 sm:text-left">
          Send a Message
        </h3>

        {status.type && (
          <div
            className={`mb-6 rounded-lg p-4 text-sm font-medium ${
              status.type === "success"
                ? "bg-green-50 text-green-700"
                : "bg-red-50 text-red-700"
            }`}
          >
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-hidden transition-all focus:border-primary focus:ring-2 focus:ring-primary/50"
            />
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-hidden transition-all focus:border-primary focus:ring-2 focus:ring-primary/50"
            />
          </div>

          <div className="relative">
            <select
              required
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-hidden focus:ring-2 focus:ring-primary/50"
            >
              <option value="" disabled>
                Select a Topic
              </option>
              <option value="packages">Packages</option>
              <option value="materials">Materials</option>
              <option value="custom-itinerary">Custom Itinerary</option>
              <option value="other">Other topics</option>
            </select>
            <ChevronDown className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-gray-500" size={14} />
          </div>

          <textarea
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            placeholder="Tell us about your plans..."
            className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-hidden transition-all focus:ring-2 focus:ring-primary/50"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-black py-4 font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-primary active:scale-95"
          >
            {isSubmitting ? (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    {
      icon: CalendarDays,
      q: "What is the best time for Himalayan trekking?",
      a: "The best trekking seasons are Spring (March to May) and Autumn (September to November) when skies are clear and temperatures are moderate.",
    },
    {
      icon: Shield,
      q: "Do I need insurance for high-altitude treks?",
      a: "Yes, comprehensive travel insurance that covers emergency helicopter evacuation up to 6,000m is mandatory for all our treks.",
    },
    {
      icon: Map,
      q: "Can I customize a private trekking itinerary?",
      a: "Absolutely. We specialize in custom itineraries. Mention your needs in the contact form or message us on WhatsApp.",
    },
    {
      icon: Footprints,
      q: "Are the treks suitable for beginners?",
      a: "We offer easy to challenging treks. Ghorepani Poon Hill is great for beginners, while Everest Base Camp requires stronger stamina.",
    },
  ];

  return (
    <div className="mt-16 w-full pb-10 sm:mt-24">
      <div className="mb-10 text-center">
        <h3 className="mb-3 text-2xl font-black text-white sm:text-3xl">
          Common Questions
        </h3>
        <div className="mx-auto h-1 w-16 rounded-full bg-primary" />
      </div>

      <div className="mx-auto grid max-w-5xl gap-3">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="flex w-full items-center justify-between p-4 text-left focus:outline-hidden sm:p-6"
            >
              <div className="flex items-center gap-4">
                <faq.icon
                  className={`shrink-0 text-lg sm:text-xl ${
                    openIndex === idx ? "text-primary" : "text-gray-500"
                  }`}
                />
                <span className="text-sm font-bold text-white transition-colors group-hover:text-primary sm:text-base">
                  {faq.q}
                </span>
              </div>
              <ChevronDown
                className={`shrink-0 text-gray-500 transition-transform duration-300 ${
                  openIndex === idx ? "rotate-180 text-primary" : ""
                }`}
              />
            </button>

            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndex === idx
                  ? "max-h-60 p-4 pt-0 opacity-100 sm:p-6 sm:pt-0 sm:pl-16"
                  : "max-h-0 overflow-hidden opacity-0"
              }`}
            >
              <p className="text-sm leading-relaxed text-gray-400">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <section className="relative min-h-screen w-full overflow-x-hidden bg-black pt-28 pb-12 font-sans sm:py-20 sm:pt-28 lg:pt-36">
      <StaticBackground />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          <div className="flex w-full flex-col lg:w-1/2">
            <StaticHeader />
            <div className="mt-auto hidden lg:block">
              <StaticContactDetails />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <ContactForm />
            <div className="mt-12 block lg:hidden">
              <StaticContactDetails />
            </div>
          </div>
        </div>
        <FAQSection />
      </div>
    </section>
  );
}
