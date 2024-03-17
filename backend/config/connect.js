// const mysql = require('mysql');

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('scc', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => {
    console.log('Connexion à la base de données réussie');
  })
  .catch(err => {
    console.error('Erreur de connexion à la base de données :', err);
  });

module.exports = sequelize;

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'scc',
//   port: 3306 // Replace with your desired port number
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to database:', err);
//   } else {
//     console.log('Connected to database successfully');
//   }
// });

// module.exports = connection;
