let positionSlider = 0;

function slider(direccion) {
    const track = document.getElementById("track");
    const trackElement = document.querySelectorAll(".main__characters__char");
    let firstTrackElement = trackElement[0];
    let lastTrackElement = trackElement[trackElement.length - 1];





    
    if (direccion && positionSlider !== -87.5) {
        positionSlider = positionSlider - 12.5;
        track.style.transform = `translateX(${positionSlider}%)`;
    } else if(!direccion && positionSlider !== 0){
        positionSlider = positionSlider + 12.5;
        track.style.transform = `translateX(${positionSlider}%)`;
    }
}


/*
document.addEventListener("DOMContentLoaded", ()=>{
    function slider(direccion) {
        const track = document.getElementById("track");
        const trackElement = document.querySelectorAll(".main__characters__char");
        let firstTrackElement = trackElement[0];
        let lastTrackElement = trackElement[trackElement.length - 1];
        
        if (direccion) {
            track.style.transition = "transform 0.5s";
            track.style.transform = `translateX(-13.5%)`;
            let wait = setTimeout(() => {
                track.style.transition = "none";
                track.insertAdjacentElement("beforeend", firstTrackElement);
                track.style.transform = `translateX(13.5%)`;
                clearTimeout(wait);
            }, 500);
        } else{
            track.style.transition = "transform 0.5s";
            track.style.transform = `translateX(13.5%)`;
            let wait = setTimeout(() => {
                track.style.transition = "none";
                track.insertAdjacentElement("afterbegin", lastTrackElement);
                track.style.transform = `translateX(-13.5%)`;
                clearTimeout(wait);
            }, 500);
        }
    }
});
*/
window.addEventListener("mousemove", (e)=>{
    const bannerItem = document.querySelectorAll(".banner__item");
    let posY = e.clientY - window.innerHeight / 2;
    let posX = e.clientX - window.innerWidth / 2;

    for (const items of bannerItem) {
        let VelocidadX = items.dataset.velx;
        let VelocidadY = items.dataset.vely;

        if (items.dataset.velx == 0) {
            items.style.transform = `translateX(-50%) translateY(calc(-50% + ${-posX * VelocidadY}px))`;
        } else {
            items.style.transform = `translateX(calc(-50% + ${-posX * VelocidadX}px)) translateY(calc(-50% + ${-posY * VelocidadY}px))`;
        }
    }
});

window.addEventListener("scroll", (e)=>{
    const nav = document.getElementById("nav");
    const borderL = document.getElementById("nav_izq");
    const borderR = document.getElementById("nav_der");
    let scrollYE = window.scrollY;
    let heightSCR = window.innerHeight / 2;

    if (scrollYE > heightSCR) {
        nav.style.left = "0px";
        borderL.style.left = "0px";
        borderR.style.right = "0px";
    }else{
        nav.style.left = "-70%";
        borderL.style.left = "-50px";
        borderR.style.right = "-50px";
    }
});