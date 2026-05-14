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
      title: 'AI SaaS Platform',
      category: 'upcoming',
      description:
        'AI-powered SaaS platform focused on automation, analytics, and productivity tools.',
      image: '/p1.jpg',
      tech: ['Next.js', 'OpenAI', 'Prisma'],
      link: '#',
    },
    {
      title: 'Job Platform',
      category: 'following',
      description:
        'Scalable recruitment platform with recruiter dashboards and AI candidate matching.',
      image: '/p2.jpg',
      tech: ['Next.js', 'Supabase', 'Tailwind'],
      link: '#',
    },
    {
      title: 'Developer Portfolio',
      category: 'latest',
      description:
        'Premium animated developer portfolio with cinematic UI and interactive experiences.',
      image: '/p3.jpg',
      tech: ['React', 'Framer Motion', 'Tailwind'],
      link: '#',
    },
  ];

  const filters = ['all', 'popular', 'latest', 'following', 'upcoming'];

  const filteredProjects =
    activeFilter === 'all'
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === activeFilter);

  return (
    <div className="relative overflow-hidden">
      <InteractiveBackground />
      <FloatingTechIcons />

      <main className="relative z-20 pt-20">
        <div className="pt-20">

          {/* HERO */}
          <section className="min-h-screen flex items-center justify-center px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              <div>
                <div className="flex items-center mb-6">
                  <img
                    src="/Boy with computer.jpg"
                    alt="Profile"
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Designing{' '}
                  <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                    Dreams
                  </span>
                  ,<br />
                  Building{' '}
                  <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                    Futures
                  </span>
                  .
                </h1>

                <p className="text-xl text-gray-600 mb-8">
                  Built for turning ideas into production-ready systems ☕💻🔥
                </p>

                <div className="flex gap-4">
                  <motion.button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full">
                    <Mail className="inline w-5 h-5 mr-2" />
                    Contact
                  </motion.button>

                  <motion.button className="px-8 py-4 border rounded-full">
                    <Download className="inline w-5 h-5 mr-2" />
                    Resume
                  </motion.button>
                </div>
              </div>

              {/* IMAGE FIX */}
              <div className="relative">
                <div className="w-full h-96 rounded-3xl overflow-hidden bg-gradient-to-r from-orange-400 to-yellow-500">
                  <img
                    src="/download (11).jpg"
                    alt="workspace"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center"
                  >
                    <Sparkles className="text-white w-8 h-8" />
                  </motion.div>
                </div>
              </div>

            </div>
          </section>

          {/* SKILLS */}
          <section className="py-24 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {skills.map((skill, i) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    key={skill.title}
                    whileHover={{ y: -10 }}
                    className="p-8 rounded-3xl bg-white shadow-xl"
                  >
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${skill.color} inline-block mb-4`}>
                      <Icon className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                    <p className="text-gray-600">{skill.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* PROJECTS */}
          <section className="py-24 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {filters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`px-5 py-2 rounded-full ${
                      activeFilter === f
                        ? 'bg-pink-500 text-white'
                        : 'bg-gray-100'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.title}
                    whileHover={{ y: -10 }}
                    className="rounded-3xl overflow-hidden bg-white shadow-xl"
                  >
                    {/* FIXED IMAGE */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-sm px-3 py-1 bg-pink-100 text-pink-600 rounded-full"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.link}
                        className="block text-center bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-xl"
                      >
                        View Project ✨
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default Home;