const _config = {
  databaseUrl: process.env.MONGODB_CONNECTION_STRING,
  jwtSecret: process.env.JWT_SECRET,
  authUser: process.env.EMAIL_USERNAME,
  authPassword: process.env.EMAIL_PASSWORD,
};

export const config = Object.freeze(_config);
