import { Sequelize } from "sequelize";
import conn from "../connect.js";
import Teams from './TeamsModel.js';
import Challenge from './Challenges .js'
const {DataTypes} = Sequelize;

const Submissions = conn.define('submissions',{
    team_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    challenge_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    file_path:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    submitted_at :{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
},{
    freezeTableName: true
});
Teams.hasMany(Submissions);
Challenge.hasMany(Submissions);
Submissions.belongsTo(Users, {foreignKey: 'challenge_id'});
Submissions.belongsTo(Users, {foreignKey: 'team_id'});
export default Submissions;