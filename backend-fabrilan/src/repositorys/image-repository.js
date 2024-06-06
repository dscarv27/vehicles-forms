import { prisma } from "../services/prisma";

export const createImage = async (data) => {
  const image = await prisma.image.create({
    data,
    select: {
      url: true,
      vehicleId: true 
    }
  });
  return image;
}
