import { Flight } from '../models/flight.js'
import { Destination } from '../models/destination.js'


function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }  
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
      err: err,
      flights,
      title: 'All Flights'
    })
  })
}

function newFlight(req, res) {
  res.render('flights/new', {
    title: "Add Flight",
  })
}

function show(req, res) {
  Flight.findById(req.params.id)
  .populate('destination')
  .exec(function(err, flight) {
    Destination.find({_id: {$nin: flight.destination}}, function(err, destinations) {
    res.render('flights/show', { 
      flight,
      title: 'Flight Detail',
      destinations
    })
    })
  })
}

function createTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.tickets.push(req.body)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

function addDestination(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.destination.push(req.body.destinationId)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

export {
  newFlight as new,
  create,
  index,
  show,
  createTicket,
  addDestination,
}