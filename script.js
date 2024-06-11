document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carrousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carrousel-button.next');
    const prevButton = document.querySelector('.carrousel-button.prev');
    
    const moveToSlide = (track, currentSlide, targetSlide) => {
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    };

    // When I click left, move slides to the left
    prevButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling;

        if (prevSlide) {
            moveToSlide(track, currentSlide, prevSlide);
        }
    });

    // When I click right, move slides to the right
    nextButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;

        if (nextSlide) {
            moveToSlide(track, currentSlide, nextSlide);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.hidden');

    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});
