import sequelize from "sequelize";
import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class TipoVehiculo extends Model {
    public id!: number;
    public nombre!: string;
}

export interface TipoVehiculoI {
    nombre: string;
}

TipoVehiculo.init(
    {
        nombre:{ 
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: "TipoVehiculos",
        sequelize: database,
        timestamps: true
    }
)