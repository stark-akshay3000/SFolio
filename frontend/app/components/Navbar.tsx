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
      className="sticky top-0 z-50 px-4 md:px-6 pt-4"
    >
      <div className="relative rounded-2xl overflow-hidden max-w-7xl mx-auto">

        {/* 🌈 ANIMATED BACKGROUND GRADIENT */}
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

        {/* GLASS PANEL WITH ENHANCED EFFECTS */}
        <div className={`relative backdrop-blur-2xl bg-black/40 border rounded-2xl shadow-2xl transition-all duration-500 ${
          scrolled 
            ? 'border-white/20 shadow-[0_0_30px_rgba(168,85,247,0.3)]' 
            : 'border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)]'
        }`}>

          {/* 🎯 SPOTLIGHT (mouse follow) */}
          <motion.div
            className="absolute w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-40"
            style={{
              x: useTransform(smoothX, (x) => x * 0.3),
              y: useTransform(smoothY, (y) => y * 0.3),
              background: 'radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(59,130,246,0.2) 50%, transparent 70%)'
            }}
          />

          {/* SCAN LINE EFFECT */}
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)'
            }}
          />

          {/* NAV CONTENT */}
          <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 relative z-10">

            {/* LOGO WITH GLITCH */}
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative cursor-pointer ${glitch ? 'animate-glitch' : ''}`}
              >
                <h1 className="text-xl md:text-2xl font-black tracking-wider relative">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    AKSHAY
                  </span>
                  <span className="text-white/40 font-mono">.dev</span>
                  
                  {/* Glitch layers */}
                  {glitch && (
                    <>
                      <span className="absolute top-0 left-0 text-cyan-400 opacity-70" style={{ transform: 'translate(-2px, -1px)' }}>
                        AKSHAY.dev
                      </span>
                      <span className="absolute top-0 left-0 text-pink-400 opacity-70" style={{ transform: 'translate(2px, 1px)' }}>
                        AKSHAY.dev
                      </span>
                    </>
                  )}
                </h1>

                {/* Underline decoration */}
                <motion.div 
                  className="h-[2px] bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mt-1"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>

            {/* LINKS - CYBERPUNK STYLE */}
            <div className="flex items-center gap-1 md:gap-2 bg-black/30 p-1 rounded-xl border border-white/10 backdrop-blur-sm">

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
                      className="relative px-3 md:px-5 py-2 rounded-lg cursor-pointer group overflow-hidden"
                      style={{
                        clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)'
                      }}
                    >
                      {/* ACTIVE BACKGROUND */}
                      {isActive && (
                        <motion.div
                          layoutId="nav-pill"
                          className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
                          transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        />
                      )}

                      {/* HOVER GLOW */}
                      {!isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-purple-400/0 to-pink-400/0 group-hover:from-cyan-400/20 group-hover:via-purple-400/20 group-hover:to-pink-400/20 transition-all duration-300" />
                      )}

                      {/* SHINE EFFECT */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)'
                        }}
                      />

                      {/* CONTENT */}
                      <div className="relative z-10 flex items-center gap-2">
                        <span className="text-base md:text-lg">{link.icon}</span>
                        <span
                          className={`text-xs md:text-sm font-bold tracking-wide transition-colors ${
                            isActive
                              ? "text-white"
                              : "text-gray-400 group-hover:text-white"
                          }`}
                        >
                          {link.label}
                        </span>
                      </div>

                      {/* CORNER ACCENTS */}
                      {isActive && (
                        <>
                          <motion.div 
                            className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-cyan-400"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                          />
                          <motion.div 
                            className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-pink-400"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                          />
                        </>
                      )}
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* BOTTOM NEON LINE */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />

        </div>

        {/* CORNER DECORATIONS */}
        <div className="absolute -top-1 -left-1 w-8 h-8 border-l-2 border-t-2 border-cyan-400/50 pointer-events-none" />
        <div className="absolute -top-1 -right-1 w-8 h-8 border-r-2 border-t-2 border-pink-400/50 pointer-events-none" />
      </div>

      <style jsx global>{`
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        
        .animate-glitch {
          animation: glitch 0.3s infinite;
        }
      `}</style>
    </motion.div>
  );
}