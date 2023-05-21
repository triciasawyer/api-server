'use strict';


class Collection {
  constructor(model) {
    this.model = model;
  }


  async create(data) {
    try {
      const newRecord = await this.model.create(data);
      return newRecord;
    } catch (err) {
      console.log('There is a ModelInterface create error', err);
      return err;
    }
  }


  // read data, with id get one, else, get all
  async read(id = null) {
    try {
      if (id) {
        const singleRecord = await this.model.findByPk(id);
        return singleRecord;
      } else {
        const allRecords = await this.model.findAll();
        return allRecords;
      }
    } catch (err) {
      console.log('There is a ModelInterface read error', err);
    }
  }


  // update one record
  async update(id, data) {
    try {
      if (!id) throw new Error('No id provided');
      let record = await this.model.findOne({ where: { id } });
      let updatedRecord = await record.update(data);

      return updatedRecord;
    } catch (err) {
      console.log('There is a ModelInterface update error', err);
      return err;
    }
  }


  // delete one record
  async delete(id, model = null) {
    try {
      if (model) {
        await this.model.destroy({
          include: [{ model }],
          where: { id: id },
        });
      } else {
        await this.model.destroy({
          where: { id: id },
        });
      }
      return 'success';
    } catch (err) {
      console.log('There is a ModelInterface delete error', err);
    }
  }
}


module.exports = Collection;
