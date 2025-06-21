import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <div>
      <Link href="/home">
        <Image
          width={300}
          height={90}
          className=" object-cover py-2 h-24 w-24 tablet:w-[200px] "
          src="/images/logo.png"
          alt="logo"
        />
      </Link>
    </div>
  );
}

export default Logo;
