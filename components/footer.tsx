import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          2023 Ecommerce -{" "}
          <Link
            href="https://rabiighais.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            rabiighais@gmail.com
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
