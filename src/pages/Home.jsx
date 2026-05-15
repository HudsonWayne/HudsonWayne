import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Download,
  Mail,
  Code,
  Database,
  Cloud,
  Smartphone,
  Palette,
  BarChart3,
  Sparkles,
  Rocket,
  Cpu,
  Code2,
} from 'lucide-react';

import InteractiveBackground from '../components/InteractiveBackground';
import FloatingTechIcons from '../components/FloatingTechIcons';

import Wayne1 from '../images/wayne11.jpeg';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const skills = [
    {
      icon: Code,
      title: 'Web Development',
      description:
        'Building responsive and scalable web applications with modern frameworks.',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Database,
      title: 'Backend Development',
      description:
        'Designing robust APIs and database solutions for seamless data flow.',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      description:
        'Automating deployment, optimizing infrastructure and managing cloud services.',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description:
        'Crafting intuitive and aesthetically pleasing user interfaces and experiences.',
      color: 'from-pink-400 to-pink-600',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description:
        'Developing cross-platform mobile experiences for iOS and Android.',
      color: 'from-indigo-400 to-indigo-600',
    },
    {
      icon: BarChart3,
      title: 'Database Management',
      description:
        'Managing and optimizing data storage solutions for performance and reliability.',
      color: 'from-teal-400 to-teal-600',
    },
  ];

  const featuredProjects = [
    {
      title: 'Anon',
      category: 'latest',
      description:
        'Modern female clothing platform with elegant UI, responsive shopping experience, and smooth animations.',
      image: '/newsletter.png',
      tech: ['Next.js', 'Tailwind', 'TypeScript'],
      link: 'https://amon-vajv.vercel.app/',
    },
    {
      title: 'Food Delivery',
      category: 'popular',
      description:
        'Fast and scalable food delivery application with modern mobile-first design and real-time ordering.',
      image: '/header_img.png',
      tech: ['React', 'Node.js', 'MongoDB'],
      link:
        'https://food-54vsvuvuq-hudsonwaynes-projects.vercel.app/',
    },
  ];

  const filters = ['all', 'popular', 'latest', 'following', 'upcoming'];

  const filteredProjects =
    activeFilter === 'all'
      ? featuredProjects
      : featuredProjects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <div className="relative overflow-hidden min-h-screen">
      <InteractiveBackground />
      <FloatingTechIcons />

      <main className="relative z-20 pt-20">
        <div className="pt-20">

          {/* HERO SECTION */}
          <section className="min-h-screen flex items-center px-6 lg:px-8 py-20">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

              {/* LEFT SIDE */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg mb-8"
                >
                  <Sparkles className="w-5 h-5 text-pink-500" />
                  <span className="font-semibold text-gray-700">
                    Full-Stack Engineer & AI Builder
                  </span>
                </motion.div>

                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Designing{' '}
                  <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                    Dreams
                  </span>
                  ,
                  <br />
                  Building{' '}
                  <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                    Futures
                  </span>
                  .
                </h1>

                <p className="text-xl text-gray-600 mb-10">
                  Built for turning “this should work” into “fixed it” — powered by caffeine, console logs, and unreasonable optimism ☕💻🔥😅
                </p>

                <div className="flex flex-wrap gap-5">

                  {/* ✅ WHATSAPP BUTTON FIXED */}
                  <motion.a
                    href="https://wa.me/263715639012"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="px-7 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-white shadow-xl flex items-center gap-3 font-semibold"
                  >
                    <Mail className="w-5 h-5" />
                    Contact Me
                  </motion.a>

                  <motion.button
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="px-7 py-4 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl text-gray-700 flex items-center gap-3 font-semibold"
                  >
                    <Download className="w-5 h-5 text-purple-500" />
                    Download Resume
                  </motion.button>

                </div>
              </motion.div>

              {/* RIGHT SIDE */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="relative flex justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-300/40 to-purple-300/40 blur-3xl rounded-full"></div>

                <motion.img
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  src={Wayne1}
                  alt="Wayne"
                  className="relative z-10 w-[340px] lg:w-[450px] h-[340px] lg:h-[450px] object-cover rounded-[40px] shadow-2xl border-4 border-white"
                />

                <motion.div
                  className="absolute -bottom-8 -left-6 bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-5 z-20"
                >
                  <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                      <Code2 className="text-white" />
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900">
                        Building Daily
                      </h3>
                      <p className="text-gray-600 text-sm">
                        SaaS • AI • Full-Stack
                      </p>
                    </div>

                  </div>
                </motion.div>
              </motion.div>

            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default Home;