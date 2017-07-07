import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  name: String,
  venue: Number,
  joinedIndividual: String,
  imageURL:String,
  details:String
},{timestamp: true})


const Events = mongoose.model('event', eventSchema);

module.exports = Events;


