const { Airport } = require("../models/index");

class AirportRepository {
  async createAirport({ name, address, city_id }) {
    try {
      const airport = await Airport.create({ name, address, city_id });
      return airport;
    } catch (error) {
      console.log("Something went wrong in the repository level");
      throw { error };
    }
  }

  async deleteAirport(airportId) {
    try {
      const response = await Airport.destroy({
        where: {
          id: airportId,
        },
      });
      return response;
    } catch (error) {
      console.log("Something went wrong in the repository level");
      throw { error };
    }
  }

  async getAirport(airportId) {
    try {
      const airport = await Airport.findOne({
        where: {
          id: airportId,
        },
      });
      return airport;
    } catch (error) {
      console.log("Something went wrong in the repository level");
      throw { error };
    }
  }

  async getAllAirport() {
    try {
      const airport = await Airport.findAll();
      return airport;
    } catch (error) {
      console.log("Something went wrong in the repository level");
      throw { error };
    }
  }

  async updateAirport(airportId, data) {
    try {
      const airport = await Airport.findOne({
        where: {
          id: airportId,
        },
      });
      await airport.update(data);
      await airport.save();
      return airport;
    } catch (error) {
      console.log("Something went wrong in the repository level");
      throw { error };
    }
  }
}

module.exports = AirportRepository;
