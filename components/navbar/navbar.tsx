import Link from "next/link";

import Container from "@/components/ui/container";
import getCategories from "@/actions/get-categories";
import MainNav from "@/components/navbar/main-nav";
import NavBarActions from "@/components/navbar/navbar-actions";
import MobileNav from "./mobile-nav";

export const revalidate = 60;

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MobileNav data={categories} />
          <MainNav data={categories} />
          <NavBarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
