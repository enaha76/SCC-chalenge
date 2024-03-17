import { Sequelize } from "sequelize";
import conn from "../connect.js";
import Users from "./UserModels.js";
const {DataTypes} = Sequelize;

const Challenges  = conn.define('challenges',{
    title    :{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    description     :{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    deadline     :{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    organizer_user_id  :{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    }
},{
    freezeTableName: true
});
Users.hasMany(Challenges);
Challenges.belongsTo(Users, {foreignKey: 'organizer_user_id '});
export default Challenges ;