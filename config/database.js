import mongoose from 'mongoose'

mongoose.connect(process.env.DATABASE_URL)

//shortcut to mongoose.connect object
const db = mongoose.connection

db.on('connected', function() {
  console.log(`Connected to MongoDB ${db.name}:${db.port}`)
})