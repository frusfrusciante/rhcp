let cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let pics = ['ali.jpg', 'cobain.jpg', 'frus.webp', 'nn.jpg', 'patrick.jpg', 'vlad.jpg'];

let cardsFront = document.body.getElementsByClassName("front-face");
let cardsBack = document.body.getElementsByClassName("back-face");


for(let i = 0; i != 6; i++) {
    for(let j = 0; j != 2; j++) {
        let temp = cards[Math.floor(Math.random()*cards.length)];
        cardsFront[temp].src = './img/' + pics[i];
        cards.splice(cards.indexOf(temp), 1);
    }
}

let localScore = 0;
let localPic = '';
let localFunc = 0;
let globalScore = 0;

function end() {
    for(let i = 0; i != cardsBack.length; i++) {
        console.log(cardsBack[i]);
        cardsBack[i].style.opacity = '1.0';
    }

}

function start(st) {
    st.setAttribute('onclick', '');
    for(let i = 0; i != cardsBack.length; i++) {
        console.log(cardsBack[i]);
        cardsBack[i].style.opacity = '0.0';
        setTimeout(end, 3000);
    }
}

function backface(pic) {
    if (localScore == 0) {
        localPic = pic.parentElement.getElementsByClassName('front-face')[0].getAttribute("src");
        console.log(localPic);
        localFunc = pic;
        pic.style.opacity = "0";
        localScore += 1;
    }

    else if (localScore == 1) {
        function not_right() {
            pic.style.opacity = "1";
            localFunc.style.opacity = "1";
            localFunc = '';
            localPic = '';
        }

        if (pic.parentElement.getElementsByClassName('front-face')[0].getAttribute("src") == localPic) {
            localFunc.setAttribute('onclick', '');
            pic.setAttribute('onclick', '');
            pic.style.opacity = "0";
            localScore -= 1;
            globalScore += 1;
            if (globalScore == 6) alert('Победа');
            console.log(globalScore);
        }
        else {
            pic.style.opacity = "0";
            setTimeout(not_right, 1000);
            localScore = 0;
        }
    }
}