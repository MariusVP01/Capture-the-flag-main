const express = require('express');
const router = express.Router();
const path = require('path');

const publicvei = path.join(__dirname, 'Front');

// Landingsside med oppgaver
router.get('/ctf', (req, res) => {
  res.sendFile(path.join(publicvei, 'ctf.html'));
});

module.exports = router;
