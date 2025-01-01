class ScrollManager {
    constructor() {
        this.initLenis();
        this.initSmoothScroll();
    }
    initLenis() {
        const lenis = new Lenis();
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);
    }
    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', e => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href').slice(1);
                const target = document.getElementById(targetId);
                if (target) {
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }
            });
        });
    }
} document.addEventListener('DOMContentLoaded', () => new ScrollManager());
// end lenis =====================

let elements = document.querySelectorAll(".rolling-text");
elements.forEach((element) => {
    let innerText = element.innerText;
    element.innerHTML = "";
    let textContainer = document.createElement("div");
    textContainer.classList.add("block");
    for(let letter of innerText) {
        let span = document.createElement("span");
        span.innerText = letter.trim() === "" ? "\xa0" : letter;
        span.classList.add("letter");
        textContainer.appendChild(span);}
    element.appendChild(textContainer);
    element.appendChild(textContainer.cloneNode(true));});
elements.forEach((element) => { element.addEventListener("mouseover", () => { element.classList.remove("play");});});       
// =======================end rolling text=========================================

// =======================datetime=========================================
function updateKarachiTime() {
    const now = new Date();
    const karachiTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Karachi" }));
    const hours = karachiTime.getHours().toString().padStart(2, '0');
    const minutes = karachiTime.getMinutes().toString().padStart(2, '0');
    const utcOffset = '+5';
    const formattedTime = `${hours}:${minutes} UTC${utcOffset} Karachi, Pakistan`;
    document.getElementById('karachi-time').textContent = formattedTime;
}
document.addEventListener("DOMContentLoaded", function () {
    updateKarachiTime();  
    setInterval(updateKarachiTime, 1000);
});
// =====================Email copy =========================

const emailCopiedLink = document.querySelector('.email-copied-link');
const copiedLabel = document.querySelector('.label-copy-email');
emailCopiedLink.addEventListener('click', function() {
  navigator.clipboard.writeText('hcksalman@gmail.com')
    .then(() => { console.log('Email copied to clipboard!');})
    .catch(err => { console.error('Failed to copy email:', err); });
  copiedLabel.style.opacity = 1; 
  copiedLabel.classList.add('copy-label-transition');
  setTimeout(() => {copiedLabel.style.opacity = 0;}, 3000);
});




// Select all anchor tags inside .navbar > .menu > p
let links = document.querySelectorAll('.navbar > .menu > p > a');

links.forEach(link => {
  link.addEventListener('mouseover', () => {
    // Change the color of the parent <p> element on hover
    link.parentElement.style.color = '#E9EBEC';
  });

  link.addEventListener('mouseout', () => {
    // Revert the color of the parent <p> element when not hovering
    link.parentElement.style.color = '';
  });
});





  gsap.to(".second-section .col-lg-7 > h6 > span", {
    color: "#E9EBEC",
    duration: 0.3,
    stagger: 0.2, 
    scrollTrigger: {
      trigger: ".second-section .col-lg-7 > h6 > span",
      start: "top 70%",
      end: "top 50%",
    },
  })






























const counter = document.getElementById('counter');
const preloader = document.getElementById('preloader');
const textContainer = document.querySelector('.text-container');
gsap.to(counter, {
  innerHTML: 100, 
  snap: { innerHTML: 1 },
  duration: 3, 
  ease: "power2.out",
  onComplete: () => {
    gsap.to(preloader, {
      yPercent: -100, 
      duration: 1, 
      ease: "power2.inOut",
    });
    preloader.style.display = 'none';
    textContainer.style.opacity = 1;
    playTextAnimation();
  }
});

function wrapTextWithSpan(selector) {
  const textWrapper = document.querySelector(selector);
  if (!textWrapper) return;
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
}

function animateText(selector, translateXFrom, delayIncrement) {
  const letters = document.querySelectorAll(`${selector} .letter`);
  if (letters.length === 0) return;
  gsap.fromTo(  letters,{ x: translateXFrom, opacity: 0 }, {  x: 0, opacity: 1, duration: 2, ease: "expo.inOut", stagger: { each: delayIncrement, start: 0.0,},});}

function playTextAnimation() {
  gsap.to("header", {  
    opacity: 1,
    duration: 0.5,
    ease: "power2.inOut",
    delay: 1,
  });
  gsap.to(".hero .bottom", {  
    opacity: 1,
    duration: 0.5,
    ease: "power2.inOut",
    delay: 1.3,
  });
  gsap.to(".scroll-down", {  
    opacity: 1,
    duration: 0.5,
    ease: "power2.inOut",
    delay: 1.3,
  });

  gsap.to(".ml2 > span", {
      duration: 1.4,
      delay: 0,
      y: "-24vw",
      ease: "expo.inOut" 
  })
  gsap.to(".ml3 > span", {
    duration: 1.4,
    delay: 0.1,
    y: "-24vw",
    ease: "expo.inOut" 
})
gsap.to(".ml4 > span", {
  duration: 1.4,
  delay: 0.2,
  y: "-24vw",
  ease: "expo.inOut" 
})
gsap.from(".ml2 > span", {
  duration: 1.4,
  delay: 0,
  opacity: 0,
    ease: "expo.inOut" 
})
gsap.from(".ml3 > span", {
duration: 1.4,
delay: 0,
opacity: 0,
ease: "expo.inOut" 
})
gsap.from(".ml4 > span", {
duration: 1.4,
delay: 0,
opacity: 0,
ease: "expo.inOut" 
})
}














  

setTimeout(() => {

  function createLottieAnimation(containerClass, path) {
      let icon = document.querySelector(containerClass);
      let animation = lottie.loadAnimation({ container: icon, renderer: 'svg', loop: false, autoplay: false, path: path });
      var direction = 1;
      icon.addEventListener('mouseenter', (e) => { animation.setDirection(direction); animation.play(); });
      icon.addEventListener('mouseleave', (e) => { animation.setDirection(-direction); animation.play(); });
  }
  
  function createLottieFooterAnimation(containerClass, path) {
      let icon = document.querySelector(containerClass);
      let animation = lottie.loadAnimation({ container: icon, renderer: 'svg', loop: false, autoplay: false, path: path });
      var direction = 1;
      icon.addEventListener('mouseenter', (e) => { animation.setDirection(direction); animation.play(); });
      icon.addEventListener('mouseleave', (e) => { animation.setDirection(-direction); animation.play(); });
  }

createLottieAnimation('.animated-icon', "https://lottie.host/98a80fe4-c8f8-4245-95ef-fa7a5b52e810/PsZAqVrXmD.json");
createLottieAnimation('.animated-icon-2', "https://lottie.host/6cfab32e-b4a6-4889-9249-243a3e62837b/Vj7jFnDzsn.json");
createLottieAnimation('.animated-icon-3', "https://lottie.host/0227fc5c-4675-4933-a6f5-198a05da8e73/BfUwXAvMym.json");
createLottieAnimation('.animated-icon-4', "https://lottie.host/716e5bba-bb7d-478e-83bb-4ef375603e69/CaOR0ESOLL.json");

}, 600);


document.querySelectorAll('.icon-div-email').forEach((iconDiv) => {
  iconDiv.addEventListener('click', () => {
      const defaultTooltip = "copy email";
      const copiedTooltip = "Copied!";
      iconDiv.setAttribute('data-tooltip', copiedTooltip);      
      const email = "example@email.com";
      navigator.clipboard.writeText(email).then(() => { console.log(`Copied to clipboard: ${email}`);
      }).catch(err => { console.error('Failed to copy:', err); });
         setTimeout(() => { iconDiv.setAttribute('data-tooltip', defaultTooltip);}, 2000);});});



































const noise = () => {
  let canvas, ctx;
  let wWidth, wHeight;
  let noiseData = [];
  let frame = 0;
  let loopTimeout;
  const createNoise = () => {
      const idata = ctx.createImageData(wWidth, wHeight);
      const buffer32 = new Uint32Array(idata.data.buffer);
      const len = buffer32.length;
      for (let i = 0; i < len; i++) {
          if (Math.random() < 0.05) {
              buffer32[i] = 0x080000ff; /* Set smallest dots of noise red */
          } else if(Math.random() < 0.1) {
        buffer32[i] = 0x0800ff00; /* Set small dots of noise green */
      } else if(Math.random() < 0.15) {
        buffer32[i] = 0x08ff0000; /* Set big dots of noise blue */
      } else if(Math.random() < 0.2) {
        buffer32[i] = 0xccdddddd; /* Set biggest dots of noise gray */}}
      noiseData.push(idata);};
  const paintNoise = () => {
      if (frame === 5) {frame = 0; } else { frame++;}
      ctx.putImageData(noiseData[frame], 0, 0);};
  const loop = () => {
      paintNoise(frame);
      loopTimeout = window.setTimeout(() => {
          window.requestAnimationFrame(loop);
      }, (1000 / 25));};
  const setup = () => {
      wWidth = window.innerWidth;
      wHeight = window.innerHeight;
      canvas.width = wWidth;
      canvas.height = wHeight;
      for (let i = 0; i < 10; i++) {createNoise();} 
      loop();};
  let resizeThrottle;
  const reset = () => {
      window.addEventListener('resize', () => {
          window.clearTimeout(resizeThrottle);
          resizeThrottle = window.setTimeout(() => {
              window.clearTimeout(loopTimeout);
              setup();}, 400);}, false);};
  const init = (() => {
      canvas = document.getElementById('noise-canvas');
      ctx = canvas.getContext('2d');
      setup();})();}; noise();





      // https://codepen.io/Andrew__Alva/pen/gjpBrR             noise 




      




