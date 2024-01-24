const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("Something went wrong at service level");
      throw { error };
    }
  }

  async createBulkCities(obj) {
    try {
      const addedCities = await this.cityRepository.createBulk(obj);
      return addedCities;
    } catch (error) {
      console.log("Something went wrong at service level");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await this.cityRepository.deleteCity(cityId);
    } catch (error) {
      console.log("Something went wrong at service level");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.cityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log("Something went wrong at service level");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.cityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong at service level");
      throw { error };
    }
  }

  async getAll(filter) {
    try {
      const city = await this.cityRepository.getAll({ name: filter.name });
      return city;
    } catch (error) {
      console.log("Something went wrong at service level");
      throw { error };
    }
  }
}

module.exports = CityService;
