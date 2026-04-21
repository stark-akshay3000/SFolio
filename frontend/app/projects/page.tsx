"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* ---------------- FEATURED SYSTEMS ---------------- */

const featured = [
  {
    title: "DXBot (AI Communication Platform)",
    problem: "Fragmented communication with no AI-assisted workflows.",
    solution:
      "Built multi-modal AI chat system with WebSockets, group chat, document ingestion, and RAG pipeline.",
    impact:
      "Improved collaboration and response accuracy with fallback retrieval and role-aware context.",
    tech: ["FastAPI", "Next.js", "LangGraph", "RAG", "PgVector"],
    metrics: ["1000+ users", "Realtime chat", "RAG enabled"],
    live: true,
  },
  {
    title: "Form Express (AI Automation)",
    problem: "Manual subsidy form filling was slow and error-prone.",
    solution:
      "Automated crawling + extraction + validation pipeline using Playwright and AI reasoning.",
    impact: "Reduced manual effort by 90% and improved data accuracy.",
    tech: ["Playwright", "FastAPI", "OpenAI", "PostgreSQL"],
    metrics: ["90% automation", "AI extraction"],
    live: false,
  },
  {
    title: "Vector Listing (GPU Image API)",
    problem: "Image pipelines lacked performance and scalability.",
    solution:
      "Built GPU-accelerated ONNX pipeline for background removal and enhancement.",
    impact: "Improved inference speed and output quality in production.",
    tech: ["FastAPI", "ONNX", "CUDA", "AWS", "Terraform"],
    metrics: ["GPU inference", "High throughput"],
    live: true,
  },
  {
    title: "IIIT Jabalpur ERP – Hostel Management Module",
    problem:
      "ERP lacked hostel management system causing manual inefficiency.",
    solution:
      "Built Django-based hostel module for room allocation, student records, and workflows.",
    impact:
      "Streamlined operations for 1000+ students and reduced admin workload.",
    tech: ["Django", "PostgreSQL", "Semantic UI", "Python", "REST APIs"],
    metrics: ["1000+ students", "ERP integration"],
    live: true,
  },
];

/* ---------------- PROJECTS ---------------- */

const projects = [
  {
    title: "Anonymous Messages",
    desc: "Anonymous messaging platform with AI suggestions.",
    tech: ["Next.js", "MongoDB", "JWT", "OpenAI"],
  },
  {
    title: "EdithAI Podcast",
    desc: "AI-powered podcast generator with TTS.",
    tech: ["Next.js", "TTS", "DALL-E", "Convex"],
  },
  {
    title: "Elicit AI",
    desc: "AI prompt sharing platform with auth and search.",
    tech: ["Next.js", "NextAuth", "MongoDB"],
  },
  {
    title: "HaloSynopsis",
    desc: "AI article summarizer for fast insights.",
    tech: ["Next.js", "RapidAPI"],
  },
];

/* ---------------- ACHIEVEMENTS ---------------- */

const achievements = [
  {
    title: "🥈 University of Tokyo Hackathon",
    desc: "2nd place for Low-Res OCR system.",
  },
  {
    title: "💻 Competitive Programming",
    desc: "600+ problems solved across platforms.",
  },
];

/* ---------------- MAIN ---------------- */

export default function Projects() {
  const [text, setText] = useState("");
  const [mode, setMode] = useState("system");
  const [glitch, setGlitch] = useState(false);

  const fullText = "PROJECTS_ARCHIVE//";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);

    // Random glitch effect
    const glitchInterval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(glitchInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      
      {/* 🌸 ANIME BACKGROUND SYSTEM */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Cyberpunk Grid */}
        <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(to_right,#ff00ff_1px,transparent_1px),linear-gradient(to_bottom,#00ffff_1px,transparent_1px)] bg-[size:80px_80px] sm:bg-[size:80px_80px]" 
             style={{ 
               transform: 'perspective(500px) rotateX(60deg) translateZ(-100px)',
               transformOrigin: 'center bottom'
             }} 
        />

        {/* Neon Gradient Orbs */}
        <div className="absolute top-20 -left-40 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-[80px] sm:blur-[120px] opacity-30 animate-pulse" />
        <div className="absolute bottom-20 -right-40 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-[80px] sm:blur-[120px] opacity-30 animate-pulse" 
             style={{ animationDelay: '1s' }} 
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-gradient-to-r from-purple-500 to-pink-600 rounded-full blur-[100px] sm:blur-[150px] opacity-20" />

        {/* Scan Lines */}
        <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(0deg,#000_0px,#fff_1px,#000_2px)]" />

        {/* Floating Sakura/Tech Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ 
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0 
              }}
              animate={{
                top: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                left: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                opacity: [0, 0.6, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {i % 3 === 0 ? (
                // Tech symbols
                <span className="text-cyan-400 text-xs font-mono">{"{ }"}</span>
                
              ) : i % 3 === 1 ? (
                <span className="text-pink-400 text-xs">🤖</span>
              ) :
              (
                // Sakura petal
                <span className="text-pink-300 text-sm">404</span>
                
              )}
            </motion.div>
          ))}
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-0 left-0 w-16 h-16 sm:w-32 sm:h-32 border-l-2 sm:border-l-4 border-t-2 sm:border-t-4 border-cyan-400 opacity-50" />
        <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 border-r-2 sm:border-r-4 border-t-2 sm:border-t-4 border-pink-400 opacity-50" />
        <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-32 sm:h-32 border-l-2 sm:border-l-4 border-b-2 sm:border-b-4 border-purple-400 opacity-50" />
        <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-32 sm:h-32 border-r-2 sm:border-r-4 border-b-2 sm:border-b-4 border-cyan-400 opacity-50" />

      </div>

      {/* ---------------- HEADER - FULLY RESPONSIVE ---------------- */}
      <div className="text-center py-12 sm:py-16 md:py-20 px-4 relative z-10">
        <motion.div 
          className={`relative inline-block ${glitch ? 'animate-glitch' : ''}`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-wider relative px-2">
            <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent break-words">
              {text}
            </span>
            <span className="animate-pulse text-pink-400">█</span>
            
            {/* Glitch layers */}
            {glitch && (
              <>
                <span className="absolute top-0 left-0 text-cyan-400 opacity-70 px-2" style={{ transform: 'translate(-2px, -2px)' }}>
                  {text}█
                </span>
                <span className="absolute top-0 left-0 text-pink-400 opacity-70 px-2" style={{ transform: 'translate(2px, 2px)' }}>
                  {text}█
                </span>
              </>
            )}
          </h1>
        </motion.div>

        <motion.p 
          className="mt-4 sm:mt-6 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-light tracking-wide px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-cyan-400 font-mono">&gt;&gt;</span> Production AI systems, scalable architectures, and experimental products <span className="text-pink-400 font-mono">&lt;&lt;</span>
        </motion.p>

        {/* Mode Switch - Responsive */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-6 sm:mt-8 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          {["system", "impact", "tech"].map((m, i) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`relative px-4 sm:px-6 py-2 font-bold text-xs sm:text-sm tracking-widest overflow-hidden group transition-all duration-300 ${
                mode === m 
                  ? "text-black" 
                  : "text-white"
              }`}
              style={{
                clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)'
              }}
            >
              {/* Background */}
              <span className={`absolute inset-0 transition-all duration-300 ${
                mode === m
                  ? i === 0 ? "bg-gradient-to-r from-cyan-400 to-cyan-500" 
                    : i === 1 ? "bg-gradient-to-r from-pink-400 to-pink-500"
                    : "bg-gradient-to-r from-purple-400 to-purple-500"
                  : "bg-white/5 group-hover:bg-white/10"
              }`} />
              
              {/* Shine effect */}
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              <span className="relative z-10">{m.toUpperCase()}</span>
            </button>
          ))}
        </motion.div>
      </div>

      {/* ---------------- FEATURED ---------------- */}
      <SectionTitle title="Featured Systems" icon="⚡" />

      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-6 mb-16 sm:mb-20 relative z-10 max-w-7xl mx-auto">
        {featured.map((p, i) => (
          <Card key={i} delay={i * 0.1}>
            <div className="flex justify-between items-start mb-4 gap-2">
              <div className="flex-1">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                  {p.title}
                </h2>
                <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-cyan-400 to-transparent mt-2" />
              </div>
              {p.live && <LiveBadge />}
            </div>

            {mode !== "tech" && (
              <>
                <Info label="[ PROBLEM ]" text={p.problem} color="text-pink-400" />
                <Info label="[ SOLUTION ]" text={p.solution} color="text-cyan-400" />
                <Info label="[ IMPACT ]" text={p.impact} color="text-purple-400" />
              </>
            )}

            {mode === "tech" && <Tech tech={p.tech} />}

            <div className="flex flex-wrap gap-2 mt-4">
              {p.metrics.map((m) => (
                <span
                  key={m}
                  className="text-[10px] px-2 sm:px-3 py-1 bg-gradient-to-r from-green-400/20 to-emerald-400/20 text-green-300 rounded-full border border-green-400/30 font-mono"
                >
                  ✓ {m}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* ---------------- PROJECTS ---------------- */}
      <SectionTitle title="Other Projects" icon="🔮" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-6 mb-16 sm:mb-20 relative z-10 max-w-7xl mx-auto">
        {projects.map((p, i) => (
          <Card key={i} delay={i * 0.05}>
            <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {p.title}
            </h3>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">{p.desc}</p>
            <Tech tech={p.tech} />
          </Card>
        ))}
      </div>

      {/* ---------------- ACHIEVEMENTS ---------------- */}
      <SectionTitle title="Achievements" icon="👑" />

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-6 pb-20 sm:pb-32 relative z-10 max-w-7xl mx-auto">
        {achievements.map((a, i) => (
          <Card key={i} delay={i * 0.1}>
            <h3 className="text-xl sm:text-2xl font-bold mb-3">{a.title}</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{a.desc}</p>
          </Card>
        ))}
      </div>

      {/* Footer accent */}
      <div className="relative z-10 text-center pb-6 sm:pb-8 font-mono text-xs text-gray-600">
        <span className="text-cyan-400">// END_OF_FILE</span>
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
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function SectionTitle({ title, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="px-4 sm:px-6 mb-8 sm:mb-10 relative z-10 max-w-7xl mx-auto"
    >
      <div className="flex items-center gap-2 sm:gap-4">
        <span className="text-2xl sm:text-3xl md:text-4xl">{icon}</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
        <div className="flex-1 h-[1px] sm:h-[2px] bg-gradient-to-r from-purple-400 via-pink-400 to-transparent" />
      </div>
    </motion.div>
  );
}

function Card({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ 
        y: -8,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      className="group relative p-4 sm:p-6 rounded-lg overflow-hidden cursor-pointer"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      {/* Animated border */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500 opacity-50 blur-xl" />
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 border-l-2 border-t-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-12 sm:h-12 border-r-2 border-b-2 border-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Scan line effect */}
      <motion.div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        initial={{ top: '-100%' }}
        whileHover={{ 
          top: '100%',
          transition: { duration: 1, repeat: Infinity }
        }}
      >
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
      </motion.div>

      <div className="relative z-10 space-y-3 sm:space-y-4">{children}</div>
    </motion.div>
  );
}

function Info({ label, text, color }) {
  return (
    <div className="space-y-1">
      <span className={`${color} text-[10px] sm:text-xs font-bold font-mono tracking-wider`}>{label}</span>
      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed pl-2 sm:pl-3 border-l-2 border-gray-700">{text}</p>
    </div>
  );
}

function Tech({ tech }) {
  return (
    <div className="flex flex-wrap gap-2 mt-3 sm:mt-4">
      {tech.map((t, i) => (
        <motion.span
          key={t}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.05 }}
          whileHover={{ scale: 1.1 }}
          className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-md font-mono bg-gradient-to-r from-white/10 to-white/5 text-gray-300 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
        >
          {t}
        </motion.span>
      ))}
    </div>
  );
}

function LiveBadge() {
  return (
    <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 rounded-full bg-green-400/10 border border-green-400/30 flex-shrink-0">
      <motion.span 
        className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-400"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [1, 0.7, 1]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <span className="text-[10px] sm:text-xs font-bold text-green-400 font-mono">ONLINE</span>
    </div>
  );
}