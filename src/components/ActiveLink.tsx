"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GetIcons } from "./icons/getIcon";

export default function ActiveLink({
  name,
  href,
}: {
  name: string;
  href: string;
}) {
  const pathname = usePathname();
  return (
    <Link
      className={`${
        pathname === href ? "text-blue-500 underline" : "text-black"
      } flex justify-center items-center`}
      href={href}
    >
      <GetIcons
        href={href}
        props={{
          className: `w-6 h-6 ${pathname === href ? "fill-blue-500 " : ""}`,
        }}
      />
      {name}
    </Link>
  );
}
