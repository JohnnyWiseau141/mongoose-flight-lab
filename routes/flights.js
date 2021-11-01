import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

//localhost:3000/movies
router.get('/', flightsCtrl.index)


// GET /flights/new
router.get('/new', flightsCtrl.new)

router.get('/:id', flightsCtrl.show)

// POST /flights
router.post('/', flightsCtrl.create)

/* GET flights listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource')
})

export {
  router
}
