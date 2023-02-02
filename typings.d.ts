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
