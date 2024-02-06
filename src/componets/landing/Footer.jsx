import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  TwitterIcon,
} from "../icons/Landing";

const Footer = () => {
  // YEAR FUNCTION CODE HERE
  const getYear = new Date().getFullYear();
  return (
    <>
      <div className="sm:h-[421px] bg-black pt-10 sm:pt-[51px] text-center">
        {/* FOOTER LOGO CODE START HERE */}
        <Link href="/" className="flex items-center justify-center gap-2">
          <Image
            src="/assets/images/png/nav-logo.png"
            alt="footer logo"
            width={126}
            height={89}
            className="logo_img"
          />
          <p className="text-textXl ff_inter font-bold text-white">TixByAir</p>
        </Link>
        <p className="ff_inter text-white opacity-70 pt-4 px-3">
          See who showed up. View analytics, create tickets, and track{" "}
          <br className="hidden sm:block" /> who's supporting you the most.
        </p>

        {/* FOOTER LINKS CODE START HERE */}
        <div className="pt-6">
          <Link
            href="#feature"
            className="ff_inter text-white hover:text-orangecrayola transition-all ease-in-out duration-300 me-4"
          >
            Features
          </Link>
          <Link
            href="#faq"
            className="ff_inter text-white hover:text-orangecrayola transition-all ease-in-out duration-300 ms-4"
          >
            FAQ
          </Link>
        </div>

        {/* SOCIAL ICONS CODE START HERE */}
        <div className="flex justify-center gap-5 py-8">
          <Link
            href="https://www.instagram.com/"
            className="footer_social_icons"
          >
            <InstagramIcon />
          </Link>
          <Link
            href="https://www.facebook.com/"
            className="footer_social_icons"
          >
            <FacebookIcon />
          </Link>
          <Link
            href="https://web.telegram.org/k/"
            className="footer_social_icons"
          >
            <TelegramIcon />
          </Link>
          <Link
            href="https://twitter.com/i/flow/login?redirect_after_login=%2Fhome"
            className="footer_social_icons"
          >
            <TwitterIcon />
          </Link>
        </div>

        {/* YEAR CODE START HERE */}
        <div className="border-t border-darkBorder">
          <p className="ff_inter text-granitegray py-4">
            {getYear} TixByAir. All Rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
