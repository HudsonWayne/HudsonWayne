import React from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  GraduationCap,
  Briefcase,
  Code2,
  Sparkles,
  Cpu,
  Rocket,
} from 'lucide-react';

import Wayne1 from '../images/wayne11.jpeg';
import Wayne2 from '../images/wayne22.jpeg';

const About = () => {
  const education = [
    {
      degree: 'Certification in Software Engineering',
      institution: 'Ucommon.org',
      period: 'Aug 2022 - Dec 2023',
      description:
        'Engineered scalable full-stack applications, collaborated in agile teams, and delivered production-ready software focused on solving real-world business problems.',
    },
    {
      degree:
        'Certification in AI Engineering Core Track: LLM Engineering, RAG, QLoRA, Agents',
      institution: 'www.udemy.com',
      period: 'Mar 2026 - May 2026',
      description:
        'Built advanced AI systems using LLMs, RAG pipelines, QLoRA fine-tuning, and autonomous agents while creating scalable AI-powered applications.',
    },
    {
      degree: 'Certification in Prompt Engineering Master AI',
      institution: 'www.udemy.com',
      period: 'May 2026 - May 2026',
      description:
        'Mastered modern prompt engineering strategies for AI automation, intelligent workflows, and high-performance AI applications.',
    },
    {
      degree: 'Certification in Complete Python Pro 100 Days of Code Bootcamp',
      institution: 'www.udemy.com',
      period: 'Jan 2026 - Jan 2026',
      description:
        'Developed backend systems, automation tools, APIs, and real-world Python applications through intensive hands-on projects.',
    },
  ];

  const experience = [
    {
      position: 'Software Developer',
      company: 'YouPro Contact',
      period: 'Aug 2023 - Dec 2023',
      description:
        'Built modern full-stack SaaS platforms, optimized APIs, and developed scalable systems focused on performance and user experience.',
    },
    {
      position: 'Software Engineering Instructor',
      company: 'Uncommon.org',
      period: 'Jan 2024 - Present',
      description:
        'Mentored aspiring developers, taught modern web technologies, and guided students in building real-world software projects.',
    },
  ];

  return (
    <div className="overflow-hidden bg-[#0b0b0f] text-white">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center px-6 lg:px-16 py-24">

        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/20 blur-3xl rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-xl"
            >
              <Sparkles className="w-4 h-4 text-pink-400" />
              <span className="text-sm text-gray-300">
                Full-Stack Software Engineer
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              Building
              <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Scalable Digital
              </span>
              Experiences 🚀
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-8">
              I’m Wayne — a full-stack developer obsessed with building clean,
              scalable SaaS products, AI systems, and modern web applications
              with powerful backend architecture and beautiful user interfaces.
            </p>

            <div className="flex flex-wrap gap-4">

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 shadow-2xl shadow-purple-500/30 font-semibold flex items-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                Production Ready
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl font-semibold flex items-center gap-2"
              >
                <Cpu className="w-5 h-5 text-cyan-400" />
                AI + SaaS Builder
              </motion.div>

            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 blur-3xl opacity-30 rounded-full"></div>

            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="relative z-10"
            >
              <img
                src={Wayne1}
                alt="Wayne"
                className="w-[340px] lg:w-[420px] h-[340px] lg:h-[420px] object-cover rounded-[40px] border border-white/10 shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -left-8 bg-[#12121a] border border-white/10 p-5 rounded-3xl backdrop-blur-xl shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <Code2 className="text-pink-400" />
                <div>
                  <h3 className="font-bold">Building Daily</h3>
                  <p className="text-sm text-gray-400">
                    SaaS • AI • Full-Stack
                  </p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="px-6 lg:px-16 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 blur-3xl opacity-20 rounded-[40px]"></div>

            <img
              src={Wayne2}
              alt="Wayne"
              className="relative z-10 rounded-[40px] w-full max-w-[500px] border border-white/10 shadow-2xl"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Heart className="text-pink-500" />
              <h2 className="text-4xl font-bold">
                My Journey
              </h2>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I started coding thinking it was just typing random things into a
              computer... now I debug problems at 2AM, build scalable systems,
              train AI models, deploy apps, break production accidentally, fix
              it, and somehow call it character development 💀🚀
            </p>

            <p className="text-gray-500 leading-relaxed">
              My focus is building modern products that feel premium, fast, and
              scalable — combining beautiful frontend experiences with powerful
              backend architecture and intelligent AI systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="px-6 lg:px-16 py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="text-purple-400" />
              <h2 className="text-4xl font-bold">
                Education
              </h2>
            </div>

            <p className="text-gray-400">
              Certifications and technical learning focused on software,
              scalable systems, AI engineering, and backend development.
            </p>
          </motion.div>

          <div className="grid gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-[#12121a] border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      {edu.degree}
                    </h3>

                    <p className="text-pink-400 font-medium">
                      {edu.institution}
                    </p>
                  </div>

                  <div className="text-sm bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-gray-300 w-fit">
                    {edu.period}
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="px-6 lg:px-16 py-24">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="text-cyan-400" />
              <h2 className="text-4xl font-bold">
                Experience
              </h2>
            </div>

            <p className="text-gray-400">
              Real-world software engineering experience building products,
              teaching development, and shipping scalable systems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-[#12121a] to-[#181825] border border-white/10 rounded-3xl p-8 shadow-xl hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      {exp.position}
                    </h3>

                    <p className="text-cyan-400 font-medium">
                      {exp.company}
                    </p>
                  </div>

                  <div className="text-sm bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-gray-300">
                    {exp.period}
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;