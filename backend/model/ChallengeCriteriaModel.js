const Sequelize  = require("sequelize");
const conn = require("../config/connect");
const Criteria = require("./Criteria.js");
const Challenges = require("./ChallengesModel.js");
const {DataTypes} = Sequelize;

const ChallengeCriteria = conn.define('teams',{
    challenge_id :{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    criteria_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    }
},{
    freezeTableName: true
});
Challenges.hasMany(ChallengeCriteria);
Criteria.hasMany(ChallengeCriteria);
Evaluations.belongsTo(Challenges, {foreignKey: 'challenge_id'});
Evaluations.belongsTo(Criteria, {foreignKey: 'criteria_id'});
conn.sync()
    .then(() => {
        console.log("La table 'users' a été créée avec succès dans la base de données.");
    })
    .catch(err => {
        console.error("Erreur lors de la création de la table 'users':", err);
    });
export default Teams;