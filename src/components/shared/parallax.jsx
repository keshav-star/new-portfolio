import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Parallax = () => {
  const [scrollY, setScrollY] = useState(0);

  // Update scroll position
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ height: '150vh', overflow: 'hidden' }}>
      <motion.div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        animate={{ y: scrollY * 0.3 }} // Parallax effect (move at 30% of scroll speed)
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <h1 style={{ fontSize: '3rem', color: '#333' }}>Parallax Effect</h1>
      </motion.div>

      <motion.div
        style={{
          position: 'absolute',
          top: '60%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        animate={{ y: scrollY * 0.6 }} // Parallax effect (move at 60% of scroll speed)
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <h2 style={{ fontSize: '2rem', color: '#555' }}>Scroll to see the effect!</h2>
      </motion.div>

      {/* Other content to fill the page and enable scrolling */}
      <div style={{ height: '150vh' }} />
    </div>
  );
};

export default Parallax;
