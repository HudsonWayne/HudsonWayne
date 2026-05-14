import React from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  GraduationCap,
  Briefcase,
  Coffee,
  Leaf,
  ChefHat,
} from 'lucide-react';

// ✅ FIXED IMAGE IMPORTS (VITE SAFE PATHS)
import Wayne1 from '../images/wayne11.jpeg';
import Wayne2 from '../images/wayne22.jpeg';

const About = () => {
  const passions = [
    {
      icon: Coffee,
      title: 'Reading',
      description:
        'Diving into captivating novels and enriching non-fiction, exploring new worlds and perspectives from the comfort of my favorite armchair.',
    },
    {
      icon: Leaf,
      title: 'Gardening',
      description:
        'Nurturing a small garden and enjoying the calm of growing plants and herbs.',
    },
    {
      icon: ChefHat,
      title: 'Baking',
      description:
        'Experimenting with recipes and creating sweet treats for friends and family.',
    },
  ];

  const education = [
    {
      degree: 'Pending Certification',
      institution: 'Ucommon.org',
      period: 'Jan 2025 - Dec 2025',
      description:
        'Built real-world projects and collaborated on team-based sprints.',
    },
  ];

  const experience = [
    {
      position: 'Developer',
      company: 'Freelance',
      period: '2024 - Present',
      description:
        'Building full-stack web applications and SaaS platforms.',
    },
    {
      position: 'Frontend Developer',
      company: 'Self-Employed',
      period: '2023 - 2024',
      description:
        'Designed responsive UI and modern web interfaces using React.',
    },
  ];

  return (
    <div className="pt-20">

      {/* HERO SECTION */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* IMAGE 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-80 h-80 mx-auto lg:mx-0 rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <img
                src={Wayne1}
                alt="Wayne profile"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-xl">
              <Heart className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Welcome to My Creative Universe
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I’m Wayne — a full-stack developer building fast, scalable web apps with clean UI, powerful backends, and real-world impact 🚀💻⚡
            </p>
          </motion.div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-20 px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* IMAGE 2 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-80 h-96 mx-auto lg:mx-0 rounded-3xl bg-gradient-to-br from-pink-200 to-purple-200 p-6">
              <div className="w-full h-full bg-white/80 rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src={Wayne2}
                  alt="Wayne secondary"
                  className="w-48 h-48 object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Heart className="w-7 h-7 text-pink-500 mr-3" />
              My Story
            </h2>

            <p className="text-gray-600 leading-relaxed">
              I started coding to solve real problems and quickly fell in love with building full-stack systems, SaaS products, and AI tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <GraduationCap className="mr-3 text-purple-500" />
            Education
          </h2>

          {education.map((edu, i) => (
            <div key={i} className="p-6 bg-pink-50 rounded-2xl mb-6">
              <h3 className="font-bold">{edu.degree}</h3>
              <p className="text-pink-600">{edu.institution}</p>
              <p className="text-gray-500">{edu.period}</p>
              <p>{edu.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Briefcase className="mr-3 text-purple-500" />
            Experience
          </h2>

          {experience.map((exp, i) => (
            <div key={i} className="p-6 bg-purple-50 rounded-2xl mb-6">
              <h3 className="font-bold">{exp.position}</h3>
              <p className="text-purple-600">{exp.company}</p>
              <p className="text-gray-500">{exp.period}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PASSIONS */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">My Passions</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {passions.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                whileHover={{ y: -8 }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center mb-4">
                  <Icon className="text-white" />
                </div>
                <h3 className="font-bold mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm">{p.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default About;