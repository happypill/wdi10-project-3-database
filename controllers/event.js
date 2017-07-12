import Event from '../model/Event';
import User from '../model/User';


/*
* Get books
*/
exports.getAllEvents = (req, res, next) => {

  console.log("Request All Events");

  Event.find()
    .populate('attending')
    .populate('organiser')
    .exec((err, event) => {
      if (err) return res.status(404).send('Not found');
      res.json(event);
    });
}

/*
*  Get a book
*/
exports.getEvent = (req, res, next) => {

  console.log("Request one Event");

  const id = req.params.id;
  Event.findById(id)
    .populate('attending')
    .populate('organiser')
    .exec((err, event) => {
      if (err) return res.status(404).send('Not found');
      res.json(event);
    });
}


/*
*  Create Event, update User with Organiser
*/
exports.createEvent= (req, res, next) => {

  console.log("Create Event : Add Organiser to User");

 
    const event = new Event();
    event.name = req.body.name || "Unknown";
    event.venue = req.body.venue || "Unknown";
    event.start = req.body.start || "-1";
    event.end = req.body.end || "Unknown";
    event.details = req.body.details || "-1";
      event.save((err, event) => {

        /* Update user model with Organiser  */
        const user = req.user;
        console.log("Add Organiser to User Model);
        console.log(user);

        User.findById(user._id, (err, foundUser) => {
          if (err) return res.status(400).send('Bad Request');

          if(!foundUser){
            return res.status(404).send('User not Found');
          }

          foundUser.organiser.push(user._id);
          foundUser.save( (err, savedUser) => {
            if (err) return res.status(400).send('Bad Request');
            console.log("Push organiser._id into User organiser");
            console.log(savedUser);
          });

        });
           res.json(book);
      });
}

/*
* Update Event
*/
exports.updateEvent = (req, res, next) => {

  console.log("Request : UpdateEvent");



    const id = req.params.id;
    const event = req.body;

   Event.findById(id, (err, foundEvent) => {
       if (err) return res.status(400).send('Bad Request');

       if(!foundEvent){
         return res.status(404).send('Not Found');
       }
       console.log("Found Event,Proceed to Update")

       foundEvent.name = event.name;
       foundEvent.venue = event.venue;
       foundEvent.start = event.start;
       foundEvent.end = event.end;
       foundEvent.details = event.details;
       if(event.release == 'true') {

         const organisedId = foundEvent.organiser

         User.findById(organisedId, (err, foundEvent) => {
           if (err) return res.status(400).send('Bad Request');

           if(!foundEvent){
             return res.status(404).send('Organiser not found.It may be deleted');
           }
           console.log("Found Organiser");

           const userAttending = foundEvent.attending;
           userAttending.splice(userAttending.indexOf(organisedId),1);

           foundBorrower.save( (err, saveAttending) => {
             if (err) return res.status(400).send('Bad Request');
             console.log("Remove field Attending from User");
             console.log(saveAttending);
           });
         });

         foundEvent.reservedBy = null;
         foundEvent.reserved = false;
       }
       console.log(foundEvent);
       foundEvent.save((err, updatedEvent)=> {
         if (err) return res.status(400).send('Bad Request');
         console.log("Updated Event");
         res.json(updatedEvent);
       });
    });

}

/*
*  Delete Event
*/
exports.deleteEvent = (req, res, next) => {

  const id = req.params.id;
  Event.findById(id, (err, event) => {
    if (err) return res.status(400).send('Bad Request');

    if(!event){
      return res.status(404).send('Not Found');
    }

    event.remove();

    res.json({'message':"event deleted"});
  });
}


export default exports;
