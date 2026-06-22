"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.png";
export default function Footer() {
  const companyLinks = [
    { name: "Why Cleared", href: "/why-cleared" },
    { name: "What we do", href: "/what-we-do" },
    { name: "Tranche 2", href: "#tranche-2" },
    { name: "Services", href: "#services" },
    { name: "About", href: "/about" },
    { name: "Our Team", href: "#team" },
    { name: "Contact Us", href: "/contactus" },
    { name: "Blogs", href: "#blogs" },
  ];

  return (
    <footer className="w-full bg-gradient-to-b from-[#010132] to-[#1D1D81] text-white pt-20 pb-8 relative overflow-hidden">
      {/* Top Main Section */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 pb-16">

          {/* Column 1: Brand & Tagline */}
          <div className="flex flex-col gap-6 max-w-[381px] w-full">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              {/* Logo Mark: matching Navbar */}
              <div className="w-[35px] h-[40px] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Image src={Logo} alt="Logo" width={35} height={40} />
              </div>
              <span className="font-gelasio font-semibold text-2xl tracking-[-0.48px] text-white">
                Cleared Advisory
              </span>
            </Link>

            <p className="font-space-grotesk font-normal text-base text-white/70 leading-normal">
              Compliance that works. For businesses that can't afford for it not to.
            </p>
          </div>

          {/* Right Area: Links & Connect columns */}
          <div className="flex flex-col sm:flex-row gap-16 sm:gap-24 lg:gap-32 w-full lg:w-auto">

            {/* Column 2: Company Links */}
            <div className="flex flex-col gap-6">
              <h4 className="font-inter font-semibold text-sm tracking-[1.1px] text-white uppercase">
                COMPANY
              </h4>
              <ul className="flex flex-col gap-4">
                {companyLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="font-space-grotesk font-normal text-base text-white/60 hover:text-white transition-all duration-300 hover:translate-x-[2px] inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Connect Info */}
            <div className="flex flex-col gap-6">
              <h4 className="font-inter font-semibold text-sm tracking-[1.1px] text-white uppercase">
                CONNECT
              </h4>
              <div className="flex flex-col gap-6">
                {/* Email */}
                <div className="flex flex-col gap-1">
                  <span className="font-space-grotesk font-medium text-xs tracking-[1.1px] text-white/40 uppercase">
                    EMAIL
                  </span>
                  <Link
                    href="mailto:ritesh@clearedadvisory.com.au"
                    className="font-space-grotesk font-normal text-base text-white/60 hover:text-white transition-colors duration-300 break-all"
                  >
                    ritesh@clearedadvisory.com.au
                  </Link>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1">
                  <span className="font-space-grotesk font-medium text-xs tracking-[1.1px] text-white/40 uppercase">
                    PHONE
                  </span>
                  <Link
                    href="tel:+61410450511"
                    className="font-space-grotesk font-normal text-base text-white/60 hover:text-white transition-colors duration-300"
                  >
                    +61 410 450 511
                  </Link>
                </div>

                {/* Location */}
                <div className="flex flex-col gap-1">
                  <span className="font-space-grotesk font-medium text-xs tracking-[1.1px] text-white/40 uppercase">
                    LOCATION
                  </span>
                  <span className="font-space-grotesk font-normal text-base text-white/60">
                    Sydney, NSW
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Copyright & Border Section */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="max-w-[1280px] mx-auto border-t border-white/10 pt-8 mt-2 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-space-grotesk font-normal text-sm md:text-base text-white/80 text-center md:text-left">
            © 2026 Cleared Advisory · ABN 28 867 326 033
          </p>
          <Link
            href="/privacypolicy"
            className="font-space-grotesk font-normal text-sm md:text-base text-white/80 hover:text-white transition-colors duration-300"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
