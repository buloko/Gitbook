const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    addThought,
    removeThought,
    addReaction,
    removeReaction,
    updateThought
} = require('../../controllers/thoughtController');


router
    .route('/')
    .get(getAllThought)
    .post(addThought)


router
    .route('/:thoughtId')
    .get(getThoughtById)
    .delete(removeThought)
    .put(updateThought);


router.route('/:UserId').post(addThought);


router
    .route('/:userId/:thoughtId')
    .put(addReaction)
    .delete(removeReaction);


router
    .route('/:thoughtId/reactions')
    .post(addReaction);


router
.route('/:thoughtId/reactions/:reactionId')
.delete(removeReaction);



module.exports = router;