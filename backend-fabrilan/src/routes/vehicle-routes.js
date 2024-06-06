import { create } from "../controllers/vehicle-controller";
import { extname } from "path";

const multer = require('multer');

const multerObj = {
  storage: multer.diskStorage({
      destination: 'uploads/',
      filename: (
          req,
          file,
          callback,
      ) => {
          return callback(null ,crypto.randomUUID() + extname(file.originalname));
      },
  }),
}

const upload = multer(multerObj);;

const vehicleRoutes = app => {
  app.post("/vehicle", upload.array('images', 10), create);
};

export default vehicleRoutes;