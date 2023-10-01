const game = require('./game.js');


const game = new Game();
game.createFly();
game.setInterval(moveFly, 1500); // Move the square every 2 seconds (2000 milliseconds).
game.displayPoints();

// Add a mousemove event listener to the document to track mouse movement.
document.addEventListener('mousemove', movePlayer);
