import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Layout = ({ children }) => {
  const location = useLocation().pathname;
  return (
    <AnimatePresence>
      <div key={location}>
        <motion.div
          className="h-screen w-screen fixed top-0 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.5, duration: 0.2, ease: "easeInOut" },
          }}
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default Layout;
