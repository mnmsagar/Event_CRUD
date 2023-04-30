const express= require('express');
const { addEvent, getByID, getAll, deletebyID, updatebyId } = require('../controllers/controllers');


const router = express.Router();

router.route('/events/:id').get(getByID).put(updatebyId).delete(deletebyID);
router.route('/events').post(addEvent).get(getAll);

module.exports ={
    router
}
