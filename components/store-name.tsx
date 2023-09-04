"use client";

import { Store } from "@/types";
import { useMount } from "@/hooks/mount-hook";

interface StoreNameProps {
  data: Store;
}

const StoreName: React.FC<StoreNameProps> = ({ data }) => {
  const isMounted = useMount();
  if (!isMounted) return null;

  return <p className="font-bold text-xl">{data.name}</p>;
};

export default StoreName;
