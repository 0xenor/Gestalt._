import { useEffect, useRef } from "react";

export default function ScrollTrimLine() {
  const pathRef = useRef<SVGPathElement | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const path = pathRef.current!;
    const total = path.getTotalLength();

    path.style.strokeDasharray = `${total}`;
    path.style.strokeDashoffset = `${total}`;

    const onScroll = () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        const doc = document.documentElement;
        const scrollTop = doc.scrollTop || document.body.scrollTop;
        const scrollHeight = doc.scrollHeight - doc.clientHeight;
        const progress = scrollHeight > 0 ? Math.min(scrollTop / scrollHeight, 1) : 0;

        path.style.strokeDashoffset = String(total * (1 - progress));
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <svg
      className="pointer-events-none fixed inset-0 z-0 w-screen h-screen"
      viewBox="0 0 1440 1024"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        ref={pathRef}
        d="
          M720,0 
          C720,80 680,140 610,170
          C520,210 470,260 470,340
          C470,420 560,470 640,490
          C760,520 880,560 920,660
          C960,760 860,820 760,860
          C640,910 520,940 520,1024
        "
        stroke="#FFFFFF"   
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        filter="url(#glow)"
      />
    </svg>
  );
}
