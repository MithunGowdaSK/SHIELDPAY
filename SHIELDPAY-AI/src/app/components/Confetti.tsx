import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Confetti() {
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; color: string; delay: number }>>([]);

  useEffect(() => {
    const pieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: ["#10b981", "#3b82f6", "#f59e0b", "#ec4899", "#8b5cf6"][Math.floor(Math.random() * 5)],
      delay: Math.random() * 0.5,
    }));
    setConfetti(pieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          initial={{ y: -20, x: `${piece.x}vw`, rotate: 0, opacity: 1 }}
          animate={{
            y: "110vh",
            rotate: 360,
            opacity: 0,
          }}
          transition={{
            duration: 3,
            delay: piece.delay,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            width: "10px",
            height: "10px",
            backgroundColor: piece.color,
            borderRadius: "2px",
          }}
        />
      ))}
    </div>
  );
}
