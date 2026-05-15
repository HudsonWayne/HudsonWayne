// Projects.jsx

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Heart,
  X,
  Sparkles,
} from 'lucide-react';

const Projects = () => {
  const [active, setActive] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'Anon',
      category: 'latest',
      description:
        'Modern female clothing platform with elegant UI, responsive shopping experience, and smooth animations.',
      image: '/newsletter.png',
      tech: ['Next.js', 'Tailwind', 'TypeScript'],
      link: 'https://amon-vajv.vercel.app/',
      repo: null,
      featured: true,
      future:
        'Add AI outfit recommendations and personalized shopping experiences.',
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
      repo: null,
      featured: true,
      future:
        'Add payment gateway integration and live order tracking.',
    },
    {
      title: 'Fizzi',
      category: 'popular',
      description:
        'Interactive animated product experience with immersive transitions and smooth effects.',
      image: '/lemon-lime.png',
      tech: ['EJS', 'JavaScript', 'CSS'],
      link: 'https://fizzi-ejs.vercel.app/',
      repo: null,
      featured: true,
      future:
        'Implement CMS dashboard and advanced animation controls.',
    },
    {
      title: 'Smart-Farms',
      category: 'popular',
      description:
        'AI-powered farming tools using drones and smart automation systems.',
      image: '/Pic 10.jpg',
      tech: ['Next.js', 'OpenAI', 'Prisma'],
      link:
        'https://smart-farms-2v7n-1dx8ewysv-hudsonwaynes-projects.vercel.app/',
      repo: null,
      featured: true,
      future:
        'Integrate IoT sensors and predictive analytics for farming.',
    },
    {
      title: 'Job Platform',
      category: 'following',
      description:
        'Scalable recruitment platform with recruiter dashboards and AI candidate matching.',
      image:
        'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      tech: ['Next.js', 'Supabase', 'Tailwind'],
      link: '#',
      repo: null,
      featured: true,
      future:
        'Add AI resume scoring and real-time interview scheduling.',
    },
    {
      title: 'Developer Portfolio',
      category: 'latest',
      description:
        'Premium animated developer portfolio with cinematic UI and interactive experiences.',
      image:
        'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
      tech: ['React', 'Framer Motion', 'Tailwind'],
      link: '#',
      repo: null,
      featured: true,
      future:
        'Add CMS integration and customizable portfolio themes.',
    },
  ];

  const filters = ['all', 'popular', 'latest', 'following'];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  const projectsWithFeatures = useMemo(
    () =>
      filteredProjects.map((p) => ({
        ...p,
        features: p.description
          .split('.')
          .map((s) => s.trim())
          .filter(Boolean),
      })),
    [filteredProjects]
  );

  const openLink = (url) => {
    if (!url || url === '#') return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative overflow-hidden pt-20">

      {/* BACKGROUND BLURS */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />

      {/* HEADER */}
      <section className="relative py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg mb-6">
              <Heart className="w-5 h-5" />
              <span className="font-semibold tracking-wide">
                Selected Work & Creations
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Featured{' '}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Modern SaaS products, AI tools, scalable applications,
              and immersive digital experiences.
            </p>
          </motion.div>

          {/* FILTERS */}
          <div className="flex flex-wrap justify-center gap-4 mt-14">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-2xl font-semibold capitalize transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                    : 'bg-white/80 backdrop-blur-xl border border-gray-200 text-gray-700 hover:border-pink-400 hover:text-pink-500'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="relative pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"
          >
            <AnimatePresence mode="popLayout">
              {projectsWithFeatures.map((project, index) => {
                const emojis = [
                  '🚀',
                  '💻',
                  '⚡',
                  '🎨',
                  '🔥',
                  '🧠',
                ];

                return (
                  <motion.div
                    layout
                    key={project.title}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    whileHover={{ y: -10 }}
                    className="group relative"
                  >
                    {/* GLOW */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-400 to-purple-500 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-20" />

                    {/* CARD */}
                    <div className="relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl transition-all duration-500 group-hover:shadow-2xl">

                      {/* IMAGE */}
                      <div className="relative overflow-hidden">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          whileHover={{ scale: 1.08 }}
                          transition={{ duration: 0.5 }}
                          className="w-full h-64 object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                        {/* CATEGORY */}
                        <div className="absolute top-5 left-5">
                          <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-semibold capitalize border border-white/20">
                            {project.category}
                          </span>
                        </div>

                        {/* FLOATING ICON */}
                        <motion.div
                          animate={{
                            y: [0, -6, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                          className="absolute top-5 right-5 w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl border border-white/20 shadow-lg"
                        >
                          {emojis[index % emojis.length]}
                        </motion.div>

                        {/* TITLE */}
                        <div className="absolute bottom-5 left-5 right-5">
                          <h3 className="text-2xl font-bold text-white">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      {/* CONTENT */}
                      <div className="p-7">

                        <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">
                          {project.description}
                        </p>

                        {/* TECH STACK */}
                        <div className="flex flex-wrap gap-3 mb-8">
                          {project.tech.map((tech) => (
                            <motion.span
                              key={tech}
                              whileHover={{ scale: 1.08 }}
                              className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 text-sm font-semibold shadow-sm border border-pink-200/50"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>

                        {/* BUTTONS */}
                        <div className="flex gap-3">

                          <motion.button
                            onClick={() => setActive(project)}
                            whileHover={{
                              scale: 1.03,
                              y: -2,
                            }}
                            whileTap={{ scale: 0.98 }}
                            className="relative flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold overflow-hidden shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
                          >
                            <span className="relative z-10">
                              View Details
                            </span>

                            <Sparkles className="w-5 h-5 relative z-10" />

                            <motion.div
                              initial={{ x: '-120%' }}
                              whileHover={{ x: '120%' }}
                              transition={{ duration: 0.8 }}
                              className="absolute inset-0 bg-white/20 skew-x-12"
                            />
                          </motion.button>

                          {project.link && project.link !== '#' && (
                            <motion.button
                              onClick={() => openLink(project.link)}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-md hover:text-pink-500"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </motion.button>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl"
            >
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full h-72 object-cover"
                />

                <button
                  onClick={() => setActive(null)}
                  className="absolute top-5 right-5 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* CONTENT */}
              <div className="p-8">

                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">

                  <div>
                    <h2 className="text-4xl font-bold text-gray-900">
                      {active.title}
                    </h2>

                    <p className="text-pink-500 font-semibold mt-2 capitalize">
                      {active.category}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    {active.link && active.link !== '#' && (
                      <button
                        onClick={() => openLink(active.link)}
                        className="px-5 py-3 bg-gray-100 rounded-xl font-medium hover:bg-gray-200 transition"
                      >
                        Live Demo
                      </button>
                    )}

                    {active.repo && (
                      <button
                        onClick={() => openLink(active.repo)}
                        className="px-5 py-3 bg-gray-100 rounded-xl font-medium hover:bg-gray-200 transition"
                      >
                        <Github className="inline-block w-4 h-4 mr-2" />
                        Github
                      </button>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-8">
                  {active.description}
                </p>

                {/* FEATURES */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Key Features
                  </h3>

                  <div className="space-y-3">
                    {active.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-pink-500 mt-2" />
                        <p className="text-gray-600">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FUTURE */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Future Improvements
                  </h3>

                  <p className="text-gray-600">
                    {active.future}
                  </p>
                </div>

                {/* TECH */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Tech Stack
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {active.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 font-semibold border border-pink-200/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;