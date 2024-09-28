// backend/routes/scriptRoutes.js
const express = require('express');
const router = express.Router();
const scriptController = require('../controllers/scriptController');

router.post('/scripts', scriptController.createScript);
router.get('/scripts', scriptController.getAllScripts);
router.get('/scripts/:id', scriptController.getScriptById);
router.put('/scripts/:id', scriptController.updateScript);
router.delete('/scripts/:id', scriptController.deleteScript);

module.exports = router;
