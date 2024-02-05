import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <div>
        <div>
          <Link href="/">
            <Image
              src="/assets/images/png/nav-logo.png"
              alt="footer logo"
              height={59}
              width={83}
            />
            <p className="text-textlg ff_inter font-bold text-black">
              TixByAir
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
