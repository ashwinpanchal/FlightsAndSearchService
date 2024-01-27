const express = require("express");
const {
  AirportController,
  CityController,
  FlightController,
} = require("../../controllers/index");

const router = express.Router();

router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.patch("/city/:id", CityController.update);
router.post("/cities", CityController.createBulk);

router.post("/airport", AirportController.create);
router.delete("/airport/:id", AirportController.destroy);
router.get("/airport/:id", AirportController.get);
router.get("/airport", AirportController.getAll);
router.patch("/airport/:id", AirportController.update);

router.post("/flights", FlightController.create);
router.get("/allflights", FlightController.getAll);
router.get("/flights", FlightController.get);

module.exports = router;
