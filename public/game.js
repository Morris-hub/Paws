
let points = 0;
let catArmPositionX = -100;
let currentSecond = 0;
let mouseX = 0;



function createCatArm() {
    const clickX = event.clientX - 80;
    const clickY = event.clientY - 50;

    const catArm = document.createElement("div");
    catArm.style.width = "155px";
    catArm.style.height = "880px";
    catArm.id = "catArm";
    catArm.style.backgroundImage = "url('images/catPawSpotMini.png')";
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
    }, 700);
}

function hideCatArm(catArm) {
    catArm.style.display = "none";
}



function displayPoints(points) {

    const displayPoints = document.createElement('div');
    displayPoints.id = 'points';
    displayPoints.style.width = '10vh';
    displayPoints.style.height = '8vh';
    displayPoints.style.backgroundColor = 'red';
    displayPoints.style.display = 'block';
    displayPoints.style.position = 'absolute';
    displayPoints.style.right = '1vh';
    displayPoints.textContent = points;
    displayPoints.style.fontSize = '45px';
    displayPoints.style.color = 'white';
    displayPoints.style.textAlign = 'center';
    displayPoints.style.margin = '0';
    displayPoints.style.top = '1vh';
    document.body.appendChild(displayPoints);


    //console.log(points);
}
function createFly() {
    const Fly = document.createElement('div');
    Fly.id = 'shitFly';
    Fly.style.width = '30px';
    Fly.style.height = '30px';
    Fly.style.borderRadius = '50%';
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
    timerDisplay.style.backgroundColor = 'red';
    timerDisplay.style.fontSize = '5vh';
    timerDisplay.style.color = 'white';
    timerDisplay.style.textAlign = 'center';
    timerDisplay.style.margin = '0';
    timerDisplay.style.top = '1vh';
    timerDisplay.style.position = 'absolute';
    timerDisplay.style.left = '1vh';
    document.body.appendChild(timerDisplay);
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
    displayTimer();

    if (currentSecond === 5) {
        clearInterval(timerInterval);
        let arm = document.getElementById('catArm');
        arm.style.backgroundColor = 'green';
        // alert('Timer abgelaufen!'); 
    }
}, 1000);

document.addEventListener("click", function (event) {
    createpawPrint();
    createCatArm();

    const mouseX = event.clientX;
    const mouseY = event.clientY;
    console.log(mouseX, mouseY);

});




//displayTimer();
createFly(); //creates the first Fly
setInterval(moveFly, 2000);
displayPoints();

