import { CategoryType, ProductType } from "../types/catalog";

export const categoryData: CategoryType[] = [
  {
    id: "1",
    image: `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/collections/vegetables.jpg`,
    name: "Vegetables",
    handle: "vegetables",
    description:
      "Vegetables are nature’s vibrant powerhouses, packed with essential nutrients and bursting with flavor. From crisp greens to hearty roots, each vegetable offers a unique taste experience, delivering a wealth of health benefits that nourish your body and elevate your well-being.",
    productList: [
      {
        id: "egifgv1234",
        name: "Winter potato crop",
        code: "VG-PT-W",
        image: [
          `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/products/potato-1.jpg`,
          `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/products/potato-2.jpg`,
          `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/products/potato-3.jpg`,
        ],
        handle: "winter-potato-crop",
        collections: ["vegetables"],
        priceSale: 20000,
        priceOriginal: 25000,
        currency: "VND",
        language: "vi",
        quantity: 1000,
        options: ["size"],
        variations: [
          {
            id: "gdfoigvnjk12332",
            option1: "Type 1",
          },
          {
            id: "gdfoigvnjk12333",
            option1: "Type 2",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    image: `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/collections/food.jpg`,
    name: "Grains",
    handle: "grains",
    description:
      "Grains are the foundation of global nourishment, offering a rich source of energy and essential nutrients. From golden wheat to hearty rice, each grain tells a story of tradition and sustenance. These versatile staples provide the fuel your body needs, supporting vitality and overall health in every meal.",
    productList: [],
  },
  {
    id: "3",
    image: `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/collections/nuts.jpg`,
    name: "Nuts",
    handle: "nuts",
    description:
      "Nuts are nature’s nutrient-dense treasures, packed with healthy fats, protein, and essential vitamins. From crunchy almonds to rich walnuts, each nut offers a unique blend of flavors and health benefits. These satisfying snacks fuel your body, promoting heart health and overall wellness with every bite.",
    productList: [],
  },
  {
    id: "4",
    image: `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/collections/seeds.jpg`,
    name: "Seeds",
    handle: "seeds",
    description:
      "Seeds are nature’s tiny powerhouses, brimming with essential nutrients, healthy fats, and protein. From chia to sunflower seeds, each offers a unique profile of flavors and health benefits. These versatile seeds are small but mighty, providing a natural boost to your diet and supporting overall well-being.",
    productList: [],
  },
  {
    id: "5",
    image: `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/collections/services.jpg`,
    name: "Machinery and services",
    handle: "machinery-and-services",
    description:
      "Machinery and services in agriculture are the backbone of modern farming, driving efficiency and innovation in food production. From advanced tractors to precision irrigation systems, these tools and services empower farmers to optimize their operations, increase yields, and ensure sustainable practices. By integrating technology with traditional farming, agricultural machinery and services are revolutionizing the way we cultivate and harvest the land.",
    productList: [],
  },
];

export const productData: ProductType[] = [
  {
    id: "egifgv1234",
    name: "Winter potato crop",
    code: "VG-PT-W",
    image: [
      `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/products/potato-1.jpg`,
      `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/products/potato-2.jpg`,
      `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/products/potato-3.jpg`,
    ],
    handle: "winter-potato-crop",
    collections: ["vegetables"],
    priceSale: 20000,
    priceOriginal: 25000,
    currency: "VND",
    language: "vi",
    quantity: 1000,
    options: ["size"],
    variations: [
      {
        id: "gdfoigvnjk12332",
        option1: "Type 1",
      },
      {
        id: "gdfoigvnjk12333",
        option1: "Type 2",
      },
    ],
  },
  {
    id: "egifgv1234",
    name: "Winter potato crop",
    code: "VG-PT-W",
    image: [
      `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/products/potato-1.jpg`,
      `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/products/potato-2.jpg`,
      `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/products/potato-3.jpg`,
    ],
    handle: "winter-potato-crop",
    collections: ["vegetables"],
    priceSale: 20000,
    priceOriginal: 25000,
    currency: "VND",
    language: "vi",
    quantity: 1000,
    options: ["size"],
    variations: [
      {
        id: "gdfoigvnjk12332",
        option1: "Type 1",
      },
      {
        id: "gdfoigvnjk12333",
        option1: "Type 2",
      },
    ],
  },
  {
    id: "egifgv1234",
    name: "Winter potato crop",
    code: "VG-PT-W",
    image: [
      `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/products/potato-1.jpg`,
      `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/products/potato-2.jpg`,
      `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/products/potato-3.jpg`,
    ],
    handle: "winter-potato-crop",
    collections: ["vegetables"],
    priceSale: 20000,
    priceOriginal: 25000,
    currency: "VND",
    language: "vi",
    quantity: 1000,
    options: ["size"],
    variations: [
      {
        id: "gdfoigvnjk12332",
        option1: "Type 1",
      },
      {
        id: "gdfoigvnjk12333",
        option1: "Type 2",
      },
    ],
  },
  {
    id: "egifgv1234",
    name: "Winter potato crop",
    code: "VG-PT-W",
    image: [
      `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/products/potato-1.jpg`,
      `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/products/potato-2.jpg`,
      `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/products/potato-3.jpg`,
    ],
    handle: "winter-potato-crop",
    collections: ["vegetables"],
    priceSale: 20000,
    priceOriginal: 25000,
    currency: "VND",
    language: "vi",
    quantity: 1000,
    options: ["size"],
    variations: [
      {
        id: "gdfoigvnjk12332",
        option1: "Type 1",
      },
      {
        id: "gdfoigvnjk12333",
        option1: "Type 2",
      },
    ],
  },
  {
    id: "egifgv1234",
    name: "Winter potato crop",
    code: "VG-PT-W",
    image: [
      `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/products/potato-1.jpg`,
      `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/products/potato-2.jpg`,
      `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/products/potato-3.jpg`,
    ],
    handle: "winter-potato-crop",
    collections: ["vegetables"],
    priceSale: 20000,
    priceOriginal: 25000,
    currency: "VND",
    language: "vi",
    quantity: 1000,
    options: ["size"],
    variations: [
      {
        id: "gdfoigvnjk12332",
        option1: "Type 1",
      },
      {
        id: "gdfoigvnjk12333",
        option1: "Type 2",
      },
    ],
  },
];
