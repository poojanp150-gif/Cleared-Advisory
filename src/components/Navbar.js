"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.png";
import arrow from "../../public/button_arrow.svg"
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`w-full h-[89px] border-b flex items-stretch text-white fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled
            ? "bg-slate-950/85 backdrop-blur-md border-white/10 shadow-lg"
            : "bg-transparent border-white/20"
            }`}>
            {/* Column 1: Logo & Brand */}
            <Link
                href="/"
                className="flex items-center pl-6 xl:pl-20 w-[240px] md:w-[280px] lg:w-[398px] flex-shrink-0 border-r border-white/20 group"
            >
                <div className="flex items-center gap-3">
                    {/* Logo Mark: Premium stylized check/shield representing compliance & security */}
                    <div className="w-[35px] h-[40px] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        <Image src={Logo} alt="Logo" width={35} height={40} />
                    </div>
                    <span className="font-gelasio font-semibold text--xl md:text--xl tracking-[-0.02em] text-white">
                        Cleared Advisory
                    </span>
                </div>
            </Link>

            {/* Column 2: Nav Links (Desktop) */}
            <nav className="hidden lg:flex flex-1 items-center justify-center gap-6 xl:gap-8 font-space-grotesk text--base font-medium text-white/90">
                <Link href="/why-cleared" className="hover:text-amber-400 transition-colors duration-200">
                    Why Cleared
                </Link>
                <Link href="/what-we-do" className="hover:text-amber-400 transition-colors duration-200">
                    What We Do
                </Link>
                <Link href="/tranche-2" className="hover:text-amber-400 transition-colors duration-200">
                    Tranche 2
                </Link>
                <Link href="/services" className="hover:text-amber-400 transition-colors duration-200">
                    Services
                </Link>
                <Link href="/about" className="hover:text-amber-400 transition-colors duration-200">
                    About
                </Link>
                <Link href="/our-team" className="hover:text-amber-400 transition-colors duration-200">
                    Our Team
                </Link>
            </nav>

            {/* Column 3: Call to Action (Desktop) */}
            <div className="hidden lg:block w-[240px] xl:w-[309px] flex-shrink-0 border-l border-white/20">
                <Link
                    href="#book-call"
                    className="flex h-full items-center justify-between px-6 xl:px-20 group hover:bg-white/[0.02] transition-colors duration-200"
                >
                    <span className="font-space-grotesk text--base font-bold text-white transition-colors duration-200 group-hover:text-amber-400">
                        Book Free Call
                    </span>
                    <div className="w-7 h-7 rounded-full border border-white flex items-center justify-center transition-all duration-300 group-hover:border-amber-400 group-hover:bg-amber-400">
                        {/* <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="transition-transform duration-300 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]"
                        >
                            <path
                                d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-colors duration-300 group-hover:stroke-slate-900"
                            />
                        </svg> */}
                        <Image src={arrow} />
                    </div>
                </Link>
            </div>

            {/* Mobile Right Controls */}
            <div className="flex lg:hidden items-center justify-end flex-1 pr-6 gap-4">
                <Link
                    href="#book-call"
                    className="px-4 py-2 rounded-full border border-white/50 text--xs font-bold font-space-grotesk hover:border-amber-400 hover:text-amber-400 transition-all duration-200"
                >
                    Book Call
                </Link>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                    className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-md hover:bg-white/10 transition-colors"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {isOpen ? (
                            <path d="M18 6L6 18M6 6l12 12" />
                        ) : (
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Drawer Overlay */}
            {isOpen && (
                <div className="absolute top-[89px] left-0 w-full bg-slate-950/95 backdrop-blur-md border-b border-white/20 flex flex-col py-6 px-8 gap-4 lg:hidden animate-in fade-in slide-in-from-top-5 duration-200">
                    <Link
                        href="/why-cleared"
                        onClick={() => setIsOpen(false)}
                        className="font-space-grotesk text--lg font-medium text-white hover:text-amber-400 transition-colors py-2"
                    >
                        Why Cleared
                    </Link>
                    <Link
                        href="/what-we-do"
                        onClick={() => setIsOpen(false)}
                        className="font-space-grotesk text--lg font-medium text-white hover:text-amber-400 transition-colors py-2"
                    >
                        What We Do
                    </Link>
                    <Link
                        href="#tranche-2"
                        onClick={() => setIsOpen(false)}
                        className="font-space-grotesk text--lg font-medium text-white hover:text-amber-400 transition-colors py-2"
                    >
                        Tranche 2
                    </Link>
                    <Link
                        href="#services"
                        onClick={() => setIsOpen(false)}
                        className="font-space-grotesk text--lg font-medium text-white hover:text-amber-400 transition-colors py-2"
                    >
                        Services
                    </Link>
                    <Link
                        href="/about"
                        onClick={() => setIsOpen(false)}
                        className="font-space-grotesk text--lg font-medium text-white hover:text-amber-400 transition-colors py-2"
                    >
                        About
                    </Link>
                    <Link
                        href="#team"
                        onClick={() => setIsOpen(false)}
                        className="font-space-grotesk text--lg font-medium text-white hover:text-amber-400 transition-colors py-2"
                    >
                        Our Team
                    </Link>
                </div>
            )}
        </header>
    );
}
