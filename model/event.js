import mongoose from 'mongoose';
import uuid from 'uuid';
const Schema = mongoose.Schema;


const eventSchema = new mongoose.Schema({
  name: String,
  venue: Number,
  start: String,
  //start: [Schema.Types.Mixed],
  end: String,
  //end: [Schema.Types.Mixed],
  attending: [{ type: Schema.Types.ObjectId, ref: 'user' }],
  organiser: [{ type: Schema.Types.ObjectId, ref: 'user' }],
  //image: [Schema.Types.Mixed],
  details: String,
  eventPassed: Boolean
},{timestamp: true})


const Events = mongoose.model('event', eventSchema);

module.exports = Events;
