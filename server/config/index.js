const config = (() => {
  const PORT = process.env.PORT || 3000;
  const env = process.env.NODE_ENV || 'development';
  let URL = null;

  const JWT_SECRET = 'tobecreated';
  const JWT_ISSUER = 'pdincorporated';
  const JWT_EXPIRE_TIME = 172800;

  if (env === 'development') {
    URL = 'mongodb+srv://mtadmin:mt12345@mttest-vzikd.mongodb.net/test?retryWrites=true';
  } else if (env === 'production') {
    URL = 'productionUrl';
  }

  return {
    PORT,
    URL,
    JWT_SECRET,
    JWT_ISSUER,
    JWT_EXPIRE_TIME,
  };
})();

module.exports = {
  PORT: config.PORT,
  URL: config.URL,
  JWT_SECRET: config.JWT_SECRET,
};
