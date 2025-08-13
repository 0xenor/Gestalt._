import React, { useEffect, useRef, useState } from "react";

type Review = {
  id: number;
  name: string;
  text: string;
  avatar: string;
};

const Reviews: React.FC = () => {
  const reviews: Review[] = [
    {
      id: 1,
      name: "Fernandes",
      text: "Quality fits my expectations! Stunning visuals and comprehensive motion graphics, crafted with precision and creativity that truly impress.",
      avatar: "https://images.pexels.com/photos/2847577/pexels-photo-2847577.jpeg",
    },
    {
      id: 2,
      name: "Jared",
      text: "Truly impressed with the attention to detail and creativity. Every frame feels purposeful and professionally crafted.",
      avatar: "https://images.pexels.com/photos/7205376/pexels-photo-7205376.jpeg",
    },
    {
      id: 3,
      name: "USer",
      text: "Stunning visuals and comprehensive motion graphics, delivered with a reasonable turnaround time and even an added revision for perfection.",
      avatar: "https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg",
    },
  ];

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="reviews" className="py-12 relative">
      <style>{`
        .pfp-card {
          background: #0a0a0a;
          border: 1px solid rgba(255,255,255,0.06);
          max-width: 300px;
          padding: 14px 16px;
          text-align: center;
        }
        .client-name {
          font-style: italic;
          letter-spacing: 1.5px;
          font-weight: 700;
          text-transform: uppercase;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="text-center font-poppins font-extrabold text-3xl md:text-4xl lg:text-5xl">
          Trusted By <span className="text-purple-600">Clients</span>
        </h2>
      </div>

      <div
        ref={sectionRef}
        className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 transform transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {reviews.map((r) => (
          <article key={r.id} className="pfp-card rounded-lg mx-auto">
            <img
              src={r.avatar}
              alt={r.name}
              className="w-[70px] h-[70px] rounded-full object-cover mx-auto mb-4"
            />
            <div className="client-name text-[14px] md:text-[15px] text-white/90 mb-2">
              {r.name}
            </div>
            <div className="text-[14px] leading-6 text-white/85 tracking-wide">
              {r.text}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
