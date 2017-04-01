var express = require('express');
var router = express.Router();
let passport = require('passport');
let jwt = require('jsonwebtoken');

var Bill = require('../models/Bill');
let config = require('../config');

router.get('/', function(req, res) {
  Bill.find({}, function(err, bills) {
    res.json(bills);
  });
});

// Register new bill
router.post('/register', function(req, res) {
  if (!req.body.name || !req.body.value || !req.body.expiresIn) {
    res.json({
      success: false,
      message: 'You need to fill all required fields.'
    });
  } else {
    let newBill = new Bill({
      name: req.body.name,
      value: req.body.value,
      expiresIn: req.body.expiresIn,
      description: req.body.description,
      sharedWith: req.body.sharedWith
    });
    // Attempt to save the bill
    newBill.save(function(err) {
      if (err) {
        return res.json({
          success: false,
          message: 'Error on saving new bill.'
        });
      }
      res.json({
        success: true,
        message: 'Successfully created new bill.'
      });
    });
  }
});

module.exports = router;