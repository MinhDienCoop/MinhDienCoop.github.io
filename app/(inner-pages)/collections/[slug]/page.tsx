import BreadcrumbComponent from "@/app/components/Common/breadcrumb";
import ProductItem from "@/app/components/Common/productItem";
import { CategoryType, ProductType } from "@/app/types/catalog";
import { categoryData } from "@/app/utils/data";
import Image from "next/image";

export async function generateStaticParams() {
  return categoryData.map((item: any) => ({
    slug: item.id,
  }));
}

export default async function CollectionDetail({
  params,
}: {
  params: { slug: string };
}) {
  const collectionDetail = categoryData.find(
    (item: CategoryType) => item.id === params.slug
  );

  const breadcrumbItems = [
    { title: "Home" },
    { title: "Collections" },
    { title: collectionDetail?.name },
  ];

  if (!collectionDetail) return <div>No data</div>;

  return (
    <>
      <BreadcrumbComponent
        title={collectionDetail.name}
        items={breadcrumbItems}
      />
      <div className="my-10">
        <div className="container">
          <div className="flex flex-wrap items-center gap-10">
            <div className="relative w-[200px] h-[200px] rounded-xl overflow-hidden">
              <Image
                src={
                  collectionDetail.image ||
                  `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/no-image.jpg`
                }
                alt={collectionDetail.name}
                fill
              />
            </div>
            <div className="w-full sx:flex-1">
              {collectionDetail.description}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-semibold">
              Product list ({collectionDetail.productList?.length || 0})
            </h2>

            <div className="mt-10">
              <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 my-10 gap-5">
                {collectionDetail.productList.map((item: ProductType) => (
                  <li key={item.id}>
                    <ProductItem product={item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
