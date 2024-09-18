document.addEventListener('DOMContentLoaded', () => {
    const displayedImage = document.querySelector('.full-size img');
    const thumbBar = document.querySelectorAll('.thumbnails img');
    const caption = document.querySelector('.full-size figcaption');

    thumbBar.forEach(img => {
        img.addEventListener('click', (e) => {
            const imgSrc = e.target.src;
            displayedImage.src = imgSrc;
            caption.textContent = e.target.alt;  // Update caption to match the alt text
        });
    });
});
