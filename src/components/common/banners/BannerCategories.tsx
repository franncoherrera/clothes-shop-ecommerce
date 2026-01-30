import { BannerCategoriesItem } from "./BannerCategoriesItem";

const BannerCategoryItem = [
  { title: "Hombre", imagePath: "/banners/desktop/categories/7.jpg", url: "/gender/men" },
  { title: "Mujer", imagePath: "/banners/desktop/categories/8.jpg", url: "/gender/woman" },
  { title: "Niños", imagePath: "/banners/desktop/categories/9.jpg", url: "/gender/kid" },
];

export const BannerCategories = () => {
  return (
    <div className="flex flex-row gap-4 m-2 md:m-10 justify-center flex-wrap md:flex-nowrap">
      {BannerCategoryItem.map(({ imagePath, title, url }) => (
        <BannerCategoriesItem
          key={imagePath}
          imagePath={imagePath}
          title={title}
          url={url}
        />
      ))}
    </div>
  );
};
