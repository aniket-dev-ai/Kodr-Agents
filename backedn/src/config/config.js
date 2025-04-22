import { config } from "dotenv";

config();

const configData = {
  PORT: process.env.PORT || 3000,
  DB_URL: process.env.MONGO_URI,
  SECRET_KEY: process.env.JWT_SECRET,
  Client_id: process.env.Client_ID,
  Client_secret: process.env.Client_secret,
  Redirect_uri: process.env.Redirect_uri,
};

export default Object.freeze(configData);
