import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Reveal({ children, delay = 0.1, y = 18, as = 'div', className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </MotionTag>
  );
}
