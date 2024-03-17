import { Sequelize } from "sequelize";
import conn from "../connect";

const {DataTypes} = Sequelize;

const Users = conn.define('users',{
    username  :{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            isEmail: true
        }
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    level :{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    speciality :{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    role:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        validate:{
            notEmpty: true
        }
    }
},{
    freezeTableName: true
});

export default Users;