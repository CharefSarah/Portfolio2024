

gsap.registerPlugin(ScrollTrigger, CustomEase);


let typeSplit;

function runSplit() {
  typeSplit = new SplitType(".split__lines", {
    types: "lines, words"
  });
  document.querySelectorAll('.line').forEach(function (line) {
    line.insertAdjacentHTML('beforeend', "<div class='line__mask'></div>");
  });
  createAnimation();
}

// Gestion du redimensionnement de la fenêtre
let windowWidth = window.innerWidth;
window.addEventListener("resize", function () {
  if (windowWidth !== window.innerWidth) {
    windowWidth = window.innerWidth;
    typeSplit.revert();
    runSplit();
  }
});


// Création de l'animation avec GSAP et ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function createAnimation() {
  document.querySelectorAll(".line").forEach((element, index) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 40%",
        end: "bottom bottom",
        scrub: 3
      }
    });
    let delay = index * 10;
    tl.to(element.querySelector(".line__mask"), {
      width: "0%",
      duration: 9,
      delay: delay
    });
  });
}


window.onload = function () {
  runSplit();

  // Sélectionnez les éléments que vous voulez animer
  const h1 = document.querySelector('h1');
  const h2__content = document.querySelectorAll(' .title span');
  const links = document.querySelectorAll('li a');
  const cta = document.querySelectorAll('.btn');
  const image__one = document.querySelectorAll('.image__one');
  const projet__little__title = document.querySelectorAll('.projet__little__title');
  

  // Commencez l'animation pour le h2 dès que la page est chargée
  gsap.to(h2__content, {
    rotateX: 0,
    translateY: 0,
    delay: 1.2,
    duration: 0.8,
    stagger: .02,
    opacity: 1,
    ease: CustomEase.create("custom", "M0,0 C0.435,0.25 0.15,0.965 1,1 "),
  });

  gsap.from(h1, {
    delay: 0.7,
    duration: 0.2,
    autoAlpha: 0,
    ease: CustomEase.create("custom", "M0,0 C0.435,0.25 0.15,0.965 1,1 "),
    y: -20
  });

  gsap.from(cta, {
    delay: 1.6,
    duration: 0.2,
    autoAlpha: 0,
    ease: CustomEase.create("custom", "M0,0 C0.435,0.25 0.15,0.965 1,1 "),
    y: -20
  });

 
  // Animer chaque lien individuellement
  links.forEach((link, index) => {
    gsap.from(link, {
      delay: 0.7 + index * 0.2,
      duration: 0.2,
      autoAlpha: 0,
      ease: CustomEase.create("custom", "M0,0 C0.435,0.25 0.15,0.965 1,1 "),
      y: -20
    });
  });
  gsap.from(image__one, {
    delay: 2,
    duration: 0.6,
    autoAlpha: 0,
    ease: CustomEase.create("custom", "M0,0 C0.435,0.25 0.15,0.965 1,1 "),
    y: -20
  });
  gsap.from(projet__little__title, {
    delay: 1.6,
    duration: 0.6,
    autoAlpha: 0,
    ease: CustomEase.create("custom", "M0,0 C0.435,0.25 0.15,0.965 1,1 "),
    y: -20
  });


};

