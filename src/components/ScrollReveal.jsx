import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';

const ScrollReveal = forwardRef(({ children }, ref) => {
  const sectionRef = useRef(null);

  useImperativeHandle(ref, () => ({
    init
  }));

  const init = () => {
    const elements = sectionRef.current.querySelectorAll('[class*=reveal-]');

    const observer = new IntersectionObserver((entries, observerSelf) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observerSelf.unobserve(entry.target); // only reveal once
        }
      });
    }, {
      threshold: 0.1
    });

    elements.forEach(el => {
      observer.observe(el);
    });
  };

  useEffect(() => {
    if (sectionRef.current) {
      init();
    }
    // Clean up observers on unmount (optional but good practice)
    return () => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll('[class*=reveal-]');
        elements.forEach(el => el.classList.remove('is-revealed'));
      }
    };
  }, []);

  return (
    <div ref={sectionRef}>
      {children}
    </div>
  );
});

ScrollReveal.propTypes = {
  children: PropTypes.node.isRequired
};

export default ScrollReveal;
