import React from 'react';
import { Twitter } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';
import ProfileImage from '../assets/gestalt.jpg';

const Hero: React.FC = () => {
  return (
    <div id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-600 to-red-500 bg-clip-text text-transparent">Gestalt</span>
            </h1>
            <div className="text-2xl md:text-3xl text-gray-500">
              <span className="font-bold bg-gradient-to-r from-purple-600 to-red-600 bg-clip-text text-transparent">
                Professional Video Editor.
              </span>
            </div>
            <span className="block bg-gradient-to-r from-blue-400 via-red-600 to-green-400 bg-clip-text text-transparent"></span>
            <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
              Accustomed to working under pressure and with limited resources, I don't kneel before any challenge. I've
              been slowly but surely improving at Ae and Pr alike. Deadlines don't intimidate me.
            
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="https://www.discord.com/users/461310381701201951" target="blank"
               className="group p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-blue-700/70 transition-all duration-300 hover:scale-110">
              <FaDiscord className="w-7 h-7 text-gray-200 group-hover:text-blue-700 transition-color" />
            </a>
            <a href="https://x.com/Cikatris_Editor" target="_blank"
               className="group p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-blue-500/70 transition-all duration-300 hover:scale-110">
              <Twitter className="w-7 h-7 text-gray-200 group-hover:text-blue-700 transition-color" />
            </a>
          </div>

          <div className="flex space-x-5">
            <a href="#projects"
               className="px-8 py-3 bg-gradient-to-r from-blue-700 to-red-700 text-black text-semibold font-medium rounded-lg hover:from-blue-600 hover:to-red-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25">
              View Projects
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-96 h-96 rounded-full bg-gradient-to-br from-red-700 via-blue-700 to-red-700 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <img src={ProfileImage} alt="Profile" className="w-[22rem] h-[22rem] rounded-full object-cover" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
