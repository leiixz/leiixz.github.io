document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      const targetPosition = target.getBoundingClientRect().top;
      const startPosition = window.pageYOffset;
      const offsetPosition = targetPosition - 50; // Adjust for the navbar height
      const duration = 1300; // Duration of the scroll in milliseconds
      let start = null;
  
      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const ease = progress / duration;
        const easedProgress = ease < 0.5 ? 2 * ease * ease : -1 + (4 - 2 * ease) * ease; // Ease-in-out quadratic easing function
        window.scrollTo(0, startPosition + offsetPosition * easedProgress);
        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      }
  
      window.requestAnimationFrame(step);
    });
  });
  