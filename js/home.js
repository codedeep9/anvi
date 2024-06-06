//Navigation menu
let menuButton = document.querySelector('.btn-menu');
let headerEl = document.querySelector("header");
menuButton.addEventListener("click",()=>{
headerEl.classList.toggle("trigger");
})

//code to close the navigation bar when a link is clicked

let links = document.querySelectorAll(".main-nav-link");

links.forEach((value)=>{
    value.addEventListener("click",()=>{
        headerEl.classList.toggle("trigger");
    })
})
console.log(headerEl.classList)

//Checking Intersection Observer

// let catEl = document.querySelector(".categories-section");

// let catObserver = new IntersectionObserver((entry)=>{
//   const ent = entry[0];
//   console.log(ent);

//   if(ent.isIntersecting){
//     console.log("Intersecting");
//     document.body.classList.add("observe");
//   }
//   else{
//     document.body.classList.toggle("observe")
//   }
// },{
//   root:null,
//   threshold:0,
  
// });

// catObserver.observe(catEl);

//Adding sticky nav bar when the viewport reaches featured in section

let catEl = document.querySelector(".categories-section");
let heroEl = document.querySelector(".section-hero");

// observer for categories section (TO ADD STICKY FEATURE)
let catObserver = new IntersectionObserver((entry)=>{
  let ent = entry[0];

  if(ent.isIntersecting) document.body.classList.add("sticky");
  // else document.body.classList.remove("sticky");
},{
  
  threshold:0.4,
});

// observer for hero section (TO REMOVE STICKY FEACTURE)
let heroObserver = new IntersectionObserver((entry)=>{
  let ent = entry[0];
  if(ent.isIntersecting) document.body.classList.remove("sticky")
},{
  threshold:0.2
})

catObserver.observe(catEl);
heroObserver.observe(heroEl);


///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// floating whatspp icon for ordering//
document.querySelector('.whatsapp_float').addEventListener('mouseover', function() {
  this.classList.add('shake');
});

document.querySelector('.whatsapp_float').addEventListener('mouseout', function() {
  this.classList.remove('shake');
});