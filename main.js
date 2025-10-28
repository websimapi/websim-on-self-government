window.addEventListener('load', () => {
    const quote = document.querySelector('.quote');
    setTimeout(() => {
        quote.classList.add('visible');
    }, 500); // Add a slight delay for effect
});

