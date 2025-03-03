import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypingAnimation = () => {
  const text = "Hi there👋 I'm Ugochukwu - Full Stack Web Developer";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true); // Track typing status

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 150); // Typing speed
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false); // Stop blinking when typing is done
    }
  }, [index, text]);

  return (
    <div className="d-flex align-items-center fs-4 fw-bold">
      <span>{displayedText}</span>
      <motion.span
        className="ms-1"
        animate={isTyping ? { opacity: [0, 1] } : { opacity: 1 }} // Stop blinking when done
        transition={{ repeat: isTyping ? Infinity : 0, duration: 0.5 }}
      >
        |
      </motion.span>
    </div>
  );
};

export default TypingAnimation;
