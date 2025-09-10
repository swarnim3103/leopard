import { motion} from "framer-motion";
import { useState, useEffect } from "react";
import print from "../assets/load/print.png";

export function Loading() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        } 
        return prev + 1;
      });
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0D0D0D]">

      <div className="text-center mb-6 top-20">
        <motion.div 
          className="text-white text-2xl font-bold mb-4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          {progress}%
        </motion.div>
        
        
        <motion.p
          className="text-gray-400 text-sm mt-12 font-light"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {progress < 25 && "Initializing leopard tracking system..."}
          {progress >= 25 && progress < 50 && "Loading terrain data..."}
          {progress >= 50 && progress < 75 && "Calibrating night vision..."}
          {progress >= 75 && progress < 95 && "Final preparations..."}
          {progress >= 95 && "Ready to hunt!"}
        </motion.p>
      </div>

      <div className="absolute bottom-20 flex space-x-4">
        {[0, 1, 2].map((i) => (
          <motion.img
           src={print}
            key={i}
            className="w-10 h-10"
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              delay: i * 0.3 
            }}
          />
        ))}
      </div>
    </div>
  );
}
