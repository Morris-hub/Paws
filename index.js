
document.addEventListener('DOMContentLoaded', function () {
  var currentIndex = 0;
  var menuItems = createMenuItems(); // Menüpunkte programmgesteuert erstellen

  // Fügt die aktive Klasse zum Startpunkt hinzu
  menuItems[currentIndex].classList.add('active');

  document.addEventListener('keydown', function (event) {
    // Entfernt die aktive Klasse von dem aktuellen Punkt
    menuItems[currentIndex].classList.remove('active');

    // Pfeiltaste nach unten
    if (event.keyCode === 40) {
      currentIndex = (currentIndex + 1) % menuItems.length;
      playSound("./sound/menu_select.mp3"); // Spielt den Ton ab

    }
    // Pfeiltaste nach oben
    else if (event.keyCode === 38) {
      currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
      playSound("./sound/menu_select.mp3"); // Spielt den Ton ab

    }
    // Enter-Taste
    else if (event.keyCode === 13) {
      redirectToNextWindow();

    }

    // Fügt die aktive Klasse zum ausgewählten Punkt hinzu
    menuItems[currentIndex].classList.add('active');

  });

  function playSound(sound = "") {
    /**
     * This method plays sounds from the soundfolder
     */
    // Audiowiedergabelogik hier einfügen
    // Erstellen Sie ein Audio-Element und spielen Sie den Ton ab
    // Beispiel: var audio = new Audio('sound.mp3');
    //          audio.play();

    var audio = new Audio(sound);
    audio.play();
  }

  function createMenuItems() {
    /**
     * This methode creates the menulist
     */
    var menu = document.createElement('ul');
    menu.id = 'menu';

    var menuOptions = [['Start Game', '/start'], ['Story-Mode', '/story'], ['Settings', '/settings']];

    for (var i = 0; i < menuOptions.length; i++) {
      var menuItem = document.createElement('li');
      menuItem.setAttribute('onclick', `redirectToNextWindow(${menuOptions[i][1]})`);
      menuItem.textContent = menuOptions[i][0];
      menuItem.id = menuOptions[i][0].toLowerCase();

      menu.appendChild(menuItem);
    }

    document.body.appendChild(menu);

    return document.querySelectorAll('#menu li');
  }

  function redirectToNextWindow(link) {
    /**
     * This method redirects to the next screen
     */
    playSound("./sound/confirm_select.mp3"); // Spielt den Ton ab
    window.location.href(link);
  }
});