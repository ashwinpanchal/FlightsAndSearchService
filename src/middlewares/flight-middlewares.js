const createChecker = (req, res, next) => {
  if (
    !req.body.flightNumber ||
    !req.body.airplaneId ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.arrivalTime ||
    !req.body.departureTime ||
    !req.body.price
  ) {
    const err = {
      error:
        "The required details provided to create a flight is invalid or Data insufficient",
    };
    return res.status(400).json({
      data: {},
      success: false,
      error: err.error,
    });
  } else {
    next();
  }
};

module.exports = {
  createChecker,
};
