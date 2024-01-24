const { Op } = require("sequelize");

const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository level");
      throw { error };
    }
  }

  async createBulk(obj) {
    try {
      const addedCities = await City.bulkCreate(obj);
      return addedCities;
    } catch (error) {
      console.log("Something went wrong in the repository level");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
    } catch (error) {
      console.log("Something went wrong in the repository level");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await City.findOne({ where: { id: cityId } });
      await city.update(data);
      await city.save();
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository level");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findOne({ where: { id: cityId } });
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository level");
      throw { error };
    }
  }

  async getAll(filter) {
    try {
      let city = null;
      if (filter.name) {
        city = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
      } else {
        city = await City.findAll();
      }
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository level");
      throw { error };
    }
  }
}

module.exports = CityRepository;
