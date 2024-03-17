import { Sequelize } from "sequelize";
import conn from "../connect.js";
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
export default Criteria;