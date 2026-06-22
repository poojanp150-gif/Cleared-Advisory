"use client"
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";


export default function Home() {
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
  const phase1Services = [
    { name: "Template pack", price: "From $497" },
    { name: "Compliance health check", price: "$1,500–$2,500" },
    { name: "Full program build", price: "$5,000–$10,000" },
    { name: "Sector workshop", price: "$750–$1,500/pp" },
    { name: "Independent audit May 2026", price: "From $2,500" },
  ];

  const phase2Services = [
    { name: "Fractional MLRO", price: "$3,500–$6,000/mo" },
    { name: "KYC/CDD operations", price: "Retainer" },
    { name: "Transaction monitoring", price: "Retainer" },
    { name: "SMR drafting & submission", price: "Retainer" },
    { name: "Annual independent audit", price: "From $2,500" },
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
  const leftHeroPost = {
    date: "12 Aug 2026",
    title: "The Complete Tranche 2 Guide for Real Estate Agents",
    summary: "Everything you need to know about your AML/CTF obligations as a real estate agent in Australia. What's captured, what's required, and how to get compliant without slowing down your transactions.",
    image: "/blog1.jpg",
    link: "#"
  };

  const smallPosts = [
    {
      date: "05 Aug 2026",
      title: "How to Enrol with AUSTRAC: A Step-by-Step Walkthrough",
      link: "#"
    },
    {
      date: "28 Jul 2026",
      title: "What Is an AML/CTF Program and What Must Mine Include?",
      link: "#"
    }
  ];

  const bottomWidePost = {
    date: "14 Jul 2026",
    title: "Understanding Fractional MLRO Services for Fast-Growing Teams",
    image: "/blog2.jpg",
    link: "#"
  };
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

  return (
    // overflow-x-hidden
    <div className="relative min-h-screen bg-slate-950 text-white">
      {/* Background Image & Gradient Overlay */}
      <div className="absolute inset-0 z-0 h-[1024px] w-full">
        <Image
          src="/Heroimg.png"
          alt="Hero"
          fill
          priority
          className="object-cover object-center"
        />

      </div>

      <div className="relative z-10 flex flex-col min-h-screen pt-[89px]">
        {/* <main className="flex-1 flex flex-col justify-center max-w-[1440px] mx-auto w-full"></main> */}
        <main className="flex-1 flex flex-col justify-center w-full">
          <div className="w-full flex flex-col items-center text-center px-6 lg:px-20 py-20 lg:py-[103px] max-w-[1440px] mx-auto relative z-10">
            {/* Frame 687: Heading & Subheading */}
            <div className="max-w-[1280px] w-full flex flex-col items-center gap-6">
              <h1 className="font-gelasio font-medium text-4xl sm:text-5xl md:text-6xl lg:text-[72px] lg:leading-[75.6px] tracking-[-0.01em] text-white">
                Compliance that <br className="hidden sm:inline" />
                <span className="italic">actually works.</span>
              </h1>

              <p className="font-space-grotesk font-medium text-base sm:text-lg text-white/90 max-w-[800px] leading-relaxed sm:leading-[27px] mt-2 whitespace-pre-line">
                80,000+ Australian businesses just got new legal obligations.{"\n"}
                Most don't know where to start. We do - because our{"\n"}
                practitioners have spent 22+ years on the inside.
              </p>
            </div>

            {/* Nested Frame 688: Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 w-full max-w-[367px]">
              {/* Button 1: Our Services (Gold Gradient) */}
              <Link
                href="#services"
                className="group relative flex w-full sm:w-[177px] h-[57px] items-center justify-between pl-6 pr-4 rounded-full bg-gradient-to-r from-[#CCAB51] via-[#D5B45F] to-[#E7C77C] shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 hover:scale-[1.02] transition-all duration-300"
              >
                <span className="font-space-grotesk text-base font-bold text-[#1A1A1A]">
                  Our Services
                </span>
                <div className="w-7 h-7 rounded-full bg-[#1A1A1A] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <svg
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
                    />
                  </svg>
                </div>
              </Link>

              {/* Button 2: Contact Us (Outline) */}
              <Link
                href="#contact"
                className="group flex w-full sm:w-[166px] h-[57px] items-center justify-between pl-6 pr-4 rounded-full border border-white hover:bg-white hover:border-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-white/5"
              >
                <span className="font-space-grotesk text-base font-bold text-white transition-colors duration-300 group-hover:text-[#1A1A1A]">
                  Contact Us
                </span>
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center border border-white transition-all duration-300 group-hover:bg-[#1A1A1A] group-hover:border-[#1A1A1A]">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-300 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]"
                  >
                    <path
                      d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                      stroke="#1A1A1A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-colors duration-300 group-hover:stroke-white"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </main>

        <section className="w-full bg-white py-20 lg:py-24 text-slate-900 relative">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Left Column: Text Content & Stats */}
              <div className="flex flex-col justify-center max-w-[568px] w-full">
                {/* Tagline */}
                <span className="font-space-grotesk font-medium text-sm tracking-[1.1px] text-slate-500 uppercase">
                  Our Difference
                </span>

                {/* Heading */}
                <h2 className="font-gelasio font-medium text-3xl sm:text-4xl md:text-[48px] leading-tight md:leading-[58px] tracking-[-0.01em] text-[#1A1A1A] mt-6">
                  "Most advisors know the rules. We've lived them."
                </h2>

                {/* Description */}
                <p className="font-space-grotesk font-normal text-base sm:text-lg text-slate-500 mt-6 leading-relaxed">
                  As MLROs and risk officers, accountable to AUSTRAC, building
                  programs that work in the real world. We don't complicate
                  compliance to create dependency. We make it simple, practical,
                  and yours to own.
                </p>

                {/* Horizontal Divider */}
                <hr className="border-t border-slate-900/10 my-8 w-full" />

                {/* Stat Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-slate-900/10  p-6 ">
                  {/* Stat 1 */}
                  <div className="flex flex-col gap-2 sm:pr-6">
                    <span className="font-space-grotesk font-medium text-4xl text-[#1A1A1A] tracking-[-0.04em]">
                      80,000+
                    </span>
                    <span className="font-space-grotesk font-medium text-xs tracking-[1.1px] text-slate-500 uppercase">
                      Businesses Captured
                    </span>
                  </div>

                  {/* Stat 2 */}
                  <div className="flex flex-col gap-2 sm:pl-6 pt-4 sm:pt-0">
                    <span className="font-space-grotesk font-medium text-4xl text-[#1A1A1A] tracking-[-0.04em]">
                      3-in-1
                    </span>
                    <span className="font-space-grotesk font-medium text-xs tracking-[1.1px] text-slate-500 uppercase">
                      Advisory · Ops · Audit
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Image with Overlaid Stat Card */}
              <div className="relative flex justify-center lg:justify-end w-full lg:max-w-[568px] mt-12 lg:mt-0">
                {/* Main Image */}
                <div className="relative w-full aspect-[568/600] max-h-[600px]  overflow-hidden bg-[#D9D6CE]">
                  <Image
                    src="/three_colleagues.png"
                    alt="Three colleagues discussing compliance operations in front of a laptop"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-w-1024px) 100vw, 568px"
                  />
                </div>

                {/* Overlaid Premium Stat Card */}
                <div className="absolute -left-4 sm:-left-8 bottom-8 w-[270px] h-[96px] rounded-lg bg-gradient-to-r from-[#CCAB51] via-[#D5B45F] to-[#E7C77C] shadow-xl shadow-amber-500/10 border border-black/10 flex items-center px-6 py-6 transition-transform duration-300 hover:scale-[1.03]">
                  <div className="flex items-center gap-4">
                    <span className="font-space-grotesk font-medium text-4xl text-[#1A1A1A] tracking-[-0.04em]">
                      22
                    </span>
                    <span className="font-space-grotesk font-medium text-xs tracking-[1.1px] text-[#1A1A1A] leading-tight uppercase max-w-[150px]">
                      Yrs APAC Experience
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        <section className="w-full bg-gradient-to-b from-[#010132] to-[#1D1D81] py-20 lg:py-28 text-white relative">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

              {/* Left Column: Heading Content */}
              <div className="flex flex-col justify-start lg:sticky lg:top-24 max-w-[576px] w-full pt-10">
                {/* Tagline */}
                <span className="font-space-grotesk font-medium text-sm tracking-[1.1px] text-white/70 uppercase">
                  Why Us
                </span>

                {/* Heading */}
                <h2 className="font-gelasio font-medium text-3xl sm:text-4xl md:text-[48px] leading-tight md:leading-[58px] tracking-[-0.01em] text-white mt-6">
                  Three things nobody else in this space can say.
                </h2>

                {/* Description */}
                <p className="font-inter font-normal text-base sm:text-lg text-white/80 mt-6 leading-relaxed">
                  Most consultants deal entirely in theory, leaving you to figure out the execution.
                  We bring boots-on-the-ground reality to your compliance, building operational
                  frameworks that actually protect your business.
                </p>
              </div>

              {/* Right Column: Stacked Cards */}
              <div className="flex flex-col gap-8 w-full lg:max-w-[576px]">
                {cards.map((card, idx) => (
                  <div
                    key={idx}
                    className="group relative bg-white rounded-sm p-8 sm:p-10 shadow-md border border-black/5 hover:border-amber-400/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-6"
                  >
                    {/* Big faint number */}
                    <div className="font-space-grotesk font-medium text-5xl leading-none text-slate-900/10 group-hover:text-amber-500/20 transition-colors duration-300">
                      {card.number}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-4">
                      <h3 className="font-gelasio font-medium text-2xl text-[#1A1A1A]">
                        {card.title}
                      </h3>
                      <p className="font-inter font-normal text-base text-slate-500 leading-relaxed">
                        {card.text}
                      </p>
                    </div>

                    {/* Subtle bottom gold border line that expands on hover */}
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#CCAB51] to-[#E7C77C] group-hover:w-full transition-all duration-300" />
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>
        <section id="services" className="w-full bg-[#F8F9FA] py-20 lg:py-24 text-slate-900 relative">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20">

            {/* Header Container */}
            <div className="max-w-[1280px] mx-auto flex flex-col items-center text-center mb-16">
              <span className="font-space-grotesk font-medium text-sm tracking-[1.1px] text-[#666666] uppercase">
                YOUR JOURNEY
              </span>
              <h2 className="font-gelasio font-medium text-3xl sm:text-4xl md:text-[48px] leading-tight md:leading-[58px] tracking-[-0.01em] text-[#1A1A1A] mt-6 max-w-[501px]">
                Two phases. <br className="xs:hidden" />One long-term partner.
              </h2>
            </div>

            {/* Side-by-Side Flex Cards Grid */}
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

              {/* Phase 1 Card */}
              <div className="group relative bg-white border border-black/10 rounded-[4px] p-8 sm:p-12 shadow-sm flex flex-col justify-between min-h-[768px] transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
                <div className="flex flex-col">
                  {/* Phase Watermark */}
                  <div className="font-space-grotesk font-medium text-5xl sm:text-6xl tracking-[-0.03em] text-black/15 leading-none">
                    Phase 01
                  </div>

                  {/* Heading & Paragraph */}
                  <h3 className="font-gelasio font-medium text-3xl sm:text-[32px] text-[#1A1A1A] mt-6 tracking-[-0.01em]">
                    Get Cleared.
                  </h3>
                  <p className="font-inter font-normal text-base text-[#666666] mt-4 leading-relaxed max-w-[486px]">
                    Everything you need to enrol with AUSTRAC, build a program that works, train your team, and meet your 1 July 2026 deadline. Done properly. In plain English.
                  </p>

                  {/* Services Table List */}
                  <div className="mt-12">
                    <ul className="divide-y divide-black/10">
                      {phase1Services.map((service, idx) => (
                        <li key={idx} className="flex justify-between items-center py-6">
                          <span className="font-space-grotesk font-normal text-base text-[#1A1A1A]">
                            {service.name}
                          </span>
                          <span className="font-space-grotesk font-medium text-base text-[#1A1A1A]">
                            {service.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-12">
                  <Link
                    href="#contact"
                    className="group/btn relative flex w-full h-[52px] items-center justify-center gap-2 pl-8 pr-4 rounded-full bg-[#1A1A1A] border border-[#1A1A1A] hover:bg-transparent transition-all duration-300 hover:scale-[1.01] hover:shadow-md hover:shadow-black/5"
                  >
                    <span className="font-space-grotesk text-base font-medium text-white group-hover/btn:text-[#1A1A1A] transition-colors duration-300">
                      See Phase 1 Services
                    </span>
                    <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center transition-all duration-300 group-hover/btn:bg-[#1A1A1A]">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform duration-300 group-hover/btn:translate-x-[1px] group-hover/btn:-translate-y-[1px]"
                      >
                        <path
                          d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                          stroke="#1A1A1A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="transition-colors duration-300 group-hover/btn:stroke-white"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Phase 2 Card */}
              <div className="group relative bg-gradient-to-br from-[#010132] to-[#1D1D81] border border-black/5 rounded-[4px] p-8 sm:p-12 shadow-sm flex flex-col justify-between min-h-[768px] transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
                <div className="flex flex-col text-white">
                  {/* Phase Watermark */}
                  <div className="font-space-grotesk font-medium text-5xl sm:text-6xl tracking-[-0.03em] text-white/20 leading-none">
                    Phase 02
                  </div>

                  {/* Heading & Paragraph */}
                  <h3 className="font-gelasio font-medium text-3xl sm:text-[32px] text-white mt-6 tracking-[-0.01em]">
                    Stay Cleared.
                  </h3>
                  <p className="font-inter font-normal text-base text-white/70 mt-4 leading-relaxed max-w-[486px]">
                    Compliance running in the background — monitored, maintained, and reported — without hiring a full-time team. We become your compliance infrastructure.
                  </p>

                  {/* Services Table List */}
                  <div className="mt-12">
                    <ul className="divide-y divide-white/10">
                      {phase2Services.map((service, idx) => (
                        <li key={idx} className="flex justify-between items-center py-6">
                          <span className="font-space-grotesk font-normal text-base text-white">
                            {service.name}
                          </span>
                          <span className="font-inter font-semibold text-base text-white">
                            {service.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-12">
                  <Link
                    href="#contact"
                    className="group/btn relative flex w-full h-[52px] items-center justify-center gap-2 pl-8 pr-4 rounded-full bg-gradient-to-r from-[#CCAB51] via-[#D5B45F] to-[#E7C77C] hover:scale-[1.01] hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300"
                  >
                    <span className="font-space-grotesk text-base font-medium text-[#1A1A1A]">
                      Talk About Phase 2
                    </span>
                    <div className="w-7 h-7 rounded-full bg-[#1A1A1A] flex items-center justify-center transition-all duration-300">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform duration-300 group-hover/btn:translate-x-[1px] group-hover/btn:-translate-y-[1px]"
                      >
                        <path
                          d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
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
        </section>
        <section className="w-full bg-gradient-to-b from-[#010132] to-[#1D1D81] py-20 lg:py-28 text-white relative">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
            {/* items-center */}
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 ">

              {/* Left Column: Title & Sectors List */}
              <div className="flex flex-col justify-center max-w-[568px] w-full">
                <span className="font-space-grotesk font-medium text-sm tracking-[1.1px] text-white/70 uppercase">
                  WHO WE HELP
                </span>

                <h2 className="font-gelasio font-medium text-3xl sm:text-4xl md:text-[48px] leading-tight md:leading-[52.8px] tracking-[-0.01em] text-white mt-6">
                  Five sectors. <br />One deadline.
                </h2>

                <p className="font-space-grotesk font-normal text-base text-white/90 mt-6 leading-relaxed">
                  From 1 July 2026, these industries must comply with Australia's AML/CTF laws. We specialise in all of them.
                </p>

                {/* Sectors Interactive List */}
                <div className="mt-12 border-t border-white/10 divide-y divide-white/10">
                  {sectors.map((sector, idx) => {
                    const isActive = activeIndex === idx;
                    return (
                      <div
                        key={idx}
                        onMouseEnter={() => setActiveIndex(idx)}
                        onClick={() => setActiveIndex(idx)}
                        className="flex justify-between items-center py-6 cursor-pointer group transition-all duration-300"
                      >
                        <div className="flex flex-col gap-2 pr-4">
                          {/* Sector Title */}
                          {isActive ? (
                            <h3 className="font-gelasio font-medium text-xl sm:text-2xl tracking-[-0.01em] bg-gradient-to-r from-[#CCAB51] via-[#D5B45F] to-[#E7C77C] bg-clip-text text-transparent transition-all duration-300">
                              {sector.name}
                            </h3>
                          ) : (
                            <h3 className="font-gelasio font-medium text-xl sm:text-2xl tracking-[-0.01em] text-white group-hover:text-amber-300 transition-colors duration-300">
                              {sector.name}
                            </h3>
                          )}

                          {/* Sector Subtext */}
                          <p className="font-space-grotesk font-normal text-sm sm:text-base text-white/70 leading-normal">
                            {sector.description}
                          </p>
                        </div>

                        {/* Arrow Circle */}
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isActive
                            ? "bg-gradient-to-r from-[#CCAB51] via-[#D5B45F] to-[#E7C77C] text-[#1A1A1A] scale-105"
                            : "border border-white/30 text-white/70 group-hover:border-white group-hover:text-white"
                            }`}
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`transition-transform duration-300 ${isActive ? "translate-x-[1px] -translate-y-[1px]" : "group-hover:translate-x-[1px] group-hover:-translate-y-[1px]"
                              }`}
                          >
                            <path
                              d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                              stroke="currentColor"
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
              <div className="relative flex justify-center lg:sticky lg:top-24 lg:justify-end w-full lg:max-w-[568px] mt-12 lg:mt-0">
                <div className="w-full bg-white/10 backdrop-blur-md border h-[468px] border-white/10 rounded-[4px] px-6 sm:px-10 py-12 flex flex-col items-center text-center shadow-2xl">

                  {/* Card Header */}
                  <span className="font-space-grotesk font-medium text-sm sm:text-base tracking-[1.1px] text-white/90 uppercase">
                    29 JULY 2026
                  </span>
                  <h3 className="font-gelasio font-medium text-2xl sm:text-3xl text-white mt-4 tracking-[-0.01em]">
                    AUSTRAC Enrolment Deadline
                  </h3>

                  {/* Countdown Numbers Group */}
                  <div className="flex items-center justify-center gap-4 sm:gap-6 mt-10 mb-10">
                    {/* Days */}
                    <div className="flex flex-col items-center">
                      <span className="font-space-grotesk font-medium text-4xl sm:text-5xl tracking-[-0.03em] text-white">
                        {timeLeft.days}
                      </span>
                      <span className="font-space-grotesk font-medium text-xs sm:text-sm tracking-[1.1px] text-white/70 uppercase mt-2">
                        Days
                      </span>
                    </div>

                    {/* Divider */}
                    <span className="font-gelasio font-medium text-3xl sm:text-4xl text-white/50 -translate-y-3">
                      :
                    </span>

                    {/* Hours */}
                    <div className="flex flex-col items-center">
                      <span className="font-space-grotesk font-medium text-4xl sm:text-5xl tracking-[-0.03em] text-white">
                        {String(timeLeft.hours).padStart(2, "0")}
                      </span>
                      <span className="font-space-grotesk font-medium text-xs sm:text-sm tracking-[1.1px] text-white/70 uppercase mt-2">
                        Hours
                      </span>
                    </div>

                    {/* Divider */}
                    <span className="font-gelasio font-medium text-3xl sm:text-4xl text-white/50 -translate-y-3">
                      :
                    </span>

                    {/* Minutes */}
                    <div className="flex flex-col items-center">
                      <span className="font-space-grotesk font-medium text-4xl sm:text-5xl tracking-[-0.03em] text-white">
                        {String(timeLeft.minutes).padStart(2, "0")}
                      </span>
                      <span className="font-space-grotesk font-medium text-xs sm:text-sm tracking-[1.1px] text-white/70 uppercase mt-2">
                        Minutes
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="#contact"
                    className="group/btn relative flex w-full h-[52px] items-center justify-center gap-2 pl-8 pr-4 rounded-full bg-gradient-to-r from-[#CCAB51] via-[#D5B45F] to-[#E7C77C] hover:scale-[1.01] hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300"
                  >
                    <span className="font-space-grotesk text-base font-medium text-[#1A1A1A]">
                      Book a call to check your status
                    </span>
                    <div className="w-7 h-7 rounded-full bg-[#1A1A1A] flex items-center justify-center transition-all duration-300">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform duration-300 group-hover/btn:translate-x-[1px] group-hover/btn:-translate-y-[1px]"
                      >
                        <path
                          d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>

                  {/* Small Warning Subtext */}
                  <p className="font-space-grotesk font-normal text-sm text-white/80 mt-8 leading-relaxed max-w-[422px]">
                    Operating without enrolling after this date is a criminal offence under the AML/CTF Act 2006.
                  </p>

                </div>
              </div>

            </div>
          </div>
        </section>
        <section className="w-full bg-white py-20 lg:py-24 text-slate-900 relative">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* Left Column: Left Profile Card (col-span 4) */}
              <div className="col-span-1 lg:col-span-4 flex justify-center w-full">
                <div className="w-full max-w-[381px] bg-gradient-to-br from-[#010132] to-[#1D1D81] border border-[#010132]/5 rounded-[4px] px-8 py-12 flex flex-col items-center text-center shadow-lg">

                  {/* Avatar with Outside Gold Gradient Border */}
                  <div className="w-[220px] h-[220px] rounded-full p-[10px] bg-gradient-to-r from-[#CCAB51] via-[#D5B45F] to-[#E7C77C] flex items-center justify-center shadow-md">
                    <div className="w-[200px] h-[200px] rounded-full overflow-hidden relative bg-slate-950">
                      <Image
                        src="/ritesh_singh.png"
                        alt="Ritesh Singh"
                        fill
                        sizes="200px"
                        priority
                        className="object-cover rounded-full"
                      />
                    </div>
                  </div>

                  {/* Name & Title */}
                  <h3 className="font-gelasio font-semibold text-2xl text-white mt-8 tracking-[-0.01em]">
                    Ritesh Singh
                  </h3>
                  <span className="font-space-grotesk font-normal text-xs sm:text-sm tracking-[1.1px] text-white/90 uppercase mt-2">
                    FOUNDER, CLEARED ADVISORY
                  </span>

                  {/* Horizontal Divider & Credentials List */}
                  <div className="w-full border-t border-white/10 mt-8 pt-8 text-left">
                    <ul className="flex flex-col gap-4">
                      {credentials.map((cred, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="font-inter font-normal text-base text-white select-none">
                            •
                          </span>
                          <span className="font-space-grotesk font-normal text-sm tracking-[1.1px] text-white/70">
                            {cred}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>

              {/* Right Column: Quote & Bio Content (col-span 8) */}
              <div className="col-span-1 lg:col-span-8 flex flex-col justify-start lg:pl-4">
                {/* Quote block */}

                <h2 className="font-gelasio font-medium text-1xl sm:text-3xl md:text-[32px] leading-relaxed md:leading-[50.4px] tracking-[-0.01em] text-[#1A1A1A] border-l-4 pl-3 [border-image:linear-gradient(180deg,#010132_0%,#1D1D81_100%)_1]">
                  "I didn't build{" "}
                  <span className="font-normal bg-[linear-gradient(271.02deg,#CCAB51_0.83%,#D5B45F_51.73%,#E7C77C_99.06%)] bg-clip-text text-transparent">
                    Cleared Advisory
                  </span>{" "}
                  to be another compliance firm. I built it because businesses deserve access to the same expertise the big banks have — without the $500/hour price tag."
                </h2>

                {/* Biography Paragraphs */}
                <div className="flex flex-col gap-6 mt-10 ">
                  <p className="font-inter font-normal text-base sm:text-lg text-slate-500 leading-relaxed">
                    22 years. Multiple MLRO roles. AUSTRAC, DIA, AFSL. Built programs from zero. Been audited against them. Turned around loss-making businesses. Managed de-banking threats. Built teams from 8 to 60 people across 4 countries.
                  </p>
                  <p className="font-inter font-normal text-base sm:text-lg text-slate-500 leading-relaxed">
                    I've seen what happens when compliance is treated as a cost centre. And what's possible when it's built into the business from day one. That's what Cleared Advisory delivers.
                  </p>
                </div>

                {/* Underlined CTA Text Link */}
                <div className="mt-10">
                  <Link
                    href="#contact"
                    className="inline-block font-inter font-semibold text-[15px] text-[#1A1A1A] border-b border-[#1A1A1A] pb-[2px] transition-all duration-300 hover:text-[#CCAB51] hover:border-[#CCAB51] hover:translate-x-[2px]"
                  >
                    Read our full story →
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        <Faq />
        <section className="w-full bg-white py-20 lg:py-24 text-slate-900 relative">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20">

            {/* Header Row */}
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-4">
              <div className="flex flex-col">
                <span className="font-space-grotesk font-medium text-sm tracking-[1.4px] text-slate-500 uppercase">
                  RESOURCES
                </span>
                <h2 className="font-gelasio font-medium text-3xl sm:text-4xl md:text-[48px] leading-tight tracking-[-0.01em] text-[#1A1A1A] mt-3">
                  Insights & Guides
                </h2>
              </div>
              <Link
                href="#"
                className="inline-block font-inter font-semibold text-[15px] text-[#1A1A1A] self-start md:self-auto transition-all duration-300 hover:text-[#CCAB51] hover:border-[#CCAB51] hover:translate-x-[2px]"
              >
                View all resources →
              </Link>
            </div>

            {/* Bento Grid System */}
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12  items-stretch">

              {/* LEFT COLUMN: Large Hero Card */}
              <div className="col-span-1 lg:col-span-5 bg-white border border-slate-200  overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex flex-col">
                  {/* Image Container */}
                  <div className="relative w-full aspect-[543/280] overflow-hidden bg-slate-100">
                    <Image
                      src={leftHeroPost.image}
                      alt={leftHeroPost.title}
                      fill
                      sizes="(max-w-1024px) 100vw, 500px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* Content area */}
                  <div className="p-8 flex flex-col gap-4">
                    <span className="font-space-grotesk font-normal text-sm text-slate-500">
                      {leftHeroPost.date}
                    </span>
                    <h3 className="font-gelasio font-medium text-2xl sm:text-[28px] leading-snug tracking-[-0.01em] text-[#1A1A1A] group-hover:text-amber-600 transition-colors duration-300">
                      {leftHeroPost.title}
                    </h3>
                    <p className="font-space-grotesk font-normal text-base text-slate-500 leading-relaxed">
                      {leftHeroPost.summary}
                    </p>
                  </div>
                </div>

                {/* Read link */}
                <div className="px-8 pb-8">
                  <Link
                    href={leftHeroPost.link}
                    className="inline-flex items-center font-space-grotesk font-semibold border-b border-[#1A1A1A] pb-[2px] text-base text-[#1A1A1A] gap-1 group/link hover:text-[#CCAB51] transition-colors duration-300"
                  >
                    Read article
                    <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-[3px]">
                      →
                    </span>
                  </Link>
                </div>
              </div>

              {/* RIGHT COLUMN: Stacked Grid */}
              <div className="col-span-1 lg:col-span-7 flex flex-col  justify-between">

                {/* Top Row: 2 Small Text Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2  items-stretch flex-1">
                  {smallPosts.map((post, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-slate-200  p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                    >
                      <div className="flex flex-col gap-4">
                        <span className="font-space-grotesk font-normal text-sm text-slate-500">
                          {post.date}
                        </span>
                        <h3 className="font-gelasio font-medium text-xl sm:text-[22px] leading-snug tracking-[-0.01em] text-[#1A1A1A] group-hover:text-amber-600 transition-colors duration-300">
                          {post.title}
                        </h3>
                      </div>

                      <div className="mt-8">
                        <Link
                          href={post.link}
                          className="inline-flex items-center font-space-grotesk font-semibold border-b border-[#1A1A1A] pb-[2px] text-base text-[#1A1A1A] gap-1 group/link hover:text-[#CCAB51] transition-colors duration-300"
                        >
                          Read article
                          <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-[3px]">
                            →
                          </span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Row: 1 Wide Card with right-aligned image */}
                <div className="bg-white border border-slate-200  overflow-hidden flex flex-col sm:flex-row items-stretch shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  {/* Content on Left */}
                  <div className="p-8 flex flex-col justify-between flex-1">
                    <div className="flex flex-col gap-4">
                      <span className="font-space-grotesk font-normal text-sm text-slate-500">
                        {bottomWidePost.date}
                      </span>
                      <h3 className="font-gelasio font-medium text-xl sm:text-[24px] leading-snug tracking-[-0.01em] text-[#1A1A1A] group-hover:text-amber-600 transition-colors duration-300 max-w-[340px]">
                        {bottomWidePost.title}
                      </h3>
                    </div>

                    <div className="mt-8">
                      <Link
                        href={bottomWidePost.link}
                        className="inline-flex items-center font-space-grotesk font-semibold text-base border-b border-[#1A1A1A] pb-[2px] text-[#1A1A1A] gap-1 group/link hover:text-[#CCAB51] transition-colors duration-300"
                      >
                        Read article
                        <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-[3px]">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>

                  {/* Image on Right */}
                  <div className="relative w-full sm:w-[236px] min-h-[200px] sm:min-h-full overflow-hidden bg-slate-100 shrink-0">
                    <Image
                      src={bottomWidePost.image}
                      alt={bottomWidePost.title}
                      fill
                      sizes="(max-w-768px) 100vw, 236px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        <Cta />

      </div>
    </div>
  );
}


