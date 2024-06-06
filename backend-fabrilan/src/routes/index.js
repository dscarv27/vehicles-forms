import imageRoutes from "./image-routes";
import vehicleRoutes from "./vehicle-routes";

const routes = app => {
  vehicleRoutes(app),
  imageRoutes(app)
}

export default routes;