document.addEventListener("DOMContentLoaded", function () {
    var scrollTexts = document.querySelectorAll(".scroll-text");

    scrollTexts.forEach(function (text) {
        text.addEventListener("click", function () {
            var targetSectionId = text.getAttribute("data-scroll-target");
            var targetSection = document.getElementById(targetSectionId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});




// const projectsContainer = document.querySelector('.projects-container');
// const projectCards = document.querySelectorAll('.project-card');

// let currentIndex = 0;

// function showProject(index) {
//     projectCards.forEach(card => {
//         card.style.display = 'none';
//     });

//     projectCards[index].style.display = 'block';
// }

// function navigate(direction) {
//     if (direction === 'next') {
//         currentIndex = (currentIndex + 1) % projectCards.length;
//     } else if (direction === 'prev') {
//         currentIndex = (currentIndex - 1 + projectCards.length) % projectCards.length;
//     }

//     showProject(currentIndex);
// }

// // Initial display
// showProject(currentIndex);

// // Swipe navigation
// projectsContainer.addEventListener('click', event => {
//     const { clientX } = event;

//     if (clientX > window.innerWidth / 2) {
//         navigate('next');
//     } else {
//         navigate('prev');
//     }
// });
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.image-slider');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    let currentIndex = 0;

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slider.children.length;
        updateSlider();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
        updateSlider();
    });

    function updateSlider() {
        const translateX = -currentIndex * 100;
        slider.style.transform = `translateX(${translateX}%)`;
    }
});

// document.addEventListener("DOMContentLoaded", function () {
//     const projectContainer = document.querySelector(".projects-container");
//     const projectCards = projectContainer.querySelectorAll(".project-card");
//     const prevButton = document.querySelector(".prev-button");
//     const nextButton = document.querySelector(".next-button");

//     let currentIndex = 0;

//     function showProject(index) {
//         projectCards.forEach((card, i) => {
//             card.style.transform = `translateX(${(i - index) * 100}%)`;
//         });
//         currentIndex = index;
//     }

//     function showNextProject() {
//         if (currentIndex < projectCards.length - 1) {
//             showProject(currentIndex + 1);
//         }
//     }

//     function showPrevProject() {
//         if (currentIndex > 0) {
//             showProject(currentIndex - 1);
//         }
//     }

//     nextButton.addEventListener("click", showNextProject);
//     prevButton.addEventListener("click", showPrevProject);
// });


