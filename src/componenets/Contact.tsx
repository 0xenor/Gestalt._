import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { RiTwitterXLine } from "react-icons/ri"; 
import { FaDiscord } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setformData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mvgqljev', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setformData({ name: '', email: '', message: '' });
      } else {
        alert('Error sending message. Please try again.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    }

    setIsSubmitting(false);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const sociallinks = [
    {
      name: 'FaDiscord',
      icon: FaDiscord,
      url: '',
      color: 'hover:text-blue-700',
    },
    {
      name: 'Twitter',
      icon: RiTwitterXLine,
      url: 'https://x.com/Cikatris_Editor',
      color: 'hover; text-blue-500',
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            Let's Work <span className="text-purple-600 ">Together</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-inter font-bold text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg focus:border-purple-700 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200 font-inter text-white placeholder-gray-500"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-inter font-bold text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg focus:border-purple-700 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200 font-inter text-white placeholder-gray-500"
                  placeholder="your email@gmail.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-inter font-bold text-gray-300 mb-2"
              >
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg focus:border-purple-700 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200 font-inter text-white placeholder-gray-500 resize-none"
                placeholder="Tell me about your project, goals, and timeline..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`inline-flex items-center px-8 py-4 rounded-lg font-inter font-medium text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/20 ${
                  isSubmitted
                    ? 'bg-green-600 text-white cursor-default'
                    : isSubmitting
                    ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                    : 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-purple-700 hover:to-cyan-500 text-black shadow-lg hover:shadow-cyan-500/25'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Message Sent!
                  </>
                ) : isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>

          
          <div className="mt-16 text-center">
            <h3 className="font-poppins font-bold text-xl mb-6">Contact Me</h3>
            <div className="flex justify-center space-x-6">
              {sociallinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-center w-12 h-12 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg hover:border-cyan-400 transition-all duration-300 hover:scale-110 ${social.color}`}
                >
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      
      <div className="mt-20 border-t border-gray-600 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400 font-inter font-black">
            <p>&copy; 2025 Gestalt. All rights reserved.</p>
            <p className="mt-2 text-sm font-poppins font-extrabold">
              Editor with a considerable amount of experience
            </p>
            <p className="mt-2 text-xl font-poppins font-bold text-purple-500">
              Discord Username: cikatris
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
