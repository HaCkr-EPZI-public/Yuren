gsap.from('.hero h1', { duration: 1, y: 50, opacity: 0, ease: 'power2.out' });
gsap.from('.hero p', { duration: 1, y: 50, opacity: 0, delay: 0.5, ease: 'power2.out' });
gsap.from('.social-links a', { duration: 0.5, opacity: 0, stagger: 0.2, delay: 1 });

gsap.from('.about h1', { duration: 1, y: 50, opacity: 0, ease: 'power2.out', scrollTrigger: '.about h1' });
gsap.from('.profile-pic', { duration: 1, scale: 0.8, opacity: 0, delay: 0.5, ease: 'elastic.out(1, 0.5)' });
gsap.from('.skills li', { duration: 0.5, opacity: 0, y: 20, stagger: 0.1, delay: 1 });

gsap.from('.project-card', { duration: 1, y: 50, opacity: 0, stagger: 0.3, scrollTrigger: '.projects' });
gsap.from('.contact-form', { duration: 1, y: 50, opacity: 0, scrollTrigger: '.contact-form' });