import React from 'react';

interface Project {
  id: number;
  title: string;
  videoUrl: string;
  link: string; // رابط خارجي
  thumbnail: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Reel Instagram.',
      videoUrl: 'https://www.instagram.com/p/DK0ztlNINFG/',
      link: 'https://www.instagram.com/p/DK0ztlNINFG/',
      thumbnail: 'https://images.pexels.com/photos/12795/pexels-photo-12795.jpeg'
    },
    {
      id: 2,
      title: 'Video Twitter.',
      videoUrl: 'https://x.com/Cikatris_Editor/status/1932986459222597959',
      link: 'https://twitter.com',
      thumbnail: 'https://images.pexels.com/photos/5640613/pexels-photo-5640613.jpeg'
    },
  ];

  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-6 space-y-20">

        {/* العنوان */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
            Check out my <span className="text-purple-600">latest work</span>
          </h2>
        </div>

        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col md:flex-row items-center justify-center gap-10 ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* الفيديو */}
            <div className={`flex-shrink-0 ${index % 2 === 0 ? 'md:pl-6' : 'md:pr-6'}`}>
              <div className="w-[500px] h-[280px] rounded-lg overflow-hidden shadow-lg">
                <video
                  src={project.videoUrl}
                  poster={project.thumbnail}
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* الوصف + الزر */}
            <div className={`max-w-md space-y-4 ${index % 2 === 0 ? 'md:pl-4' : 'md:pr-4'} text-center md:text-left`}>
              <h3 className="text-2xl font-extrabold text-white">{project.title}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-7 py-3 bg-gradient-to-r from-purple-700 to-red-700 text-black font-extrabold rounded-lg hover:from-blue-600 hover:to-red-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
              >
                Watch Video
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
