import React from "react";
import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index) => {
  const totalSteps = 5;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(5)].map((_, index) => {
        return (
          <motion.div
            key={index}
            className="h-full w-full bg-primary/70 relative"
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.1,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
          />
        );
      })}
    </>
  );
};

export default Stairs;
