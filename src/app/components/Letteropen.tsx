"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FullScreenLetter() {
  const [open, setOpen] = useState(false);

  // Trigger animation once after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 5000); // 5s delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
      <motion.div
        initial={{ width: "18rem", height: "11rem" }} // envelope size
        animate={{
          width: open ? "100vw" : "18rem",
          height: open ? "100vh" : "11rem",
          borderRadius: open ? "0px" : "0.5rem",
        }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="relative bg-white border border-gray-400 shadow-xl overflow-hidden flex items-center justify-center"
      >
        {/* Flap */}
        <motion.div
          initial={{ rotateX: 0 }}
          animate={{ rotateX: open ? -180 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-1/2 bg-blue-300 border-b border-blue-400 origin-top"
          style={{ transformStyle: "preserve-3d" }}
        />

        {/* FRONT text ("Ishan") */}
        <AnimatePresence>
          {!open && (
            <motion.p
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold font-[cursive] text-gray-800 z-10"
            >
              Ishan
            </motion.p>
          )}
        </AnimatePresence>

        {/* Inside content */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
            >
              <p className="text-6xl font-semibold text-gray-700 font-[cursive]">
                Dear Ishan,
              </p>
              <p className="pt-12 text-3xl font-medium text-gray-700 font-[cursive]">
                Thank you for your letter. I have your response waiting for you.{" "}
                <span>
                  <a
                    href="/jacobtube"
                    className="text-blue-600 hover:underline"
                  >
                    Click me.
                  </a>
                </span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
