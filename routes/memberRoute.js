const express = require("express")
const router = express.Router()
const memberController = require('../controllers/memberController')

router.route('/')
    .get(memberController.getMembers)
    .post(memberController.createMember)

router.route('/:name')
    .get(memberController.getMember)

router.route('/:id')
    .put(memberController.updateMember)
    .delete(memberController.deleteMember)

module.exports = router