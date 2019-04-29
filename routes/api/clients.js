const express = require('express');
const router = express.Router();

//Client Model - Help make queries
const Client = require('../../models/Record')

// adding a series of routes
// @route   GET api/items
// @desc    GET all Items
// @acces   Public
router.get('/', (req, res) => { //represents api/items (because we're already in that file)
  Client.find()
    .sort({ date: -1 })//sort descending
    .then(clients => res.json(clients))
})
module.exports = router