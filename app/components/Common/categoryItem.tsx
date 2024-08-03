"use client";
import Link from "next/link";
import { CategoryType } from "@/app/types/catalog";
import Image from "next/image";

interface CategoryTypeProps {
  category: CategoryType;
}

const CategoryItem = ({ category }: CategoryTypeProps) => {
  return (
    <div className="px-5">
      <Link href={`collections/${category.handle}` || "#"} className="group">
        <div className="relative pb-[100%] overflow-hidden">
          <Image
            src={
              category.image ||
              `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/no-image.jpg`
            }
            alt={category.name || "Category name"}
            className="object-cover group-hover:scale-110 transition-all duration-500"
            fill
          />
        </div>
        {category.name && (
          <h3 className="mt-5 p-3 text-xl font-semibold text-center">
            {category.name}
          </h3>
        )}
      </Link>
    </div>
  );
};

export default CategoryItem;
