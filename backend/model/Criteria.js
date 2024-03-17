import { Sequelize } from "sequelize";
import conn from "../connect";
const {DataTypes} = Sequelize;

const Criteria  = conn.define('challengeCriteria',{
    challenge_id :{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    criteria_id :{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    
},{
    freezeTableName: true
});
conn.sync()
    .then(() => {
        console.log("La table 'users' a été créée avec succès dans la base de données.");
    })
    .catch(err => {
        console.error("Erreur lors de la création de la table 'users':", err);
    });
export default Criteria;