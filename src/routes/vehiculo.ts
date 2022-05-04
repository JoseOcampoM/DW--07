import { request, Response, Application } from "express";
import { VehiculoController } from "../controllers/vehiculo.controllers";

export class VehiculoRoutes{
    public vehiculoController: VehiculoController = new VehiculoController();
    public routes(app: Application): void{
        app.route("/vehiculo").get(this.vehiculoController.getAllVehiculo)
        // app.route("/vehiculo").get(this.vehiculoController.getOneVehiculo)
        // app.route("/vehiculo").post(this.vehiculoController.createVehiculo)
        // app.route("/vehiculo").patch(this.vehiculoController.updateVehiculo)
        // app.route("/vehiculo").delete(this.vehiculoController.deleteVehiculo)
    }
}