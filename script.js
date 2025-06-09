document.addEventListener('DOMContentLoaded', () => {
  console.log('Page is fully loaded and ready!');

  // Create lightbox elements
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.style.position = 'fixed';
  lightbox.style.top = 0;
  lightbox.style.left = 0;
  lightbox.style.width = '100%';
  lightbox.style.height = '100%';
  lightbox.style.background = 'rgba(0, 0, 0, 0.8)';
  lightbox.style.display = 'flex';
  lightbox.style.justifyContent = 'center';
  lightbox.style.alignItems = 'center';
  lightbox.style.opacity = 0;
  lightbox.style.pointerEvents = 'none';
  lightbox.style.transition = 'opacity 0.3s ease';
  document.body.appendChild(lightbox);

  const img = document.createElement('img');
  img.style.maxWidth = '90%';
  img.style.maxHeight = '80%';
  img.style.borderRadius = '10px';
  lightbox.appendChild(img);

  // Show lightbox
  function showLightbox(src) {
    img.src = src;
    lightbox.style.opacity = 1;
    lightbox.style.pointerEvents = 'auto';
  }

  // Hide lightbox
  function hideLightbox() {
    lightbox.style.opacity = 0;
    lightbox.style.pointerEvents = 'none';
  }

  lightbox.addEventListener('click', hideLightbox);

  // Add click event to gallery images
  const galleryImages = document.querySelectorAll('.gallery img');
  galleryImages.forEach(image => {
    image.style.cursor = 'pointer';
    image.addEventListener('click', () => {
      showLightbox(image.src);
    });
  });
});
