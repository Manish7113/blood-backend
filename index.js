const express = require("express");
const session = require("express-session");
const connectDB = require("./connectDB");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
const passport = require("passport");
app.use(
  session({
    secret: "r8q,+&1LM3)CD*zAGpx1xm{NeQhc;#",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 }, // 1 hour
  })
);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
const User = require("./models/User");
const LocalStrategy = require("passport-local").Strategy;
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
connectDB();
app.post("/signup", (req, res) => {
  console.log(req.body);
  const {
    username,
    password,
    mobileNo,
    gender,
    age,
    email,
    bloodGroupTested,
    bloodGroup,
    city,
    location,
    profession,
  } = req.body;
  const userData = {
    username,
    password,
    mobileNo,
    gender,
    age,
    email,
    bloodGroupTested,
    bloodGroup,
    city,
    location,
    profession,
  };
  const user = new User(userData);
  user.save(function (err, doc) {
    if (err) {
      throw err;
    } else {
      console.log(doc);
      res.json({ info: "User created" });
    }
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
