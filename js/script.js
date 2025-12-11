// Example: simple fade-in effect on scroll. hopefully this might work lol. if it doesnt try putting script tag in index.html (tag for js lang) and paste the code
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  });
});

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(50px)';
  section.style.transition = 'all 0.8s ease-out';
});
