import React, { useEffect, useRef, useState } from 'react';

interface Project {
  id: number;
  mp4Url: string;
  caption: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      mp4Url: '/videos/watermarked versionv2.mp4',
      caption: 'Clean Motion Graphics'
    },
    {
      id: 2,
      mp4Url: '/videos/practice.mp4',
      caption: 'Engaging Effects'
    },
    {
      id: 3,
      mp4Url: '/videos/deeping the saltiest players in rust_1.mp4',
      caption: 'Captivating Highlights'
    },
  ];

  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const containerRefs = useRef<HTMLDivElement[]>([]);
  const [visibleSections, setVisibleSections] = useState<boolean[]>(projects.map(() => false));

  // تشغيل/إيقاف الفيديو
  useEffect(() => {
    const videos = videoRefs.current.filter(Boolean);
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const vid = entry.target as HTMLVideoElement;
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            vid.play().catch(() => {});
          } else {
            vid.pause();
          }
        });
      },
      { threshold: [0.5] }
    );
    videos.forEach((v) => videoObserver.observe(v));

    return () => videoObserver.disconnect();
  }, []);

  // Fade-in مع مراقبة الترتيب
  useEffect(() => {
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleSections((prev) => {
                const updated = [...prev];
                updated[index] = true;
                return updated;
              });
            }, index * 300); // كل سطر يتأخر 300ms على اللي قبلو
          }
        });
      },
      { threshold: 0.2 }
    );

    containerRefs.current.forEach((container) => {
      if (container) fadeObserver.observe(container);
    });

    return () => fadeObserver.disconnect();
  }, []);

  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-6 space-y-20">
        {projects.map((project, index) => {
          const videoOnRight = index % 2 === 0;

          return (
            <div
              key={project.id}
              data-index={index}
              ref={(el) => {
                if (el) containerRefs.current[index] = el;
              }}
              style={{
                transitionDelay: `${index * 0.3}s` // للتأكد من الـ delay في CSS
              }}
              className={`flex flex-col md:flex-row items-center gap-48 transform transition-all duration-1000 ease-out
                ${visibleSections[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
            >
              {/* الكابتشن */}
              {!videoOnRight && (
                <div className="bg-gradient-to-r from-purple-600 to-red-600 bg-clip-text text-transparent text-2xl font-bold md:w-1/2 text-center md:text-right">
                  {project.caption}
                </div>
              )}

              {/* الفيديو */}
              <div className="flex-shrink-0 md:w-1/2 flex justify-center">
                <div className="w-[500px] h-[280px] rounded-lg overflow-hidden shadow-lg">
                  <video
                    ref={(el) => {
                      if (el) videoRefs.current[index] = el;
                    }}
                    src={project.mp4Url}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                    loop
                    preload="metadata"
                    controls
                  />
                </div>
              </div>

              {/* الكابتشن */}
              {videoOnRight && (
                <div className="bg-gradient-to-r from-purple-600 to-red-600 bg-clip-text text-transparent text-2xl font-bold md:w-1/2 text-center md:text-left">
                  {project.caption}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
