import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import campusImg from "@/assets/kiit-campus.jpg";
import academicImg from "@/assets/kiit-academic.jpg";
import labImg from "@/assets/kiit-students-lab.jpg";
import gradImg from "@/assets/kiit-graduation.jpg";
import quadImg from "@/assets/kiit-quad.jpg";

const slides = [
  { img: campusImg, eyebrow: "NIRF Rank 36", title: "Top Engineering University", subtitle: "400+ acre world-class campus" },
  { img: academicImg, eyebrow: "Academic Excellence", title: "NAAC A++ Accredited", subtitle: "Deemed University since 2004" },
  { img: labImg, eyebrow: "Future-Ready Labs", title: "Cutting-Edge Tech Facilities", subtitle: "AI/ML, CSE & Data Science focus" },
  { img: gradImg, eyebrow: "₹53 LPA Highest Package", title: "700+ Recruiting Companies", subtitle: "Amazon, Deloitte, Cognizant & more" },
  { img: quadImg, eyebrow: "40,000+ Students", title: "Diverse Global Community", subtitle: "Students from 65+ countries" },
];

const SLIDE_DURATION = 4000;

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Crossfade image stack */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide.img}
            alt={slide.title}
            width={1920}
            height={1280}
            loading={i === 0 ? "eager" : "lazy"}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: current === i ? 1 : 0,
              zIndex: current === i ? 2 : 1,
            }}
          />
        ))}
        <div className="absolute inset-0 z-10 bg-[image:var(--gradient-overlay)]" />
        <div className="absolute inset-0 z-10 bg-[image:var(--gradient-radial)] mix-blend-overlay opacity-70" />
      </div>

      {/* Caption overlay removed to avoid overlapping CTA buttons */}

      {/* Slide indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="h-1.5 rounded-full bg-primary-foreground/30 overflow-hidden transition-all duration-500"
            style={{ width: current === i ? 32 : 12 }}
          >
            {current === i && (
              <motion.div
                key={`bar-${current}`}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                className="h-full bg-accent-glow"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
