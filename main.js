/* ==========================================
   STRINGS.
   MAIN JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  initCursorGlow();
  initReveal();
  initNavbar();
  initCounters();
  initParallax();
  initSongCards();
  initMagneticButtons();
  initTypingEffect();

});

/* ==========================================
   CURSOR GLOW
========================================== */

function initCursorGlow(){

  const glow = document.querySelector(".cursor-glow");

  if(!glow) return;

  document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

  });

}

/* ==========================================
   REVEAL SCROLL
========================================== */

function initReveal(){

  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(

    (entries)=>{

      entries.forEach(entry=>{

        if(entry.isIntersecting){

          entry.target.classList.add("active");

        }

      });

    },

    {
      threshold:.15
    }

  );

  reveals.forEach(item=>observer.observe(item));

}

/* ==========================================
   NAVBAR SCROLL
========================================== */

function initNavbar(){

  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

      navbar.style.background =
      "rgba(5,8,22,.92)";

      navbar.style.boxShadow =
      "0 10px 30px rgba(0,0,0,.25)";

    }

    else{

      navbar.style.background =
      "rgba(5,8,22,.65)";

      navbar.style.boxShadow =
      "none";

    }

  });

}

/* ==========================================
   COUNTERS
========================================== */

function initCounters(){

  const counters =
  document.querySelectorAll(".hero-stats h3");

  if(!counters.length) return;

  let started = false;

  const runCounter = () => {

    if(started) return;

    started = true;

    counters.forEach(counter=>{

      const target =
      parseInt(
      counter.innerText.replace(/\D/g,"")
      );

      let count = 0;

      const speed = target / 80;

      const update = ()=>{

        count += speed;

        if(count < target){

          counter.innerText =
          "+" + Math.floor(count);

          requestAnimationFrame(update);

        }

        else{

          counter.innerText =
          "+" + target;

        }

      }

      update();

    });

  };

  const observer =
  new IntersectionObserver(

    entries=>{

      if(entries[0].isIntersecting){

        runCounter();

      }

    },

    {threshold:.5}

  );

  observer.observe(
    document.querySelector(".hero-stats")
  );

}

/* ==========================================
   PARALLAX
========================================== */

function initParallax(){

  const guitar =
  document.querySelector(".guitar-frame img");

  if(!guitar) return;

  window.addEventListener("scroll",()=>{

    const y =
    window.scrollY * 0.15;

    guitar.style.transform =
    `translateY(${y}px)`;

  });

}

/* ==========================================
   SONG CARDS
========================================== */

function initSongCards(){

  const cards =
  document.querySelectorAll(".song-card");

  cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

      const rect =
      card.getBoundingClientRect();

      const x =
      e.clientX - rect.left;

      const y =
      e.clientY - rect.top;

      const centerX =
      rect.width / 2;

      const centerY =
      rect.height / 2;

      const rotateY =
      (x - centerX) / 20;

      const rotateX =
      -(y - centerY) / 20;

      card.style.transform =

      `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-10px)
      `;

    });

    card.addEventListener("mouseleave",()=>{

      card.style.transform =

      `
      perspective(1000px)
      rotateX(0)
      rotateY(0)
      translateY(0)
      `;

    });

  });

}

/* ==========================================
   MAGNETIC BUTTON
========================================== */

function initMagneticButtons(){

  const buttons =
  document.querySelectorAll(
    ".btn-primary,.btn-secondary"
  );

  buttons.forEach(btn=>{

    btn.addEventListener("mousemove",(e)=>{

      const rect =
      btn.getBoundingClientRect();

      const x =
      e.clientX - rect.left;

      const y =
      e.clientY - rect.top;

      const moveX =
      (x - rect.width/2) / 6;

      const moveY =
      (y - rect.height/2) / 6;

      btn.style.transform =
      `translate(${moveX}px,${moveY}px)`;

    });

    btn.addEventListener("mouseleave",()=>{

      btn.style.transform =
      "translate(0,0)";

    });

  });

}

/* ==========================================
   TYPEWRITER
========================================== */

function initTypingEffect(){

  const title =
  document.querySelector(".hero h1");

  if(!title) return;

  const original =
  title.innerHTML;

  title.innerHTML = "";

  let i = 0;

  const typing = ()=>{

    if(i < original.length){

      title.innerHTML +=
      original.charAt(i);

      i++;

      setTimeout(typing,20);

    }

  };

  typing();

}

/* ==========================================
   FLOATING SHAPES
========================================== */

for(let i=0;i<8;i++){

  const shape =
  document.createElement("div");

  shape.classList.add("floating-dot");

  shape.style.left =
  Math.random()*100+"vw";

  shape.style.top =
  Math.random()*100+"vh";

  shape.style.animationDuration =
  (8+Math.random()*10)+"s";

  document.body.appendChild(shape);

}

/* ==========================================
   SCROLL PROGRESS
========================================== */

const progress =
document.createElement("div");

progress.className =
"scroll-progress";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

  const total =
  document.documentElement.scrollHeight -
  window.innerHeight;

  const current =
  window.scrollY;

  const percent =
  (current/total)*100;

  progress.style.width =
  percent+"%";

});

/* ==========================================
   HERO FADE
========================================== */

window.addEventListener("scroll",()=>{

  const hero =
  document.querySelector(".hero");

  if(!hero) return;

  const value =
  window.scrollY;

  hero.style.opacity =
  Math.max(
  1 - value/900,
  0
  );

});

/* ==========================================
   SMOOTH SECTION LINKS
========================================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

  anchor.addEventListener("click",function(e){

    e.preventDefault();

    const target =
    document.querySelector(
      this.getAttribute("href")
    );

    if(target){

      target.scrollIntoView({

        behavior:"smooth"

      });

    }

  });

});

/* ==========================================
   PARTICLE SYSTEM
========================================== */

const canvas =
document.getElementById("particles");

if(canvas){

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

let particles = [];

for(let i=0;i<80;i++){

particles.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

size:Math.random()*2+1,

speedX:(Math.random()-.5)*0.3,

speedY:(Math.random()-.5)*0.3

});

}

function animateParticles(){

ctx.clearRect(
0,0,
canvas.width,
canvas.height
);

particles.forEach(p=>{

p.x += p.speedX;
p.y += p.speedY;

if(p.x < 0) p.x = canvas.width;
if(p.x > canvas.width) p.x = 0;

if(p.y < 0) p.y = canvas.height;
if(p.y > canvas.height) p.y = 0;

ctx.beginPath();

ctx.arc(
p.x,
p.y,
p.size,
0,
Math.PI*2
);

ctx.fillStyle =
"rgba(139,92,246,.4)";

ctx.fill();

});

requestAnimationFrame(
animateParticles
);

}

animateParticles();

window.addEventListener(
"resize",
()=>{

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

}
);

}

/* ==========================================
   SONG MODAL
========================================== */

const songCards =
document.querySelectorAll(
".song-card"
);

const songModal =
document.getElementById(
"songModal"
);

const closeModal =
document.querySelector(
".close-modal"
);

songCards.forEach(card=>{

card.addEventListener(
"click",
()=>{

songModal.classList.add(
"active"
);

document.getElementById(
"modalTitle"
).innerText =
card.querySelector("h3").innerText;

document.getElementById(
"modalDescription"
).innerText =

"Esta composição faz parte da coleção autoral do projeto STRINGS.";

}
);

});

if(closeModal){

closeModal.addEventListener(
"click",
()=>{

songModal.classList.remove(
"active"
);

}
);

}

/* ==========================================
   LOADER
========================================== */

window.addEventListener("load",()=>{

const progress =
document.querySelector(
".loader-progress"
);

let value = 0;

const interval =
setInterval(()=>{

value += 4;

progress.style.width =
value + "%";

if(value >= 100){

clearInterval(interval);

setTimeout(()=>{

document
.querySelector(".loader")
.classList.add("hidden");

},500);

}

},30);

});

/* ==========================================
   MOBILE MENU
========================================== */

const mobileToggle =
document.querySelector(
".mobile-toggle"
);

const navMenu =
document.querySelector(
".nav-menu"
);

if(mobileToggle){

mobileToggle.addEventListener(
"click",
()=>{

navMenu.classList.toggle(
"active"
);

}
);

}

/* ==========================================
   SPOTLIGHT
========================================== */

document
.querySelectorAll(
".skill-card,.song-card,.about-card"
)
.forEach(card=>{

const spotlight =
document.createElement("div");

spotlight.className =
"spotlight";

card.appendChild(
spotlight
);

card.addEventListener(
"mousemove",
e=>{

const rect =
card.getBoundingClientRect();

spotlight.style.left =
e.clientX - rect.left + "px";

spotlight.style.top =
e.clientY - rect.top + "px";

spotlight.style.opacity = 1;

}
);

card.addEventListener(
"mouseleave",
()=>{

spotlight.style.opacity = 0;

}
);

});

/* ==========================================
   LIBRARY SEARCH
========================================== */

const search =
document.getElementById(
"librarySearch"
);

if(search){

search.addEventListener(
"input",
()=>{

const value =
search.value.toLowerCase();

document
.querySelectorAll(".skill-card")
.forEach(card=>{

const text =
card.innerText.toLowerCase();

card.style.display =
text.includes(value)
? "block"
: "none";

});

}
);

}