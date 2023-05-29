const ninja = document.querySelector('.ninja');
let pause = true;

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        if (pause == true) {
            ninja.style.animationPlayState = 'paused';
            pause = false;
        } else if (pause == false) {
            ninja.style.animationPlayState = 'running';
            pause = true;
        }
    }
    // console.log(e.code);
});

ninja.addEventListener('mouseover', (e) => {
    ninja.style.animationPlayState = 'paused';
});

ninja.addEventListener('mouseout', (e) => {
    ninja.style.animationPlayState = 'running';
});
