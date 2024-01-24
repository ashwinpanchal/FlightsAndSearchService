const { AirportService } = require("../services/index");

const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const airport = await airportService.createAirport(req.body);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "Sucessfully Created a airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a airport",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await airportService.deleteAirport(req.params.id);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Sucessfully deleted a airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete a airport",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const airport = await airportService.getAirport(req.params.id);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "Sucessfully fetched a airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch a airport",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const airport = await airportService.getAllAirport();
    return res.status(201).json({
      data: airport,
      success: true,
      message: "Sucessfully fetched a airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch a airport",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const airport = await airportService.updateAirport(req.params.id, req.body);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "Sucessfully updated a airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update a airport",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  getAll,
  update,
};
