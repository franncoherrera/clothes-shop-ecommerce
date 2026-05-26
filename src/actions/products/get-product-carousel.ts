import prisma from '@/lib/prisma';
import { Gender } from '@prisma/client';

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
      products: products.map((product: any) => ({
        ...product,
        images: product.ProductImage.map((image: any) => image.url),
      })),
    };
  } catch (e) {
    throw new Error('No se pudo cargar los productos');
  }
};
