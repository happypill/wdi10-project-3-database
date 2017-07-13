// load in the environment vars


var seeder = require('mongoose-seed')

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost/brace', function () {
  // Load Mongoose models
  seeder.loadModels([
    'models/event'
  ])

  // Clear specified collections
  seeder.clearModels(['Event'], function () {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data)
  })
})

// Data array containing seed data - documents organized by Model
var data = [
  { // CO-WORKING SPACES
    'model': 'Event',
    'documents': [
      {
        'name': 'The Great Room',
        'venue': '1 George Street #10-01, Singapore 049145',
        'start': 'http://thegreatroomoffices.com',
        'end': 'The Great Room sets itself apart as a hospitality-inspired workplace, combining the emotional appeal of a luxury hotel with the productivity of a professional workplace. Situated in the heart of the CBD, this 15,000 sq ft workspace aims to change the way you feel about going to work, and is exactly where you want to bring partners, clients and investors. The Great Room welcomes leaders and launchers hailing from the technology, creative and finance industries. It has also pioneered the ‘hot office’ concept, which are private offices available on demand for one to four people.'
      }
    ]
  }
]