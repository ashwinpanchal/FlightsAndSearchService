const { CityService } = require("../services/index");

const cityService = new CityService();

// POST
// data -> req.body
const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Sucessfully Created a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a city",
      err: error,
    });
  }
};

// POST
// data -> [bodies]
const createBulk = async (req, res) => {
  try {
    const cityBulk = await cityService.createBulkCities(req.body);
    return res.status(201).json({
      data: cityBulk,
      success: true,
      message: "Sucessfully Created cities",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create cities",
      err: error,
    });
  }
};

// DELETE : /city/:id
const destroy = async (req, res) => {
  try {
    await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: {},
      success: true,
      message: "Sucessfully deleted a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete a city",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const city = await cityService.getCity(req.params.id);
    return res.status(200).json({
      data: city,
      success: true,
      message: "Sucessfully fetched a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch a city",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Sucessfully updated a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update a city",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const city = await cityService.getAll(req.query);
    return res.status(200).json({
      data: city,
      success: true,
      message: "Sucessfully fetched all the cities",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch",
      err: error,
    });
  }
};

module.exports = {
  create,
  createBulk,
  destroy,
  get,
  update,
  getAll,
};
