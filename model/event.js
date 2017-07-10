import uuid from 'uuidv4';
import mongoose from 'mongoose';
const user = require('./user');

const eventSchema = new mongoose.Schema({
  eventID: { type: Schema.Types.ObjectId, ref: 'uuid' },
  name: String,
  venue: Number,
  date: String,
  time: String,
  attending: [{ type: Schema.Types.ObjectId, ref: 'user' }],
  organiser: [{ type: Schema.Types.ObjectId, ref: 'user' }]
  imageURL: String,
  details: String,
  eventPassed: Boolean
},{timestamp: true})


const Events = mongoose.model('event', eventSchema);

module.exports = Events;
