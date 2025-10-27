// Mobile menu toggle
const hamb = document.getElementById('hamb');
hamb.addEventListener('click', function(e){ 
  e.preventDefault(); 
  document.body.classList.toggle('mobile-open'); 
});

// Lightbox
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lightboxImg');
function openLightbox(src){ 
  lbImg.src = src; 
  lb.style.display='flex'; 
}
function closeLightbox(){ 
  lb.style.display='none'; 
  lbImg.src=''; 
}
window.openLightbox = openLightbox; 
window.closeLightbox = closeLightbox;

// Year
document.getElementById('y').textContent = new Date().getFullYear();
