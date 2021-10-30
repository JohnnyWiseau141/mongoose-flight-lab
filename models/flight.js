import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: {type: String, enum: ["American", "Southwest", "United"]},
  airport: String, enum: ['AUS', 'BOS', 'DFW', 'DEN', 'LAX', 'SAN'], default: 'DEN',
  flightNo: {Number, required: true, min:10, max:9999},
  departs: Date
})

const Flight = mongoose.model('Movie', movieSchema)

export {
  Movie
}