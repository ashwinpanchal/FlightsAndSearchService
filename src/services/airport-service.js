const { AirportRepository } = require("../repository/index");

class AirportService {
  constructor() {
    this.airportRepository = new AirportRepository();
  }

  async createAirport(obj) {
    try {
      const airport = await this.airportRepository.createAirport({
        name: obj.name,
        address: obj.address,
        city_id: obj.city_id,
      });
      return airport;
    } catch (error) {
      console.log("Something went wrong at service level");
      throw { error };
    }
  }

  async deleteAirport(airportId) {
    try {
      const response = await this.airportRepository.deleteAirport(airportId);
      return response;
    } catch (error) {
      console.log("Something went wrong at service level");
      throw { error };
    }
  }

  async getAirport(airportId) {
    try {
      const airport = await this.airportRepository.getAirport(airportId);
      return airport;
    } catch (error) {
      console.log("Something went wrong at service level");
      throw { error };
    }
  }

  async getAllAirport() {
    try {
      const airport = await this.airportRepository.getAllAirport();
      return airport;
    } catch (error) {
      console.log("Something went wrong at service level");
      throw { error };
    }
  }

  async updateAirport(airportId, data) {
    try {
      const airport = await this.airportRepository.updateAirport(
        airportId,
        data
      );
      return airport;
    } catch (error) {
      console.log("Something went wrong at service level");
      throw { error };
    }
  }
}

module.exports = AirportService;
