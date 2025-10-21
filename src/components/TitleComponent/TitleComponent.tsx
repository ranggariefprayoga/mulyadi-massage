"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

interface TitleComponentProps {
  subTitle?: string;
  title: string;
  textAlign?: "center" | "start";
  subTitleColor?: string;
  titleColor?: string;
}

const TitleComponent = ({ subTitle, title, textAlign = "start", subTitleColor = "text-[#88A584]", titleColor = "text-[#192A56]" }: TitleComponentProps) => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const alignmentClass = textAlign === "center" ? "text-center items-center" : "text-start items-start";

  return (
    <div ref={ref} className={`w-full px-8 md:px-28 text-[#192A56] flex flex-col gap-2 ${alignmentClass}`}>
      <motion.h3 variants={titleVariants} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }} className={`text-3xl md:text-4xl font-bold mt-8  ${titleColor}`}>
        {title}
      </motion.h3>
      {subTitle && (
        <motion.h3 variants={titleVariants} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} transition={{ duration: 0.5, ease: "easeInOut" }} className={`text-lg md:text-xl  font-bold tracking-widest mb-8 ${subTitleColor}`}>
          {subTitle}
        </motion.h3>
      )}
    </div>
  );
};

export default TitleComponent;
