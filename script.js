const boxes=document.querySelectorAll('.box');
window.addEventListener('scroll',()=>{
 boxes.forEach(b=>{
  if(b.getBoundingClientRect().top<window.innerHeight-50)
   b.style.opacity=1;
 });
});
