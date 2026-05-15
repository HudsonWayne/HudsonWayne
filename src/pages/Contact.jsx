// Contact.jsx

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MessageCircle,
  Send,
  MapPin,
  Clock,
  Coffee,
  Sparkles,
  Github,
  Linkedin,
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // ✅ CHANGING HERO TEXT
  const rotatingTexts = [
    'Something Amazing',
    'Modern SaaS',
    'AI Experiences',
    'Creative Products',
    'Scalable Systems',
    'Future Ideas',
  ];

  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) =>
        prev === rotatingTexts.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', formData);

    alert('Message sent successfully 🚀');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Me',
      value: 'hudsonnbenhuraa@gmail.com',
      description:
        "Send me an email and I'll respond within 24 hours.",
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Phone,
      title: 'Call Me',
      value: '+263 77 6345 180',
      description:
        'Available Monday to Friday • 9AM - 6PM',
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Harare, Zimbabwe',
      description:
        'Available for remote work & collaborations.',
      gradient: 'from-orange-400 to-pink-500',
    },
  ];

  return (
    <div className="relative overflow-hidden pt-20">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300/30 blur-3xl rounded-full" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-300/30 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-orange-200/30 blur-3xl rounded-full" />

      {/* HERO */}
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* SMALL BADGE */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg mb-8">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold tracking-wide">
                Let's Connect
              </span>
            </div>

            {/* TITLE */}
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-8">
              <span className="text-gray-900">
                Let’s Build
              </span>

              <br />

              {/* ✅ ROTATING TEXT */}
              <div className="relative h-[100px] lg:h-[120px] flex items-center justify-center overflow-hidden">

                <AnimatePresence mode="wait">

                  <motion.span
                    key={rotatingTexts[currentText]}
                    initial={{
                      opacity: 0,
                      rotateX: -90,
                      scale: 0.7,
                      y: 60,
                    }}
                    animate={{
                      opacity: 1,
                      rotateX: 0,
                      scale: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 720,
                      scale: 0.5,
                      y: -60,
                    }}
                    transition={{
                      duration: 1.2,
                      ease: 'easeInOut',
                    }}
                    className="absolute bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent"
                  >
                    {rotatingTexts[currentText]}
                  </motion.span>

                </AnimatePresence>

              </div>
            </h1>

            {/* SUBTITLE */}
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Got a SaaS idea, startup vision, AI tool, or crazy
              project that keeps you awake at 2AM? ☕💻🔥
              <br />
              Let’s turn it into something real.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="relative pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >

            {/* FORM CONTAINER */}
            <div className="relative group">

              {/* GLOW */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-all duration-500" />

              <div className="relative bg-white/80 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-2xl p-8 lg:p-10">

                <form onSubmit={handleSubmit} className="space-y-7">

                  {/* NAME */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                  >
                    <label className="flex items-center text-gray-700 font-semibold mb-3">
                      <Mail className="w-5 h-5 mr-2 text-pink-500" />
                      Your Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Wayne Hudson"
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300"
                    />
                  </motion.div>

                  {/* EMAIL */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                  >
                    <label className="flex items-center text-gray-700 font-semibold mb-3">
                      <Mail className="w-5 h-5 mr-2 text-pink-500" />
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300"
                    />
                  </motion.div>

                  {/* PHONE */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                  >
                    <label className="flex items-center text-gray-700 font-semibold mb-3">
                      <Phone className="w-5 h-5 mr-2 text-pink-500" />
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+263..."
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300"
                    />
                  </motion.div>

                  {/* MESSAGE */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                  >
                    <label className="flex items-center text-gray-700 font-semibold mb-3">
                      <MessageCircle className="w-5 h-5 mr-2 text-pink-500" />
                      Your Message
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={7}
                      required
                      placeholder="Tell me about your project..."
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 resize-none"
                    />
                  </motion.div>

                  {/* BUTTON */}
                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.03,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="relative overflow-hidden w-full px-8 py-5 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-white font-bold text-lg shadow-xl"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Send Message
                      <Send className="w-5 h-5" />
                    </span>

                    {/* SHINE EFFECT */}
                    <motion.div
                      initial={{ x: '-120%' }}
                      whileHover={{ x: '120%' }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 bg-white/20 skew-x-12"
                    />
                  </motion.button>

                </form>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >

            {/* CONTACT CARDS */}
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="group relative"
                >

                  {/* GLOW */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-all duration-500`} />

                  <div className="relative bg-white/80 backdrop-blur-xl border border-white/40 p-7 rounded-3xl shadow-xl">

                    <div className="flex items-start gap-5">

                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${info.gradient} shadow-lg`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {info.title}
                        </h3>

                        <p className="text-pink-600 font-semibold mb-2">
                          {info.value}
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* RESPONSE CARD */}
            <motion.div
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-2xl p-8"
            >

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute top-4 right-4"
              >
                <Clock className="w-10 h-10 text-white/30" />
              </motion.div>

              <h3 className="text-2xl font-bold mb-4">
                Fast Response ⚡
              </h3>

              <p className="leading-relaxed text-white/90">
                Most messages are answered within
                <span className="font-bold"> 24 hours</span>.
                <br />
                Unless debugging production at 3AM 😅
              </p>
            </motion.div>

            {/* FUN CARD */}
            <motion.div
              whileHover={{ rotate: 1, scale: 1.02 }}
              className="bg-gradient-to-r from-orange-100 to-yellow-100 border border-orange-200 rounded-3xl p-8 shadow-xl"
            >

              <div className="flex items-center gap-3 mb-4">
                <Coffee className="w-7 h-7 text-orange-600" />

                <h3 className="text-2xl font-bold text-gray-900">
                  Developer Fuel ☕
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Current stack:
                <br />
                Coffee + VS Code + Console Logs + “Why is this div moving?” 💀
              </p>
            </motion.div>

            {/* SOCIALS */}
            <div className="flex gap-4">

              <motion.a
                whileHover={{ y: -5 }}
                href="#"
                className="flex-1 p-5 rounded-2xl bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:text-pink-500 transition"
              >
                <Github className="w-7 h-7" />
              </motion.a>

              <motion.a
                whileHover={{ y: -5 }}
                href="#"
                className="flex-1 p-5 rounded-2xl bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:text-pink-500 transition"
              >
                <Linkedin className="w-7 h-7" />
              </motion.a>

            </div>

          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;