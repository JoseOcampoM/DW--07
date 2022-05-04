import { UserRoutes } from "./user";
import { VehiculoRoutes } from "./vehiculo";
import { VentaRoutes } from "./venta";
import { MarcaRoutes } from "./marca";
import { TipoVehiculoRoutes } from "./tipovehiculo";

export class Routes{
    public userRoutes: UserRoutes = new UserRoutes();
    public ventaRoutes: VentaRoutes = new VentaRoutes();
    public vehiculoRoutes: VehiculoRoutes = new VehiculoRoutes();
    public tipovehiculoRoutes: TipoVehiculoRoutes = new TipoVehiculoRoutes();
    public marcaRoutes: MarcaRoutes = new MarcaRoutes();
}