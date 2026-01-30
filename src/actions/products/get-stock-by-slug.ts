"use server";

import prisma from "@/lib/prisma";

export const getStockBySlug = async (slug: string): Promise<number> => {
  try {
    const stock = await prisma.product.findFirst({
      select: { inStock: true },
      where: {
        slug,
      },
    });
    return stock?.inStock ?? 0;
  } catch (error) {
    throw new Error("Error al obtener producto");
  }
};
