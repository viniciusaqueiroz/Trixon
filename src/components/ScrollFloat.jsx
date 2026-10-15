import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import './ScrollFloat.css';

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 0.65,
  ease = 'power2.out',
  stagger = 0.012,
  playOnMount = false,
  as: HeadingTag = 'h2',
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';

    return text.split('').map((char, index) => (
      <span className="char" key={index}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const characters = element.querySelectorAll('.char');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      gsap.set(characters, {
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        clearProps: 'willChange,transform',
      });
      return undefined;
    }

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    const context = gsap.context(() => {
      const fromVars = {
        willChange: 'opacity, transform',
        opacity: 0,
        yPercent: 25,
        transformOrigin: '50% 0%',
      };
      const toVars = {
        duration: Math.min(Math.max(animationDuration, 0.5), 0.8),
        ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: { each: Math.min(stagger, 0.015), amount: 0.2 },
        onComplete: () => gsap.set(characters, { clearProps: 'willChange,transform' }),
      };

      if (playOnMount) {
        gsap.fromTo(characters, fromVars, toVars);

        return;
      }

      gsap.fromTo(characters, fromVars, {
        ...toVars,
        scrollTrigger: {
          trigger: element,
          scroller,
          start: 'top 90%',
          once: true,
          toggleActions: 'play none none none',
        },
      });
    }, element);

    return () => context.revert();
  }, [scrollContainerRef, animationDuration, ease, stagger, playOnMount]);

  return (
    <HeadingTag ref={containerRef} className={`scroll-float ${containerClassName}`}>
      <span className={`scroll-float-text ${textClassName}`}>{typeof children === 'string' ? splitText : children}</span>
    </HeadingTag>
  );
};

export default ScrollFloat;
