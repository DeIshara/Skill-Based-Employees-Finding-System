let express = require('express');
let router = express.Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');

let employeepost = require('../models/employeeposts');

// Upload users photo
const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//       cb(null, 'images');
//   },
  filename: function(req, file, cb) {   
      cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if(allowedFileTypes.includes(file.mimetype)) {
      cb(null, true);
  } else {
      cb(null, false);
  }
}

let upload = multer({ storage, fileFilter });
router.route('/employees/create-employeePost').post(upload.single('photo'),(req, res, next) => {
  employeepost.create(
  req.body
, (error, data) => {
  if (error) {
    console.log('Employee post created error !')
    return next(error);
  } else {
    res.json(data)
    console.log('Employee post created successfully !')
  }
})
})

// router.route('/categoryPhotoUpload/update-category-photo/:id').put(upload.single('photo'),(req, res, next) => {
//     employeepost.findByIdAndUpdate(req.params.id, {
//     photo: req.body.photo
//   }, (error, data) => {
//     if (error) {
//       console.log('Category photo updated error !')
//       return next(error);
//     } else {
//       res.json(data)
//       console.log('Category photo updated successfully !')
//     }
//   })
// })

// READ employees
router.route('/employees/get-employeePost').get((req, res, next) => {
  employeepost.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      return res.json(data)
    }
  })
})

// Delete employee
router.route('/employeesposts/delete-post/:id').delete((req, res, next) => {
  employeepost.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      return res.status(200).json({
        msg: data,
        message: "Successfully deleted employee post."
      })
    }
  })
})
module.exports = router;