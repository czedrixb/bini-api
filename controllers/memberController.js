const Member = require("../models/memberModel")
const asyncHandler = require('express-async-handler')

// get
const getMembers = asyncHandler(async (req, res) => {
    try {
        const member = await Member.find({})
        res.status(200).json(member)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

// show
const getMember = asyncHandler(async (req, res) => {
    try {
        const { name } = req.params
        const member = await Member.findOne({ name })
        res.status(200).json(member)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

// create
const createMember = asyncHandler(async (req, res) => {
    try {
        const member = await Member.create(req.body)
        res.status(200).json(member)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

// update
const updateMember = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        const member = await Member.findByIdAndUpdate(id, req.body)

        if (!member) {
            res.status(404)
            throw new Error(`cannot find member with ID ${id}`)
        }

        const updatedMember = await Member.findById(id)
        res.status(200).json(updatedMember)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

// delete
const deleteMember = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        const member = await Member.findByIdAndDelete(id)

        if (!member) {
            res.status(404)
            throw new Error(`cannot find member with ID ${id}`)
        }
        return res.status(200).json(member)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

module.exports = {
    getMembers,
    getMember,
    createMember,
    updateMember,
    deleteMember,
}