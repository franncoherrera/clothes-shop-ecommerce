import { Gender } from "@/generated/prisma";
import prisma from "@/lib/prisma";

interface CarouselOptions {
  numberOfProducts?: number;
  gender?: Gender;
}

export const getProductsCarouselByNumber = async ({
  numberOfProducts = 12,
  gender,
}: CarouselOptions) => {
  try {
    const products = await prisma.product.findMany({
      take: numberOfProducts,
      include: {
        ProductImage: {
          take: 2,
          select: {
            url: true,
          },
        },
      },
      where: {
        gender,
      },
    });

    return {
      products: products.map((product) => ({
        ...product,
        images: product.ProductImage.map((image) => image.url),
      })),
    };
  } catch (e) {
    throw new Error("No se pudo cargar los productos");
  }
};
