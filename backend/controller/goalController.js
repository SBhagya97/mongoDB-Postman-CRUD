 const asyncHadler = require('express-async-handler')
     //@desc Get goal
     //@route GET/api/goals
     //@access private
 const getGoal = asyncHandler(async(req, res) => {
     res.status(200).json({ message: 'Get goals' })
 })

 //@desc Set goal
 //@route POST/api/goals
 //@access private
 const setGoal = asyncHandler(async(req, res) => {
     if (!req.body.text) {
         res.status(400)
         throw new Error('Please add a text')
     }

     console.log(req.body)
     res.status(200).json({ message: 'Set goals' })
 })

 //@desc update goals
 //@route PUT/api/goals/:id
 //@access private
 const updateGoal = asyncHandler(async(req, res) => {
     res.status(200).json({ message: `Update goal ${req.params.id}` })
 })

 //@desc Delete goals
 //@route GET/api/goals
 //@access private
 const deleteGoal = asyncHandler(async(req, res) => {
     res.status(200).json({ message: `Delete goal ${req.params.id}` })
 })



 module.exports = {
     getGoal,
     setGoal,
     updateGoal,
     deleteGoal
 }