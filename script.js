var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  document.querySelector("#closeicn").addEventListener("click",function(){
    document.querySelector("#sidemenu").style.display="block"  
  })
  document.querySelector("#iconss i").addEventListener("click",function(){
    document.querySelector("#sidemenu").style.display="none"
  })


  var tl = gsap.timeline();

  tl.from("#loader #line1",{
    width:0,
    ease:Expo.easeInOut,
    duration:1.5
  })
  tl.to("#loader #line1",{
    left:"100%",
    ease:Expo.easeInOut,
    duration:1.5
  },"-=0.5")
  tl.to("#loader",{
    height:"0%",
    ease:Expo.easeOut,
    duration:2
  },"-=0.5")
  tl.from("#longpicture",{
    y:600,
    ease:Expo.easeInOut,
    duration:1.8
  },"-=2.2")

document.querySelectorAll(".our").forEach(function(our){
  gsap.from(our,{
    scrollTrigger:{
        trigger:our,
        start:"top 80%",
        // markers:true
    },
    y:50,
    stagger:0.1,
    opacity:0,
    ease:"Expo.easeInOut",
    duration:1
})
})
document.querySelectorAll("#page3 .images").forEach(function(every){
  gsap.from(every,{
    scrollTrigger:{
        trigger:"#page3",
        start:"top 60%",
        // markers:true
    },
    y:200,
    // stagger:0.1,
    opacity:0,
    ease:"Bounce.easeOut",
    duration:3
})
})
document.querySelectorAll("#page4 .images").forEach(function(every){
  gsap.from(every,{
    scrollTrigger:{
        trigger:"#page4",
        start:"top 60%",
        // markers:true
    },
    y:200,
    // stagger:0.1,
    opacity:0,
    ease:"Bounce.easeOut",
    duration:2
})
})
gsap.to("#longline",{
  scrollTrigger:{
      trigger:"#page6",
      start:"top 60%", 
      end:"bottom 0%",
      scrub:2,
      // pin:true, 
      // markers:true
  },
  x:-400,
  ease: Linear,
  // duration:2
})


setInterval(function(){
  gsap.to("#page1 #poster1", {
    width:"0%",
    display:"none",
    ease:Expo.easeInOut,
    duration:2
  })
  gsap.to("#page1 #poster2", {
    width:"100%",
    ease:Expo.easeInOut,
    duration:2
  })
}, 5000);





















