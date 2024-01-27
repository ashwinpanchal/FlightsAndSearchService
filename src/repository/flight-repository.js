const { Flight } = require("../models/index");
const { Op, and } = require("sequelize");

class FlightRepository {
  #createFilter(data) {
    let filter = {};
    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }
    let andArray = [];
    if (data.minPrice) {
      andArray.push({ [Op.gte]: data.minPrice });
    }
    if (data.maxPrice) {
      andArray.push({ [Op.lte]: data.maxPrice });
    }
    Object.assign(filter, { price: { [Op.and]: andArray } });
    return filter;
  }

  async createFlight(data) {
    try {
      const flight = await Flight.create(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository level");
      throw { error };
    }
  }

  async getFlight(flightId) {
    try {
      const flight = await Flight.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository level");
      throw { error };
    }
  }

  async getAllFlights(filter) {
    try {
      const filterObject = this.#createFilter(filter);
      const flight = await Flight.findAll({ where: filterObject });
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository level");
      throw { error };
    }
  }
}

module.exports = FlightRepository;
