function myNav(){
    let bar=document.getElementById("bar");
    let nav=document.querySelector(".nav");
   bar.onclick = ()=>{
    if(nav.style.right =="0%"){
        nav.style.right="-50%";
        bar.src="./images/menu.png";
    }
    else{
        nav.style.right="0%";
        bar.src="./images/x.png"
   }
  }
}
myNav();
function myHeader(){
    let head=document.getElementById("header");
    window.addEventListener("scroll",function(){
    if(window.scrollY>0){
        head.classList.add("active");
    }
    else{
        head.classList.remove("active");
    }
   }
   )
}
myHeader();
