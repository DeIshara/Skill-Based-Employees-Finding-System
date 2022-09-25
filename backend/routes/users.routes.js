
let express = require('express');
let router = express.Router();

// User Model
let users = require('../models/users');
const userSession = require('../models/userSession');

// sign up user process
router.route('/signUp').post((req, res, next) => {
  const {body} = req;
  const {
    username,
    password,
    con_password,
    account_type
  } = body;
  let {email} = body;
  if(!username) {
    return res.send({
      success: false,
      message: 'Error: User name cannot be blank'
    });
  }
  if(!email) {
    return res.send({
      success: false,
      message: 'Error: Email cannot be blank'
    });
  }
  if(!password) {
    return res.send({
      success: false,
      message: 'Error: Password cannot be blank'
    });
  }
  if(con_password !== password) {
    return res.send({
      success: false,
      message: 'Error: Confirm password not equal to password'
    });
  }
  email = email.toLowerCase();
  users.find({
    email: email,
  },
   (err, previousUsers) => {
     if (err) {
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
     } else if (previousUsers.length > 0) {
       return res.send({
        success: false,
        message: 'Error: Account already exists'
      });
     }
   })
  const newUser = new users();
  newUser.email = email;
  newUser.username = username;
  newUser.password = newUser.generateHash(password);
  newUser.account_type = account_type;
  newUser.save((err, user) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    }
    return res.send({
      success: true,
      message: 'Success: Signed up'
    });
  })
});

//sign in process 

router.route('/signIn').post((req, res, next) => {
  const {body} = req;
  const {
    // username,
    password,
  } = body;
  let {email} = body;
  // if(!username) {
  //   return res.send({
  //     success: false,
  //     message: 'Error: User name cannot be blank'
  //   });
  // }
  if(!email) {
    return res.send({
      success: false,
      message: 'Error: email cannot be blank'
    });
  }
  if(!password) {
    return res.send({
      success: false,
      message: 'Error: password cannot be blank'
    });
  }
  email = email.toLowerCase();
  users.find({
    email: email,
  },
   (err, userArray) => {
     if (err) {
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
     } else if (userArray.length !== 1) {
       return res.send({
        success: false,
        message: 'Error: Invalid Email Address'
      });
     }
     const user = userArray[0];
     if (!user.validPassword(password)) {
      return res.send({
        success: false,
        message: 'Error: Invalid Password'
      });
     }
     //otherwise correct user
     const user_session = new userSession();
     user_session.userId = user._id;
     user_session.save((err, doc) => {
       if (err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
       }
       return res.send({
        success: true,
        message: 'Success: Valid sign in',
        token: doc._id,
        userId: doc.userId,
        accType: user.account_type
      });

     })
  });
});     
//sign in verifing 
router.route('/user-verify').get((req, res, next) => {
  const {query} = req;
  const {token} =query;
  userSession.find({
    _id: token,
    isDeleted: false
  },
  (err, sessions) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Error: Server error',
      });
    }
    if (sessions.length !== 1) {
      return res.send({
        success: false,
        message: 'Error: Invalid',
      });
    } else {
      return res.send({
        success: true,
        message: 'Good',
      });
    }
  })
});
//logout process
router.route('/logout').get((req, res, next) => {
  const {query} = req;
  const {token} =query;
  userSession.findOneAndUpdate({
    _id: token,
    isDeleted: false
  },
  {
    $set: {
      isDeleted: true,
    }
  },null,
  (err, sessions) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Error: Server error',
      });
    }
    return res.send({
      success: true,
      message: 'logout from sign in',
    }); 
  })
});

//user details get
router.route('/users/get-users/:id').get((req, res, next) => {
  users.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

//user details get by account type
router.route('/users/get-users/finders/:type').get((req, res, next) => {
  users.find({ account_type: { $regex: new RegExp(req.params.type)}}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update employee
router.route('/users/update-user/:id').put((req, res, next) => {
  users.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('User details updated successfully !')
    }
  })
})

// Delete employee
router.route('/users/delete-user/:id').delete((req, res, next) => {
  users.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      return res.status(200).json({
        msg: data,
        message: "Successfully deleted user."
      })
    }
  })
})

module.exports = router;