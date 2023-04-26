
    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centerSlides:true,
      slidesPerview:"auto",
      coverflowEffect:{
        rotate:50,
        stretch:0,
        depth:1200,
        modifier:1,
        slidesShadows:false,
      },
      pagination: {
        el: ".swiper-pagination",
      },
      
    });

    var sidenav=document.querySelector('.sidenav');
    var menubar=document.querySelector('#menubar')
    sidenav.style.width="0px"

    menubar.onclick=function(){
      if(sidenav.style.width=="0px"){
        sidenav.style.width="250px"
      }
      else{
        sidenav.style.width="0px"
      }
    }




