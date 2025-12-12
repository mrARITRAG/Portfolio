
const items = document.querySelectorAll('.nav-item');

items.forEach(item => {
  item.addEventListener('click', () => {
    items.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});

// ... existing code ...

const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Scroll Amount (approx card width + gap)
const scrollAmount = 320; 

nextBtn.addEventListener('click', () => {
    slider.scrollLeft += scrollAmount;
});

prevBtn.addEventListener('click', () => {
    slider.scrollLeft -= scrollAmount;
});