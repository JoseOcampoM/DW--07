import { Request, Response } from "express";
import { Vehiculo, VehiculoI } from "../models/Vehiculo";

export class VehiculoController{
    public async getAllVehiculo(req: Request, res: Response){
        try {
            const vehiculo: VehiculoI[] = await Vehiculo.findAll()
            res.status(200).json({vehiculo})
        }catch(error) {

        }
    }

    // public async getOneVehiculo(req: Request, res: Response){
        
    // }
    // public async createVehiculo(req: Request, res: Response){

    // }
    // public async updateVehiculo(req: Request, res: Response){

    // }
    // public async deleteVehiculo(req: Request, res: Response){

    // }
       
}