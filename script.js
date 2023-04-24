const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('loaded');
        observer.unobserve(entry.target);
      }
    });
  });
  
  document.querySelectorAll('.lazy-load').forEach(image => {
    observer.observe(image);
  });
  