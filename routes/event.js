import express from 'express';
import eventController from '../controller/event';

/* middleware for file handling en route to cloudinary */
import multer from 'multer';
const upload = multer({ dest: './uploads/' });

const router = express.Router();

router.get('/event', eventController.getAllEvents);
router.get('/event/:id', eventController.getEvent);
router.post('/event', eventController.createEvent);
router.put('/event/:id',eventController.updateEvent);
router.delete('/event/delete', eventController.deleteEvent);



export default router;



