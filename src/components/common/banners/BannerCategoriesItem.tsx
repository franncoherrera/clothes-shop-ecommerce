import Image from "next/image";
import Link from "next/link";

interface Props {
  imagePath: string;
  title: string;
  url: string;
}

export const BannerCategoriesItem = ({ imagePath, title, url }: Props) => {
  return (
    <div className="max-w-lg w-full sm:w-[40%] rounded overflow-hidden shadow-lg bg-white transition-transform duration-300 md:hover:scale-101">
      <Link href={url}>
        <Image
          className="w-full"
          width={306}
          height={179}
          src={imagePath}
          alt="Categorías"
        />
      </Link>
      <div className="py-1 md:px-6 md:py-4 hidden md:flex justify-center">
        <div className="font-bold text-md lg:text-xl mb-2">{title}</div>
      </div>
      <div className="py-0 px-6 md:py-4 hidden md:flex justify-center">
        <Link href={url} className="mb-2 btn-primary">
          Ver Más
        </Link>
      </div>
    </div>
  );
};
