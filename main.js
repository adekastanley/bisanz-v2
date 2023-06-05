


// navigation 

const toggler = document.querySelector(".nav-btn");
let rotated = false
toggler.addEventListener('click', ()=> {
  let lines = toggler.children
  // console.log(lines[0])
  if (rotated) {
    lines[0].style.transform =' rotate(0deg)'
    lines[2].style.transform =' rotate(0deg)'
    lines[1].style.opacity = 1



    toggler.style.height =' 3rem'
    rotated = false
  } else {

    lines[0].style.transform = ' rotate(45deg)'
    lines[2].style.transform =' rotate(-45deg)'
    lines[1].style.opacity =0
    toggler.style.height =' 1.7rem'


    rotated = true

  }


})


gsap.timeline()
.to(".nav-container", {
  delay: 3,
  duration: 1,
  opacity: 1,
  yPercent: "BezierEasing(0.19,1,0.22,1)",
}, );

let closed = true;
toggler.addEventListener("click", () => {
  if (closed) {
    closed = false;
    gsap.timeline().to(".ul-wrapper", {
      x: 0,
    });
  } else {
    closed = true;
    gsap.timeline().to(".ul-wrapper", {
      x: -420,
    });
  }
})
const target = document.querySelector('.headline');
const splitHeadline1 = Splitting({ target: target, by: 'chars' });
const headlineLetters = splitHeadline1[0].chars


const intro = gsap.timeline();
intro.from(headlineLetters, {
    y: 100,
    opacity:0,
    duration: .3,
    stagger: .3,

})
intro.to( headlineLetters, {

    scale:2,
    duration: .3,
    stagger: {
        amount: 0.5
    }
})
intro.to( '.section-one', {

    backgroundColor: '#000000',
    duration: .4,

})
intro.to( headlineLetters, {
 
    color: '#fff',
    duration: .4,

}, '<')
intro.to( '.background-container', {
    // delay: .3,
    opacity:1,
    duration: .6,
    ease: "power1.out",
})
intro.to(headlineLetters, {
    y: -200,
    duration: 1,

})
intro.from('nav ul li', {
    y: 100,
    opacity: 0,
    ease: "power1.in",
    stagger: {
        amount: 0.5
    },
    duration: 1,

})

gsap.registerPlugin(ScrollTrigger);
const sections = gsap.timeline()


// // console.log(headlineWords)



// // 
// // 
// // general 
// // 


const container = document.querySelector('.container')
const cards = gsap.utils.toArray('.cards')
const text = gsap.utils.toArray('.cards p')


const scrollPage = gsap.to(container, {
    xPercent: -100 * (cards.length - 1),
    ease: 'none',
    scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: "+= 10"
    }
})


