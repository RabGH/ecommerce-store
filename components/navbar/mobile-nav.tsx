"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Category, Store } from "@/types";
import IconButton from "@/components/ui/icon-button";
import StoreName from "@/components/store-name";

interface MobileNavProps {
  data: Category[];
  store: Store;
}

const MobileNav: React.FC<MobileNavProps> = ({ data, store }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  const handleLinkClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden ml-4">
      <IconButton
        icon={<Menu size={24} color="black" />}
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-full bg-white border border-gray-300"
      />
      {isOpen && (
        <div className="fixed inset-0 z-10 bg-white">
          <div className="flex justify-between items-center p-4">
            <Link
              onClick={() => handleLinkClick("/")}
              href="/"
              className="flex gap-x-2"
            >
              <StoreName data={store} />
            </Link>
            <IconButton
              icon={<X size={15} />}
              onClick={() => setIsOpen(false)}
            />
          </div>
          <div className="flex flex-col items-center gap-y-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                onClick={() => handleLinkClick(route.href)}
                className={cn(
                  "text-lg font-medium transiton-colors hover:text-black",
                  route.active ? "text-black" : "text-neutral-500"
                )}
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
