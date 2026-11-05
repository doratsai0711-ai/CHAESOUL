document.querySelectorAll("[data-carousel]").forEach((carousel)=>{
 const images=Array.from(carousel.querySelectorAll(".carousel-image"));
 const dotsContainer=carousel.querySelector(".carousel-dots");
 const prev=carousel.querySelector(".prev"),next=carousel.querySelector(".next");
 if(!images.length||!dotsContainer||!prev||!next)return;
 let current=0,timer=null,touchStartX=0;

 const dots=images.map((_,i)=>{
  const dot=document.createElement("button");
  dot.type="button";
  dot.className="carousel-dot";
  dot.setAttribute("aria-label",`切換至第 ${i+1} 張圖片`);
  dot.addEventListener("click",(e)=>{
   e.preventDefault();
   e.stopPropagation();
   show(i);
   restart();
  });
  dotsContainer.appendChild(dot);
  return dot;
 });

 function show(i){
  current=(i+images.length)%images.length;
  images.forEach((img,n)=>img.classList.toggle("active",n===current));
  dots.forEach((d,n)=>{
   d.classList.toggle("active",n===current);
   d.setAttribute("aria-current",n===current?"true":"false");
  });
 }

 function stop(){
  if(timer){
   clearInterval(timer);
   timer=null;
  }
 }

 function restart(){
  stop();
  timer=setInterval(()=>show(current+1),3500);
 }

 prev.addEventListener("click",(e)=>{
  e.preventDefault();
  e.stopPropagation();
  show(current-1);
  restart();
 });

 next.addEventListener("click",(e)=>{
  e.preventDefault();
  e.stopPropagation();
  show(current+1);
  restart();
 });

 carousel.addEventListener("mouseenter",stop);
 carousel.addEventListener("mouseleave",restart);

 carousel.addEventListener("touchstart",e=>{
  touchStartX=e.changedTouches[0].clientX;
 },{passive:true});

 carousel.addEventListener("touchend",e=>{
  const diff=e.changedTouches[0].clientX-touchStartX;
  if(Math.abs(diff)>40){
   show(current+(diff<0?1:-1));
   restart();
  }
 },{passive:true});

 show(0);
 restart();
});
