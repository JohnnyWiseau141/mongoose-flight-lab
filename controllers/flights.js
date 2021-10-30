import { Flight } from '../models/flight.js'

function newFlight(req, res) {
  res.render('flights/new')
}

function create(req, res) {
  const flight = new Flight(req.body)
  flight.save(function(err) {
    if (err) return res.redirect('/flights/new')
    console.log(flight)
    res.redirect('/flights')
  })
}

function index(req, res) {
  Flight.find({}, function(err, flights){
    res.render('flights/index', {
      flights,
      title: 'All Flights'
    })
  })
}

export {
  newFlight as new,
  create,
  index
}