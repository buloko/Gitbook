const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// Set up GET all and POST at /api/users
router
    .route('/')
    .get(getAllUser)
    .post(createUser);


// Set up GET one, PUT, and DELETE at /api/users/:id
router
    .route('/:id')
    .get()
    .put()
    .delete();

// /api/Users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);


  // add and delete friends to users
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);


module.exports = router;