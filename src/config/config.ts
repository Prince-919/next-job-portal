const _config = {
  databaseUrl: process.env.MONGODB_CONNECTION_STRING,
};

export const config = Object.freeze(_config);
