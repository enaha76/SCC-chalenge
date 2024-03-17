const express = require('express');
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'scc.cdmu82cywiaw.eu-north-1.rds.amazonaws.com',
    port:"3306",
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
export default conn;

// app.listen(port, () => {
//     console.log('Serveur en cours d\'exécution sur le port', port);
// });
