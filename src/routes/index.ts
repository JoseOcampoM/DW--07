import { UserRoutes } from "./user";
import { VehiculoRoutes } from "./vehiculo";
import { VentaRoutes } from "./venta";

export class Routes{
    public userRoutes: UserRoutes = new UserRoutes();
    public ventaRoutes: VentaRoutes = new VentaRoutes();
    public vehiculoRoutes: VehiculoRoutes = new VehiculoRoutes();
}