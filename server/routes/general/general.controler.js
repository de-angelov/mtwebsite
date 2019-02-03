/* eslint-disable class-methods-use-this */

// var path = require('path');
// var fs = require('fs');

class GeneralController {
  constructor(database) {
    this.db = database.db('MtWeb');
  }

  async GetHomePageData() {
    let result = await this.db
      .collection('HomePageImages')
      .find({})
      .toArray();
    result = result[0].Images;
    result = [{ title: 'test0', img: 'https://via.placeholder.com/500' }];
    return result;
  }

  async GetAllProjectPreviews() {
    const result = [
      {
        Text: 'descriptiondescription',
        Category: 'Architecture',
        Title: 'Arch Project',
        Img: 'google bg',
      },
      {
        Text: 'description',
        Category: 'Architecture',
        Title: 'Arch Project2',
        Img: 'google bg',
      },
      {
        Text: 'description',
        Category: 'Landscape',
        Title: 'Landscape Project',
        Img: 'google bg',
      },
    ];

    return result;
  }

  async GetProjectDetailsbyId(id) {
    // const result = await this.db.collection('Projects').find({ id });
    // return result;
  }
}

module.exports = GeneralController;
