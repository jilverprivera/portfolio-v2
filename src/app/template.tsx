/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function rootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
}
