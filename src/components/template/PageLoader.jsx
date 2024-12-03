import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PageLoader = () => {
  const text = 'LOADING';
  const [vari,setVari] = useState(null);

  // Split the text into individual characters
  const characters = text.split('');

  // Animation for individual characters
  const characterVariants = {
    initial: { opacity: 0 },
    animate: (i) => ({
      opacity: 1,
      transition: {
        repeat: Infinity,  // Repeat forever
        repeatType: 'reverse',  // Reverse the animation (fade out then fade in)
        delay: i * 0.2, // Staggered delay for each character
        duration: 1,  // Duration of fade-in and fade-out
      },
    }),
  };

  // Animation for the whole word
  const wordVariants = {
    initial: { opacity: 1, y: 0 },
    animate: {
      opacity: 0,
      y: -50, // Move upward
      transition: { delay: characters.length * 0.1 + 0.1, duration: 1 },
    },
  };

  return (
    <motion.div
      className="loading-container"
      variants={vari}
      initial="initial"
      animate="animate"
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          className=''
          variants={characterVariants}
          initial="initial"
          animate="animate"
          custom={index} // Pass index for delay calculation
        >
          {char}
        </motion.span>
      ))}
      {/* <button onClick={()=>setVari(wordVariants)}> Vari</button> */}
    </motion.div>
  );
};

export default PageLoader;
