import { Button, Carousel } from "antd";
import Image from "next/image";
import Link from "next/link";

const BannerTop = () => {
  const data = [
    {
      subtitle: "Ability to improve",
      title: "TRANSFORM REALITIES",
      content:
        "<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>",
      image: `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/slider-2.jpg`,
      link: "#",
    },
    {
      subtitle: "Ability to improve",
      title: "If you are going to use a passage of Lorem Ipsum.",
      content:
        "<p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>",
      image: `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/slider-1.png`,
      link: "#",
    },
  ];

  return (
    <Carousel autoplay={false}>
      {data?.map((item: any, index: number) => (
        <div key={index}>
          <div className="carousel-item-content w-full flex flex-wrap items-center bg-[#135D4C] text-white text-[18px]">
            {item.title && item.image && (
              <div className="relative carousel-image w-5/12 pb-[40%] md:order-2">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {(item.title || item.content || item.subtitle) && (
              <div className="carousel-content w-7/12">
                <div className="max-w-[500px] mx-auto">
                  {item.subtitle && <p>{item.subtitle}</p>}

                  {item.title && (
                    <h2 className="carousel-title text-2xl font-bold">
                      {item.title}
                    </h2>
                  )}

                  {item.content && (
                    <div
                      className="carousel-text my-5"
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    ></div>
                  )}

                  {item.link && (
                    <Button className="rounded-full bg-white font-semibold px-10">
                      <Link href={item.link} className="hover:text-[inherit]">
                        READ MORE
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default BannerTop;
