"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function MessageBubble({ role, text, index, totalMessages }: any) {
  const isUser = role === "user";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Stagger animation based on message index
  const containerVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: index * 0.05,
      },
    },
  };

  const shimmerVariants = {
    initial: { x: "-100%" },
    animate: {
      x: "100%",
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className={`flex w-full my-4 ${
        isUser ? "justify-end" : "justify-start"
      }`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative max-w-[75%] group"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {/* User message */}
        {isUser && (
          <motion.div
            className="relative px-5 py-3.5 rounded-[22px] rounded-br-md overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            }}
          >
            {/* Shimmer overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              variants={shimmerVariants}
              initial="initial"
              animate={isHovered ? "animate" : "initial"}
            />

            {/* Glass reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-50" />

            {/* Message text */}
            <div className="relative z-10 text-white text-[15px] leading-relaxed font-light">
              {text}
            </div>

            {/* Glow effect */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-blue-500 rounded-[22px] opacity-0 blur-xl -z-10"
              animate={{
                opacity: isHovered ? 0.4 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}

        {/* AI message */}
        {!isUser && (
          <div className="relative">
            {/* Avatar */}
            <motion.div
              className="absolute -left-12 top-0 w-9 h-9 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 backdrop-blur-xl flex items-center justify-center overflow-hidden"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 260, 
                damping: 20,
                delay: index * 0.05 + 0.2,
              }}
            >
              <motion.span
                className="text-base"
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                🤖
              </motion.span>

              {/* Avatar glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 opacity-0 blur-md"
                animate={{
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Message bubble */}
            <motion.div
              className="relative px-5 py-3.5 rounded-[22px] rounded-bl-md overflow-hidden backdrop-blur-2xl border border-white/[0.08]"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
              }}
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 opacity-0"
                animate={{
                  opacity: isHovered ? 0.1 : 0,
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-blue-500/30 to-cyan-500/30"
                  animate={{
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>

              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                variants={shimmerVariants}
                initial="initial"
                animate={isHovered ? "animate" : "initial"}
              />

              {/* Top highlight */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {/* Message text with typing animation */}
              <motion.div 
                className="relative z-10 text-gray-100 text-[15px] leading-relaxed font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {text.split('').map((char: string, i: number) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.01 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>

              {/* Glow effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-[22px] opacity-0 blur-xl -z-10"
                animate={{
                  opacity: isHovered ? 0.6 : 0,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Corner accent */}
              <motion.div
                className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-purple-400 to-blue-400"
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Floating particles around AI message */}
            {isHovered && (
              <>
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-gradient-to-br from-purple-400 to-blue-400"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      y: [0, -20],
                      x: [(Math.random() - 0.5) * 20],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.1,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />
                ))}
              </>
            )}
          </div>
        )}

        {/* Message timestamp */}
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: isHovered ? 0.5 : 0, y: isHovered ? 0 : -5 }}
          transition={{ duration: 0.2 }}
          className={`text-[11px] text-gray-500 mt-1.5 font-mono ${
            isUser ? "text-right mr-1" : "text-left ml-1"
          }`}
        >
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}