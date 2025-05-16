// thumparallax.js

// Fonksiyon, parallax efektini uygular
export const thumparallax = () => {
    // İstenirse parallax efekti uygulanacak elementleri seçebilirsiniz
    const parallaxElements = document.querySelectorAll('.parallax-element');
  
    // Scroll olayını dinle
    window.addEventListener('scroll', function () {
      // Sayfanın scroll pozisyonunu al
      const scrollPosition = window.scrollY;
  
      // Parallax efekti uygula
      parallaxElements.forEach(function (element) {
        // Parallax efekti miktarını burada ayarlayabilirsiniz
        const parallaxAmount = 0.5;
        
        // Elementin orijinal pozisyonunu al
        const originalPosition = element.offsetTop;
  
        // Parallax efekti hesapla ve uygula
        const newPosition = originalPosition - scrollPosition * parallaxAmount;
        element.style.transform = 'translateY(' + newPosition + 'px)';
      });
    });
  };
  