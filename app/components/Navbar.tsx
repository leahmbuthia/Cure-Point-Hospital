"use client"; // Required because usePathname is a client-side hook
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      {/* Logo on the Left */}
      <div>
        <Image src="/logo.svg" alt="Logo" width={200} height={50} />
      </div>

      {/* Centered Navigation Links */}
      <ul className="flex space-x-8 text-lg font-medium">
        {[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Doctors", path: "/doctors" },
          { name: "Contact", path: "/contact" },
        ].map((link) => (
          <li key={link.path}>
            <Link
              href={link.path}
              className={`relative pb-2 ${
                pathname === link.path
                  ? "text-[#5f6fff] font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-[#5f6fff]"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Create Account Button on the Right */}
      <div>
        <Link
          href="/register"
          className="px-6 py-2 bg-[#5f6fff] text-white rounded-full hover:bg-blue-700 transition"
        >
          Create Account
        </Link>
      </div>
    </nav>
  );
}
