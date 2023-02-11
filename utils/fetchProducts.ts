export const fetchCategories = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/products/getCategories`
  );

  const data = await res.json();
  console.log(data);
};
