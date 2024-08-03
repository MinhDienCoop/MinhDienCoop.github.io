import { categoryData, productData } from "../utils/data";

import BannerTop from "@/app/components/Sections/Webs/BannerTop";
import ProductCarousel from "@/app/components/Common/productCarousel";
import CategoryCarousel from "@/app/components/Common/categoryCarousel";
import SectionTitle from "@/app/components/Sections/sectionTitle";

export default function Home() {
  return (
    <div>
      <BannerTop />
      <div className="my-10">
        <CategoryCarousel data={categoryData} />
      </div>

      <div className="mt-20 mb-10">
        <div className="mb-5">
          <SectionTitle label="Feature product" isCenter />
        </div>
        <ProductCarousel data={productData} />
      </div>
    </div>
  );
}
