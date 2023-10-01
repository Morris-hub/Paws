let points = 0;

function displayPoints(points) {

    const displayPoints = document.createElement('div');
    displayPoints.id = 'points';
    displayPoints.style.width = '10vh';
    displayPoints.style.height = '5vh';
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


    console.log(points);
}

function displayHP(hp) {
    const pointsSpan = document.getElementById('HP');
    pointsSpan.textContent = hp;
}

function createFly() {
    const Fly = document.createElement('div');
    Fly.id = 'shitFly';
    Fly.style.width = '30px';
    Fly.style.height = '30px';
    Fly.style.backgroundColor = 'red';
    Fly.style.display = 'block';
    Fly.style.transition = 'all 1.5s ease-in-out';
    Fly.style.position = 'absolute';
    Fly.style.left = Math.floor(Math.random() * 1800) + 'px';
    Fly.style.top = Math.floor(Math.random() * 1000) + 'px';
    document.body.appendChild(Fly);

    Fly.addEventListener('click', function () {
        playFlySound(); //Death sound
        Fly.remove();
        points++; // Erhöhe die Punktzahl beim Entfernen der Fliege
        displayPoints(points); // Aktualisiere die Anzeige der Punktzahl
        createFly();
    });

    setInterval(moveFly, 2000);

}

function moveFly() {
    const Fly = document.getElementById('shitFly');
    const maxWidth = window.innerWidth - 100; // Subtract 100 to keep the square within the viewport.
    const maxHeight = window.innerHeight - 100; // Subtract 100 to keep the square within the viewport.
    const newLeft = Math.floor(Math.random() * maxWidth) + 'px';
    const newTop = Math.floor(Math.random() * maxHeight) + 'px';

    Fly.style.left = newLeft;
    Fly.style.top = newTop;

    const elementToChangeCursor = document.body;

    elementToChangeCursor.style.cursor = "pointer";
}

// Function to track mouse movement and update Fly position.
function movePlayer(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

}

function cursor() {
    // Holen Sie sich das HTML-Element, auf dem Sie den Cursor ändern möchten, z.B. den Body
    const elementToChangeCursor = document.body;

    // Ändern Sie den Cursor auf "pointer" (Handzeiger) beim Überfahren des Elements
    elementToChangeCursor.style.cursor = "pointer";

}
// Function to play the sound when the Fly is removed.
function playFlySound() {
    const flySound = document.getElementById('flySound');
    if (flySound) {
        flySound.currentTime = 0; // Rewind the sound to the beginning.
        flySound.playbackRate = 2.0; // Set the playback rate to 2x (twice as fast).
        flySound.play(); // Play the sound.
    }
}

//Timer

// Aktuelle Sekunde
let currentSecond = 0;

// Funktion, um den Timer anzuzeigen
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

function cursor() {
    const cursor = document.createElement('div')
}

function cat() {
    const cat = document.createElement('div');
    cat.style.width = '10vh';
    cat.style.height = '6vh';
    cat.style.backgroundColor = 'red';
    cat.style.color = 'white';
    cat.style.textAlign = 'center';
    cat.style.margin = '0';
    cat.style.bottom = '1vh';
    cat.style.position = 'absolute';
    cat.style.right = '1vh';
    document.body.appendChild(cat);
}
// Starten Sie den Timer und aktualisieren Sie ihn alle 1000 Millisekunden (1 Sekunde)
const timerInterval = setInterval(() => {
    currentSecond++;
    displayTimer();

    // Wenn die Ziel-Sekunde erreicht wurde, beenden Sie den Timer
    if (currentSecond === 30) {
        clearInterval(timerInterval);
        alert('Timer abgelaufen!'); // Hier können Sie eine beliebige Aktion ausführen, wenn der Timer abgelaufen ist.
    }
}, 1000);


// Event-Listener hinzufügen, um auf Mausklicks zu reagieren
document.addEventListener("click", function (event) {
    // Mausposition ermitteln
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Neues <div>-Element erstellen
    const newDiv = document.createElement('div');
    newDiv.style.width = '120px'; // Breite des <div>-Elements anpassen
    newDiv.style.height = '80px'; // Höhe des <div>-Elements anpassen
    newDiv.style.position = 'absolute';
    newDiv.style.backgroundSize = 'cover';
    newDiv.style.backgroundImage = "url('images/pawPrint.png')";
    newDiv.style.left = mouseX + 'px'; // Position horizontal einstellen
    newDiv.style.top = mouseY + 'px'; // Position vertikal einstellen

    // Das <div>-Element dem Body der Seite hinzufügen
    document.body.appendChild(newDiv);
});


// Initialanzeige des Timers
displayTimer();
createFly();
cat();
setInterval(moveFly, 2000);
displayPoints();

// Add a mousemove event listener to the document to track mouse movement.
document.addEventListener('mousemove', movePlayer);
