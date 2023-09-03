import getProducts from "@/actions/get-products";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const suggestedProducts = await getProducts();
  return <div>ProductPage</div>;
};

export default ProductPage;
