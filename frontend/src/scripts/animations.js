import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mediaQuery.matches) {
    document.querySelectorAll('.reveal-text, .stagger-container, .fade-in, .reveal-up, .reveal-left, .reveal-right').forEach(el => {
      if (el instanceof HTMLElement) {
        el.style.opacity = '1';
        el.style.transform = 'none';
      }
    });
    return;
  }

  // Reveal text animation
  const revealElements = document.querySelectorAll('.reveal-text');
  revealElements.forEach((el) => {
    gsap.fromTo(el, 
      { y: 50, opacity: 0 }, 
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });

  // Stagger children
  const staggerContainers = document.querySelectorAll('.stagger-container');
  staggerContainers.forEach((container) => {
    const children = container.children;
    gsap.fromTo(children,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });

  // Fade in simple
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach((el) => {
    gsap.fromTo(el,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });

  // Reveal Up
  const revealUp = document.querySelectorAll('.reveal-up');
  revealUp.forEach((el) => {
    gsap.fromTo(el,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });

  // Reveal Left
  const revealLeft = document.querySelectorAll('.reveal-left');
  revealLeft.forEach((el) => {
    gsap.fromTo(el,
      { x: -60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });

  // Reveal Right
  const revealRight = document.querySelectorAll('.reveal-right');
  revealRight.forEach((el) => {
    gsap.fromTo(el,
      { x: 60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });
}
