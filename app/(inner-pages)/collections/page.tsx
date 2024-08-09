import { categoryData } from "@/app/utils/data";
import Link from "next/link";
import { Breadcrumb } from "antd";
import BreadcrumbComponent from "@/app/components/Common/breadcrumb";
import Image from "next/image";

export default async function Collections() {
  const breadcrumbItems = [{ title: "Home" }, { title: "Collections" }];
  return (
    <>
      <BreadcrumbComponent title="Collection" items={breadcrumbItems} />
      <div>
        <div className="container">
          <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 my-10 gap-5">
            {categoryData?.map((item: any, index: number) => (
              <li
                key={index}
                className="bg-white rounded-xl overflow-hidden hover:shadow"
              >
                <Link
                  href={`/collections/${item.id}`}
                  className="relative pb-[100%] block"
                >
                  <Image
                    src={
                      item.image ||
                      `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/no-image.jpg`
                    }
                    alt={item.title}
                    fill
                  />
                </Link>
                <h3 className="text-xl text-center p-5">
                  <Link href={`/collections/${item.id}`}>{item.name}</Link>
                </h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
