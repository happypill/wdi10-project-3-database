import mongoose from 'mongoose';
const user = require('./user');

const eventSchema = new mongoose.Schema({
  name: String,
  venue: Number,
  date: String,
  time: String,
  joinedIndividual: [{ type: Schema.Types.ObjectId, ref: 'user' }],
  organiser: [{ type: Schema.Types.ObjectId, ref: 'user' }]
  imageURL: String,
  details: String,
  eventPassed: Boolean
},{timestamp: true})


const Events = mongoose.model('event', eventSchema);

module.exports = Events;
