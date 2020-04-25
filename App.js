const navSlide= () =>{
    const menu= document.querySelector('.menu');
    const nav= document.querySelector('.nav-bar');
    const navBar= document.querySelectorAll('.nav-bar li');
   

    menu.addEventListener('click',()=>{
         //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navBar.forEach((link, index)=>{  // index arata cate el sunt in lista de meniu
            
            if(link.style.animation){    //daca link-urile au deja animatii pe ele
                link.style.animation= '';
            }
            else{
                link.style.animation = `navBarFade 0.5s ease forwards ${index/7 + 0.5}s`;
            }
        });

        //menu icon animation
        menu.classList.toggle('toggle');

    });
    
//     window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("nav");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
}
 

  


const app = ()=>{
    navSlide();
}

app();