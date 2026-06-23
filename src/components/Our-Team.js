"use client";

import Link from "next/link";
import Cta from "./Cta";
import Image from "next/image";

export default function OurTeam() {
    return (
        <div className="w-full flex flex-col">
            {/* ── Hero Section ── */}
            <div className="w-full min-h-[589px] bg-gradient-to-b from-[#010132] to-[#1D1D81] flex flex-col relative overflow-hidden pt-[89px]">
                <div className="flex-1 flex items-center justify-center px-6 lg:px-20 py-16 lg:py-[120px]">
                    <div className="flex flex-col items-center text-center gap-6 max-w-[844px] w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <span className="font-space-grotesk font-bold text-sm tracking-[1.4px] uppercase text-[#D4AF37]">
                            OUR TEAM
                        </span>
                        <h1 className="font-gelasio font-medium text-4xl sm:text-5xl md:text-[64px] leading-tight md:leading-[75px] tracking-[-0.48px] text-white">
                            Our Practitioners.{" "}
                            <br className="hidden sm:inline" />
                            <span className="italic font-medium bg-[linear-gradient(271.02deg,#CCAB51_0.83%,#D5B45F_51.73%,#E7C77C_99.06%)] bg-clip-text text-transparent">Not Theorists.</span>
                        </h1>
                        <p className="font-space-grotesk font-medium text-base sm:text-lg md:text-[18px] leading-[27px] text-white max-w-[806px]">
                            We&apos;ve held the roles. Been accountable. Built programs under real regulatory scrutiny.
                        </p>
                    </div>
                </div>
            </div>

            <section className="w-full bg-white  text-slate-900" >
                <div className="container--boxed">
                    <div className="max-w-[1440px] mx-auto section-2xl w-full">
                        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                            {/* Profile Card */}
                            <div className="w-full lg:w-[381px] bg-gradient-to-b from-[#010132] to-[#1D1D81] border border-white/10 flex flex-col items-center p-10 shrink-0 rounded-[4px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] relative">
                                {/* Profile Image with 10px Gold Gradient Border */}
                                <div className="w-[200px] h-[200px] rounded-full p-[10px] bg-gradient-to-r from-[#CCAB51] via-[#D5B45F] to-[#E7C77C] mb-8">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-[#010132] relative">
                                        <Image
                                            src="/ritesh_singh.png"
                                            alt="Ritesh Singh"
                                            fill
                                            sizes="200px"
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                </div>

                                <h3 className="font-gelasio font-semibold text-2xl tracking-[-0.24px] text-white text-center">
                                    Ritesh Singh
                                </h3>
                                <span className="font-space-grotesk font-normal text-sm tracking-[1.1px] text-white/80 text-center mt-2 uppercase">
                                    FOUNDER, CLEARED ADVISORY
                                </span>

                                <div className="w-full h-[1px] bg-white/10 my-8"></div>

                                <ul className="flex flex-col gap-4 w-full">
                                    <li className="flex items-start gap-3">
                                        <span className="text-white/50 mt-[2px]">•</span>
                                        <span className="font-space-grotesk font-normal text-sm tracking-[1.1px] text-white/70">CAMS — ACAMS 2019</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-white/50 mt-[2px]">•</span>
                                        <span className="font-space-grotesk font-normal text-sm tracking-[1.1px] text-white/70">CAMS-Audit — in progress</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-white/50 mt-[2px]">•</span>
                                        <span className="font-space-grotesk font-normal text-sm tracking-[1.1px] text-white/70">MBA — Melbourne Business School 2025</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-white/50 mt-[2px]">•</span>
                                        <span className="font-space-grotesk font-normal text-sm tracking-[1.1px] text-white/70">Former MLRO: AUSTRAC · DIA · AFSL</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-white/50 mt-[2px]">•</span>
                                        <span className="font-space-grotesk font-normal text-sm tracking-[1.1px] text-white/70">22 years APAC compliance</span>
                                    </li>
                                </ul>
                            </div>
                            {/* Right Content */}
                            <div className="flex-1 flex flex-col gap-8 lg:gap-16 pt-4 lg:pt-8">
                                <div className="border-l-4 border-l-[#010132] pl-8">
                                    <h2 className="font-gelasio font-medium text-3xl sm:text-[32px] leading-tight sm:leading-[50.4px] tracking-[-0.36px] text-[#1A1A1A] max-w-[733px]">
                                        &quot;I didn&apos;t build {" "}
                                        <span className="font-normal bg-[linear-gradient(271.02deg,#CCAB51_0.83%,#D5B45F_51.73%,#E7C77C_99.06%)] bg-clip-text text-transparent">
                                            Cleared Advisory
                                        </span>{" "}
                                        to be another compliance firm. I built it because businesses deserve access to the same expertise the big banks have — without the $500/hour price tag.&quot;
                                    </h2>
                                </div>

                                <div className="flex flex-col gap-6 max-w-[719px] ml-9">
                                    <p className="font-inter font-normal text-base leading-[25.6px] text-[#666666]">
                                        22 years. Multiple MLRO roles. AUSTRAC, DIA, AFSL. Built programs from zero. Been audited against them. Turned around loss-making businesses. Managed de-banking threats. Built teams from 8 to 60 people across 4 countries.
                                    </p>
                                    <p className="font-inter font-normal text-base leading-[25.6px] text-[#666666]">
                                        I&apos;ve seen what happens when compliance is treated as a cost centre. And what&apos;s possible when it&apos;s built into the business from day one. That&apos;s what Cleared Advisory delivers.
                                    </p>
                                </div>

                                {/* Stats Cards */}
                                <div className="flex flex-col sm:flex-row border-t border-slate-200 bg-white ml-9 w-full md:w-max ">
                                    <div className="flex flex-col items-center justify-center p-8 min-w-[200px]">
                                        <span className="font-space-grotesk font-medium text-[36px] leading-[48px] tracking-[-1.44px] text-[#1A1A1A]">80,000+</span>
                                        <span className="font-space-grotesk font-medium text-[14px] tracking-[1.1px] text-[#666666] mt-2 text-center uppercase">BUSINESSES CAPTURED</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-8 min-w-[200px] ">
                                        <span className="font-space-grotesk font-medium text-[36px] leading-[48px] tracking-[-1.44px] text-[#1A1A1A]">22</span>
                                        <span className="font-space-grotesk font-medium text-[14px] tracking-[1.1px] text-[#666666] mt-2 text-center uppercase">YRS APAC EXPERIENCE</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-8 min-w-[200px] ">
                                        <span className="font-space-grotesk font-medium text-[36px] leading-[48px] tracking-[-1.44px] text-[#1A1A1A]">3-in-1</span>
                                        <span className="font-space-grotesk font-medium text-[14px] tracking-[1.1px] text-[#666666] mt-2 text-center uppercase">ADVISORY OPS · AUDIT</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Team Expansion Cards ── */}
            <section className="w-full bg-white  flex flex-col items-center" style={{ marginTop: "-1px" }}>
                <div className="container--boxed">
                    <div className="max-w-[1440px]  mx-auto section-2xl w-full">
                        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2  items-stretch">
                            <div className="bg-[#FDFDF9] border-t border-b border-l border-r-0 border-[#D4AF37] p-10 flex flex-col gap-6 justify-between">
                                <div>
                                    <h3 className="font-gelasio font-medium text-[28px] text-[#111827] leading-snug tracking-[-0.28px] mb-4">
                                        Advisory Board — Forming
                                    </h3>
                                    <p className="font-space-grotesk font-normal text-base text-[#4B5563] leading-[25.6px]">
                                        Senior practitioners across legal, payments, and regulatory affairs joining the Cleared Advisory Advisory Board in Q3 2026. Announcements coming.
                                    </p>
                                </div>
                                <Link
                                    href="/contact"
                                    className="group font-space-grotesk font-bold text-base text-[#D4AF37] inline-flex items-center mt-6 "
                                >
                                    <div className="border-b border-[#D4AF37]">
                                        <span className=" ">
                                            Interested in joining?
                                        </span>

                                        <span className="ml-2">
                                            →
                                        </span>
                                    </div>
                                </Link>
                            </div>
                            {/* inline-block font-inter font-semibold text-[15px] text-[#1A1A1A] border-b border-[#1A1A1A] pb-[2px] transition-all duration-300 hover:text-[#CCAB51] hover:border-[#CCAB51] hover:translate-x-[2px] */}
                            <div className="bg-[#FDFDF9] border border-[#D4AF37] p-10 flex flex-col gap-6 justify-start">
                                <div>
                                    <h3 className="font-gelasio font-medium text-[28px] text-[#111827] leading-snug tracking-[-0.28px] mb-4">
                                        Associate Compliance Practitioners
                                    </h3>
                                    <p className="font-space-grotesk font-normal text-base text-[#4B5563] leading-[25.6px]">
                                        Our network of CAMS-certified associate practitioners is available for specialist engagements and surge capacity. All associates are individually vetted.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── The Network ── */}
            <section className="w-full bg-gradient-to-b from-[#010132] to-[#1D1D81]  text-white flex flex-col items-center">
                <div className="container--boxed">


                    <div className="max-w-[1440px] mx-auto section-2xl w-full flex flex-col items-center">
                        <div className="flex flex-col items-center text-center max-w-[800px] mb-12 sm:mb-16">
                            <span className="font-space-grotesk font-bold text-sm tracking-[1.4px] text-[#D4AF37] uppercase">
                                OUR NETWORK
                            </span>
                            <h2 className="font-gelasio font-medium text-3xl sm:text-4xl md:text-[48px] leading-tight text-white mt-4">
                                Built over 22 years. Not overnight.
                            </h2>
                            <p className="font-space-grotesk font-normal text-base sm:text-lg text-white/80 leading-[25.6px] mt-6 max-w-[700px]">
                                Relationships across regulators, banks, fintechs, and compliance professionals in Australia, New Zealand, Singapore, UAE, and India.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3  w-full max-w-[1200px]">
                            <div className="flex flex-col items-start gap-4 p-10 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <h3 className="font-gelasio font-medium text-[24px] leading-[38.4px] tracking-[-0.24px] text-white">
                                    Regulatory relationships
                                </h3>
                                <p className="font-space-grotesk font-normal text-[16px] leading-[25.6px] text-white/80">
                                    Direct working relationships with AUSTRAC, DIA, ASIC/AFSL, and APRA built over two decades of registered entity work.
                                </p>
                            </div>
                            <div className="flex flex-col items-start gap-4 p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <h3 className="font-gelasio font-medium text-[24px] leading-[38.4px] tracking-[-0.24px] text-white">
                                    Banking network
                                </h3>
                                <p className="font-space-grotesk font-normal text-[16px] leading-[25.6px] text-white/80">
                                    Existing relationships with settlement banks, correspondent banks, and payment infrastructure providers across APAC.
                                </p>
                            </div>
                            <div className="flex flex-col items-start gap-4 p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <h3 className="font-gelasio font-medium text-[24px] leading-[38.4px] tracking-[-0.24px] text-white">
                                    Compliance community
                                </h3>
                                <p className="font-space-grotesk font-normal text-[16px] leading-[25.6px] text-white/80">
                                    Active ACAMS member. Network of CAMS-certified practitioners across Australia for audit referral partnerships.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Cta />
        </div>
    );
}
