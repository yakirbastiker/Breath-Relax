const container = document.querySelector('.container');
const text = document.querySelector('#text');


const breatheTime = 5000;
const holdTime = 2000;
const totalTime = (breatheTime * 2) + holdTime;

function breatheAnimation () {
    text.innerHTML = 'Breath In!';
    container.className = 'container grow';

    setTimeout(()=>{
        text.innerHTML = 'Hold!';

        setTimeout(() => {
            text.innerHTML = 'Breathe Out!';
            container.className = 'container shrink';
        }, holdTime)
    }, breatheTime)
}

breatheAnimation();

setInterval(breatheAnimation, totalTime);