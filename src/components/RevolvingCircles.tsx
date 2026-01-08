import { motion } from "framer-motion";

const RevolvingCircles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Optimized: Reduced from 25 to 8 floating circles */}
      {[...Array(8)].map((_, i) => {
        const size = 4 + Math.random() * 4; // Slightly larger for better visibility
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const moveX = (Math.random() - 0.5) * 100; // Reduced movement range
        const moveY = (Math.random() - 0.5) * 100;
        const duration = 12 + Math.random() * 8; // Slower animations
        const delay = i * 2; // Staggered delays instead of random

        const colorVariants = [
          'bg-gic-violet/30',
          'bg-primary/25',
          'bg-gic-lavender/20',
        ];
        const colorClass = colorVariants[i % colorVariants.length];

        return (
          <motion.div
            key={`global-floating-circle-${i}`}
            className={`absolute ${colorClass} rounded-full`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${startX}%`,
              top: `${startY}%`,
              willChange: 'transform, opacity',
            }}
            animate={{
              x: [0, moveX, 0],
              y: [0, moveY, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: 'linear',
            }}
          />
        );
      })}

      {/* Optimized: Reduced from 15 to 6 smaller circles */}
      {[...Array(6)].map((_, i) => {
        const size = 2 + Math.random() * 2;
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const moveX = (Math.random() - 0.5) * 80;
        const moveY = (Math.random() - 0.5) * 80;
        const duration = 8 + Math.random() * 6;
        const delay = i * 1.5 + 1;

        return (
          <motion.div
            key={`global-small-circle-${i}`}
            className="absolute rounded-full bg-gic-violet/20"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${startX}%`,
              top: `${startY}%`,
              willChange: 'transform, opacity',
            }}
            animate={{
              x: [0, moveX, 0],
              y: [0, moveY, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: 'linear',
            }}
          />
        );
      })}

      {/* Optimized: Reduced from 8 to 4 revolving circles with simpler animations */}
      {[...Array(4)].map((_, i) => {
        const centerX = 25 + (i % 2) * 50; // 25% or 75%
        const centerY = 25 + Math.floor(i / 2) * 50; // 25% or 75%
        const radius = 120 + (i % 2) * 60; // 120px or 180px
        const duration = 25 + (i % 2) * 15; // 25s or 40s
        const size = 3 + (i % 2) * 2; // 3px or 5px

        return (
          <motion.div
            key={`global-revolving-circle-${i}`}
            className="absolute rounded-full bg-gic-violet/25"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${centerX}%`,
              top: `${centerY}%`,
              willChange: 'transform',
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <div
              className="absolute rounded-full bg-gic-violet/40"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${radius}px`,
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default RevolvingCircles;

