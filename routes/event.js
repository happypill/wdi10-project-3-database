
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
    event.name = req.name;
    event.save();
});

/*
 *  Create
 */
 router.post('/', (req, res, next) => {
    const event = new Event();
    event.name = req.body.name || "Unknown";
    event.venue = req.body.venue || "Unknown";
    event.attending = req.body.organiser|| "-1";
    event.start = req.body.start || "Unknown";
    event.end = req.body.end || "-1";
    event.details = req.body.details
    event.save((err, event) => {
         res.json(event);
    });
 });
/*
  *  Read
  */
  router.get('/event/:id', (req, res, next) => {

    const id = req.params.id;
    Event.findById(id, (err, event) => {
      if (err) return res.status(404).send('Not found');
      res.json(event);
    });
  });
/*
   *  Update
   */
router.put('/event/:id', (req, res, next) => {
 console.log("Got PUT Request");

 const event = req.body.event;

 Event.findById(event._id, (err, foundEvent) => {
    if (err) return res.status(400).send('Bad Request');

    if(!foundCar){
      return res.status(404).send('Not Found');
    }

    foundEvent.name = event.name;
    foundEvent.venue = event.venue;
    foundEvent.attending = event.attending;
    foundEvent.start = event.start;
    foundEvent.end = event.end;
    foundEvent.details = event.details;

    foundEvent.save((err, foundEvent)=> {
      if (err) return res.status(400).send('Bad Request');
      res.json(foundEvent);
    });
 });
});
/*
 *  Delete
*/
 router.delete('/event/:id', (req, res, next) => {
   const id = req.params.id;
   Event.findById(id, (err, event) => {
     if (err) return res.status(400).send('Bad Request');
     if(!event){
       return res.status(404).send('Not Found');
     }
     event.remove();
     res.json("ok");
   });
 });

export default router;
