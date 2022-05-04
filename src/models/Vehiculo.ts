import sequelize from "sequelize";
import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Vehiculo extends Model {
    public modelo!: string;
    public color!: string;
    public placa!: string;
    public motor!: string;
}

export interface VehiculoI {
    modelo: string;
    color: string;
    placa: string;
    motor: string;
}

Vehiculo.init(
    {
        modelo:{ 
            type: DataTypes.STRING,
            allowNull: false
        },
        color:{ 
            type: DataTypes.STRING,
            allowNull: false
        },
        placa:{ 
            type: DataTypes.STRING,
            allowNull: false
        },
        motor:{ 
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: "vehiculos",
        sequelize: database,
        timestamps: true
    }
)