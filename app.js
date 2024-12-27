const header = document.querySelector('h1');

function headerChange(){
    header.style.top = '50%';
}

const countdown = document.querySelector('.days');
const launchDate = new Date('Feb 1, 2025 13:00:00').getTime();
let intervl = setInterval(() => {
    
    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / (1000));

    countdown.innerHTML = `${days} : ${hours} : ${mins} : ${seconds}`;
      
    if(distance < 0){
        clearInterval(intervl);
        countdown.innerHTML = 'Launched';
    }

}, 1000);

headerChange();