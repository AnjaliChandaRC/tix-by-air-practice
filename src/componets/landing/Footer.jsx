import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  TwitterIcon,
} from "../icons/Landing";
import { FooterIconsList } from "@/utils/LandingHelper";

const Footer = () => {
  // YEAR FUNCTION CODE HERE
  const getYear = new Date().getFullYear();
  return (
    <>
      <div className="sm:h-[421px] bg-black pt-8 sm:pt-[51px] text-center">
        {/* FOOTER LOGO CODE START HERE */}
        <Link href="/" className="flex items-center justify-center gap-2">
          <Image
            src="/assets/images/png/nav-logo.png"
            alt="footer logo"
            width={126}
            height={89}
            className="w-[104px] h-[74px] md:w-[126px] md:h-[89px]"
          />
          <p className="text-[27px] sm:text-textXl ff_inter font-bold text-white leading-[100%]">
            TixByAir
          </p>
        </Link>
        <p className="text-sm sm:text-base ff_inter text-darkgray pt-3 sm:pt-4 px-12 sm:px-3 leading-[150%]">
          See who showed up. View analytics, create tickets, and track{" "}
          <br className="hidden sm:block" /> who supporting you the most.
        </p>

        {/* FOOTER LINKS CODE START HERE */}
        <div className="pt-3 sm:pt-6">
          <Link
            href="#feature"
            className="text-sm sm:text-base ff_inter text-white leading-[150%] hover:text-orangecrayola transition-all ease-in-out duration-300 me-2 sm:me-4"
          >
            Features
          </Link>
          <Link
            href="#faq"
            className="text-sm sm:text-base ff_inter text-white leading-[150%] hover:text-orangecrayola transition-all ease-in-out duration-300 ms-2 sm:ms-4"
          >
            FAQ
          </Link>
        </div>

        {/* SOCIAL ICONS CODE START HERE */}

        <div className="flex justify-center gap-4 sm:gap-5 pt-5 pb-8 sm:py-8">
          {FooterIconsList.map((data, index) => (
            <a href={data.href} key={index} className="footer_social_icons">
              {data.image}
            </a>
          ))}
        </div>

        {/* YEAR CODE START HERE */}
        <div className="border-t border-darkBorder">
          <p className="text-sm sm:text-base ff_inter text-granitegray py-2 sm:py-4 leading-[150%]">
            {getYear} TixByAir. All Rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
