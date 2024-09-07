const Album = require("../models/albumModel")
const asyncHandler = require('express-async-handler')

// get
const getAlbums = asyncHandler(async (req, res) => {
    try {
        const album = await Album.find({})
        res.status(200).json(album)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

// show
const getAlbum = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        const album = await Album.findById(id)
        res.status(200).json(album)
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
        const album = await Album.findByIdAndUpdate(id, req.body)

        if (!album) {
            res.status(404)
            throw new Error(`cannot find album with ID ${id}`)
        }

        const updatedAlbum = await Album.findById(id)
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