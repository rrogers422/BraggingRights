const path = require('path');
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
require('console.table');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');

//set up express app
const app = express();

//listen for requests
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session ( {
  key: 'user_sid',
  secret: 'somesecret',
  resave: true,
  saveUninitialized: false,
  cookie: {
    expires: 500000
  }
}));


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
