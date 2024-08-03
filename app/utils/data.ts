import { CategoryType, ProductType } from "../types/catalog";

export const categoryData: CategoryType[] = [
  {
    image: `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/collections/vegetables.jpg`,
    name: "Vegetables",
    handle: "vegetables",
  },
  {
    image: `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/collections/food.jpg`,
    name: "Food",
    handle: "food",
  },
  {
    image: `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/collections/nuts.jpg`,
    name: "Nuts",
    handle: "nuts",
  },
  {
    image: `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/collections/seeds.jpg`,
    name: "Seeds",
    handle: "seeds",
  },
  {
    image: `${process.env.NEXT_PUBLIC_IMAGES_URL}/images/collections/services.jpg`,
    name: "Machinery and services",
    handle: "machinery-and-services",
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
