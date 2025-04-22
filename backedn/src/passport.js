import passport from "passport";
import { Strategy  } from "passport-google-oauth20";

import configData from "./config/config";

passport.use(
  new Strategy(
    {
      clientID: configData.Client_id,
      clientSecret: configData.Client_secret,
      callbackURL: configData.Redirect_uri,
    },
    (accessToken, refreshToken, profile, done) => {
      // Here you can save the user profile to your database if needed
      return done(null, profile);
    }
  )
);