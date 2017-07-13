
import express from 'express';
import Event from '../model/event';

const router = express.Router();

/*Send Transaction information from database to frontend*/
router.get('/', (req, res, next) => {
  Event.find({}, (err, event) => {
    res.json(event);
  });

});

router.post('/', (req, res, next) => {
    const event = new Event();
    event.name = req.name
    event.save();

})

/*
 *  Create
 */
 router.post('/', (req, res, next) => {

    const event = new Event();
    event.name = req.body.name || "Unknown";
    event.venue = req.body.venue || "Unknown";
    event.joinedIndividual = req.body.joinedIndividual || "-1";
    event.imageURL = req.body.imageURL || "Unknown";
    event.details = req.body.details || "-1";
    event.save((err, event) => {
         res.json(event);
    });
 });
/*
  *  Read
  */
  router.get('/:id', (req, res, next) => {

    const id = req.params.id;
    Event.findById(id, (err, event) => {
      if (err) return res.status(404).send('Not found');
      res.json(event);
    });
  });



export default router;
