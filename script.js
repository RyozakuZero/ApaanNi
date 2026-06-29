document.addEventListener("DOMContentLoaded", () => {

    const popup = document.getElementById("letterPopup");
    const btn = document.getElementById("letterBtn");
    const closeBtn = document.querySelector(".close");

    btn.addEventListener("click", () => {
        popup.classList.add("show");
    });

    closeBtn.addEventListener("click", () => {
        popup.classList.remove("show");
    });

    popup.addEventListener("click", (e) => {
        if(e.target === popup){
            popup.classList.remove("show");
        }
    });

});

function bukaHadiah(){

document.getElementById("gallerySection").style.display="block";

window.scrollTo({

top:document.getElementById("gallerySection").offsetTop,

behavior:"smooth"

});

}

const balloons = document.querySelectorAll(".draggable");

balloons.forEach(balloon => {

    let dragging = false;
    let offsetX = 0;
    let offsetY = 0;

    let flying = true;
    let speed = 1 + Math.random() * 1.5;

    // Posisi awal
    let x = balloon.offsetLeft;
    let y = window.innerHeight + Math.random() * 300;

    balloon.style.left = x + "px";
    balloon.style.top = y + "px";
    balloon.style.bottom = "auto";
    balloon.style.animation = "none";

    function animate() {

        if (flying && !dragging) {

            y -= speed;
            x += Math.sin(Date.now() / 700 + speed) * 0.4;

            // Kalau keluar layar, muncul lagi dari bawah
            if (y < -100) {
                y = window.innerHeight + 100;
                x = Math.random() * (window.innerWidth - 60);
            }

            balloon.style.left = x + "px";
            balloon.style.top = y + "px";
        }

        requestAnimationFrame(animate);
    }

    animate();

    balloon.addEventListener("pointerdown", (e) => {

        dragging = true;

        offsetX = e.clientX - x;
        offsetY = e.clientY - y;

        balloon.setPointerCapture(e.pointerId);

        balloon.style.cursor = "grabbing";
    });

    balloon.addEventListener("pointermove", (e) => {

        if (!dragging) return;

        x = e.clientX - offsetX;
        y = e.clientY - offsetY;

        balloon.style.left = x + "px";
        balloon.style.top = y + "px";
    });

    balloon.addEventListener("pointerup", () => {

        dragging = false;
        flying = true;

        balloon.style.cursor = "grab";

    });

})
