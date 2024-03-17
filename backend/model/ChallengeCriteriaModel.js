import { Sequelize } from "sequelize";
import conn from "../connect.js";
import Criteria from "./Criteria.js";
import Challenges from "./ChallengesModel.js";
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
export default Teams;