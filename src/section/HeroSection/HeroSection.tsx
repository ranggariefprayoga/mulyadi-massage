"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import LayoutHeroSection from "@/layout/HeroSectionLayout";

export default function HeroSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <LayoutHeroSection>
      <>
        <section ref={ref} className="min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-12 lg:px-24">
          <motion.h1 className="text-3xl md:text-4xl font-bold leading-relaxed mb-2" variants={fadeUp} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} transition={{ duration: 0.6, delay: 0.2 }}>
            Home <span className="bg-green-100 text-green-700 px-2 rounded-md">Masssage</span>, Solusi <span className="bg-green-100 text-green-700 px-2 rounded-md">Badan Pegal</span> dan
            <span className="bg-green-100 text-green-700 px-2 rounded-md">Tidak Nyaman</span>
          </motion.h1>

          <motion.div className="mb-4" variants={fadeUp} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} transition={{ duration: 0.6, delay: 0.3 }}>
            <svg viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto w-75 h-5">
              <path d="M5 15 C40 0, 160 0, 195 15" stroke="#88A584" strokeWidth="7" strokeLinecap="round" />
            </svg>
          </motion.div>

          <motion.p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mb-8" variants={fadeUp} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} transition={{ duration: 0.6, delay: 0.4 }}>
            Untuk Pria dan Wanita — Tersedia di Jakarta Selatan, Jakarta Pusat, Jakarta Barat, dan Tangerang Selatan.
          </motion.p>
        </section>
      </>
    </LayoutHeroSection>
  );
}
