const _config = {
  databaseUrl: process.env.MONGODB_CONNECTION_STRING,
  jwtSecret: process.env.JWT_SECRET,
};

export const config = Object.freeze(_config);
