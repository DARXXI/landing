const navSlide= () => {
    const burgerjs = document.querySelector('.burger');
    const navjs = document.querySelector('.menu__list');
    const navlinks = document.querySelectorAll('.menu__list li');
    const selected__elements  = document.querySelectorAll('.menu__list li');
    const isselected = document.querySelector('.selected');
    const anchor__home = document.querySelector('#HOME');
    const anchor__ = document.querySelector('#PORTFOLIO');
    const anchor_ = document.querySelector('#ABOUT-US');
    const anchor= document.querySelector('#CONTACT');

    /*function scrollTo(element) {
      window.scroll({
        left:0,
        top: element.offsetTop,
        behavior: 'smooth'
      })
    }
    for (let i = 0 ; i < selected__elements.length; i++) {
         selected__elements[1].addEventListener('click' , function() 
         {
           scrollTo(anchor__home);
         } 
       )
     };*/

    for (let i = 0 ; i < selected__elements.length; i++) {
     let exclusive = i;
        selected__elements[i].addEventListener('click' , function() 
        {
          for (let i = 0 ; i < selected__elements.length; i++) 
          {
            selected__elements.item(i).classList.remove('selected');
          }
          setTimeout( () => {selected__elements.item(exclusive).classList.toggle('selected');},AnimationBySсreen());
          
          navjs.classList.toggle('nav-active');
          //animation
         navlinks.forEach((link,index)=> {
            if (link.style.animation){
                link.style.animation = '';
            } 
        });
        //burger animation
        burgerjs.classList.toggle('toggle');
        } 
      )
    };
    function AnimationBySсreen() {
      if( (window.innerWidth || document.documentElement.clientWidth) < 769) {
        return 800;
      } 
      else {
        return 1;
      }
    }
    //toggl nav
    burgerjs.addEventListener('click', function() {
    
        navjs.classList.toggle('nav-active');
          //animation
         navlinks.forEach((link,index)=> {
            if (link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.5}s`;
                //forwards should replace none
            }    
        });
        //burger animation
        burgerjs.classList.toggle('toggle');
    });
}
navSlide();
