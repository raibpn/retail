interface Category {
  id: string;
  createdAt: string;
  updateAt: string;
  rev: string;
  type: "category";
  slug: {
    type: "slug";
    current: string;
  };
  title: string;
}

interface Product {
  id: string;
  // _id: string;
  createdAt?: string;
  updatedAt?: string;
  // _rev: string;
  // _type: "product";
  title: string;
  price: number;
  slug?: {
    _type: "slug";
    current: string;
  };
  description: string;
  //category: {
  // _type: "reference";
  //_ref: string;
  // };
  image: Image[];
  height?: number;
  width?: number;
}

interface Image {
  _key: string;
  _type: "image";
  asset: {
    url: string;
  };
}
