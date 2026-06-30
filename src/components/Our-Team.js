"use client";
import './Our-Team.css';


import Link from "next/link";
import Cta from "./Cta";
import Image from "next/image";
import riteshsingh from "../../public/ritesh_singh.png";

export default function OurTeam() {
    return (
        <div className="w-full flex flex-col">
            {/* ── Hero Section ── */}

            <div className="w-full max-h-146 bg-gradient-to-b from-brand-blue-900 to-brand-blue-800 flex flex-col relative overflow-hidden pt-22">

                {/* ── Hero Content ── */}
                <div className="flex-1 flex items-center justify-center px-6 lg:px-20 py-15 lg:py-30">
                    <div className="flex flex-col items-center text-center  max-w-211 w-full">

                        {/* Subtitle: "Why Cleared" — gold gradient, small-caps */}
                        <span
                            className="font-space-grotesk font-medium text--2xs sm:text--xs tracking-1.1px uppercase text-[#D4AF37] pb-2"
                        >
                            OUR TEAM
                        </span>

                        {/* Heading: mixed roman + italic */}
                        <h1 className="font-gelasio font-medium text--4xl sm:text--7xl md:text--9xl leading-[150%] md:leading-19 tracking--0.48px text-white">
                            Our Practitioners.{" "}
                            <br className="" />
                            <span className="font-medium italic our-team__highlight-text-gold bg-clip-text text-transparent">Not Theorists.</span>
                        </h1>
                        {/* Description */}
                        <p className="font-space-grotesk font-medium text--xs sm:text--lg md:text-18px leading-7 text-white/90 max-w-211">
                            We&apos;ve held the roles. Been accountable. Built programs under real regulatory scrutiny.
                        </p>
                    </div>
                </div>
            </div>


            <section className="w-full bg-white  text-slate-900" >
                <div className="container--boxed">
                    <div className="max-w-360 mx-auto section-1xl sm:section-2xl w-full">
                        <div className="max-w-320 mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">

                            <div className="w-full lg:w-95 bg-gradient-to-b from-brand-blue-900 to-brand-blue-800 border border-white/10 flex flex-col items-center p-5 sm:p-10 shrink-0 rounded-4px our-team__shadow-card-light relative">
                                <div className='flex sm:flex-col gap-4'>

                                    <div className="w-20 h-20 sm:w-50 sm:h-50 rounded-full p-1 sm:p-3 bg-gradient-to-l from-brand-gold-500 via-brand-gold-400 to-brand-gold-300  sm:mb-6">
                                        <div className="relative w-full h-full overflow-hidden rounded-full">
                                            <Image
                                                src={riteshsingh}
                                                alt="Ritesh Singh"
                                                fill
                                                sizes="200px"
                                                className="object-cover"
                                                priority
                                            />
                                        </div>
                                    </div>
                                    <div>

                                        <h3 className="font-gelasio font-semibold text--xl sm:text--2xl tracking--0.24px text-white text-center">
                                            Ritesh Singh
                                        </h3>
                                        <span className="font-space-grotesk font-normal text--2xs sm:text--xs tracking-1.1px text-white/80 text-center mt-2 uppercase">
                                            FOUNDER, CLEARED ADVISORY
                                        </span>
                                    </div>
                                </div>

                                <div className="w-full  border-t border-black/10 mt-0 sm:mt-5 p-6">

                                    <ul className="list-disc text-white flex flex-col gap-4 w-full">
                                        <li className="">

                                            <span className="font-space-grotesk font-normal text--xs tracking-1.1px text-white/70">CAMS — ACAMS 2019</span>
                                        </li>
                                        <li className="">

                                            <span className="font-space-grotesk font-normal text--xs tracking-1.1px text-white/70">CAMS-Audit — in progress</span>
                                        </li>
                                        <li className="">

                                            <span className="font-space-grotesk font-normal text--xs tracking-1.1px text-white/70">MBA — Melbourne Business School 2025</span>
                                        </li>
                                        <li className="">

                                            <span className="font-space-grotesk font-normal text--xs tracking-1.1px text-white/70">Former MLRO: AUSTRAC · DIA · AFSL</span>
                                        </li>
                                        <li className="">

                                            <span className="font-space-grotesk font-normal text--xs tracking-1.1px text-white/70">22 years APAC compliance</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col gap-8  pt-4 lg:pt-8">
                                <div className="border-l-4 border-l-brand-blue-900 ">
                                    <h2 className="font-gelasio font-medium text--xl pl-4 pt-5 pb-2 sm:pb-0  lg:pl-10 sm:text--4xl leading-tight sm:leading-[50.4px]  sm:tracking--0.36px text-brand-900">
                                        &quot;I didn&apos;t build {" "}
                                        <span className="font-normal our-team__highlight-text-gold bg-clip-text text-transparent">
                                            Cleared Advisory
                                        </span>{" "}
                                        to be another compliance firm. I built it because businesses deserve access to the same expertise the big banks have — without the $500/hour price tag.&quot;
                                    </h2>
                                </div>

                                <div className="flex flex-col gap-6 max-w-180 pl-6 w-full">
                                    <p className="font-inter font-normal text--xs sm:text--base leading-6 text-brand-gray-500">
                                        22 years. Multiple MLRO roles. AUSTRAC, DIA, AFSL. Built programs from zero. Been audited against them. Turned around loss-making businesses. Managed de-banking threats. Built teams from 8 to 60 people across 4 countries.
                                    </p>
                                    <p className="font-inter font-normal text--xs sm:text--base leading-6 text-brand-gray-500">
                                        I&apos;ve seen what happens when compliance is treated as a cost centre. And what&apos;s possible when it&apos;s built into the business from day one. That&apos;s what Cleared Advisory delivers.
                                    </p>
                                </div>


                                <div className="flex flex-col md:flex-row sm:border-t border-slate-200 bg-white  w-full ">
                                    <div className="flex flex-col items-center justify-center p-8 min-w-50 border-b border-slate-200 sm:border-none">
                                        <span className="font-space-grotesk font-medium text--xl sm:text--5xl leading-12 tracking--1.44px text-brand-900">80,000+</span>
                                        <span className="font-space-grotesk font-medium text--xs tracking-1.1px text-brand-gray-500 sm:mt-2 text-center uppercase">BUSINESSES CAPTURED</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-8 min-w-50 border-b border-slate-200 sm:border-none">
                                        <span className="font-space-grotesk font-medium text--xl sm:text--5xl leading-12 tracking--1.44px text-brand-900">22</span>
                                        <span className="font-space-grotesk font-medium text--xs tracking-1.1px text-brand-gray-500 sm:mt-2 text-center uppercase">YRS APAC EXPERIENCE</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-8 min-w-50 ">
                                        <span className="font-space-grotesk font-medium text--xl sm:text--5xl leading-12 tracking--1.44px text-brand-900">3-in-1</span>
                                        <span className="font-space-grotesk font-medium text--xs tracking-1.1px text-brand-gray-500 sm:mt-2 text-center uppercase">ADVISORY OPS · AUDIT</span>
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
                    <div className="  mx-auto section-1xl sm:section-2xl w-full">
                        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2  items-stretch">
                            <div className="bg-brand-bg-white  max-w-[600px] w-full border-t border-b border-l border-r lg:border-r-0 border-brand-gold-600 p-6 sm:p-12 flex flex-col gap-6 justify-between">
                                <div>
                                    <h3 className="font-gelasio font-medium text--xl sm:text--3xl text-brand-gray-800 leading-snug tracking--0.28px mb-3 sm:mb-4">
                                        Advisory Board — Forming
                                    </h3>
                                    <p className="font-space-grotesk font-normal text--xs sm:text--base text-brand-gray-600 leading-6">
                                        Senior practitioners across legal, payments, and regulatory affairs joining the Cleared Advisory Advisory Board in Q3 2026. Announcements coming.
                                    </p>
                                </div>
                                <Link
                                    href="/contact"
                                    className="group font-space-grotesk font-bold text--base text-brand-gold-600 inline-flex items-center sm:mt-6 "
                                >
                                    <div className="border-b border-brand-gold-600">
                                        <span className=" ">
                                            Interested in joining?
                                        </span>

                                        <span className="ml-2">
                                            →
                                        </span>
                                    </div>
                                </Link>
                            </div>
                            {/* inline-block font-inter font-semibold text-15px text-brand-900 border-b border-brand-900 pb-0.5 transition-all duration-300 hover:text-brand-gold-500 hover:border-brand-gold-500 hover:translate-x-0.5 */}
                            <div className="bg-brand-bg-white max-w-[600px] w-full border border-brand-gold-600 p-6 sm:p-12 flex flex-col gap-6 justify-start">
                                <div>
                                    <h3 className="font-gelasio font-medium text-xl sm:text--3xl text-brand-gray-800 leading-snug tracking--0.28px mb-3 sm:mb-4">
                                        Associate Compliance Practitioners
                                    </h3>
                                    <p className="font-space-grotesk font-normal text--xs sm:text--base text-brand-gray-600 leading-6">
                                        Our network of CAMS-certified associate practitioners is available for specialist engagements and surge capacity. All associates are individually vetted.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── The Network ── */}
            <section className="w-full bg-gradient-to-b from-brand-blue-900 to-brand-blue-800  text-white flex flex-col items-center">
                <div className="container--boxed">


                    <div className="max-w-360 mx-auto section-1xl sm:section-2xl w-full flex flex-col items-center">
                        <div className="flex flex-col items-start sm:items-center text-left sm:text-center w-full  max-w-150 mb-12 sm:mb-12">
                            <span className="font-space-grotesk font-bold text--xs tracking--1.4px text-brand-gold-600 uppercase">
                                OUR NETWORK
                            </span>
                            <h2 className="font-gelasio font-medium text--3xl sm:text--5xl  md:text--7xl leading-tight text-white mt-4">
                                Built over 22 years. Not overnight.
                            </h2>
                            <p className="font-space-grotesk font-normal text--base  text-white/80 leading-6 mt-6 max-w-175">
                                Relationships across regulators, banks, fintechs, and compliance professionals in Australia, New Zealand, Singapore, UAE, and India.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3  w-full max-w-300">
                            <div className="flex flex-col items-start gap-3 sm:gap-4 p-6 sm:p-12 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <h3 className="font-gelasio font-medium text--2xl leading-9 tracking--0.24px text-white">
                                    Regulatory relationships
                                </h3>
                                <p className="font-space-grotesk font-normal text--xs sm:text--base leading-6 text-white/80 pb-7 sm:pb-0">
                                    Direct working relationships with AUSTRAC, DIA, ASIC/AFSL, and APRA built over two decades of registered entity work.
                                </p>
                            </div>

                            <div className="flex flex-col items-start gap-3 sm:gap-4 p-6 sm:p-12 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <h3 className="font-gelasio font-medium text--2xl leading-9 tracking--0.24px text-white">
                                    Banking network
                                </h3>
                                <p className="font-space-grotesk font-normal text--xs sm:text--base leading-6 text-white/80 pb-7 sm:pb-0">
                                    Existing relationships with settlement banks, correspondent banks, and payment infrastructure providers across APAC.
                                </p>
                            </div>

                            <div className="flex flex-col items-start gap-3 sm:gap-4 p-6 sm:p-12 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <h3 className="font-gelasio font-medium text--2xl leading-9 tracking--0.24px text-white">
                                    Compliance community
                                </h3>
                                <p className="font-space-grotesk font-normal text--xs sm:text--base leading-6 text-white/80 pb-7 sm:pb-0">
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
