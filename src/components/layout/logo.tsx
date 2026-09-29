import Link from "next/link";

import Image from "next/image";
import LogoImage from "../../../public/images/hero/Header_Logo.png";

type LogoProps = {
  href?: string;
  className?: string;
};

export function Logo({ href = "/", className }: LogoProps) {
  return (
    <Link
      href={href}
      aria-label={`ByteSpace — home`}
      className={`group inline-flex items-center gap-2.5 rounded-md ${className ?? ""}`}
    >
      <Image src={LogoImage} />
    </Link>
  );
}
