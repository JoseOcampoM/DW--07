import sequelize from "sequelize";
import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Marca } from "./Marca";
import { TipoVehiculo } from "./TipoVehiculo";

export class Vehiculo extends Model {
    public id!: number;
    public modelo!: string;
    public color!: string;
    public placa!: string;
    public motor!: string;
    public marcaId!: number;
    public tipoVehiculoId!: number;
}

export interface VehiculoI {
    modelo: string;
    color: string;
    placa: string;
    motor: string;
    marcaId: number;
    tipoVehiculoId: number;
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

Marca.hasMany(Vehiculo);
Vehiculo.belongsTo(Marca);
TipoVehiculo.hasMany(Vehiculo);
Vehiculo.belongsTo(TipoVehiculo);