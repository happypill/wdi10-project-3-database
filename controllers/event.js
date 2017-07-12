const Event = require('../model/event')

// GET all
exports.getAll = (req, res) => {
  Event.find((err, events) => {
    if (err) res.json({message: 'could not find event because: ' + err})
    console.log('getting all')
    res.render('home', {
      events: events
    })
  })
}

//from bookmarkslist.js under controllers
// const User = require('../models/user');
