"use client";
import './page.css';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Resource from "@/components/Resource";
import unipayce from "../../public/unipayce.png"
import RiteshImage from "../../public/ritesh_singh.png"
import ritesh_singhimg2 from "../../public/ritesh_singhimg2.png"
export default function Home() {
  const phase1Services = [
    { name: "Template pack", price: "$597-$997", dec: "DIY documents — sector specific" },
    { name: "Compliance health check", price: "$1,500–$2,800", dec: "DIY documents — sector specific" },
    { name: "AML Program Builder", price: "From $1800", dec: "Guided platform build, reviewed and refined by a Cleared practitioner", tag: "New" },
    { name: "Full program build", price: "$5000–$12,000", dec: "End-to-end: risk assessment, program, training, AUSTRAC enrolment" },
    { name: "Sector workshop", price: "$750-$1500/pp", dec: "3-hour sector-specific training" },
    { name: "AUSTRAC Readiness Review", price: "From $2500", dec: "Optional pre-readiness assurance — for Tranche 1 & Tranche 2" },
  ];

  const phase2Services = [
    { name: "Fractional MLRO", price: "$4,500–$8,500/mo", dec: "Ongoing compliance leadership on retainer" },
    { name: "KYC/CDD operations", price: "Retainer - from $800/mo ", dec: "Onboarding, screening, ongoing monitoring" },
    { name: "Transaction monitoring", price: "Retainer - from $800/mo", dec: "Alert review and adjudication" },
    { name: "SMR drafting & submission", price: "Retainer", dec: "Suspicious matter report support" },
    { name: "Annual independent audit", price: "$2,500-$10,000 ", dec: "By Cleared Audit — CAMS-Audit certified practitioners", tag: "Tranche 1 & 2" },
  ];
  const sectors = [
    {
      name: "Real estate agents",
      description: "Most transactions now captured.",
    },
    {
      name: "Accountants & bookkeepers",
      description: "Designated services in scope.",
    },
    {
      name: "Lawyers & conveyancers",
      description: "Property and company formation captured.",
    },
    {
      name: "Precious metals dealers",
      description: "Gold, silver, jewellery above thresholds.",
    },
    {
      name: "Trust & company providers",
      description: "Company and trust formation in scope.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ days: 28, hours: 10, minutes: 25 });
  const [mounted, setMounted] = useState(false);

  const calculateTimeLeft = () => {
    // Deadline: July 29, 2026
    const deadline = new Date("2026-07-29T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = deadline - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    return { days, hours, minutes };
  };

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000); // Update every minute to save cycles

    return () => clearInterval(interval);
  }, []);
  const credentials = [
    "CAMS — ACAMS 2019",
    "CAMS-Audit — in progress",
    "MBA — Melbourne Business School 2025",
    "Former MLRO: AUSTRAC · DIA · AFSL",
    "22 years APAC compliance",
  ];


  const contactInfo = [
    {
      label: "EMAIL",
      value: "ritesh@clearedadvisory.com.au",
      href: "mailto:ritesh@clearedadvisory.com.au"
    },
    {
      label: "PHONE",
      value: "+61 410 450 511",
      href: "tel:+61410450511"
    },
    {
      label: "LOCATION",
      value: "Sydney, NSW — available nationally",
      href: null
    }
  ];

  const expectations = [
    "30 minutes, no charge, no commitment",
    "We confirm whether you're captured under Tranche 2",
    "We walk through what you need to do before 1 July 2026",
    "You leave with at least 3 practical actions you can take immediately",
    "If there's a fit for further work, we discuss it — only if it makes sense for you"
  ];

  const cards = [
    {
      number: "01",
      title: "We've been the MLRO",
      text: "Not just advised on it. Actually held the role. Accountable to AUSTRAC. Signed the SMRs. Managed de-banking threats. That expertise is now available to businesses that could never afford it before.",
    },
    {
      number: "02",
      title: "We build programs people use",
      text: "Not documents that sit in drawers. Real programs, in plain English, for real businesses with real staff who need to actually understand and follow them. Operational compliance, not theoretical.",
    },
    {
      number: "03",
      title: "Advisory, ops & audit",
      text: "Every other provider does one thing. We do all three. You never have to explain your business three times to three different firms. One relationship. Everything covered.",
    },
  ];

  const practitionerCriteria = [
    "CAMS or ICA certification (current)",
    "Experience as an MLRO, compliance officer, or AML/CTF auditor",
    "Available for fractional, retainer, or project-based work",
    "Comfortable working across Tranche 2 sectors — real estate, legal, accounting, precious metals, trust & company services"
  ];

  const registrationCaptures = [
    "Name & contact details",
    "Certification (CAMS / ICA / other) + status",
    "Years of AML/CTF experience",
    "Specialisms (MLRO, audit, KYC ops, TM, reporting)",
    "Availability (fractional / project / audit-only)",
    "Location & willingness to travel"
  ];

  return (
    // overflow-x-hidden
    <div className="relative  bg-slate-950 text-white">
      {/* Background Image & Gradient Overlay */}
      <div className="absolute inset-0 z-0 h-256  w-full">
        <Image
          src="/Heroimg.png"
          alt="Hero"
          fill
          priority
          className="object-cover object-center"
        />

      </div>

      <div className="relative z-10 flex flex-col min-h-screen pt-22">
        {/* <main className="flex-1 flex flex-col justify-center max-w-360 mx-auto w-full"></main> */}
        <main className="flex-1 flex flex-col justify-center w-full">
          <div className="w-full flex flex-col items-center text-center px-6 lg:px-20 py-20 lg:py-26 max-w-360 mx-auto relative z-10">
            {/* Frame 687: Heading & Subheading */}
            <div className="max-w-320 w-full flex flex-col items-center gap-1 sm:gap-6">
              <h1 className="font-gelasio font-medium text--4xl sm:text--7xl md:text--8xl lg:text--10xl lg:leading-tight tracking--0.01em text-white">
                Compliance that <br className="hidden sm:inline" />
                <span className="italic">actually works.</span>
              </h1>

              <p className="font-space-grotesk font-medium text--xs sm:text--lg text-white/90 max-w-200 leading-relaxed sm:leading-7 mt-2 whitespace-pre-line">
                80,000+ Australian businesses just got new legal obligations.<br className='sm:block hidden' />
                Most don't know where to start. We do - because our<br className='sm:block hidden' />
                practitioners have spent 22+ years on the inside.
              </p>
            </div>

            {/* Nested Frame 688: Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6 sm:mt-12 w-full">
              {/* Button 1: Our Services (Gold Gradient) */}
              <Link
                href="/services"
                className="group relative flex w-54  sm:w-54 h-14 button--primary"
              >
                <span className="font-space-grotesk text--base font-bold text-brand-900">
                  Our Services
                </span>
                <div className="w-7 h-7 rounded-full bg-brand-900 flex items-center justify-center ">

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
              </Link>

              {/* Button 2: Contact Us (Outline) */}
              <Link
                href="/contact-us"
                className="group flex w-54  md:w-44 h-14 items-center justify-center gap-2 pl-6 pr-4 rounded-full border border-white hover:bg-white hover:border-white transition-all duration-300 hover:scale-1.02 hover:shadow-lg hover:shadow-white/5"
              >
                <span className="font-space-grotesk text--base font-bold text-white transition-colors duration-300 group-hover:text-brand-900">
                  Contact Us
                </span>
                <div className="w-7 h-7 rounded-full text-black  flex items-center justify-center border border-white transition-all duration-300 group-hover:bg-brand-900 group-hover:border-brand-900">

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
              </Link>
            </div>
          </div>
        </main>

        <section className="w-full bg-white  text-slate-900 relative">
          <div className="container--boxed">

            <div className="mx-auto section-1xl sm:section-2xl">
              <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-1 sm:gap-12 lg:gap-16 items-center">

                {/* Left Column: Text Content & Stats */}
                <div className="flex flex-col justify-center max-w-142 sm:max-w-none lg:max-w-142 w-full">
                  {/* Tagline */}
                  <span className="font-space-grotesk font-medium text--2xs sm:text--xs tracking-1.1px text-[#666666] uppercase">
                    Our Difference
                  </span>

                  {/* Heading */}
                  <h2 className="font-gelasio font-medium text--3xl  md:text--7xl leading-tight md:leading-15 tracking--0.01em text-brand-900 mt-3 sm:mt-6">
                    Most advisors know the rules. We've lived them.
                  </h2>

                  {/* Description */}
                  <p className="font-space-grotesk font-normal text--xs sm:text--lg text-[#666666] mt-3 sm:mt-6 leading-relaxed">
                    As MLROs and risk officers, accountable to AUSTRAC, building
                    programs that work in the real world. We don't complicate
                    compliance to create dependency. We make it simple, practical,
                    and yours to own.
                  </p>

                  {/* Horizontal Divider */}
                  <hr className="border-t border-slate-900/10 my-4 sm:my-8 w-full" />

                  {/* Stat Row */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-0 divide-x divide-slate-900/10 p-0  sm:p-6 ">
                    {/* Stat 1 */}
                    <div className="flex flex-col gap-2    sm:pr-6 text-center sm:text-start">
                      <span className="font-space-grotesk font-medium text--xl sm:text--2xl text-brand-900  tracking--0.04em">
                        80,000+
                      </span>
                      <span className="font-space-grotesk font-medium text--2xs tracking--1.4px sm:tracking-1.1px text-slate-500 uppercase">
                        Businesses Captured
                      </span>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex flex-col gap-2 sm:pl-6 text-center sm:text-start ">
                      <span className="font-space-grotesk font-medium text--xl sm:text--2xl text-brand-900 tracking--0.04em">
                        3-in-1
                      </span>
                      <span className="font-space-grotesk font-medium text--2xs tracking--1.4px sm:tracking-1.1px text-slate-500 uppercase">
                        Advisory · Ops · Audit
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Image with Overlaid Stat Card */}
                <div className="relative flex justify-center lg:justify-end w-full lg:max-w-142 mt-12 lg:mt-0">
                  {/* Main Image */}
                  <div className="relative w-full aspect-568/600 max-h-150  overflow-hidden bg-brand-bg-light">
                    <Image
                      src={ritesh_singhimg2}
                      alt="Three colleagues discussing compliance operations in front of a laptop"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-w-1024px) 100vw, 568px"
                    />
                  </div>

                  {/* Overlaid Premium Stat Card */}
                  <div className="absolute -left-0 lg:-left-8 bottom-8 lg:w-68 lg:h-24  bg-gradient-to-l from-brand-gold-500 via-brand-gold-400 to-brand-gold-300  flex items-center px-3 py-3 sm:px-6 sm:py-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="font-space-grotesk font-medium text--2xl text-brand-900 tracking--0.04em">
                        22
                      </span>
                      <span className="font-space-grotesk font-medium text--xs sm:text--2xs tracking-1.1px text-brand-900 leading-tight uppercase max-w-38">
                        Yrs APAC Experience
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-gradient-to-b from-brand-blue-900 to-brand-blue-800 text-white relative">
          <div className="container--boxed">
            <div className=" section-1xl sm:section-2xl max-w-7xl mx-auto">
              <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-start">

                {/* Left Column: Heading Content */}
                <div className="flex flex-col justify-start lg:sticky lg:top-24 lg:max-w-154 w-full">
                  {/* Tagline */}
                  <span className="font-space-grotesk font-medium text--2xs sm:text--xs tracking-1.1px text-white/70 uppercase">
                    WHY US
                  </span>

                  {/* Heading */}
                  <h2 className="font-gelasio font-medium text--3xl  md:text--7xl leading-tight md:leading-15 tracking--0.01em text-white mt-3 sm:mt-6">
                    Three things nobody else in this space can say.
                  </h2>

                  {/* Description */}
                  <p className="font-inter font-normal text--xs sm:text--base text-white/80 mt-3 sm:mt-6 leading-relaxed">
                    Most consultants deal entirely in theory, leaving you to figure out the execution.
                    We bring boots-on-the-ground reality to your compliance, building operational
                    frameworks that actually protect your business.
                  </p>
                </div>

                {/* Right Column: Stacked Cards */}
                <div className="flex flex-col gap-8 w-full lg:max-w-144">
                  {cards.map((card, idx) => (
                    <div
                      key={idx}
                      className="group relative bg-white rounded-sm p-8 sm:p-10 shadow-md border border-black/5 hover:border-amber-700/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-3 sm:gap-6"
                    >
                      {/* Big faint number */}
                      <div className="font-space-grotesk font-medium text--4xl sm:text--7xl leading-none text-slate-900/10 group-hover:text-amber-700/20 transition-colors duration-300">
                        {card.number}
                      </div>

                      {/* Content */}
                      <div className="flex flex-col gap-4">
                        <h3 className="font-gelasio font-medium text--xl sm:text--2xl text-brand-900">
                          {card.title}
                        </h3>
                        <p className="font-inter font-normal text--xs sm:text--base text-slate-500 leading-relaxed">
                          {card.text}
                        </p>
                      </div>

                      {/* Subtle bottom gold border line that expands on hover */}
                      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-l from-brand-gold-500 to-brand-gold-300 group-hover:w-full transition-all duration-300" />
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full bg-white text-slate-900 relative items-center">
          <div className="container--boxed">


            <div className="max-w-360 mx-auto section-1xl sm:section-2xl">

              {/* Header Container */}
              <div className="mx-auto flex flex-col items-start sm:items-center text-left sm:text-center mb-6 sm:mb-16">
                <span className="font-space-grotesk font-medium text--xs tracking-1.1px text-brand-gray-500 uppercase">
                  YOUR JOURNEY
                </span>
                <h2 className="font-gelasio font-medium text--2xl sm:text--2xl md:text--7xl leading-tight md:leading-15 tracking--0.01em text-brand-900 mt-3 sm:mt-6 ">
                  Two phases. <br className="xs:hidden" />One long-term partner.
                </h2>
              </div>

              {/* Side-by-Side Flex Cards Grid */}
              <div className="max-w-300 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

                {/* Phase 1 Card */}
                <div className="group relative bg-white border border-black/10 rounded-4px p-6 sm:p-12  flex flex-col sm:justify-between sm:min-h-192 ">
                  <div className="flex flex-col">
                    {/* Phase Watermark */}
                    <div className="font-space-grotesk font-medium  text--4xl sm:text--8xl tracking--0.03em text-black/15 leading-none">
                      Phase 01
                    </div>

                    {/* Heading & Paragraph */}
                    <h3 className="font-gelasio font-medium text--3xl sm:text--4xl text-brand-900 mt-3 sm:mt-6 tracking--0.01em">
                      Get Cleared.
                    </h3>
                    <p className="font-inter font-normal text--base text-brand-gray-500 mt-3 sm:mt-4 leading-relaxed max-w-122">
                      Everything you need to enrol with AUSTRAC, build a program that works, train your team, and meet your 1 July 2026 deadline. Done properly. In plain English.
                    </p>

                    {/* Services Table List */}
                    <div className="mt-4 sm:mt-12">
                      <ul className="divide-y divide-black/10 border-t border-black/10">
                        {phase1Services.map((service, idx) => (
                          <li key={idx} className="sm:flex sm:justify-between items-center py-3 sm:py-6">
                            <div className="flex flex-col mb-3 sm:mb-0">
                              <div className='flex flex-wrap items-center gap-3 sm:gap-4'>
                                <span className="font-space-grotesk font-medium text--base text-[#1A1A1A]">
                                  {service.name}
                                </span>
                                {
                                  service?.tag && (
                                    <div className='px-3 py-1 rounded-full bg-gradient-to-l from-[#CCAB51] via-[#D5B45F] to-[#E7C77C]'>
                                      <span className="font-space-grotesk font-medium text--2xs sm:text--xs tracking-1.1px bg-gradient-to-l from-brand-blue-900 to-brand-blue-800 bg-clip-text text-transparent uppercase select-none">
                                        {service.tag}
                                      </span>
                                    </div>
                                  )
                                }
                              </div>
                              <span className="font-space-grotesk font-normal text--xs text-[#666666] mt-1 max-w-80">
                                {service.dec}
                              </span>
                            </div>
                            <span className="font-space-grotesk  font-medium text--base text-brand-900">
                              {service.price}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-7 sm:mt-12">
                    <Link
                      href="/contact-us"
                      className="group/btn relative flex w-full h-13 items-center justify-center gap-2  sm:pl-8 sm:pr-4 rounded-full bg-brand-900 border border-brand-900 hover:bg-transparent transition-all duration-300 hover:scale-1.01"
                    >
                      <span className="font-space-grotesk text--xs sm:text--base font-medium text-white group-hover/btn:text-brand-900 transition-colors duration-300">
                        See Phase 1 Services
                      </span>

                      <div className="w-7 h-7 rounded-full flex items-center justify-center border border-white transition-all duration-300 group-hover:bg-brand-900 group-hover:border-brand-900">

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
                    </Link>
                  </div>
                </div>

                {/* Phase 2 Card */}
                {/* <div className="group relative bg-white border border-black/10 rounded-4px p-5 sm:p-12  flex flex-col sm:justify-between sm:min-h-192 "></div> */}
                <div className="group relative bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 border border-black/5 rounded-4px p-6 sm:p-12  flex flex-col sm:justify-between sm:min-h-192">
                  <div className="flex flex-col text-white">
                    {/* Phase Watermark */}
                    <div className="font-space-grotesk font-medium text--4xl sm:text--8xl tracking--0.03em text-white/20 leading-none">
                      Phase 02
                    </div>

                    {/* Heading & Paragraph */}
                    <h3 className="font-gelasio font-medium text--3xl sm:text--4xl text-white mt-3 sm:mt-6 tracking--0.01em">
                      Stay Cleared.
                    </h3>
                    <p className="font-inter font-normal text--xs sm:text--base text-white/80 mt-4 leading-relaxed max-w-122">
                      Compliance running in the background — monitored, maintained, and reported — without hiring a full-time team. We become your compliance infrastructure.
                    </p>


                    {/* Services Table List */}
                    <div className="mt-4 sm:mt-12">
                      <ul className="divide-y divide-white/10 border-t border-white/10">
                        {phase2Services.map((service, idx) => (
                          <li key={idx} className="sm:flex sm:justify-between items-start py-3 sm:py-6">

                            {/* Left side */}
                            <div className="flex flex-col max-w-60 mb-3 sm:mb-0">

                              <div className='flex flex-wrap items-center gap-2 sm:gap-4'>
                                <span className="font-space-grotesk font-medium text--base text-white">
                                  {service.name}
                                </span>
                                {
                                  service?.tag && (
                                    <div className='px-3 py-1 rounded-full bg-gradient-to-l from-[#CCAB51] via-[#D5B45F] to-[#E7C77C]'>
                                      <span className="font-space-grotesk font-medium text--2xs sm:text--xs tracking-1.1px bg-gradient-to-l from-brand-blue-900 to-brand-blue-800 bg-clip-text text-transparent  select-none">
                                        {service.tag}
                                      </span>
                                    </div>
                                  )
                                }
                              </div>

                              <span className="font-space-grotesk font-normal text--xs text-white/60 mt-1">
                                {service.dec}
                              </span>
                            </div>

                            {/* Right side */}
                            <span className="font-inter font-semibold text--base text-white">
                              {service.price}
                            </span>

                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-4 sm:mt-12">
                    <Link
                      href="/contact-us"
                      className="group/btn relative flex w-full h-13 button--primary"
                    >
                      <span className="font-space-grotesk text--base font-medium text-brand-900">
                        Talk About Phase 2
                      </span>
                      <div className="w-7 h-7 rounded-full bg-brand-900 flex items-center justify-center transition-all duration-300">
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Partner Network Section ── */}
        <section className="w-full bg-white text-slate-900 relative" style={{ marginTop: "-2px" }}>
          <div className="container--boxed">
            <div className="max-w-320 mx-auto section-1xl sm:section-2xl">

              {/* Header Container: Two Column on Large Screens */}
              <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-12 lg:gap-16 items-start mb-5 sm:mb-16 lg:mb-20">
                <div className="flex flex-col justify-center w-full">
                  <span className="font-space-grotesk font-medium text--2xs sm:text--xs tracking-1.1px text-zinc-900 uppercase">
                    PARTNER NETWORK
                  </span>
                  <h2 className="font-gelasio font-medium text--3xl sm:text--2xl md:text--7xl leading-tight md:leading-15 tracking--0.01em text-brand-900 mt-3 sm:mt-6 max-w-142 sm:max-w-full lg:max-w-142">
                    More than compliance - a growing ecosystem for Tranche 2 businesses.
                  </h2>
                </div>
                <div className="w-full flex flex-col justify-end h-full">
                  <p className="font-space-grotesk font-normal text--xs sm:text--lg text-brand-gray-500 leading-relaxed max-w-142 sm:max-w-full lg:max-w-142">
                    Getting compliant is the starting point. Once it's done, the same infrastructure opens doors — outsourced operations capacity, and new revenue lines like cross-border payments. We're building formal partnerships to bring these to Cleared clients.

                  </p>
                </div>
              </div>

              {/* Cards Grid */}
              <div className="max-w-320 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

                {/* Card 1: Ascent Solutions */}
                <div className="group relative bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 rounded-4px p-6 sm:p-10 flex flex-col justify-between shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex flex-col gap-6">

                    <div className="relative w-full h-45 sm:h-56 bg-white/5 border border-white/5 rounded-4px flex items-center justify-center overflow-hidden">

                      <div className='absolute top-4 left-2 sm:left-4 bg-gradient-to-l from-brand-gold-500 via-brand-gold-400 to-brand-gold-300 px-3 py-1 rounded-full'>
                        <span className=" bg-gradient-to-l from-brand-blue-900 to-brand-blue-800 bg-clip-text text-transparent font-space-grotesk font-medium text--2xs tracking-1.1px uppercase ">
                          Cleared Partner
                        </span>
                      </div>
                      {/* bg-gradient-to-l from-brand-blue-900 to-brand-blue-800 bg-clip-text text-transparent  */}
                      <span className="font-gelasio font-medium text-xl sm:text-3xl text-white tracking--0.01em">
                        Ascent Solutions Logo
                      </span>
                    </div>

                    <div className="flex flex-col gap-3">
                      <h3 className="font-gelasio font-medium text--xl sm:text--2xl text-white">
                        Ascent Solutions
                      </h3>
                      <p className="font-inter font-normal text--xs sm:text--base text-white/70 leading-relaxed">
                        Outsourced KYC/AML operations and managed compliance support — extra delivery capacity for Cleared Ops when clients need more hands than a fractional team provides.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2: Unipayce */}
                <div className="group relative bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 rounded-4px p-6 sm:p-10 flex flex-col justify-between shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex flex-col gap-6">

                    <div className="relative w-full h-45 sm:h-56 bg-white/5 border border-white/5 rounded-4px flex items-center justify-center overflow-hidden">

                      <div className='absolute top-4 left-2 sm:left-4 bg-gradient-to-l from-brand-gold-500 via-brand-gold-400 to-brand-gold-300 px-3 py-1 rounded-full'>
                        <span className=" bg-gradient-to-l from-brand-blue-900 to-brand-blue-800 bg-clip-text text-transparent font-space-grotesk font-medium text--2xs tracking-1.1px uppercase ">
                          Cleared Partner
                        </span>
                      </div>

                      {/* UniPayce SVG Logo */}
                      <div className="flex items-center w-40 sm:w-full justify-center gap-3 select-none">
                        <Image src={unipayce} alt="" />

                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="font-gelasio font-medium text--xl sm:text--2xl text-white">
                        Unipayce
                      </h3>
                      <p className="font-inter font-normal text--xs sm:text--base text-white/70 leading-relaxed">
                        Cross-border payments infrastructure — a new revenue line for Tranche 2 businesses (e.g. real estate agencies, trust & company providers) handling international client funds.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        <section className="w-full bg-gradient-to-b from-brand-blue-900 to-brand-blue-800  text-white relative">
          <div className="container--boxed" >


            <div className="max-w-320 mx-auto section-1xl sm:section-2xl">
              {/* items-center */}
              <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-12 lg:gap-16 ">

                {/* Left Column: Title & Sectors List */}
                <div className="flex flex-col justify-center max-w-142 sm:max-w-full lg:max-w-142 w-full">
                  <span className="font-space-grotesk font-medium text--2xs sm:text--xs tracking-1.1px text-white uppercase">
                    WHO WE HELP
                  </span>

                  <h2 className="font-gelasio font-medium text--3xl  md:text--7xl leading-tight  tracking--0.01em text-white mt-3 sm:mt-6">
                    Five sectors. <br className='block sm:hidden lg:block' />One deadline.
                  </h2>

                  <p className="font-space-grotesk font-normal text--xs sm:text--base text-white mt-3 sm:mt-6 leading-relaxed">
                    From 1 July 2026, these industries must comply with Australia's AML/CTF laws. We specialise in all of them.
                  </p>

                  {/* Sectors Interactive List */}
                  <div className="mt-6 sm:mt-12 border-t border-white/10 divide-y divide-white/10">
                    {sectors.map((sector, idx) => {
                      const isActive = activeIndex === idx;
                      return (
                        <div
                          key={idx}
                          onMouseEnter={() => setActiveIndex(idx)}
                          onClick={() => setActiveIndex(idx)}
                          className="flex justify-between items-center py-4 sm:py-6 cursor-pointer group transition-all duration-300"
                        >
                          <div className="flex flex-col gap-2 pr-4">
                            {/* Sector Title */}
                            {isActive ? (
                              <h3 className="font-gelasio font-medium text--xl sm:text--2xl tracking--0.01em bg-gradient-to-l from-brand-gold-500 via-brand-gold-400 to-brand-gold-300 bg-clip-text text-transparent transition-all duration-300">
                                {sector.name}
                              </h3>
                            ) : (
                              <h3 className="font-gelasio font-medium text--xl sm:text--2xl tracking--0.01em text-white group-hover:text-amber-300 transition-colors duration-300">
                                {sector.name}
                              </h3>
                            )}

                            {/* Sector Subtext */}
                            <p className="font-space-grotesk font-normal text--xs sm:text--base text-white leading-normal">
                              {sector.description}
                            </p>
                          </div>

                          {/* Arrow Circle */}
                          <div
                            className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isActive
                              ? "bg-gradient-to-l from-brand-gold-500 via-brand-gold-400 to-brand-gold-300 text-brand-900 scale-105"
                              : "border border-white/30 text-white/70 group-hover:border-white group-hover:text-white"
                              }`}
                          >
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className={`transition-transform duration-300 ${isActive
                                ? "translate-x-px"
                                : "group-hover:translate-x-px"
                                }`}
                            >
                              <path
                                d="M1.5 6H10.5M10.5 6L6.5 2M10.5 6L6.5 10"
                                stroke="currentColor"
                                className={`transition-colors duration-300 ${isActive
                                  ? "text-brand-900"
                                  : "text-white group-hover:text-brand-900"
                                  }`}
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>

                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Column: Timer Card */}
                <div className="relative flex justify-center lg:sticky lg:top-24 lg:justify-end w-full lg:max-w-142 mt-5 sm:mt-12 lg:mt-0">
                  <div className="w-full bg-white/10 backdrop-blur-md border sm:h-117 border-white/10 rounded-4px px-6 py-6 sm:px-10 sm:py-12 flex flex-col items-center text-center shadow-2xl">

                    {/* Card Header */}
                    <span className="font-space-grotesk font-medium text--2xs sm:text--base tracking-1.1px text-white/90 uppercase">
                      29 JULY 2026
                    </span>
                    <h3 className="font-gelasio font-medium text--xl sm:text--2xl text-white mt-2 sm:mt-4 tracking--0.01em">
                      AUSTRAC Enrolment Deadline
                    </h3>

                    {/* Countdown Numbers Group */}
                    <div className="flex items-center justify-center gap-4 sm:gap-6 mt-4 mb-5 sm:mt-10 sm:mb-10">
                      {/* Days */}
                      <div className="flex flex-col items-center">
                        <span className="font-space-grotesk font-medium text--2xl sm:text--7xl tracking--0.03em text-white">
                          {timeLeft.days}
                        </span>
                        <span className="font-space-grotesk font-medium text--xs sm:text--xs tracking-1.1px text-white/70 uppercase mt-2">
                          Days
                        </span>
                      </div>

                      {/* Divider */}
                      <span className="font-gelasio font-medium text--2xl sm:text--2xl text-white/50 -translate-y-3">
                        :
                      </span>

                      {/* Hours */}
                      <div className="flex flex-col items-center">
                        <span className="font-space-grotesk font-medium text--2xl sm:text--7xl tracking--0.03em text-white">
                          {String(timeLeft.hours).padStart(2, "0")}
                        </span>
                        <span className="font-space-grotesk font-medium text--2xs sm:text--xs tracking-1.1px text-white/70 uppercase mt-2">
                          Hours
                        </span>
                      </div>

                      {/* Divider */}
                      <span className="font-gelasio font-medium text--2xl sm:text--2xl text-white/50 -translate-y-3">
                        :
                      </span>

                      {/* Minutes */}
                      <div className="flex flex-col items-center">
                        <span className="font-space-grotesk font-medium text--2xl sm:text--7xl tracking--0.03em text-white">
                          {String(timeLeft.minutes).padStart(2, "0")}
                        </span>
                        <span className="font-space-grotesk font-medium text--2xs sm:text--xs tracking-1.1px text-white/70 uppercase mt-2">
                          Minutes
                        </span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href="/contact-us"
                      className="group/btn relative flex w-full sm:h-13 button--primary"
                    >
                      <span className="font-space-grotesk text--base font-medium text-brand-900">
                        Book a call to check your status
                      </span>
                      <div className="w-7 h-7 rounded-full bg-brand-900 flex items-center justify-center transition-all duration-300">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="transition-transform duration-300 group-hover/btn:translate-x-px"
                        >
                          <path
                            d="M1.5 6H10.5M10.5 6L6.5 2M10.5 6L6.5 10"
                            stroke="currentColor"
                            className="text-white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </Link>

                    {/* Small Warning Subtext */}
                    <p className="font-space-grotesk font-normal text--xs text-white/80 mt-4 sm:mt-8 leading-relaxed max-w-106">
                      Operating without enrolling after this date is a criminal offence under the AML/CTF Act 2006.
                    </p>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-white  text-slate-900" >
          <div className="container--boxed">
            <div className="max-w-320 mx-auto section-1xl sm:section-2xl w-full">
              <div className=" mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">

                <div className="w-full lg:w-95 bg-gradient-to-b from-brand-blue-900 to-brand-blue-800 border border-white/10 flex flex-col items-center p-5 sm:p-10 shrink-0 rounded-4px our-team__shadow-card-light relative">
                  <div className='flex sm:flex-col gap-4'>

                    <div className="w-20 h-20 sm:w-50 sm:h-50 rounded-full p-1 sm:p-3 bg-gradient-to-l from-brand-gold-500 via-brand-gold-400 to-brand-gold-300  sm:mb-6">
                      <div className="relative w-full h-full overflow-hidden rounded-full">
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
                  <div className="border-l-4 border-gradient-to-b from-[#010132] to-[#1D1D81] ">
                    <h2 className="font-gelasio font-medium text--xl pl-4 pt-5 pb-2 sm:pb-0  lg:pl-10 sm:text--4xl leading-tight sm:leading-[50.4px]  sm:tracking--0.36px text-brand-900">
                      &quot;I didn&apos;t build {" "}
                      <span className="font-normal page__highlight-text-gold bg-clip-text text-transparent">
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
                    <div className="mt-3 sm:mt-10">
                      <Link
                        href="/contact-us"
                        className="inline-block font-inter font-semibold text-15px text-brand-900 border-b border-brand-900 pb-0.5 transition-all duration-300 hover:text-brand-gold-500 hover:border-brand-gold-500 hover:translate-x-0.5"
                      >
                        Read our full story →
                      </Link>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </section>

        <Faq />

        {/* ── Practitioner Network CTA Section ── */}
        <section className="w-full bg-white text-slate-900 relative">
          <div className="container--boxed">
            <div className="max-w-360 mx-auto section-1xl sm:section-2xl w-full flex flex-col items-center">
              <div className="max-w-300 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                {/* Left Side Content */}
                <div className="flex flex-col justify-start max-w-142 sm:max-w-none lg:max-w-142 w-full">
                  <span className="font-space-grotesk font-medium text--2xs sm:text--xs tracking--1.4px text-black/60 uppercase">
                    For Compliance Professionals
                  </span>

                  <h2 className="font-gelasio font-medium text--3xl  md:text--7xl leading-tight tracking--0.01em text-brand-900 mt-3 sm:mt-6">
                    Join our practitioner network.
                  </h2>

                  <p className="font-space-grotesk font-normal text--xs sm:text--base text-slate-500 mt-3 sm:mt-6 leading-relaxed max-w-120 sm:max-w-none lg:max-w-120">
                    Tranche 2 has created sudden demand for hundreds of fractional MLROs, AML/CTF auditors and compliance officers — and a real shortage of CAMS and ICA-certified people to fill those roles. If that's you, register your interest. When our clients or partners need fractional or project-based compliance support, you're the bench we draw from.
                  </p>

                  <div className="mt-3 sm:mt-10 max-w-91 w-full">
                    <Link
                      href="mailto:ritesh@clearedadvisory.com.au?subject=Practitioner Network Registration"
                      className="group/btn flex w-full h-13 button--primary"
                    >
                      <span className="font-space-grotesk text--base font-bold text-brand-900">
                        Register your interest
                      </span>
                      <div className="w-8 h-8 rounded-full bg-brand-900 flex items-center justify-center ">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="transition-transform duration-300 group-hover/btn:translate-x-px group-hover/btn:-translate-y-px"
                        >
                          <path
                            d="M1.5 6H10.5M10.5 6L6.5 2M10.5 6L6.5 10"
                            stroke="currentColor"
                            className="text-white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>

                  <p className="font-space-grotesk font-normal text--2xs text-slate-400 mt-3 sm:mt-6 leading-relaxed max-w-112 sm:max-w-none lg:max-w-112">
                    Registering doesn't guarantee placement — it puts you in front of opportunities as our advisory, ops and audit work (and our partners' work) grows. No fees to register.
                  </p>
                </div>

                {/* Right Side Stacked Cards */}
                <div className="flex flex-col gap-8 w-full max-w-142 sm:max-w-none lg:max-w-142">

                  {/* Card 1: What we're looking for */}
                  <div className="group relative bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 border border-white/10 p-6 sm:p-12 shadow-2xl text-white hover:border-white/20 hover:scale-1.01 transition-all duration-300 rounded-4px cursor-pointer">
                    <h3 className="font-gelasio font-medium text--2xl text-white tracking--0.01em">
                      What we're looking for
                    </h3>

                    <div className="mt-3 sm:mt-8 border-t border-white/10 pt-6">
                      <ul className="flex flex-col gap-5">
                        {practitionerCriteria.map((text, idx) => (
                          <li key={idx} className="flex items-start gap-4">
                            <div className="w-2 h-2 rounded-full bg-white mt-2 sm:mt-3 shrink-0" />
                            <span className="font-space-grotesk font-normal text--xs sm:text--base text-white/90 leading-normal">
                              {text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card 2: Registration captures */}
                  <div className="group relative bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 border border-white/10 p-6 sm:p-12 shadow-2xl text-white hover:border-white/20 hover:scale-1.01 transition-all duration-300 rounded-4px cursor-pointer">
                    <h3 className="font-gelasio font-medium text--2xl text-white tracking--0.01em">
                      Registration captures
                    </h3>

                    <div className="mt-3 sm:mt-8 border-t border-white/10 pt-6">
                      <ul className="flex flex-col gap-5">
                        {registrationCaptures.map((text, idx) => (
                          <li key={idx} className="flex items-start gap-4">
                            <div className="w-2 h-2 rounded-full bg-white mt-2 sm:mt-3 shrink-0" />
                            <span className="font-space-grotesk font-normal text--xs sm:text--base text-white/90 leading-normal">
                              {text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </section>


        <Resource />


        <Cta />

      </div >
    </div >
  );
}


