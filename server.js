const express = require('express');
const server = express();
const PORT = 3000;

server.use(express.static('./public'));

server.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
server.get('/start', (req, res) => res.redirect('game.html'));
server.get('/settings', (req, res) => res.redirect('settings.html'));
server.get('/story', (req, res) => res.redirect('story.html'));

server.listen(PORT, () => console.log(`App listening on http://localhost:${PORT}`));
