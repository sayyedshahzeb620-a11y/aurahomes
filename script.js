
// Premium scroll reveal animation

const reveals = document.querySelectorAll(".reveal");


function revealOnScroll(){

    reveals.forEach((element)=>{

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 120;


        if(elementTop < windowHeight - revealPoint){

            element.classList.add("active");

        }

    });

}


window.addEventListener("scroll", revealOnScroll);


revealOnScroll();




// Smooth navbar effect

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 80){

        navbar.style.background =
        "rgba(5,5,5,0.85)";

    }

    else{

        navbar.style.background =
        "rgba(255,255,255,0.05)";

    }


});




// Luxury button hover soundless interaction

const buttons = document.querySelectorAll("button");


buttons.forEach(button=>{


    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-4px)";

    });


    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0)";

    });


});
