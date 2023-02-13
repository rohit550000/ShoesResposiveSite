var lod = document.getElementById('loader');

function loderr(){
  lod.style.display='none';  
}

function onl(){
  setInterval(loderr,1500);
}

window.onload=onl;





window.onscroll = scrollFunction;


function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    document.getElementById("header").style.padding ="1rem 9%";
  
  } else {
    document.getElementById("header").style.padding = "2.4rem 9%";
  }
  
    if(window.scrollY > 60){
      document.querySelector('#scroll-top').classList.add('active');
    }else{
      document.querySelector('#scroll-top').classList.remove('active');
    }
}



let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('nav');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}




