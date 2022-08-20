const express = require('express');
const router = express.Router();
const notesRoutes = require('./notesRoute');

router.use('/api', notesRoutes);

module.exports = router;