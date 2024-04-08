document.getElementById("scrollButton").addEventListener("click", function() {
    const detailedInfo = document.querySelector('.detailed-info');
    const scrollOffset = -50; // Расстояние отступа перед прокруткой

    const scrollToPosition = detailedInfo.getBoundingClientRect().top + window.scrollY + scrollOffset;

    window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
    });
});
