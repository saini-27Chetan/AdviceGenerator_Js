const URL = 'https://api.adviceslip.com/advice';

const Dice = document.getElementById('dice');
const AdviceId = document.getElementById('advice-id');
const Advice = document.getElementById('advice-quote');
Dice.addEventListener('click', async () => {
    let response = await fetch(URL);
    let data = await response.json();

    console.log(data.slip.id);
    console.log(data.slip.advice);

    AdviceId.innerText = data.slip.id;
    Advice.innerText = data.slip.advice;
})

const dividerImg = document.getElementById('divider-img');
function handleMediaQuery(mediaQuery) {
    if (mediaQuery.matches) {
        dividerImg.src = './images/pattern-divider-mobile.svg';
    } else {

        dividerImg.src = './images/pattern-divider-desktop.svg';
    }
}

const mediaQuery = window.matchMedia('(max-width: 600px)');
handleMediaQuery(mediaQuery);
mediaQuery.addListener(handleMediaQuery);
