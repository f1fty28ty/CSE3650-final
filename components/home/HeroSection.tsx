'use client';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi, I'm [Your Name]. I build things for the web.";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-[60vh] flex flex-col justify-center">
      <h1 className="text-5xl font-bold mb-6">
        <span className="text-gray-800">{displayText}</span>
        <span className="animate-blink">|</span>
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl">
        I'm a software developer specializing in building exceptional digital experiences.
      </p>
    </div>
  );
} 