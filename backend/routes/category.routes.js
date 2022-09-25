let express = require('express');
let router = express.Router();

// Employee Model
let categories = require('../models/categories');

// CREATE Employees
router.route('/categories/create-category').post((req, res, next) => {
  if(!req.body.categoryname) {
    return res.send({
      success: false,
      message: "Category name cannot be blank"
    });
  } else if(!req.body.categorydescription) {
    return res.send({
      success: false,
      message: "Category description cannot be blank"
    });
  }
  categories.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      // return res.json(data)
      return res.send({
        success: true,
        category: data.categoryname,
        message: "Successfully created category"
      });
    }
  })
});

// READ employees
router.route('/categories/get-categories').get((req, res, next) => {
  categories.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      return res.json(data)
    }
  })
})

// Get Single employee
router.route('/categories/edit-category/:id').get((req, res, next) => {
  categories.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      return res.json(data)
    }
  })
})


// Update employee
router.route('/categories/update-category/:id').put((req, res, next) => {
  categories.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log('Category updated successfully !');
      return res.json(data);
    }
  })
})

// Delete employee
router.route('/categories/delete-category/:id').delete((req, res, next) => {
  categories.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      return res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;