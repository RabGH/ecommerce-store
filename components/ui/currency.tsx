"use client";

import { useMount } from "@/hooks/mount-hook";

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

interface CurrencyProps {
  value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const isMounted = useMount();

  if (!isMounted) return null;

  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};

export default Currency;
