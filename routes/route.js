const express= require('express');
const { addEvent, getByID, getAll, deletebyID, updatebyId } = require('../controllers/controllers');


const router = express.Router();

router.route('/events/:id').get(getByID).delete(deletebyID).put(updatebyId);
router.route('/events').post(addEvent);
// router.route('/events/:l').get(getAll)

module.exports ={
    router
}


// 