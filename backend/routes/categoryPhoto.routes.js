let express = require('express');
let router = express.Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');

let categories = require('../models/categories');

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

router.route('/categoryPhotoUpload/update-category-photo/:id').put(upload.single('photo'),(req, res, next) => {
    categories.findByIdAndUpdate(req.params.id, {
    photo: req.body.photo
  }, (error, data) => {
    if (error) {
      console.log('Category photo updated error !')
      return next(error);
    } else {
      res.json(data)
      console.log('Category photo updated successfully !')
    }
  })
})
module.exports = router;