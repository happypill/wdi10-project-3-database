import Event from './model/event';

let event1 = new Event({
    name: 'Cycyling at Marina Bay',
    venue: 103.833461,
    start: '1/1/2017',
    end: '3/1/2017',
    attending:'Trump',
    organiser:'',
    details: 'Remember to do the bicycle',
    eventPassed:true
});
event1.save((err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('Event 1 created');
});

let event2 = new Event({
      name: 'Swimming at Pacific Ocean',
    venue: 103.833461,
    start: '1/1/2017',
    end: '3/1/2017',
    attending:'Jho Low',
    organiser:'',
    details: 'Have fun with the sharks',
    eventPassed:false
});
event2.save((err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('Event 2 created');
});

let event3 = new Event({
      name: 'Dancing at Sentosa',
    venue: 103.833461,
    start: '1/1/2017',
    end: '3/1/2017',
    attending:'Danny phantom',
    organiser:'',
    details: 'Learn Kpop',
    eventPassed:true
});
event3.save((err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('Event 3 created');
});

