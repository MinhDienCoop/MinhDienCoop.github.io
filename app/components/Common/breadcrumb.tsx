import { Breadcrumb } from "antd";

interface BreadcrumbComponentProps {
  title?: string;
  items: any;
}

const BreadcrumbComponent = ({ title, items }: BreadcrumbComponentProps) => {
  return (
    <div
      className="flex items-center justify-center text-center bg-no-repeat bg-cover h-[300px] md:h-[400px]"
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGES_URL}/images/breadcrumb.jpg)`,
      }}
    >
      <div className="container">
        {title && <h1 className="text-4xl font-bold mb-5">{title}</h1>}
        <Breadcrumb items={items} />
      </div>
    </div>
  );
};

export default BreadcrumbComponent;
