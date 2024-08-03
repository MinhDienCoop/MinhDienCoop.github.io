"use client";
import Link from "next/link";
import Image from "next/image";

import { ProductType } from "@/app/types/catalog";
import { convertCurrency, formatCurrency } from "@/app/libs";

const ProductItem = ({ product }: { product: ProductType }) => {
  return (
    <div className="px-5">
      <Link
        href={product.handle}
        className="group relative pb-[100%] block overflow-hidden"
      >
        <Image
          src={
            product.image[0] ||
            `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/no-image.jpg`
          }
          alt={product.name || "Product name 1"}
          className="object-cover"
          fill
        />
        <Image
          src={
            product.image[1] ||
            `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/no-image.jpg`
          }
          alt={product.name || "Product name 2"}
          className="object-cover opacity-0 invisible group-hover:opacity-1 group-hover:visible transition-all duration-500"
          fill
        />
      </Link>
      <div className="text-center py-5">
        <h3 className="text-lg font-semibold">
          <Link href={product.handle}>{product.name}</Link>
        </h3>
        <div className="flex flex-wrap items-center gap-3 justify-center">
          {product.priceSale && (
            <span className="text-lg">
              {formatCurrency(
                product.currency,
                product.language,
                product.priceSale
              )}
            </span>
          )}
          <span className="line-through opacity-70">
            {formatCurrency(
              product.currency,
              product.language,
              product.priceOriginal
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
