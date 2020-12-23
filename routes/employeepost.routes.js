let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Employee Model
let employeesSchema = require('../models/employees');

// CREATE Employees
router.route('/create-employee').post((req, res, next) => {
  employeesSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ employees
router.route('/').get((req, res) => {
  employeesSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single employee
router.route('/edit-employee/:id').get((req, res) => {
  employeesSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update employee
router.route('/update-employee/:id').put((req, res, next) => {
  employeesSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('employee updated successfully !')
    }
  })
})

// Delete employee
router.route('/delete-employee/:id').delete((req, res, next) => {
  employeesSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;