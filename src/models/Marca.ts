import sequelize from "sequelize";
import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Marca extends Model {
    public id!: number;
    public nombre!: string;
}

export interface MarcaI {
    nombre: string;
}

Marca.init(
    {
        nombre:{ 
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: "marcas",
        sequelize: database,
        timestamps: true
    }
)