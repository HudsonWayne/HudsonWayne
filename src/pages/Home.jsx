import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Code, Database, Cloud, Smartphone, Palette, BarChart3, Sparkles } from 'lucide-react';

import InteractiveBackground from '../components/InteractiveBackground';
import FloatingTechIcons from '../components/FloatingTechIcons';
import ProfileImage from '../images/TadiwaProfile.jpg';


const Home = () => {
  const skills = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building responsive and scalable web applications with modern frameworks.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Designing robust APIs and database solutions for seamless data flow.',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      description: 'Automating deployment, optimizing infrastructure and managing cloud services.',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Crafting intuitive and aesthetically pleasing user interfaces and experiences.',
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Developing cross-platform mobile experiences for iOS and Android.',
      color: 'from-indigo-400 to-indigo-600'
    },
    {
      icon: BarChart3,
      title: 'Database Management',
      description: 'Managing and optimizing data storage solutions for performance and reliability.',
      color: 'from-teal-400 to-teal-600'
    }
  ];

  const featuredProjects = [
    {
      title: 'Wedding Planner App',
      description: 'A visually rich wedding planning platform with role-based flows for couples and planners, featuring vendor management and budgeting tools.',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
      tech: ['React', 'Firebase', 'MongoDB'],
      link: 'https://plan-eta.vercel.app'
    },
    {
      title: 'MuteroPay',
      description: 'A fintech mobile app for Zimbabwean vehicle owners to manage license fees with ZINARA integration and payment plans.',
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      link: 'https://tax-lpuc.vercel.app'
    },
    {
      title: 'DevHer Tracker',
      description: 'A productivity platform for women in tech to track coding progress, habits, and GitHub activity with community features.',
      image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg',
      tech: ['React', 'Tailwind CSS'],
      link: 'https://dev-her-lhbl.vercel.app'
    }
  ];

  return (
    <div className="relative">
      <InteractiveBackground />
      <FloatingTechIcons />

      <main className="relative z-20 pt-20">
        <div className="pt-20">
          <section className="min-h-screen flex items-center justify-center px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center mb-6">
                  <img
                    src="/public/Boy with computer.jpg"
                    alt="Profile"
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Designing <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Dreams</span>,<br />
                  Building <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Futures</span>.
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Built for turning “this should work” into “fixed it” — powered by caffeine, console logs, and unreasonable optimism ☕💻🔥😅
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 hover:shadow-2xl hover:shadow-pink-500/25"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-5 h-5" />
                    <span>Contact Me</span>
                  </motion.button>

                  <motion.button
                    className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-pink-400 hover:text-pink-600 transition-all duration-300 flex items-center justify-center space-x-2 hover:bg-pink-50"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Resume</span>
                  </motion.button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >


                <div className="relative">
  <div className="w-full h-96 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-3xl overflow-hidden">
    <img
      src="/download (11).jpg"
      alt="Creative workspace"
      className="w-full h-full object-contain"
    />
  </div>

  <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center">
    <motion.div
      className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center"
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
    >
      <Sparkles className="w-8 h-8 text-white" />
    </motion.div>
  </div>
</div>


              </motion.div>
            </div>
          </section>




{/* Skills Section */}
<section className="relative py-24 px-6 lg:px-8 overflow-hidden">
  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-lg mb-6"
      >
        <span className="text-2xl">🚀</span>
        <span className="font-semibold tracking-wide">Creative Developer Skills</span>
      </motion.div>

      <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
        My <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">Expertise</span>
      </h2>

      <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Building modern digital experiences with clean code, scalable systems, and beautiful user interfaces.
      </p>
    </motion.div>

    {/* Skills Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {skills.map((skill, index) => {
        const IconComponent = skill.icon;

        const emojis = ['💻', '⚡', '🎨', '🚀', '🔥', '🧠'];

        return (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.12,
              ease: 'easeOut',
            }}
            viewport={{ once: true }}
            whileHover={{ y: -12 }}
            className="group relative"
          >
            {/* Card Glow */}
            <div
              className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${skill.color} opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-25`}
            />

            {/* Card */}
            <div className="relative h-full bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-xl overflow-hidden transition-all duration-500 group-hover:shadow-2xl">
              {/* Top Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-100 to-orange-100 rounded-full blur-2xl opacity-60" />

              {/* Icon */}
              <motion.div
                whileHover={{
                  rotate: [0, -10, 10, -5, 0],
                  scale: 1.12,
                }}
                transition={{ duration: 0.6 }}
                className={`relative inline-flex items-center justify-center p-5 rounded-2xl bg-gradient-to-r ${skill.color} shadow-lg mb-6`}
              >
                <IconComponent className="w-8 h-8 text-white" />

                {/* Floating Emoji */}
                <motion.span
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute -top-3 -right-3 text-2xl"
                >
                  {emojis[index % emojis.length]}
                </motion.span>
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors duration-300">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {skill.description}
              </p>

              {/* Bottom Line Animation */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.2 }}
                className={`h-1 rounded-full bg-gradient-to-r ${skill.color} mt-8`}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

          {/* Featured Projects */}
          <section className="py-20 px-6 lg:px-8 bg-white/30">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="relative overflow-hidden">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </motion.div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-medium hover:from-pink-600 hover:to-purple-600 transition-all duration-300 text-center hover:shadow-lg hover:shadow-pink-500/25"
                          whileHover={{ scale: 1.02, y: -1 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          View Details
                        </motion.a>
                      </div>
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
