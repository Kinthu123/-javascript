let slide= document.querySelectorAll("image");
let slideindex= 0;
let Invalue= null;


function startSlide(){};
function showSlides(){
    if(slide>=image.length){
        slideindex= 0;
    }
    else if(index<0){
        slideindex= image.length-1;
    }
};

function gofoward(){
    slideindex++;
    showSlides(slideindex);
};

function gobackward(){
    slideindex--;
    showSlides(slideindex);
};

