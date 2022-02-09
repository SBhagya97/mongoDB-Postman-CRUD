const express = require('express')
    //const { Module } = require('module')
const router = express.Router()
const { getGoal, setGoal, updateGoal, deleteGoal } = require('../controller/goalController')
router.route('/').get(getGoal).post(setGoal) //alternative way of routing
router.route('/:id').delete(deleteGoal).put(updateGoal)

// router.get('/', getGoal)

// router.post('/', setGoal)

// router.put('/:id', updateGoal)

// router.delete('/:id', deleteGoal)


module.exports = router