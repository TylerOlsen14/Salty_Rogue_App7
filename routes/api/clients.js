const express = require('express');
const router = express.Router();

//Client Model - Help make queries
const Record = require('../../models/Record')

// adding a series of routes
// @route   GET api/items
// @desc    GET all Items
// @acces   Public
router.get('/', (req, res) => { //represents api/items (because we're already in that file)
  Record.find()
    .sort({ date: -1 })//sort descending
    .then(clients => res.json(clients))
})
// @route   POST api/items
// @desc    Create a client entry
// @acces   Public
router.post('/', (req, res) => { //represents api/items (because we're already in that file)
  const newRecord = new Record({
    name: req.body.name //name comes from a request
  })

  newRecord.save().then(record => res.json(record)); //save to the database, spit out JSON

})
module.exports = router