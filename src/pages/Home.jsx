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
    {
      title: 'Fizzi',
      category: 'popular',
      description:
        'Interactive animated product experience with immersive transitions and smooth effects.',
      image: '/lemon-lime.png',
      tech: ['EJS', 'JavaScript', 'CSS'],
      link: 'https://fizzi-ejs.vercel.app/',
    },
    {
      title: 'Smart-Farms',
      category: 'popular',
      description:
        'AI-powered farming tools using drawnes and machines',
      image: '/Pic 10.jpg',
      tech: ['Next.js', 'OpenAI', 'Prisma'],
      link:
        'https://smart-farms-2v7n-1dx8ewysv-hudsonwaynes-projects.vercel.app/',
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
    },
  ];

  const filters = [
    'all',
    'popular',
    'latest',
    'following',
    'upcoming',
  ];

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
        <div className="pt-10">

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
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg mb-8"
                >
                  <Sparkles className="w-5 h-5 text-pink-500" />

                  <span className="font-semibold text-gray-700">
                    Full-Stack Engineer & AI Builder
                  </span>
                </motion.div>

                <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight mb-8">
                  Creating{' '}
                  <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent">
                    Modern Digital
                  </span>
                  <br />
                  Experiences 🚀
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mb-10">
                  Built for turning “this should work” into “fixed it” —
                  powered by caffeine, console logs, and unreasonable optimism
                  ☕💻🔥😅
                </p>

                <div className="flex flex-wrap gap-5">

                  <motion.button
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-7 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-xl flex items-center gap-3 font-semibold"
                  >
                    <Mail className="w-5 h-5" />
                    Contact Me
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-7 py-4 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl text-gray-700 flex items-center gap-3 font-semibold"
                  >
                    <Download className="w-5 h-5 text-purple-500" />
                    Download Resume
                  </motion.button>

                </div>

                {/* EXTRA BADGES */}
                <div className="flex flex-wrap gap-4 mt-8">

                  <motion.div
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="px-6 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-xl flex items-center gap-3 font-semibold"
                  >
                    <Rocket className="w-5 h-5" />
                    Production Ready
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="px-6 py-4 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl text-gray-700 flex items-center gap-3 font-semibold"
                  >
                    <Cpu className="w-5 h-5 text-pink-500" />
                    AI + SaaS Systems
                  </motion.div>

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
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  src={Wayne1}
                  alt="Wayne"
                  className="relative z-10 w-[340px] lg:w-[450px] h-[340px] lg:h-[450px] object-cover rounded-[40px] shadow-2xl border-4 border-white"
                />

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
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

          {/* SKILLS */}
          <section className="relative py-24 px-6 lg:px-8 overflow-hidden">
            <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-lg mb-6">
                  <span className="text-2xl">🚀</span>

                  <span className="font-semibold tracking-wide">
                    Creative Developer Skills
                  </span>
                </div>

                <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                  My{' '}
                  <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                    Expertise
                  </span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;

                  return (
                    <motion.div
                      key={skill.title}
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.7,
                        delay: index * 0.12,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ y: -12 }}
                      className="group relative"
                    >
                      <div
                        className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${skill.color} opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-25`}
                      />

                      <div className="relative h-full bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-xl overflow-hidden">
                        <motion.div
                          whileHover={{
                            rotate: [0, -10, 10, -5, 0],
                            scale: 1.12,
                          }}
                          transition={{ duration: 0.6 }}
                          className={`inline-flex items-center justify-center p-5 rounded-2xl bg-gradient-to-r ${skill.color} shadow-lg mb-6`}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </motion.div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {skill.title}
                        </h3>

                        <p className="text-gray-600 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* PROJECTS */}
          <section className="relative py-24 px-6 lg:px-8 overflow-hidden">
            <div className="absolute top-0 left-0 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg mb-6">
                  <span className="text-2xl">🔥</span>

                  <span className="font-semibold tracking-wide">
                    Selected Work & Creations
                  </span>
                </div>

                <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                  Featured{' '}
                  <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                    Projects
                  </span>
                </h2>

                <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Modern products, AI systems, scalable applications, and
                  beautiful digital experiences.
                </p>
              </motion.div>

              {/* FILTERS */}
              <div className="flex flex-wrap justify-center gap-4 mb-16">
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

              {/* PROJECT GRID */}
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"
              >
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project, index) => {
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
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-400 to-purple-500 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-20" />

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

                            <div className="absolute top-5 left-5">
                              <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-semibold capitalize border border-white/20">
                                {project.category}
                              </span>
                            </div>

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

                            <motion.a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{
                                scale: 1.03,
                                y: -2,
                              }}
                              whileTap={{ scale: 0.98 }}
                              className="relative flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold overflow-hidden shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
                            >
                              <span className="relative z-10">
                                View Project
                              </span>

                              <span className="relative z-10 text-xl">
                                ✨
                              </span>

                              <motion.div
                                initial={{ x: '-120%' }}
                                whileHover={{ x: '120%' }}
                                transition={{ duration: 0.8 }}
                                className="absolute inset-0 bg-white/20 skew-x-12"
                              />
                            </motion.a>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default Home;