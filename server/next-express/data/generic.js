class GenericData {
  constructor(database) {
    this.database = database;
  }

  getHomeImages() {
    const collection = this.database.collection('HomePinnedImages');
    const homeImages = collection.find();
    return homeImages;
  }

  getProjectsCards() {
    const collection = this.database.collection('Projects');
    const projectCards = collection.find();
    return projectCards;
  }

  getProjectDetails(id) {
    const collection = this.database.collection('Projects');
    const projectDetails = collection.find({ id });
    return projectDetails;
  }
  // const collection = client.db('MTWeb').collection('HomePinnedImages');
  // const homePinnedImages = collection.find();
  // // {title, imgUrl} send to home

  // const collection = client.db('MTWeb').collection('Projects');
  // const projectCards = collection.find();
  // // find all that are not draft
  // // {title, category, PreviewImg, shortDescription, id} send projects

  // const collection = client.db('MTWeb').collection('Projects');
  // const projectDetails = collection.find();
  // // find all that are not draft
  // // {title, ImgSlides- array , category, LongDescription, id } send project details

  // // insert new project
  // const collection = client.db('MTWeb').collection('Projects');
  // const projectData = {Title: '', PrevieImg: '', ImgsSlides: ['', '', ''], Category:'', shortDescription: '', longDescription:''};
  // collection.insertOne(projectData);


}