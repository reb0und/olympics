// stuff here can be called from the html
let carousel = 1;

const sleep = ms => new Promise(res => setTimeout(res, ms));

let tmg = document.getElementById('m-img');
let gamename = document.getElementById('gamename');
let gamedes = document.getElementById('gamedes');
let gameselect = document.getElementById('gameselect');


function createRandomCode(){
    
    // get random thing

    fetch(("https://newmicro-1-b9063375.deta.app/?INKBALLGET=valid&map=all"))
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);

        data = data.items;

        thedata = data;
    });

    return "ABCDEF";
}

async function enlarge(){
    let i = 0;
    while (i < 100){
        tmg.style.width = (i/100)*170+"px";
        tmg.style.marginTop = (50-i/2)+"px";
        i += 3.5;
        await sleep();
    }
}

async function shrink(){
    let i = 0;
    while (i < 100){
        tmg.style.width = (1-i/100)*170+"px";
        tmg.style.marginTop = i/2+"px";
        i += 3.5;
        await sleep();
    }
}

async function newimg(){
    let rootURL = window.location.href;
    rootURL = rootURL.replace("/web",'');

    rootURL = rootURL.replace("/static/index.html",'');

    if (carousel == 0){
        tmg.src = "../assets/images/badminton.png";
        gamename.textContent = "Badminton";
        gamedes.textContent = "Play 1v1 Badminton!";
        gameselect.onclick = function() {window.location = rootURL+"/room/badminton";};

    } else if (carousel == 1){
        tmg.src = "../assets/images/tennis.png";
        gamename.textContent = "Tennis";
        gamedes.textContent = "Play 1v1 Tennis!";
        gameselect.onclick = function() {window.location = rootURL+"/room/tennis";};

    } else if (carousel == 2){
        tmg.src = "../assets/images/table.png";
        gamename.textContent = "Table Tennis";
        gamedes.textContent = "Play 1v1 Table Tennis!";
        gameselect.onclick = function() {window.location = rootURL+"/room/tableTennis";};

    } else if (carousel == 3){
        tmg.src = "../assets/images/soccer.png";
        gamename.textContent = "Soccer";
        gamedes.textContent = "Play 1 player Soccer!";
        gameselect.onclick = function() {window.location = rootURL+"/room/soccer";};

    } else if (carousel == 4){
        tmg.src = "../assets/images/boxing.png";
        gamename.textContent = "Boxing";
        gamedes.textContent = "Play 1v1 Boxing!";
        gameselect.onclick = function() {window.location = rootURL+"/room/boxing";};
    }
}

async function fadetextout(){
    let i = 100;
    while (i > 0){
        gamename.style.opacity = i/100;
        gamename.style.marginTop = (100-i)*2.5+'px';
        gamedes.style.opacity = i/100;
        gamedes.style.marginTop = (100-i)+15+'px';
        gameselect.style.opacity = i/100;
        gameselect.style.marginTop = (100-i)+'px';
        i -= 3;
        await sleep();
    }
}

async function fadetextin(){
    let i = 0;
    while (i < 100){
        gamename.style.opacity = i/100;
        gamename.style.marginTop = (100-i)*2.5+'px';
        gamedes.style.opacity = i/100;
        gamedes.style.marginTop = (100-i)+15+'px';
        gameselect.style.opacity = i/100;
        gameselect.style.marginTop = (100-i)+'px';
        i += 3;
        await sleep();
    }
}


function movecarousel(d){

    let i = 0;

    (async () => {
        fadetextout();
        await shrink();
        await newimg();
        await enlarge();
        fadetextin();
    })();

    if (d == 'right'){
        carousel += 1;
        if (carousel >= 5){
            carousel = 0;
        }
    } else {
        carousel -= 1;
        if (carousel < 0){
            carousel = 4;
        }
    }
}

movecarousel('right');
movecarousel('left');