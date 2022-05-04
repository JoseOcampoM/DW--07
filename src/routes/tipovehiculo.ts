import { request, Response, Application, Router} from "express";
import { TipoVehiculoController } from "../controllers/tipovehiculo.controllers";

export class TipoVehiculoRoutes{
    public tipovehiculoController: TipoVehiculoController = new TipoVehiculoController();
    public routes(app: Application): void{
        app.route("/tipovehiculo").get(this.tipovehiculoController.getAllTipoVehiculo)
    }
}