document.addEventListener("DOMContentLoaded", function() {
    const animationClasses = ['left-to-right', 'right-to-left', 'up-to-bottom', 'bottom-to-top'];

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animationClasses.forEach(animationClass => {
                    if (entry.target.classList.contains(animationClass)) {
                        entry.target.classList.add(`animate-${animationClass}`);
                        observer.unobserve(entry.target); // Stop observing once the animation is triggered
                    }
                });
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    animationClasses.forEach(animationClass => {
        const elements = document.querySelectorAll(`.${animationClass}`);
        elements.forEach(element => {
            observer.observe(element);
        });
    });
});
