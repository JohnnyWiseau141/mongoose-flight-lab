import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

//localhost:3000/movies
router.get('/', flightsCtrl.index)

// GET /flights/new
router.get('/new', flightsCtrl.new)

router.get('/:id', flightsCtrl.show)

// POST /flights
router.post('/', flightsCtrl.create)

router.post('/:id/tickets', flightsCtrl.createTicket)

router.post('/:id/destination', flightsCtrl.addDestination)

/* GET flights listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource')
})

export {
  router
}
