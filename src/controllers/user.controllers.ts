import { Request, Response } from "express";
import { User, UserI } from "../models/User";

export class UserController{
    public async getAllUser(req: Request, res: Response){
        try {
            const user: UserI[] = await User.findAll()
            res.status(200).json({user})
        }catch(error) {

        }
    }

    public async getOneUser(req: Request, res: Response){
        const {id: idParam} = req.params

        try {
            const user:UserI | null = await User.findOne(
                {
                    where: { id: idParam}
                }
            )

            res.status(200).json(user)
        } catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
    }
    public async createUser(req: Request, res: Response){
        const{
            id,
            nombre,
            correo,
            telefono,
            direccion,
        } = req.body;

        try {
            let body: any = {
                nombre,
                correo,
                telefono,
                direccion,
            }
            const user = await User.create(body);
            res.status(200).json({user})
            
        }catch (error) {
            
        }

    }
    // public async updateUser(req: Request, res: Response){

    // }
    // public async deleteUser(req: Request, res: Response){

    // }
       
}