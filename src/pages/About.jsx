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

import InteractiveBackground from '../components/InteractiveBackground';
import FloatingTechIcons from '../components/FloatingTechIcons';

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
    <div className="relative overflow-hidden min-h-screen">
      <InteractiveBackground />
      <FloatingTechIcons />

      <main className="relative z-20 pt-20">

        {/* HERO */}
        <section className="min-h-screen flex items-center px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
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
                I’m Wayne — a developer obsessed with building scalable SaaS
                products, AI systems, beautiful interfaces, and backend
                architectures that solve real-world problems.
              </p>

              <div className="flex flex-wrap gap-5">

                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="px-7 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-xl flex items-center gap-3 font-semibold"
                >
                  <Rocket className="w-5 h-5" />
                  Production Ready
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="px-7 py-4 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl text-gray-700 flex items-center gap-3 font-semibold"
                >
                  <Cpu className="w-5 h-5 text-purple-500" />
                  AI + SaaS Systems
                </motion.div>

              </div>
            </motion.div>

            {/* RIGHT */}
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

        {/* STORY */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300/30 to-purple-300/30 blur-3xl rounded-[40px]" />

              <img
                src={Wayne2}
                alt="Wayne"
                className="relative z-10 rounded-[40px] shadow-2xl border-4 border-white w-full max-w-[500px]"
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
                <h2 className="text-5xl font-black text-gray-900">
                  My Journey
                </h2>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                I started coding thinking it was just typing random things into
                a computer... now I build scalable systems, debug at 2AM,
                deploy AI applications, accidentally break production, fix it,
                and call it “developer growth” 💀🚀
              </p>

              <p className="text-gray-500 leading-relaxed text-lg">
                My mission is building products that feel premium, fast,
                intelligent, and scalable — blending modern frontend design,
                strong backend engineering, and AI-powered experiences.
              </p>
            </motion.div>

          </div>
        </section>

        {/* EDUCATION */}
        <section className="relative py-24 px-6 lg:px-8 overflow-hidden">

          <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl" />
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
                <GraduationCap className="w-5 h-5" />
                <span className="font-semibold tracking-wide">
                  Education & Certifications
                </span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900">
                Technical{' '}
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Learning
                </span>
              </h2>
            </motion.div>

            <div className="grid gap-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-400 to-purple-500 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-20" />

                  <div className="relative bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-xl">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-5">

                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {edu.degree}
                        </h3>

                        <p className="text-pink-600 font-semibold">
                          {edu.institution}
                        </p>
                      </div>

                      <div className="px-5 py-2 rounded-2xl bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 font-semibold text-sm shadow-sm w-fit">
                        {edu.period}
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-lg">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="relative py-24 px-6 lg:px-8 overflow-hidden">

          <div className="absolute top-0 right-0 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto relative z-10">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-lg mb-6">
                <Briefcase className="w-5 h-5" />
                <span className="font-semibold tracking-wide">
                  Professional Experience
                </span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900">
                Real-World{' '}
                <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                  Engineering
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.12,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-400 to-pink-500 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-20" />

                  <div className="relative h-full bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-xl">
                    <div className="flex flex-col gap-5 mb-5">

                      <div className="flex items-center justify-between gap-4 flex-wrap">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {exp.position}
                          </h3>

                          <p className="text-orange-500 font-semibold">
                            {exp.company}
                          </p>
                        </div>

                        <div className="px-5 py-2 rounded-2xl bg-gradient-to-r from-orange-100 to-pink-100 text-orange-700 font-semibold text-sm shadow-sm">
                          {exp.period}
                        </div>
                      </div>

                      <p className="text-gray-600 leading-relaxed text-lg">
                        {exp.description}
                      </p>

                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

      </main>
    </div>
  );
};

export default About;