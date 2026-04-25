"use client";

import Link from "next/link";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [glitch, setGlitch] = useState(false);

  /* ---------------- SMOOTH PARALLAX ---------------- */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  const rotateX = useTransform(smoothY, [-200, 200], [3, -3]);
  const rotateY = useTransform(smoothX, [-200, 200], [-3, 3]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX - innerWidth / 2);
      mouseY.set(e.clientY - innerHeight / 2);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Random glitch effect
    const glitchInterval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 8000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      clearInterval(glitchInterval);
    };
  }, []);

  /* ---------------- LINKS ---------------- */
  const links = [
    { href: "/", label: "Home", icon: "⌂" },
    { href: "/chat", label: "AI Chat", icon: "◈" },
    { href: "/projects", label: "Projects", icon: "⚡" },
  ];

  return (
   <motion.div
  style={{ rotateX, rotateY, transformPerspective: 1200 }}
  className="sticky top-0 z-50 px-2 sm:px-4 md:px-6 pt-3 sm:pt-4"
>
  <div className="relative rounded-2xl overflow-hidden max-w-7xl mx-auto">

    {/* 🌈 BACKGROUND */}
    <motion.div 
      className="absolute inset-0 opacity-60"
      animate={{
        background: [
          'radial-gradient(circle at 0% 0%, rgba(168, 85, 247, 0.15), transparent 50%)',
          'radial-gradient(circle at 100% 0%, rgba(59, 130, 246, 0.15), transparent 50%)',
          'radial-gradient(circle at 100% 100%, rgba(236, 72, 153, 0.15), transparent 50%)',
          'radial-gradient(circle at 0% 100%, rgba(34, 211, 238, 0.15), transparent 50%)',
          'radial-gradient(circle at 0% 0%, rgba(168, 85, 247, 0.15), transparent 50%)',
        ]
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    />

    {/* PANEL */}
    <div className={`relative backdrop-blur-2xl bg-black/40 border rounded-2xl shadow-2xl transition-all duration-500 ${
      scrolled 
        ? 'border-white/20 shadow-[0_0_30px_rgba(168,85,247,0.3)]' 
        : 'border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)]'
    }`}>

      {/* CONTENT */}
      <div className="flex items-center justify-between gap-2 sm:gap-4 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 relative z-10">

        {/* LOGO */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative cursor-pointer shrink-0 ${glitch ? 'animate-glitch' : ''}`}
          >
            <h1 className="text-lg sm:text-xl md:text-2xl font-black tracking-wider">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AKSHAY
              </span>
              <span className="text-white/40 font-mono">.dev</span>
            </h1>
          </motion.div>
        </Link>

        {/* LINKS (scrollable on small screens) */}
        <div className="flex items-center gap-1 sm:gap-2 bg-black/30 p-1 rounded-xl border border-white/10 backdrop-blur-sm overflow-x-auto scrollbar-hide">

          {links.map((link, index) => {
            const isActive = pathname === link.href;

            return (
              <Link key={link.href} href={link.href}>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-5 py-2 rounded-lg cursor-pointer group whitespace-nowrap"
                  style={{
                    clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)'
                  }}
                >
                  {/* ACTIVE */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}

                  {/* CONTENT */}
                  <div className="relative z-10 flex items-center gap-1 sm:gap-2">
                    <span className="text-sm sm:text-base md:text-lg">
                      {link.icon}
                    </span>

                    {/* Hide text on very small screens */}
                    <span
                      className={`hidden xs:inline text-[10px] sm:text-xs md:text-sm font-bold tracking-wide ${
                        isActive
                          ? "text-white"
                          : "text-gray-400 group-hover:text-white"
                      }`}
                    >
                      {link.label}
                    </span>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* BOTTOM LINE */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
    </div>
  </div>
</motion.div>
  );
}