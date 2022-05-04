import sequelize from "sequelize";
import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { User } from "./User";

export class Venta extends Model {
    public id!: number;
    public fecha!: Date;
    public valortotal!: number;
    public tipopago!: string;
    public userId!: number;
}

export interface VentaI {
    fecha: Date;
    valortotal: number;
    tipopago: string;
    userId: number;
}

Venta.init(
    {
        fecha:{ 
            type: DataTypes.DATE,
            allowNull: false
        },
        valortotal:{ 
            type: DataTypes.BIGINT,
            allowNull: false
        },
        tipopago:{ 
            type: DataTypes.ENUM('Efectivo', 'credito'),
            allowNull: false
        },
    },
    {
        tableName: "ventas",
        sequelize: database,
        timestamps: true
    }
);

User.hasMany(Venta);
Venta.belongsTo(User);