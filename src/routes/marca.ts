import { request, Response, Application, Router} from "express";
import { MarcaController } from "../controllers/marca.controllers";

export class MarcaRoutes{
    public marcaController: MarcaController = new MarcaController();
    public routes(app: Application): void{
        app.route("/marca").get(this.marcaController.getAllMarca)
    }
}