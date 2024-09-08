const Album = require("../models/albumModel")
const Song = require("../models/songModel")
const asyncHandler = require('express-async-handler')

// get
const getAlbums = asyncHandler(async (req, res) => {
    try {
        const albums = await Album.find({})

        const albumsWithSongs = await Promise.all(albums.map(async (album) => ({
            ...album.toObject(),
            songs: await Song.find({ album: album._id }, 'title duration')
        })));


        res.status(200).json(albumsWithSongs)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

// show
const getAlbum = asyncHandler(async (req, res) => {
    try {
        const { name } = req.params;
        const album = await Album.findOne({ name });

        if (!album) {
            return res.status(404).json({ error: 'Album not found' });
        }

        const songs = await Song.find({ album: album._id }, 'title duration');
        const albumWithSongs = {
            ...album.toObject(),
            songs
        };

        res.status(200).json(albumWithSongs)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

// create
const createAlbum = asyncHandler(async (req, res) => {
    try {
        const album = await Album.create(req.body)
        res.status(200).json(album)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

// update
const updateAlbum = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        const updatedAlbum = await Album.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedAlbum) {
            res.status(404)
            throw new Error(`cannot find album with ID ${id}`)
        }

        res.status(200).json(updatedAlbum)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

// delete
const deleteAlbum = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        const album = await Album.findByIdAndDelete(id)

        if (!album) {
            res.status(404)
            throw new Error(`cannot find album with ID ${id}`)
        }
        res.status(200).json(album)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

module.exports = {
    getAlbums,
    getAlbum,
    createAlbum,
    updateAlbum,
    deleteAlbum,
}