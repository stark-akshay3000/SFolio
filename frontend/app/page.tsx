"use client";

import Navbar from "../app/components/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const roles = [
  "AI Engineer",
  "Full Stack Developer",
  "RAG System Builder",
  "Backend Architect",
];

const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpeg",
  "image4.jpeg",
  "image5.jpeg",
    "image6.jpeg",
      "image7.jpeg",


  "image8.jpg",
  "image9.jpg",
  "image10.jpg",
  "image11.jpeg",
  "image12.jpeg",
  // "image2.jpg",
  // "image3.jpeg",
  // "image7.jpeg",
  // "image4.jpeg",
  // "image5.jpeg",
  // "image6.jpeg",
  //   "image8.jpg",
  //     "image9.jpg",


  
];

export default function Home() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);

  const ref = useRef(null);

  /* ---------------- scroll system ---------------- */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const globalY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const globalScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  /* ---------------- typing animation ---------------- */
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
const positions = [
  { top: "10%", left: "20%", rotate: -10, size: 200 },
  { top: "15%", right: "50%", rotate: -10, size: 280 },
  { top: "20%", left: "11%", rotate: 12, size: 200 },
  { top: "50%", left: "60%", rotate: -6, size: 290 },
  { top: "25%", left: "30%", rotate: 5, size: 220 },
  { top: "10%", left: "55%", rotate: -8, size: 250 },
  { top: "55%", right: "60%", rotate: 6, size: 220 },
  { top: "40%", left: "20%", rotate: -4, size: 260 },
  { top: "47%", left: "45%", rotate: 10, size: 300 },
    { top: "60%", left: "15%", rotate: 10, size: 210 },
        { top: "10%", left: "45%", rotate: 10, size: 210 },
                { top: "60%", left: "32%", rotate: -50, size: 210 }



];

  return (
    <div ref={ref} className="relative bg-black text-white overflow-hidden">

      {/* 🌌 COLLAGE BACKGROUND (IMPROVED) */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-black">

        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black" />

        {/* scroll-reactive wrapper */}
        <motion.div
          className="absolute inset-0"
          style={{
            y: globalY,
            scale: globalScale,
          }}
        >

          <div className="relative w-[130vw] h-[130vh] opacity-50">

            {images.map((img, i) => {

              const p = positions[i % positions.length];

              return (
                <motion.div
                  key={i}
                  className="absolute rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                  style={{
                    top: p.top,
                    left: p.left,
                    width: p.size,
                    height: p.size * 1.3,
                    rotate: p.rotate,
                  }}
                  animate={{
                    y: [0, i % 2 === 0 ? -12 : 12, 0],
                  }}
                  transition={{
                    duration: 6 + i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <img
                    src={img}
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: i % 2 === 0 ? "50% 20%" : "50% 50%",
                    }}
                  />

                  <div className="absolute inset-0 bg-black/25" />
                </motion.div>
              );
            })}

          </div>
        </motion.div>

        {/* cinematic vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_220px_rgba(0,0,0,0.95)]" />
      </div>

      {/* ---------------- MAIN CONTENT ---------------- */}

      <Section>
        <Hero text={text} />
      </Section>

      <Section>
        <Block title="About Me">
          I build scalable AI systems, RAG pipelines, and production-grade backend architectures
          with GPU acceleration and distributed systems.
        </Block>
      </Section>

      <Section>
        <Block title="Tech Stack">
          Next.js · FastAPI · LLMs · RAG · AWS · Docker · ONNX · GPU Systems
        </Block>
      </Section>

      <Section>
        <Block title="Projects">
          AI chat systems, vector search pipelines, GPU inference services,
          and distributed backend systems.
        </Block>
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

function Hero({ text }: any) {
  return (
    <div className="text-center max-w-2xl px-6 py-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl">

      <h1 className="text-5xl md:text-6xl font-bold">
        Hi, I’m <span className="text-purple-400">Akshay</span> 👋
      </h1>

      <div className="mt-4 text-xl text-purple-300 font-mono">
        {text}
        <span className="animate-pulse">|</span>
      </div>

      <p className="mt-6 text-gray-200">
        I design and build scalable AI systems, RAG pipelines, and GPU-accelerated backend services.
      </p>

      <motion.div
        className="mt-6 h-[2px] w-24 bg-purple-500 mx-auto"
        animate={{ width: [20, 120, 20] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </div>
  );
}

/* ---------------- SECTION ---------------- */

function Section({ children }: any) {
  return (
    <div className="h-screen flex items-center justify-center px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 60, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ---------------- BLOCK ---------------- */

function Block({ title, children }: any) {
  return (
    <div className="text-center max-w-xl">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="mt-4 text-gray-300">{children}</p>
    </div>
  );
}