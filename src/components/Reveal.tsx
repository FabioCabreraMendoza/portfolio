"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Entrada suave al hacer scroll. Sirve para marcar el orden de lectura:
 * cada bloque aparece cuando el visitante llega a él. Con
 * prefers-reduced-motion el contenido se muestra directamente.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
