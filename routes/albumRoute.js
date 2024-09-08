const express = require("express")
const router = express.Router()
const albumController = require('../controllers/albumController')

router.route('/')
    .get(albumController.getAlbums)
    .post(albumController.createAlbum);

router.route('/:name')
    .get(albumController.getAlbum)

router.route('/:id')
    .put(albumController.updateAlbum)
    .delete(albumController.deleteAlbum);

module.exports = router