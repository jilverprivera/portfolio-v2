import { motion } from "framer-motion";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const animation = {
    initial: { y: 24, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -24, opacity: 0 },
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  };

  return <motion.div {...animation}>{children}</motion.div>;
};
export default Layout;
