const Song = require("../models/songModel")
const Album = require('../models/albumModel')
const asyncHandler = require('express-async-handler')

// get
const getSongs = asyncHandler(async (req, res) => {
    try {
        const songs = await Song.find({}).populate('album', 'name')
        res.status(200).json(songs)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

// show
const getSong = asyncHandler(async (req, res) => {
    try {
        const { title } = req.params;

        const song = await Song.findOne({ title })
            .populate({
                path: 'album',
                select: 'name year_released'
            });

        if (!song) {
            return res.status(404).json({ error: 'Song not found' });
        }

        res.status(200).json(song)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// create
const createSong = asyncHandler(async (req, res) => {
    try {
        const { title, duration, album } = req.body

        const existingAlbum = await Album.findById(album)
        if (!existingAlbum) {
            res.status(400)
            return res.status(400).json({ error: 'Album does not exist' });
        }

        const newSong = await Song.create({
            title,
            duration,
            album
        });

        res.status(201).json(newSong);
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

// update
const updateSong = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        const { album } = req.body

        const existingAlbum = await Album.findById(album);
        if (!existingAlbum) {
            res.status(400)
            throw new Error('Album does not exist')
        }

        const updatedSong = await Song.findByIdAndUpdate(id, req.body, { new: true })
        if (!updatedSong) {
            res.status(404);
            throw new Error(`Cannot find Song with ID ${id}`);
        }

        res.status(200).json(updatedSong);
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

// delete
const deleteSong = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        const song = await Song.findByIdAndDelete(id)

        if (!song) {
            res.status(404)
            throw new Error(`cannot find Song with ID ${id}`)
        }
        res.status(200).json(song)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

module.exports = {
    getSongs,
    getSong,
    createSong,
    updateSong,
    deleteSong,
}