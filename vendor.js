window.addEventListener('load', function (event) { tabel(); startCarPosition(); animate();})



addEventListener('keydown', function (e) {

    if (e.code == 'ArrowRight') playerVXR = 2;
    if (e.code == 'ArrowLeft') playerVXL = -2;
    if (e.code == 'ArrowDown') playerVY = 2;
    if (e.code == 'ArrowUp') playerVY = -2;
})
    
    addEventListener("keyup", function (e) {
    if (e.code == 'ArrowRight') playerVXR = 0;
    if (e.code == 'ArrowLeft') playerVXL = 0;
    if (e.code == 'ArrowDown') playerVY = 0;
    if (e.code == 'ArrowUp') playerVY = 0;
})
