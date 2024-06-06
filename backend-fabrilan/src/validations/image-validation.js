import * as yup from "yup";

export const imageValidation = yup.object({ 
  url: yup.string,
  vehicleId: yup.number
})