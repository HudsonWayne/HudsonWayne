import React from 'react';
import {
  Github,
  Linkedin,
  Sparkles,
  MessageCircle,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-xl border-t border-pink-100 py-12 relative overflow-hidden">

      {/* BACKGROUND BLURS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">

          {/* LOGO */}
          <div className="flex flex-col items-center lg:items-start">

            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>

              <h2 className="text-2xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                HudsonWayne
              </h2>
            </div>

            <p className="text-gray-600 text-center lg:text-left max-w-md leading-relaxed">
              Building scalable SaaS platforms, AI systems, and modern web
              applications with clean UI and powerful backend architecture 🚀
            </p>
          </div>

          {/* LINKS */}
          <div className="flex flex-col items-center lg:items-end gap-5">

            <div className="flex items-center gap-6 flex-wrap justify-center">

              {/* GITHUB */}
              <a
                href="https://github.com/HudsonWayne"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-white shadow-lg border border-gray-100 hover:border-pink-300 transition-all duration-300 hover:-translate-y-1"
              >
                <Github className="w-5 h-5 text-gray-700 group-hover:text-pink-600 transition-colors duration-300" />

                <span className="font-semibold text-gray-700 group-hover:text-pink-600">
                  GitHub
                </span>
              </a>

              {/* LINKEDIN */}
              <a
                href="https://linkedin.com/HudsonWayneBenhura"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-white shadow-lg border border-gray-100 hover:border-purple-300 transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5 text-gray-700 group-hover:text-purple-600 transition-colors duration-300" />

                <span className="font-semibold text-gray-700 group-hover:text-purple-600">
                  LinkedIn
                </span>
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/263715639012"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-white shadow-lg border border-gray-100 hover:border-green-300 transition-all duration-300 hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5 text-gray-700 group-hover:text-green-600 transition-colors duration-300" />

                <span className="font-semibold text-gray-700 group-hover:text-green-600">
                  WhatsApp
                </span>
              </a>

            </div>

            <div className="text-center lg:text-right">
              <p className="text-gray-500 font-medium">
                +263 715 639 012
              </p>

              <p className="text-gray-400 text-sm mt-1">
                Available for freelance, collaborations & opportunities
              </p>
            </div>

          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 pt-8 border-t border-pink-100 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm text-center">
            © 2026 HudsonWayne Dev. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm text-center">
            Made with <span className="text-pink-500">♥</span> using React,
            Tailwind CSS & Framer Motion
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;