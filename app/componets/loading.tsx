import { motion } from "framer-motion";
export function Loading() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-[#0D0D0D]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className="w-40 h-40"
        >
          {/* Four small pads */}
          {[
            [-40, -40],
            [40, -40],
            [-60, 20],
            [60, 20],
          ].map(([x, y], i) => (
            <motion.circle
              key={i}
              cx={100 + x}
              cy={80 + y}
              r="20"
              fill="#444"
              animate={{ fill: ["#444", "#f5a623", "#444"] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}

          {/* Big central pad */}
          <motion.ellipse
            cx="100"
            cy="120"
            rx="50"
            ry="35"
            fill="#444"
            animate={{ fill: ["#444", "#f5a623", "#444"] }}
            transition={{ duration: 1, repeat: Infinity, delay: 1.2 }}
          />
        </svg>
      </div>
    </>
  );
}
