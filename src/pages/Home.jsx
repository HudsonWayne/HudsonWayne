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
} from 'lucide-react';

import InteractiveBackground from '../components/InteractiveBackground';
import FloatingTechIcons from '../components/FloatingTechIcons';

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

  // ✅ ONLY YOUR REAL PROJECTS
  const featuredProjects = [
    {
      title: 'Wedding Planner App',
      category: 'latest',
      description:
        'Wedding planning platform with vendor management, budgeting tools, and role-based flows.',
      image:
        'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
      tech: ['React', 'Firebase', 'MongoDB'],
      link: 'https://plan-eta.vercel.app',
    },
    {
      title: 'MuteroPay',
      category: 'popular',
      description:
        'Fintech app for vehicle license payments with ZINARA integration and payment plans.',
      image:
        'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg',
      tech: ['React', 'Firebase', 'Tailwind'],
      link: 'https://tax-lpuc.vercel.app',
    },
    {
      title: 'DevHer Tracker',
      category: 'following',
      description:
        'Women-in-tech productivity tracker for coding progress, habits, and GitHub activity.',
      image:
        'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg',
      tech: ['React', 'Tailwind'],
      link: 'https://dev-her-lhbl.vercel.app',
    },
    {
      title: 'Anon Clothing Store',
      category: 'latest',
      description:
        'Modern e-commerce fashion store with clean UI and smooth shopping experience.',
      image: '/newsletter.png',
      tech: ['Next.js', 'TypeScript', 'Tailwind'],
      link: 'https://amon-vajv.vercel.app/',
    },
    {
      title: 'Food Delivery App',
      category: 'popular',
      description:
        'Fast food delivery platform with responsive UI and real-time ordering experience.',
      image: '/header_img.png',
      tech: ['React', 'Node.js', 'MongoDB'],
      link:
        'https://food-54vsvuvuq-hudsonwaynes-projects.vercel.app/',
    },
    {
      title: 'Fizzi Animation App',
      category: 'popular',
      description:
        'Interactive animated product experience with smooth visual transitions.',
      image: '/lemon-lime.png',
      tech: ['EJS', 'JavaScript', 'CSS'],
      link: 'https://fizzi-ejs.vercel.app/',
    },
  ];

  const filters = ['all', 'popular', 'latest', 'following'];

  const filteredProjects =
    activeFilter === 'all'
      ? featuredProjects
      : featuredProjects.filter(
          (p) => p.category === activeFilter
        );

  return (
    <div className="relative overflow-hidden">
      <InteractiveBackground />
      <FloatingTechIcons />

      <main className="relative z-20 pt-20">
        <div className="pt-20">
          {/* HERO */}
          <section className="min-h-screen flex items-center justify-center px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="flex items-center mb-6">
                  <img
                    src="/Boy with computer.jpg"
                    className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
                  />
                </div>

                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Designing{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                    Dreams
                  </span>
                  , Building{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                    Futures
                  </span>
                </h1>

                <p className="text-xl text-gray-600 mb-8">
                  Turning ideas into real working systems with clean code and
                  scalable architecture.
                </p>

                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-pink-500 text-white rounded-full">
                    Contact Me
                  </button>
                  <button className="px-6 py-3 border rounded-full">
                    Download CV
                  </button>
                </div>
              </motion.div>

              <motion.div>
                <img
                  src="/download (11).jpg"
                  className="rounded-3xl w-full h-[400px] object-cover"
                />
              </motion.div>
            </div>
          </section>

          {/* SKILLS */}
          <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.title}
                    className="p-6 rounded-2xl bg-white shadow"
                  >
                    <Icon className="mb-4" />
                    <h3 className="font-bold">{skill.title}</h3>
                    <p className="text-gray-600">
                      {skill.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* PROJECTS */}
          <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-4xl font-bold">
                  Featured Projects
                </h2>
              </div>

              {/* FILTERS */}
              <div className="flex justify-center gap-4 mb-10 flex-wrap">
                {filters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`px-4 py-2 rounded-full ${
                      activeFilter === f
                        ? 'bg-pink-500 text-white'
                        : 'bg-gray-200'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>

              {/* GRID */}
              <div className="grid md:grid-cols-3 gap-8">
                <AnimatePresence>
                  {filteredProjects.map((project) => (
                    <motion.a
                      key={project.title}
                      href={project.link}
                      target="_blank"
                      className="rounded-2xl overflow-hidden shadow bg-white"
                      layout
                    >
                      <img
                        src={project.image}
                        className="h-48 w-full object-cover"
                      />
                      <div className="p-5">
                        <h3 className="font-bold text-lg">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {project.description}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;