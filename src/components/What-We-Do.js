"use client";

import Link from "next/link";
import Image from "next/image";
import Cta from "./Cta";

export default function WhatWeDo() {
    const clients = [
        {
            number: "01",
            title: "Tranche 2 — new entrants",
            tag: "Urgent — 1 Jul 2026",
            description: "Real estate agents, accountants, lawyers, conveyancers, precious metals dealers, and trust & company service providers. We get you enrolled, programmed, trained, and compliant before the deadline. Done in plain English, built for your sector.",
        },
        {
            number: "02",
            title: "Tranche 1 — existing AUSTRAC entities",
            tag: null,
            description: "Banks, fintechs, remittance providers, mortgage brokers. Already registered but need program uplift, audit, TM tuning, or fractional MLRO support. We know what AUSTRAC looks for — because we've been on both sides of the table.",
        },
        {
            number: "03",
            title: "Crypto businesses & DCEs",
            tag: null,
            description: "400+ registered DCEs in Australia. Most have patchy programs. We specialise in DCE compliance — onboarding frameworks, crypto-specific transaction monitoring typologies, and regulatory reporting that stands up to scrutiny.",
        },
    ];

    const pillars = [
        {
            number: "01",
            title: "Advisory",
            tag: null,
            description: "Program builds, health checks, AUSTRAC enrolment, staff training, and fractional MLRO. From zero to compliant.",
        },
        {
            number: "02",
            title: "Operations",
            tag: null,
            description: "Outsourced KYC/CDD, transaction monitoring, alert review, SMR drafting. Your compliance running in the background.",
        },
        {
            number: "03",
            title: "Audit",
            tag: "From May 2026",
            description: "Independent AML/CTF audits. CAMS-Audit certified. We audit programs we didn't build — independence is non-negotiable.",
        },
    ];

    return (
        <div className="w-full flex flex-col">
            {/* ── Hero Section (Frame 705) ── */}
            <div className="w-full min-h-[495px] bg-gradient-to-b from-[#010132] to-[#1D1D81] flex flex-col relative overflow-hidden pt-[89px]">

                {/* ── Content Wrapper (Frame 687) ── */}
                <div className="flex-1 flex items-center justify-center px-6 lg:px-20 py-16 lg:py-[120px]">
                    <div className="flex flex-col items-center text-center gap-6 max-w-[844px] w-full animate-in fade-in slide-in-from-bottom-4 duration-700">

                        {/* Tagline: "What we do" — gold gradient */}
                        <span className="font-space-grotesk font-medium text--xs tracking-[1.1px] uppercase bg-gradient-to-r from-[#CCAB51] via-[#D5B45F] to-[#E7C77C] bg-clip-text text-transparent">
                            What we do
                        </span>

                        {/* Heading: Mixed Roman + Italic */}
                        <h1 className="font-gelasio font-medium text--2xl sm:text--4xl md:text--6xl leading-tight md:leading-[75px] tracking-[-0.48px] text-white">
                            End-to-end AML/CTF{" "}
                            <br className="hidden sm:inline" />
                            <span className="italic font-medium bg-[linear-gradient(271.02deg,#CCAB51_0.83%,#D5B45F_51.73%,#E7C77C_99.06%)] bg-clip-text text-transparent">compliance.</span>
                        </h1>

                        {/* Subtitle / Description */}
                        <p className="font-space-grotesk font-medium text--base sm:text--lg md:text-[18px] leading-[27px] text-white/80 max-w-[844px]">
                            Three client types. One consistent standard of service. No disappearing.
                        </p>
                    </div>
                </div>
            </div>

            {/* ── Who We Work With (3 Cards Section) ── */}
            <section className="w-full bg-white  text-slate-900 flex flex-col items-center">
                <div className="container--boxed">


                    <div className="max-w-[1440px] mx-auto section-2xl w-full">
                        {/* Header */}
                        <div className="max-w-[1200px] mx-auto flex flex-col items-start text-left mb-12 sm:mb-16">
                            <span className="font-space-grotesk font-medium text--xs tracking-[1.1px] text-[#666666] uppercase">
                                Our clients
                            </span>
                            <h2 className="font-gelasio font-medium text--2xl sm:text--2xl md:text-[48px] leading-tight tracking-[-0.48px] text-[#1A1A1A] mt-4">
                                Who we work with
                            </h2>
                            <p className="font-space-grotesk font-normal text--base sm:text--lg md:text-[18px] leading-[26px] text-[#666666] max-w-[780px] mt-4">
                                For 20 years, businesses needing compliance help had three options. None of them worked particularly well.
                            </p>
                        </div>

                        {/* Vertical Stack of Cards */}
                        <div className="max-w-[1200px] mx-auto border border-black/10 divide-y divide-black/10 rounded-sm overflow-hidden w-full flex flex-col">
                            {clients.map((client, idx) => (
                                <div
                                    key={idx}
                                    className="group relative bg-white p-8 sm:p-10 md:p-12  z-10 flex flex-col md:flex-row gap-6 md:gap-12 items-start"
                                >
                                    {/* Large Muted Number */}
                                    <span className="font-space-grotesk font-medium text-[48px] leading-none tracking-[-1.44px] text-black/10 select-none md:pt-1">
                                        {client.number}
                                    </span>

                                    {/* Content */}
                                    <div className="flex-1 flex flex-col gap-3">
                                        {/* Title & Tag */}
                                        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                                            <h3 className="font-gelasio font-medium text--xl text-[#1A1A1A] tracking-[-0.24px]">
                                                {client.title}
                                            </h3>
                                            {client.tag && (
                                                <span className="font-space-grotesk font-medium text--xs tracking-[1.1px] text-[#B91C1C] uppercase">
                                                    {client.tag}
                                                </span>
                                            )}
                                        </div>

                                        {/* Description */}
                                        <p className="font-space-grotesk font-normal text--base text-[#666666] leading-6 max-w-[995px]">
                                            {client.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Our Three Pillars (3 Cards Section) ── */}
            <section className="w-full bg-gradient-to-b from-[#010132] to-[#1D1D81]  text-white flex justify-center border-t border-white/10">
                <div className="container--boxed">


                    <div className="max-w-[1440px] mx-auto section-2xl w-full flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                        {/* Left Column (Sticky Header Content) */}
                        <div className="flex flex-col lg:w-[45%] w-full lg:sticky lg:top-[120px]">
                            <span className="font-space-grotesk font-medium text--xs tracking-[1.1px] uppercase text-white/60">
                                Our three pillars
                            </span>
                            <h2 className="font-gelasio font-medium text--2xl sm:text--2xl md:text-[48px] leading-tight md:leading-[58px] tracking-[-0.48px] text-white mt-4">
                                Advisory. Operations. Audit.
                            </h2>
                            <p className="font-inter font-normal text--base sm:text--lg leading-[26px] text-white/80 max-w-[480px] mt-6">
                                End-to-end AML/CTF solutions designed to build, run, and verify your compliance program with absolute confidence.
                            </p>
                        </div>

                        {/* Right Column (Pillar Cards Stack) */}
                        <div className="flex flex-col gap-8 lg:w-[55%] w-full">
                            {pillars.map((pillar, idx) => (
                                <div
                                    key={idx}
                                    className="group bg-white  border border-black/[0.02] shadow-[0_10px_30px_rgba(0,0,0,0.03)] p-8 sm:p-10 flex flex-col  gap-6 sm:gap-[24px] items-start hover:scale-[1.02] hover:shadow-lg hover:border-amber-400/20 transition-all duration-300 relative z-10"
                                >
                                    {/* Large Muted Number */}
                                    <span className="font-space-grotesk font-medium text-[48px] leading-none tracking-[-1.44px] text-black/10 select-none md:pt-1">
                                        {pillar.number}
                                    </span>

                                    {/* Content */}
                                    <div className="flex-1 flex flex-col gap-3">
                                        {/* Title & Tag */}
                                        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                                            <h3 className="font-gelasio font-medium text--xl text-[#1A1A1A] tracking-[-0.24px]">
                                                {pillar.title}
                                            </h3>
                                            {pillar.tag && (
                                                <span className="font-space-grotesk font-medium text--2xs sm:text--xs tracking-[1.1px] bg-gradient-to-r from-[#010132] to-[#1D1D81] bg-clip-text text-transparent uppercase select-none">
                                                    {pillar.tag}
                                                </span>
                                            )}
                                        </div>

                                        {/* Description */}
                                        <p className="font-inter font-normal text--base text-[#666666] leading-6">
                                            {pillar.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Cta />
        </div>
    );
}
