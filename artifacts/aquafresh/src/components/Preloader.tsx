import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 800);
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
        >
          <div className="relative w-24 h-24 mb-8">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                borderRadius: ["40% 60% 60% 40% / 40% 50% 50% 60%", "50% 50% 50% 50% / 50% 50% 50% 50%", "40% 60% 60% 40% / 40% 50% 50% 60%"]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-primary/20 blur-xl"
            />
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 0.9, 1]
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center text-primary"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
            </motion.div>
          </div>
          
          <div className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-sans">
            Purifying
          </div>
          
          <div className="w-64 h-[1px] bg-border relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
          
          <div className="mt-4 font-serif italic text-lg text-foreground">
            {progress}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
