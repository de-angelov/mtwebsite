class GeneralController {
  constructor(database) {
    this.database = database;
  }


  async GetHomePageData() {
    this.database.collection('HomePage').find();
  }

  async GetAllProjectPreviews() {
    this.database.collection('Projects').find();
  }

  async GetProjectDetailsbyId(id) {
    this.database.collection('Projects').find({ id });
  }
}
module.exports = GeneralController;
