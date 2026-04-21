"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ChatInput({ onSend }: any) {
  const [input, setInput] = useState("");
  const [focused, setFocused] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="relative mt-6"
    >
      {/* 🌈 outer glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 blur-2xl opacity-60 rounded-3xl" />

      {/* 🧊 main container */}
      <div
        className={`
          relative flex items-center gap-3 px-3 py-2 rounded-3xl
          backdrop-blur-2xl border transition-all duration-300
          ${focused ? "border-purple-400/50 shadow-[0_0_20px_rgba(168,85,247,0.3)]" : "border-white/10"}
          bg-white/5
        `}
      >
        {/* ✍️ input */}
        <input
          className="flex-1 bg-transparent px-3 py-3 outline-none text-white placeholder-gray-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything about Akshay..."
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />

        {/* ⚡ typing pulse indicator */}
        {input && (
          <motion.div
            className="w-2 h-2 rounded-full bg-purple-400"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
        )}

        {/* 🚀 send button */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleSend}
          className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-white text-black font-medium overflow-hidden"
        >
          {/* button glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-400/30 to-blue-400/30 opacity-0 hover:opacity-100 transition" />

          {/* icon */}
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 2 }}
            className="relative z-10 text-lg"
          >
            ➤
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  );
}