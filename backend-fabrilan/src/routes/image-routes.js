import { create } from "../controllers/image-controller";

const imageRoutes = app => {
  app.post("/images", create);
};

export default imageRoutes;