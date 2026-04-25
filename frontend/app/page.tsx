"use client";

import Navbar from "../app/components/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
  import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

/* ---------------- TYPES ---------------- */
type HeroProps = { text: string };
type SectionProps = { children: React.ReactNode };
type BlockProps = { title: string; children: React.ReactNode };

/* ---------------- DATA ---------------- */

const roles = [
  "AI Systems Engineer",
  "Full Stack Developer",
  "RAG System Builder",
  "Backend Architect",
  "Designing Scalable LLM Architectures"
];

const images = [
  "image1.jpg","image2.jpg","image3.jpeg","image4.jpeg","image5.jpeg",
  "image6.jpeg","image7.jpeg","image8.jpg","image9.jpg","image10.jpg",
  "image11.jpeg","image12.jpeg",
];

const positions = [
  { top: "10%", left: "22%", rotate: -10 },
  { top: "15%", left: "0%", rotate: -10 },
  { top: "20%", left: "11%", rotate: 12 },
  { top: "50%", left: "60%", rotate: -6 },
  { top: "28%", left: "30%", rotate: 5 },
  { top: "10%", left: "55%", rotate: -8 },
  { top: "55%", left: "0%", rotate: 6 },
  { top: "40%", left: "20%", rotate: -4 },
  { top: "47%", left: "45%", rotate: 10 },
  { top: "50%", left: "15%", rotate: 10 },
  { top: "10%", left: "45%", rotate: 10 },
  { top: "60%", left: "32%", rotate: -50 },
];

/* ---------------- TECH STACK (TICKER STYLE) ---------------- */

function TechStackAnimated() {
  const tech = [
    "Next.js", "React", "TypeScript",
    "FastAPI", "Node.js", "Django",
    "LangChain", "LangGraph", "RAG",
    "OpenAI", "HuggingFace",
    "PostgreSQL", "Pgvector", "MongoDB", "Redis",
    "AWS", "Docker", "Terraform", "Kubernetes", "Git"
  ];

  const loop = [...tech, ...tech];

return (
  <div className="w-full max-w-5xl text-center">
    <h2 className="text-2xl sm:text-3xl font-semibold mb-8 tracking-tight text-white/90">
      Tech Stack
    </h2>

    <div className="relative overflow-hidden rounded-2xl py-8 px-4 border border-white/5 bg-black/60 backdrop-blur-xl">

      {/* subtle top highlight line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* soft moving light (more neutral, less flashy) */}
      <motion.div
        className="pointer-events-none absolute top-0 left-[-40%] w-[50%] h-full bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent blur-2xl"
        animate={{ x: ["0%", "200%"] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* fade edges */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10" />

      {/* ticker */}
      <motion.div
        className="flex gap-6 whitespace-nowrap mt-4"
        animate={{ x: ["0%", "-90%"] }}
        transition={{
          duration: 22,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loop.map((item, i) => (
          <div
            key={i}
            className="
              px-4 py-2 rounded-full text-sm sm:text-base
              border border-white/10
              bg-white/[0.04]
              text-white/80
              hover:text-white
              hover:border-white/20
              hover:bg-white/[0.08]
              transition-all duration-300
            "
          >
            {item}
          </div>
        ))}
      </motion.div>

      {/* inner subtle depth */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none shadow-[inset_0_0_60px_rgba(255,255,255,0.03)]" />
    </div>
  </div>
);
}

/* ---------------- MAIN ---------------- */

export default function Home() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const globalY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const globalScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  useEffect(() => {
    const current = roles[roleIndex];

    if (index < current.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + current[index]);
        setIndex(index + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [index, roleIndex]);

  return (
    <div ref={ref} className="relative bg-black text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black" />

        <motion.div className="absolute inset-0" style={{ y: globalY, scale: globalScale }}>
          <div className="relative w-[140vw] h-[140vh] sm:w-[130vw] sm:h-[130vh] opacity-40 sm:opacity-50 scale-[0.85] sm:scale-100">
            {images.map((img, i) => {
              const p = positions[i % positions.length];

              return (
                <motion.div
                  key={i}
                  className="absolute rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                  style={{ top: p.top, left: p.left, rotate: p.rotate }}
                  animate={{ y: [0, i % 2 === 0 ? -12 : 12, 0] }}
                  transition={{ duration: 6 + i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-[110px] h-[150px] sm:w-[150px] sm:h-[200px] md:w-[200px] md:h-[260px] lg:w-[240px] lg:h-[310px]">
                    <Image
                      src={`/${img}`}
                      alt="bg"
                      fill
                      sizes="(max-width: 640px) 110px, (max-width: 1024px) 200px, 300px"
                      quality={60}
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/25" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <div className="absolute inset-0 shadow-[inset_0_0_220px_rgba(0,0,0,0.95)]" />
      </div>

      {/* CONTENT */}

      <Section>
        <Hero text={text} />
      </Section>

  

<Section>
  <div className="text-center max-w-2xl w-full px-4 sm:px-6 py-10 backdrop-blur-xl bg-white/[0.04] border border-white/10 rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.6)]">

    {/* Title */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-2xl sm:text-3xl font-semibold text-white/90"
    >
      About Me
    </motion.h2>

    {/* Underline */}
    <motion.div
      className="h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mt-3"
      initial={{ width: 0 }}
      whileInView={{ width: 140 }}
      transition={{ duration: 0.8 }}
    />

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mt-6 text-gray-300 text-sm sm:text-base leading-relaxed"
    >
      I design and build scalable AI systems, orchestrated workflows, and production-grade backend architectures 
      with a strong focus on performance, reliability, and real-world impact 
    </motion.p>

    {/* 🔥 Typing Connect Text */}
    <TypingConnect />

    {/* Social Icons */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex justify-center gap-5 mt-6"
    >
      {[
        {
          icon: <FaGithub />,
          link: "https://github.com/stark-akshay3000",
          glow: "hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]",
        },
        {
          icon: <FaLinkedin />,
          link: "https://www.linkedin.com/in/akshay-kumar-7a759027a/",
          glow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]",
        },
        {
          icon: <FaInstagram />,
          link: "https://www.instagram.com/akshay__stark3000",
          glow: "hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]",
        },
        {
          icon: <MdEmail />,
          link: "mailto:akshayku3000@gmail.com",
          glow: "hover:shadow-[0_0_20px_rgba(239,68,68,0.6)]",
        },
        {
          icon: <SiLeetcode />,
          link: "https://leetcode.com/u/Akshay_stark/",
          glow: "hover:shadow-[0_0_20px_rgba(251,191,36,0.6)]",
        },
      ].map((item, i) => (
        <motion.a
          key={i}
          href={item.link}
          target="_blank"
          whileHover={{ scale: 1.15, y: -4 }}
          whileTap={{ scale: 0.9 }}
          className={`
            w-11 h-11 flex items-center justify-center rounded-full
            bg-white/[0.05] border border-white/10
            text-lg text-white/80
            transition-all duration-300
            hover:text-white hover:bg-white/[0.08]
            ${item.glow}
          `}
        >
          {item.icon}
        </motion.a>
      ))}
    </motion.div>
  </div>
</Section>
      {/* UPDATED TECH STACK */}
      <Section>
        <TechStackAnimated />
      </Section>

     <Section>
  <div
    className="relative text-center max-w-xl w-full px-4 sm:px-6 py-12 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl overflow-hidden group"
  >

    {/* 🔥 mouse spotlight */}
    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_60%)]" />

    {/* animated background glow */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent blur-2xl"
      animate={{ x: ["-50%", "50%", "-50%"] }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    />

    {/* Title */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative text-2xl sm:text-3xl font-semibold text-white/90"
    >
      Projects
    </motion.h2>

    {/* underline */}
    <motion.div
      className="relative h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mt-3"
      initial={{ width: 0 }}
      whileInView={{ width: 140 }}
      transition={{ duration: 0.8 }}
    />

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative mt-6 text-gray-300 text-sm sm:text-base"
    >
      Explore production-grade AI systems, and scalable backend architectures.
    </motion.p>

    {/* 🔥 TERMINAL TYPING */}
    <TypingProjects />

    {/* 🚀 CTA BUTTON */}
    <motion.a
      href="/projects"
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.95 }}
      className="
        relative mt-8 inline-flex items-center gap-2
        px-7 py-3 rounded-xl
        bg-gradient-to-r from-white to-gray-200 text-black font-medium
        shadow-lg overflow-hidden
      "
    >
      {/* shine */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />

      {/* idle pulse */}
      <motion.span
        className="absolute inset-0 rounded-xl border border-white/40"
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <span className="relative z-10">explore_projects</span>
      <span className="relative z-10">→</span>
    </motion.a>

    {/* subtle floating */}
    <motion.div
      className="absolute inset-0 pointer-events-none"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />

  </div>
</Section>

      <Section>
        <motion.a
          href="/chat"
          whileHover={{ scale: 1.08 }}
          className="px-6 py-3 bg-white text-black rounded-xl font-medium"
        >
          Talk to my AI →
        </motion.a>
      </Section>

    </div>
  );
}

/* ---------------- HERO ---------------- */
function TypingProjects() {
  const text = "> initializing_project_module...";
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && index < text.length) {
      timeout = setTimeout(() => {
        setDisplay((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 80);
    } 
    else if (!isDeleting && index === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } 
    else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplay((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      }, 80);
    } 
    else if (isDeleting && index === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <p className="mt-6 text-xs text-cyan-400/70 font-mono tracking-wide">
      {display}
      <span className="animate-pulse">|</span>
    </p>
  );
}
function TypingConnect() {
  const text = "establishing_connections...";
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && index < text.length) {
      timeout = setTimeout(() => {
        setDisplay((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 110);
    } 
    else if (!isDeleting && index === text.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1200);
    } 
    else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplay((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      }, 25);
    } 
    else if (isDeleting && index === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <div className="mt-8 flex flex-col items-center gap-3">
      
      {/* typing line */}
      <p className="text-sm text-cyan-400/80 font-mono tracking-wide">
        <span className="text-white/40 mr-2">&gt;</span>
        {display}
        <span className="animate-pulse">|</span>
      </p>

      {/* 🔥 network ping dots */}
      <div className="flex gap-2 mt-1">
        {[0, 1, 2, 3].map((i) => (
          <motion.span
            key={i}
            className="w-2 h-2 rounded-full bg-cyan-400/70"
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.4, 0.8],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
            style={{
              boxShadow: "0 0 8px rgba(34, 211, 238, 0.6)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
function Hero({ text }: HeroProps) {
  return (
    <div className="text-center max-w-2xl w-full px-4 sm:px-6 py-8 sm:py-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
        Hi, I’m <span className="text-purple-400">Akshay</span> 👋
      </h1>

      <div className="mt-4 text-base sm:text-lg md:text-xl text-purple-300 font-mono">
        {text}<span className="animate-pulse">|</span>
      </div>

      <p className="mt-4 sm:mt-6 text-gray-200 text-sm sm:text-base">
        I design and build scalable AI systems, RAG pipelines, and GPU-accelerated backend services.
      </p>

      <motion.div
        className="mt-6 h-[2px] w-16 sm:w-24 bg-purple-500 mx-auto"
        animate={{ width: [20, 120, 20] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </div>
  );
}

/* ---------------- SECTION ---------------- */

function Section({ children }: SectionProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full flex justify-center"
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ---------------- BLOCK ---------------- */

function Block({ title, children }: BlockProps) {
  return (
    <div className="text-center max-w-xl px-2 sm:px-4">
      <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
      <p className="mt-3 sm:mt-4 text-gray-300 text-sm sm:text-base">
        {children}
      </p>
    </div>
  );
}