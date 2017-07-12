import express from 'express';
import eventController from '../controller/event';

const router = express.Router();


router.get('/', eventController.getEvent);
router.get('/event/:id', eventController.getSpecificEvent);
router.get('/event/:id', eventController.getEventByAttendOrg);
router.post('/event', eventController.createEvent);
router.put('/event/:id',eventController.updateEvent);
router.delete('/event/delete', eventController.deleteEvent);



export default router;



