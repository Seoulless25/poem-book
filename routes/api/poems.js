const express = require('express');
const router = express.Router();
const poemsCtrl = require('../../controllers/api/poems');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', ensureLoggedIn, poemsCtrl.create);

router.get('/', ensureLoggedIn, poemsCtrl.index);

router.delete('/:id', ensureLoggedIn, poemsCtrl.delete);

router.put('/:id', ensureLoggedIn, poemsCtrl.edit);

module.exports = router;