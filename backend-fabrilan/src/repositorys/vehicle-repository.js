import { prisma } from "../services/prisma";

export const createVehicle = async (data, images) => {
  const vehicle = await prisma.vehicle.create({
    data: {
      ...data, 
      yearManufactured: new Date(data.yearManufactured),
      yearModel: new Date(data.yearModel),
      images: {
        create: images.map(item => {
          return {
            url: item.filename
          }
        })
      }
    },
  });
  return vehicle;
}