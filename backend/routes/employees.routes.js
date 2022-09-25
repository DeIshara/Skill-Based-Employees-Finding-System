let express = require('express');
let router = express.Router();

// Employee Model
let employees = require('../models/employees');

// CREATE Employees
router.route('/employees/create-employee').post((req, res, next) => {
  employees.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      // console.log(data)
      // return res.json(data)
      return res.send({
        // success: true,
        id: data._id,
        message: "Successfully created employee."
      });
    }
  })
});

// READ employees
router.route('/employees/get-employees').get((req, res, next) => {
  employees.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      return res.json(data)
    }
  })
})

// Get Single employee
router.route('/employees/edit-employee/:id').get((req, res, next) => {
  employees.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      return res.json(data)
    }
  })
})
// Get category related employees
router.route('/employees/get-employees/selected/:category').get((req, res, next) => {
  employees.find({ seleCategoryName: { $regex: new RegExp(req.params.category)}},(error, data) => {
    if (error) {
      return next(error)
    } else {
      return res.json(data)
    }
  })
})
// Get employee by userid
router.route('/employees/get-employees/categorized/:userid').get((req, res, next) => {
  employees.find({ employeeId: { $regex: new RegExp(req.params.userid)}},(error, data) => {
    if (error) {
      return next(error)
    } else {
      return res.json(data)
    }
  })
})

// Update employee
router.route('/employees/update-employee/:id').put((req, res, next) => {
  employees.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      console.log("employee update error");
      return next(error);
    } else {
      console.log('employee updated successfully !');
      return res.send({
        // success: true,
        message: "Successfully updated employee."
      });
    }
  })
})

// Delete employee
router.route('/employees/delete-employee/:id').delete((req, res, next) => {
  employees.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      return res.status(200).json({
        msg: data,
        message: "Successfully deleted employee."
      })
    }
  })
})

module.exports = router;