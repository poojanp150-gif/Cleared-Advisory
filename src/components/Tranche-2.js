"use client";
import './Tranche-2.css';


import React from "react"

export default function Tranche2Explained() {
    const sectors = [
        {
            number: "01",
            title: "Real estate agents",
            badge: "Urgent — 1 Jul 2026",
            description: "If you facilitate the buying or selling of real estate — residential or commercial — you are likely captured. You must enrol with AUSTRAC, conduct customer due diligence, monitor transactions, and maintain a written AML/CTF program.",
            image: "/trancheimg1.png"
        },
        {
            number: "02",
            title: "Accountants & bookkeepers",
            description: "The obligations apply to specific designated services. Services like managing client funds, forming companies, and SMSF administration are likely in scope. Book a free call — we'll confirm your position in 30 minutes.",
            image: "/trancheimg2.png"
        },
        {
            number: "03",
            title: "Lawyers & conveyancers",
            description: "Legal services involving property transactions, the formation or management of companies and trusts are captured. Conveyancers handling property settlements are almost certainly in scope.",
            image: "/trancheimg3.png"
        },
        {
            number: "04",
            title: "Precious metals dealers",
            description: "If you deal in gold, silver, platinum, or precious stones above certain thresholds, you are captured. Cash transaction reporting, customer verification, and a written AML/CTF program are all required.",
            image: "/trancheimg4.png"
        },
        {
            number: "05",
            title: "Trust & company service providers",
            description: "Businesses that form or manage companies, trusts, or similar structures on behalf of clients are captured. Includes registered agents, corporate trustees, and related service providers.",
            image: "/trancheimg5.png"
        }
    ];

    return (
        <>
            <div className="w-full flex flex-col">
                {/* ── Hero Section (Frame 688) ── */}
                <div className="w-full min-h-124 bg-gradient-to-b from-brand-blue-900 to-brand-blue-800 flex flex-col relative overflow-hidden pt-22">

                    {/* ── Content Wrapper (Frame 687) ── */}
                    <div className="flex-1 flex items-center justify-center px-6 lg:px-20 py-16 lg:py-30">
                        <div className="flex flex-col items-center text-center gap-6 max-w-211 w-full animate-in fade-in slide-in-from-bottom-4 duration-700">

                            {/* Tagline: "About us" — gold gradient */}
                            <span className="font-space-grotesk font-medium text--xs tracking-1.1px uppercase bg-gradient-to-l from-brand-gold-500 via-brand-gold-400 to-brand-gold-300 bg-clip-text text-transparent">
                                Tranche 2 explained
                            </span>

                            {/* Heading: Mixed Roman + Italic */}
                            <h1 className="font-gelasio font-medium text--2xl sm:text--7xl md:text--9xl leading-tight md:leading-19 tracking--0.48px text-white">
                                What is Tranche 2 and {" "}
                                <br className="hidden sm:inline" />
                                <span className="italic font-medium tranche-2__highlight-text-gold bg-clip-text text-transparent">do you need to act?</span>
                            </h1>

                            {/* Subtitle / Description */}
                            <p className="font-space-grotesk font-medium text--base sm:text--lg md:text-18px leading-7 text-white/80 max-w-211">
                                Australia's AML/CTF laws just expanded to five new sectors. Plain English. No jargon.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ── Stats Banner (Frame 691) ── */}
                <div className="w-full bg-gradient-to-l from-brand-gold-500 via-brand-gold-400 to-brand-gold-300 py-7">
                    <div className="max-w-360 mx-auto w-full px-6 lg:px-20">
                        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10">
                            {/* Card 1 */}
                            <div className="py-4 md:py-0 flex flex-col items-center justify-center text-center">
                                <span className="font-space-grotesk font-medium text--5xl leading-12 tracking--1.44px text-slate-900">
                                    80,000+
                                </span>
                                <span className="font-space-grotesk font-medium text--xs tracking-1.1px text-slate-800/70 uppercase mt-2">
                                    BUSINESSES CAPTURED
                                </span>
                            </div>

                            {/* Card 2 */}
                            <div className="py-4 md:py-0 flex flex-col items-center justify-center text-center">
                                <span className="font-space-grotesk font-medium text--5xl leading-12 tracking--1.44px text-slate-900">
                                    1 Jul 2026
                                </span>
                                <span className="font-space-grotesk font-medium text--xs tracking-1.1px text-slate-800/70 uppercase mt-2">
                                    Obligations commence
                                </span>
                            </div>

                            {/* Card 3 */}
                            <div className="py-4 md:py-0 flex flex-col items-center justify-center text-center">
                                <span className="font-space-grotesk font-medium text--5xl leading-12 tracking--1.44px text-slate-900">
                                    29 Jul 2026
                                </span>
                                <span className="font-space-grotesk font-medium text--xs tracking-1.1px text-slate-800/70 uppercase mt-2">
                                    Enrolment deadline
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Captured Sectors Section (3 Cards Section / Who We Work With) ── */}
                <section className="w-full bg-white text-slate-900  ">
                    <div className="container--boxed">


                        <div className="max-w-300 mx-auto w-full flex flex-col section-2xl">

                            {/* Section Header */}
                            <div className="flex flex-col mb-12 md:mb-16 gap-4">
                                <span className="font-space-grotesk font-medium text--xs tracking-1.1px text-slate-500 uppercase mb-3">
                                    Our clients
                                </span>
                                <h2 className="font-gelasio font-medium text--2xl sm:text--2xl md:text--7xl text-slate-900 tracking--0.48px mb-4">
                                    Who we work with
                                </h2>
                                <p className="font-space-grotesk font-normal text--base sm:text--lg text-slate-500 leading-relaxed ">
                                    For 20 years, businesses needing compliance help had three options. None of them worked particularly well.
                                </p>
                            </div>

                            {/* Sectors Stack */}
                            <div className="flex flex-col w-full ">
                                {sectors.map((client, idx) => (
                                    <div
                                        key={idx}
                                        className="group relative bg-white p-8 sm:p-10 md:p-12  border border-b border-slate-200 rounded-sm   z-10 flex flex-col md:flex-row gap-6 md:gap-12 items-start"
                                    >
                                        {/* Large Muted Number */}
                                        <span className="font-space-grotesk font-medium text--7xl leading-none tracking--1.44px text-black/10 select-none ">
                                            {client.number}
                                        </span>

                                        {/* Content */}
                                        <div className="flex-1 flex flex-col gap-3">
                                            {/* Title & Tag */}
                                            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                                                <h3 className="font-gelasio font-medium text--2xl text-brand-900 tracking--0.24px">
                                                    {client.title}
                                                </h3>
                                                {client.badge && (
                                                    <span className="font-space-grotesk font-medium text--xs tracking-1.1px text-brand-red-600 uppercase">
                                                        {client.badge}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Description */}
                                            <p className="font-space-grotesk font-normal text--xs md:text--base text-slate-600 leading-relaxed max-w-180">
                                                {client.description}
                                            </p>
                                        </div>
                                        {/* Image */}
                                        <div className="  relative shrink-0 overflow-hidden   ">
                                            <img
                                                src={client.image}
                                                alt={client.title}
                                                className=" object-cover transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Call to Action Button */}
                            <div className="flex justify-center mt-16">
                                <a
                                    href="/contact-us"
                                    className="group inline-flex items-center gap-3 justify-center bg-gradient-to-l from-brand-gold-500 via-brand-gold-400 to-brand-gold-300 text-slate-900 font-space-grotesk font-medium text--base rounded-full pt-3 pr-4 pb-3 pl-6 hover:shadow-lg hover:scale-1.02 active:scale-0.98 transition-all duration-300 cursor-pointer max-w-80 sm:max-w-150 w-full"
                                >
                                    <span>Book a free call to confirm your obligations</span>
                                    <div className="bg-slate-900 w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-4 transition-transform group-hover:translate-x-1 duration-300">
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="transition-transform duration-300 group-hover:translate-x-px group-hover:-translate-y-px"
                                        >
                                            <path
                                                d="M1.5 6H10.5M10.5 6L6.5 2M10.5 6L6.5 10"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}