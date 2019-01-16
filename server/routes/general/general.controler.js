class GeneralController {
  constructor(database) {
    this.db = database.db('MtWeb');
  }


  // async GetHomePageData() {
  //   // console.log('GetHomePageData', this.db);
  //   const data = 
  //   await this.db.collection('HomePageImages').find({ });

  //   // data.toArray((err, x) => {
  //   //   console.log('HomePageImages', x); // output all records
  //   // });
  //   data.toArray().then()
  //   console.log('data.toArray', );
  //   // return result;
  // }
  async GetHomePageData() {

    let result = await this.db
      .collection('HomePageImages')
      .find({})
      .toArray();
    result = result[0].Images;
    return result;
  }

  async GetAllProjectPreviews() {
    // const result = await this.db.collection('Projects').find();
    // return result;
  }

  async GetProjectDetailsbyId(id) {
    // const result = await this.db.collection('Projects').find({ id });
    // return result;
  }
}
module.exports = GeneralController;
