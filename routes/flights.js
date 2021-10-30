import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

// GET /flights/new
router.get('/new', flightsCtrl.new)
// POST /flights
router.post('/', flightsCtrl.create)

/* GET flights listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource')
})

export {
  router
}
