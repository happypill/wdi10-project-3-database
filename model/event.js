import mongoose from 'mongoose';
const user = require('./user');

const eventSchema = new mongoose.Schema({
  name: String,
  venue: Number,
  joinedIndividual: [{ type: Schema.Types.ObjectId, ref: 'user' }],
  organiser: [{ type: Schema.Types.ObjectId, ref: 'user' }]
  imageURL:String,
  details:String
},{timestamp: true})


const Events = mongoose.model('event', eventSchema);

module.exports = Events;
