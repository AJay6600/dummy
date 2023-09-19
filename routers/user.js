const express= require('express')
const { getAll, getOne} = require('../controller/userController')
const router= express.Router();


// get  all the Workout
router.get('/', getAll)

// get Specific Workout
router.get('/:id',getOne)


module.exports = router