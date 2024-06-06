import * as yup from "yup";

export const vehicleValidation = yup.object({
  owner: yup.string().required(),
  brand: yup.string().required(),
  model: yup.string().required(),
  yearManufactured: yup.date().required(),
  yearModel: yup.date().required(),
  chassis: yup.string().required(),
  renavam: yup.string().required(),
  color: yup.string().required(),
  plate: yup.string().required(),
  driver: yup.string().required(),
  fleet: yup.string().required(),
  mdrv: yup.string().required(),
  fuel: yup.string().required(),
  type: yup.string().required(),
  status: yup.mixed().oneOf(['ativo', 'inativo']),
  images: yup.array().of(yup.object().shape({
    url: yup.string().url()
  }))
})