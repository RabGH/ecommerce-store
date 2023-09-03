"use client";

import { Product } from "@/types";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <div className="bg-white group cursor-pointer rounded-cl border p-3 space-y-4">
      ProductCard
    </div>
  );
};

export default ProductCard;
