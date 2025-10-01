document.addEventListener('DOMContentLoaded', function() {
  const videos = document.querySelectorAll('video[loading="lazy"]');
  
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const video = entry.target;
        // Only load the video when it's visible
        video.preload = 'auto';
        video.load(); // This triggers the video to actually load
        videoObserver.unobserve(video);
      }
    });
  }, {
    rootMargin: '50px' // Start loading when 50px away from viewport
  });

  // Observe all lazy videos
  videos.forEach(video => {
    video.preload = 'metadata'; // Start with metadata only
    videoObserver.observe(video);
  });
});

const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const video = entry.target;
      video.preload = 'auto';
      video.load();
      video.play().catch(e => console.log('Autoplay prevented:', e));
      videoObserver.unobserve(video);
    }
  });
});