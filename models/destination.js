import mongoose from 'mongoose'

const Schema = mongoose.Schema

const destinationSchema = new Schema({
  airport: {type: String},
}, {
  timestamps: true,
})

const Desination = mongoose.model('Destination', destinationSchema)

export {
  Destination
}