// components/AnimationWrapper.tsx
'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

// Bileşenin alacağı propların tiplerini tanımlıyoruz.
interface AnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  // Animasyon için bir gecikme süresi (saniye cinsinden)
  delay?: number;
}

// Framer Motion için animasyon varyantlarını tanımlıyoruz.
const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/**
 * Bu bileşen, içerisine aldığı çocuk elemanları (children)
 * basit bir "fade-in" ve "slide-up" efektiyle sarmalar.
 */
const AnimationWrapper = ({
  children,
  className,
  delay = 0,
}: AnimationWrapperProps) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden" // Başlangıç durumu
      animate="visible" // Animasyonun biteceği durum
      transition={{ duration: 0.5, delay }} // Animasyon süresi ve gecikmesi
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Bileşeni varsayılan olarak dışa aktarıyoruz.
export default AnimationWrapper;

