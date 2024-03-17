import { Sequelize } from "sequelize";
import conn from "../connect.js";
import Users from "./UserModels.js";
const {DataTypes} = Sequelize;

const Teams = conn.define('teams',{
    team_name   :{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    lead_user_id :{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    }
},{
    freezeTableName: true
});
Users.hasMany(Teams);
Teams.belongsTo(Users, {foreignKey: 'lead_user_id'});
export default Teams;