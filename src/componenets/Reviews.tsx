import React, { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";

type Review = {
  id: number;
  name: string;
  text: string;
  rating: number;
  avatar: string;
};

const Reviews: React.FC = () => {
  const reviews: Review[] = [
    {
      id: 1,
      name: "Fernandes",
      text: "Oh Gestalt, is my favourite editor i like his works is so cool, See you soon in the next work.",
      rating: 4,
      avatar: "https://images.pexels.com/photos/2847577/pexels-photo-2847577.jpeg",
    },
    {
      id: 2,
      name: "Grieve",
      text: "Gestalt, is the best editor for me, because he is capable to work everything.",
      rating: 4,
      avatar: "https://images.pexels.com/photos/7205376/pexels-photo-7205376.jpeg",
    },
    {
      id: 3,
      name: "User",
      text: "he's really skilled on video editing dev and i will work with him definitely again",
      rating: 5,
      avatar: "https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg",
    },
    {
      id: 4,
      name: "UserBoy",
      text: "I know Gestalt a few mounths i like his works ,Keep Going Bro, I like your style working , See u !",
      rating: 3,
      avatar: "https://images.pexels.com/photos/3201630/pexels-photo-3201630.jpeg",
    },
    {
      id: 5,
      name: "Cikatris",
      text: "While I say Gestalt is my video editor, it means he will do everything in the best way. He is so great.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3379933/pexels-photo-3379933.jpeg",
    },
    {
      id: 6,
      name: "Ibra",
      text: "I have known you for more than a year now, and I  find that you deliver each project for i high quality",
      rating: 4,
      avatar: "https://images.pexels.com/photos/8102677/pexels-photo-8102677.jpeg",
    },
  ];

  const rowRefs = useRef<HTMLDivElement[]>([]);
  const [visibleRows, setVisibleRows] = useState<boolean[]>([false, false]);

  useEffect(() => {
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const rowIndex = Number(entry.target.getAttribute("data-row"));
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleRows((prev) => {
                const updated = [...prev];
                updated[rowIndex] = true;
                return updated;
              });
            }, rowIndex * 400); // الصف الثاني يتأخر 400ms على الأول
          }
        });
      },
      { threshold: 0.2 }
    );

    rowRefs.current.forEach((row) => {
      if (row) fadeObserver.observe(row);
    });

    return () => fadeObserver.disconnect();
  }, []);

  return (
    <section id="reviews" className="py-12 relative">
      <style>{`
        .pfp-card {
          background: #0a0a0a;
          border: 1px solid rgba(255,255,255,0.06);
          max-width: 360px;
          margin: 0 auto;
          padding: 14px 16px;
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

      {/* الصف الأول */}
      <div
        data-row={0}
        ref={(el) => {
          if (el) rowRefs.current[0] = el;
        }}
        className={`flex flex-col md:flex-row items-center justify-center gap-2 mb-4 flex-wrap transform transition-all duration-700 ease-out
          ${visibleRows[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        {reviews.slice(0, 3).map((r) => (
          <article key={r.id} className="pfp-card flex items-center rounded-lg">
            <img
              src={r.avatar}
              alt={r.name}
              className="w-[62px] h-[65px] rounded-full object-cover mr-4 flex-shrink-0"
            />
            <div className="flex-1">
              <div className="client-name text-[14px] md:text-[15px] text-white/90 mb-1">
                {r.name}
              </div>
              {/* النجوم */}
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    size={14}
                    color={i < r.rating ? "#eab308" : "#555"}
                    className="mr-1"
                  />
                ))}
              </div>
              <div className="text-[14px] leading-6 text-white/85 tracking-wide">
                {r.text}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* الصف الثاني */}
      <div
        data-row={1}
        ref={(el) => {
          if (el) rowRefs.current[1] = el;
        }}
        className={`flex flex-col md:flex-row items-center justify-center gap-2 flex-wrap transform transition-all duration-700 ease-out
          ${visibleRows[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        {reviews.slice(3, 6).map((r) => (
          <article key={r.id} className="pfp-card flex items-center rounded-lg">
            <img
              src={r.avatar}
              alt={r.name}
              className="w-[62px] h-[65px] rounded-full object-cover mr-4 flex-shrink-0"
            />
            <div className="flex-1">
              <div className="client-name text-[14px] md:text-[15px] text-white/90 mb-1">
                {r.name}
              </div>
              {/* النجوم */}
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    size={14}
                    color={i < r.rating ? "#eab308" : "#555"}
                    className="mr-1"
                  />
                ))}
              </div>
              <div className="text-[14px] leading-6 text-white/85 tracking-wide">
                {r.text}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
