class ApiControler {
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
}