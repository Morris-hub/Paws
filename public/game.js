
let points = 0;
let catArmPositionX = -100;
let currentSecond = 0;
let mouseX = 0;



function createCatArm() {

    const clickX = event.clientX - 80;
    const clickY = event.clientY - 50;

    const catArm = document.createElement("div");
    catArm.style.width = "160px";
    catArm.style.height = "890px";
    catArm.id = "catArm";
    catArm.style.backgroundImage = "url('images/catPawSpotMini.png')";
    catArm.style.backgroundSize = "cover";
    catArm.style.backgroundRepeat = "no-repeat";
    catArm.style.display = "block";
    catArm.style.position = "absolute";
    catArm.style.zIndex = "3";
    catArm.style.left = clickX + "px";
    catArm.style.top = clickY + "px";
    catArm.style.bottom = "0";

    document.body.appendChild(catArm);

    // Rufe die hideCatArm-Funktion nach 2 Sekunden auf
    setTimeout(function () {
        hideCatArm(catArm);
    }, 600);
}

function hideCatArm(catArm) {
    catArm.style.display = "none";
}

function displayHealthPoints() {

    const displayPoints = document.createElement('div');
    displayPoints.id = 'points';
    displayPoints.style.width = '15vh';
    displayPoints.style.height = '6vh';;
    displayPoints.style.backgroundColor = 'beige';
    displayPoints.style.boxShadow = ' -5px 5px 0px black';
    displayPoints.style.borderRadius = '15px';
    displayPoints.style.display = 'block';
    displayPoints.style.fontFamily = 'Monospace'
    displayPoints.style.position = 'absolute';
    displayPoints.style.right = '1vh';
    displayPoints.textContent = "HP:3";
    displayPoints.style.fontSize = '45px';
    displayPoints.style.color = 'black';
    displayPoints.style.textAlign = 'center';
    displayPoints.style.top = '10vh';
    document.body.appendChild(displayPoints);
}

function displayPoints(points) {

    const displayPoints = document.createElement('div');
    displayPoints.id = 'points';
    displayPoints.style.width = '10vh';
    displayPoints.style.height = '6vh';;
    displayPoints.style.backgroundColor = 'beige';
    displayPoints.style.boxShadow = ' -5px 5px 0px black';
    displayPoints.style.borderRadius = '15px';
    displayPoints.style.display = 'block';
    displayPoints.style.fontFamily = 'Monospace'
    displayPoints.style.position = 'absolute';
    displayPoints.style.right = '1vh';
    displayPoints.textContent = points;
    displayPoints.style.fontSize = '45px';
    displayPoints.style.color = 'black';
    displayPoints.style.textAlign = 'center';
    displayPoints.style.margin = '0';
    displayPoints.style.top = '1vh';
    document.body.appendChild(displayPoints);

}


function createFly() {
    const Fly = document.createElement('div');
    Fly.id = 'shitFly';
    Fly.style.width = '60px';
    Fly.style.height = '60px';
    Fly.style.borderRadius = '50%';
    Fly.style.filter = 'blur(2px)'
    Fly.style.backgroundColor = 'red';
    Fly.style.zIndex = '1';
    Fly.style.display = 'block';
    Fly.style.transition = 'all 1.5s ease-in-out';
    Fly.style.position = 'absolute';
    Fly.style.left = Math.floor(Math.random() * 1800) + 'px';
    Fly.style.top = Math.floor(Math.random() * 1000) + 'px';
    document.body.appendChild(Fly);

    Fly.addEventListener('click', function () {
        playFlySound();
        Fly.remove();
        points++;
        displayPoints(points);
        createFly();
    });

    setInterval(moveFly, 2000);

}


function createGround() {
    const Ground = document.createElement('div');
    Ground.id = 'Ground';
    Ground.style.width = '100%';
    Ground.style.height = '1vw';
    Ground.style.backgroundColor = 'red';
    Ground.style.zIndex = '1';
    Ground.style.display = 'block';
    Ground.style.position = 'absolute';
    Ground.style.left = '0px';
    Ground.style.bottom = '0px';
    document.body.appendChild(Ground);
}


function finishScreen() {
    const finishScreen = document.createElement('div');
    finishScreen.style.width = '100%';
    finishScreen.style.height = '100%';
    finishScreen.style.backgroundColor = 'black';
    finishScreen.style.opacity = 'blur(8px)';
    finishScreen.style.zIndex = '10';
    document.body.appendChild(finishScreen);
}

function moveBooster() {
    const Fly = document.getElementById('booster');
    const maxWidth = window.innerWidth - 100;
    const maxHeight = window.innerHeight - 100;
    const newLeft = Math.floor(Math.random() * maxWidth) + 'px';
    const newTop = Math.floor(Math.random() * maxHeight) + 'px';

    Fly.style.left = newLeft;
    Fly.style.top = newTop;

    const elementToChangeCursor = document.body;
    elementToChangeCursor.style.cursor = "pointer";
}

function moveFly() {
    const Fly = document.getElementById('shitFly');
    const maxWidth = window.innerWidth - 100;
    const maxHeight = window.innerHeight - 100;
    const newLeft = Math.floor(Math.random() * maxWidth) + 'px';
    const newTop = Math.floor(Math.random() * maxHeight) + 'px';

    Fly.style.left = newLeft;
    Fly.style.top = newTop;

    const elementToChangeCursor = document.body;
    elementToChangeCursor.style.cursor = "pointer";
}

function moveKonpeito() {
    const Konpeito = document.getElementById('konpeito');
    const maxWidth = window.innerWidth - 100;
    const newLeft = Math.floor(Math.random() * maxWidth) + 'px';
    const newTop = '-100px'; // Startposition oberhalb des Bildschirms

    Konpeito.style.left = newLeft;
    Konpeito.style.top = newTop;

    const animationDuration = 2000; // Dauer der Animation in Millisekunden
    const animationFrames = 180; // Anzahl der Animationsschritte
    const stepX = (parseInt(newLeft) - parseInt(Konpeito.style.left)) / animationFrames;
    const stepY = (window.innerHeight + 100) / animationFrames; // Y-Schritt für das Herunterfallen

    let frameCount = 0;
    const animate = () => {
        frameCount++;
        Konpeito.style.left = (parseInt(Konpeito.style.left) + stepX) + 'px';
        Konpeito.style.top = (parseInt(Konpeito.style.top) + stepY) + 'px';

        if (frameCount < animationFrames) {
            requestAnimationFrame(animate);
        }
    };
    Konpeito.addEventListener('click', function () {
        playFlySound();
        Konpeito.remove();
        points--;
        createKonpeito();
    });
    animate();
}


function playFlySound() {
    const flySound = document.getElementById('flySound');
    if (flySound) {
        flySound.currentTime = 0;
        flySound.playbackRate = 2.0;
        flySound.play();
    }
}


function displayTimer() {
    const timerDisplay = document.createElement('div');
    timerDisplay.textContent = currentSecond;
    timerDisplay.style.width = '10vh';
    timerDisplay.style.height = '6vh';
    timerDisplay.style.backgroundColor = 'beige';
    timerDisplay.style.borderRadius = '15px';
    timerDisplay.style.fontFamily = 'Monospace'
    timerDisplay.style.fontSize = '5vh';
    timerDisplay.style.color = 'black';
    timerDisplay.style.textAlign = 'center';
    timerDisplay.style.boxShadow = "-5px 5px 0px black";
    timerDisplay.style.margin = '0';
    timerDisplay.style.top = '1vh';
    timerDisplay.style.position = 'absolute';
    timerDisplay.style.left = '1vh';
    document.body.appendChild(timerDisplay);
}

function createBooster() {
    const booster = document.createElement('div');
    booster.id = 'booster';
    booster.style.width = '100px';
    booster.style.height = '100px';
    booster.style.borderRadius = '50%';
    booster.style.backgroundColor = 'red';
    booster.style.zIndex = '1';
    booster.style.display = 'block';
    booster.style.position = 'absolute';
    // booster.style.transition = 'all 1.5s ease-in-out';
    booster.style.left = Math.floor(Math.random() * 1800) + 'px';
    booster.style.top = Math.floor(Math.random() * 1000) + 'px';
    document.body.appendChild(booster);

    booster.addEventListener('click', function () {
        clearInterval(boosterInterval);
        booster.remove();
        createBooster();
    });

    let boosterInterval = setInterval(moveBooster, 2000);

}

function createKonpeito() {

    const konpeito = document.createElement('div');
    konpeito.id = 'konpeito';
    konpeito.style.width = '50px';
    konpeito.style.height = '50px';
    konpeito.style.borderRadius = '50%';
    konpeito.style.backgroundColor = 'pink';
    konpeito.style.zIndex = '1';
    konpeito.style.display = 'block';
    konpeito.style.position = 'absolute';
    konpeito.style.left = '50%';
    konpeito.style.top = '1';
    document.body.appendChild(konpeito);

    setInterval(moveKonpeito, 2000)
}

function createpawPrint() {
    const mouseX = event.clientX - 60;
    const mouseY = event.clientY;


    const pawPrint = document.createElement('div');
    pawPrint.style.width = '120px';
    pawPrint.style.height = '80px';
    pawPrint.style.position = 'absolute';
    pawPrint.style.zIndex = '0';
    pawPrint.style.backgroundSize = 'cover';
    pawPrint.style.backgroundImage = "url('images/pawPrint.png')";
    pawPrint.style.left = mouseX + 'px';
    pawPrint.style.top = mouseY + 'px';

    document.body.appendChild(pawPrint);
}

const timerInterval = setInterval(() => {
    currentSecond++;
    //displayTimer();

    if (currentSecond === 5) {
        clearInterval(timerInterval);
        finishScreen();
    }
}, 2000);

document.addEventListener("click", function (event) {
    createpawPrint();
    createCatArm();

    const mouseX = event.clientX;
    const mouseY = event.clientY;
    console.log(mouseX, mouseY);

});



console.log("game.js loaded");
displayTimer();
createFly();
moveFly();
setInterval(moveFly, 2000);
createKonpeito();
moveKonpeito;
displayPoints();
displayHealthPoints();
createBooster();
createGround();
