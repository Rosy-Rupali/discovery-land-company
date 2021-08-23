let slidePosition=0;
const slides = document.getElementsByClassName('carousel-item');
const totalSlides = slides.length;


document.getElementById('carousel-control-prev').addEventListener('click', function(){
moveToPreviousSlide();
})



document.getElementById('carousel-control-next').addEventListener('click', function(){
    moveToNextSlide();
})

// function updateSlidePosition(){
//     for (let slide of slides){
//         slide.classList.remove('active');

//     }
// }
function moveToNextSlide(){
    if(slidePosition == totalSlides){
        slidePosition=0;
    }else{
        slidePosition++;
    }
}

function moveToPreviousSlide(){
    if(slidePosition == 0){
        slidePosition=0;
    }else{
        slidePosition--;
    }
}