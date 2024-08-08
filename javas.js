let divShow = document.getElementById("messages");
let starShow = document.getElementById("shootingStar");
const audios = document.getElementById('musicSurprice');
const audio = document.getElementById('background-audio');
let giftss = document.getElementById("openGift");
let offMusicsss = document.getElementById("offMusic");
let firstT = document.getElementById("fText");

starShow.style.display = "none";
divShow.style.display = "none";

let showss = 0;
let pauseMus = 0;

function showDivs(){
    if(showss == 0){
        divShow.style.display = 'block';
        starShow.style.display = 'block';
        audio.play().catch(error => {
            console.log('Audio play failed:', error);
        });
        showss = 1;
    }
    else{
        divShow.style.display = 'none';
        firstT.innerHTML = "I know this is late, but congratulations on passing this academic year. You did well, Eya. I'm so proud of you. Good luck, and do your best.";
        showss = 0;
    }
}

function playMusic(){
    if(pauseMus == 0){
        audio.pause();
        audios.play().catch(error => {
            console.log('Audio play failed:', error);
        });
        giftss.style.display = 'none';
        offMusicsss.style.display = 'block';
        firstT.innerHTML = "Gusto ko lang din sabihin na gusto kita matagal na"
        pauseMus = 1;
    }
    else{
        audio.play().catch(error => {
            console.log('Audio play failed:', error);
        });
        giftss.style.display = 'block';
        offMusicsss.style.display = 'none';
        audios.pause();
        audios.currentTime = 0;
        pauseMus = 0;
    }
}

audios.addEventListener('ended', () => {
    // Handle audios ended event
    audio.play().catch(error => {
        console.log('Audio play failed:', error);
    });
    giftss.style.display = 'block';
    offMusicsss.style.display = 'none';
    // firstT.innerHTML = "I know this is late but, congrats on passing this academic year. You did well, Eya. I'm so proud of you.";
});
