"use client";

import Image from "next/image";

import { Product } from "@/types";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <div className="bg-white group cursor-pointer rounded-cl border p-3 space-y-4">
      {/* Images and Actions */}
      <div className="aspect-square rounded-cl bg-gray-100 relative">
        <Image src={data?.images?.[0]?.url} alt="Image" fill></Image>
      </div>
    </div>
  );
};

export default ProductCard;
