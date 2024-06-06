import { imageValidation } from "../validations/image-validation";
import { createImage } from "../repositorys/image-repository";

export const create = async (req, res) => {
  try {
    await imageValidation.validate(req.body)

    const image = await createImage(req.body);
    res.status(200).send( image )
  } catch (e) {
    res.status(400).send(e)
  }
}