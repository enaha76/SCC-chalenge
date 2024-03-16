const express = require('express');
const mysql = require('mysql');

const cors = require('cors');
const app = express();
const port = 3306;


app.use(cors());

const conn = mysql.createConnection({
    host: 'scc.cdmu82cywiaw.eu-north-1.rds.amazonaws.com',
    user: 'CMSCC',
    password: 'Cm22404546',
    database: 'SCC',  
})

conn.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données !');
        return;
      }
      console.log('Connexion à la base de données réussie');
})

app.listen(port, () => {
    console.log('Serveur en cours d\'exécution sur le port', port);
});