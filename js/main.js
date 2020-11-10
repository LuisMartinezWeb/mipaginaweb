let animate = document.querySelectorAll(".animate-text");
let animateProjects = document.querySelectorAll(".animate-text-projects");


function showAnimate() {
    let topScroll = document.documentElement.scrollTop;

    for (var i = 0; i < animate.length; i++) {
        let animateHeigth = animate[i].offsetTop;

        if (animateHeigth + 400 < topScroll) {
            animate[0].classList.add("animate__animated", "animate__fadeInDown");
            animate[1].classList.add("animate__animated", "animate__fadeInLeft");
            animate[2].classList.add("animate__animated", "animate__fadeInRight");
            animate[3].classList.add("animate__animated", "animate__fadeInUp");

        }
    }

    for (var i = 0; i < animateProjects.length; i++) {
        let animateProjectsHeigth = animateProjects[i].offsetTop;


        if (animateProjectsHeigth + 830 < topScroll) {

            animateProjects[0].classList.add("animate__animated", "animate__fadeInDown");
        }
    }
}



window.addEventListener('scroll', showAnimate);