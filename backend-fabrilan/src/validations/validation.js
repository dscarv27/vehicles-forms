// import * as yup from 'yup';

// // Esquema de validação para o Status
// const statusSchema = yup.mixed().oneOf(['ativo', 'inativo']);

// // Esquema de validação para o modelo Image
// const imageSchema = yup.object().shape({
//   id: yup.number().integer().positive().required(),
//   url: yup.string().url().required(),
//   vehicleId: yup.number().integer().positive().nullable(),
//   createdAt: yup.date().default(() => new Date()).required(),
//   updatedAt: yup.date().default(() => new Date()).required(),
// });

// // Esquema de validação para o modelo Vehicle
// const vehicleSchema = yup.object().shape({
//   id: yup.number().integer().positive().required(),
//   owner: yup.string().required(),
//   brand: yup.string().required(),
//   model: yup.string().required(),
//   yearManufactured: yup.date().required(),
//   yearModel: yup.date().required(),
//   chassis: yup.string().required(),
//   renavam: yup.string().required(),
//   color: yup.string().required(),
//   plate: yup.string().required(),
//   driver: yup.string().required(),
//   fleet: yup.string().required(),
//   mdrv: yup.string().required(),
//   fuel: yup.string().required(),
//   type: yup.string().required(),
//   status: statusSchema.required(),
//   images: yup.array().of(imageSchema).required(),
//   createdAt: yup.date().default(() => new Date()).required(),
//   updatedAt: yup.date().default(() => new Date()).required(),
// });
