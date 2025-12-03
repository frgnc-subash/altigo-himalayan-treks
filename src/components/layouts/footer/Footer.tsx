import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* 1. Brand & Vision */}
          <div className="flex flex-col items-start space-y-6">
            <h3 className="text-3xl font-bold tracking-tight text-white">
              Mount Treks<span className="text-zinc-600">.</span>
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              Crafting unforgettable high-altitude experiences in the Himalayas.
              Pure adventure, zero compromise.
            </p>
            <div className="flex space-x-6">
              {/* Social Icons - Clean & Minimal */}
              <a
                href="#"
                className="text-zinc-500 hover:text-white transition-colors duration-300"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                className="text-zinc-500 hover:text-white transition-colors duration-300"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                className="text-zinc-500 hover:text-white transition-colors duration-300"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* 2. Exploration */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Our Packages", "Gallery", "Journal"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-zinc-400 hover:text-white hover:underline decoration-1 underline-offset-4 transition-all"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* 3. Destinations */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">
              Destinations
            </h4>
            <ul className="space-y-3">
              {[
                "Everest Base Camp",
                "Annapurna Circuit",
                "Langtang Valley",
                "Manaslu Region",
                "Upper Mustang",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-zinc-400 hover:text-white hover:underline decoration-1 underline-offset-4 transition-all"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Newsletter */}
          <div className="flex flex-col">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">
              Join the Expedition
            </h4>
            <p className="text-zinc-400 text-xs mb-4">
              Receive seasonal updates and exclusive trek offers.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email address"
                className="bg-zinc-900 border border-zinc-800 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all placeholder-zinc-600"
              />
              <button className="bg-white text-black hover:bg-zinc-200 text-sm font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 group">
                Subscribe
                <FaArrowRight
                  className="group-hover:translate-x-1 transition-transform duration-200"
                  size={12}
                />
              </button>
            </form>
          </div>
        </div>

  
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Mount Treks. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-zinc-600">
            <a href="#" className="hover:text-zinc-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-zinc-400 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-zinc-400 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
