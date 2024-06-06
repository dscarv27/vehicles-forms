import { vehicleValidation } from "../validations/vehicle-validation";
import { createVehicle } from "../repositorys/vehicle-repository";

export const create = async (req, res) => {
  try {
    await vehicleValidation.validate(req.body)

    const vehicle = await createVehicle(req.body, req.files);
    res.status(200).send( vehicle )
  } catch (e) {
    console.log('Error:', e);
    res.status(400).send(e)
  }
}