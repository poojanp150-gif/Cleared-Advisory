"use client";

import Link from "next/link";
import Image from "next/image";
import Cta from "./Cta";

export default function Aboutus() {
  const services = [
    {
      id: "template-pack",
      title: "Template pack",
      description: "A complete DIY compliance starter kit tailored specifically for your sector's requirements.",
      bestFor: "Small businesses that want to get compliant themselves",
      price: "$597–$997",
      priceSub: "per sector / $997 all three",
      featured: false,
    },
    {
      id: "health-check",
      title: "Compliance health check",
      description: "A structured review of your current position resulting in a prioritised action plan within 5 days.",
      bestFor: "Businesses that want to know exactly where they stand",
      price: "$1,500–$2,800",
      priceSub: "flat fee",
      featured: false,
    },
    {
      id: "program-builder",
      title: "AML Program Builder",
      description: "Guided platform build, reviewed and refined by a Cleared practitioner.",
      bestFor: "Businesses seeking a guided, cost-effective tech-enabled build",
      price: "From $1,800",
      priceSub: "flat fee",
      badge: "New",
      featured: false,
    },
    {
      id: "full-build",
      title: "Full program build",
      description: "End-to-end service: risk assessment, written program, training, and AUSTRAC enrolment.",
      bestFor: "Businesses that want it done properly, by an expert",
      price: "$5,000–$12,000",
      priceSub: "flat fee",
      badge: "Most popular",
      featured: true,
    },
    {
      id: "sector-workshop",
      title: "Sector workshop",
      description: "3-hour facilitated training for your team on practical, day-to-day compliance operations.",
      bestFor: "Teams needing practical training in plain English",
      price: "$750–$1,500",
      priceSub: "per person",
      featured: false,
    },
    {
      id: "readiness-review",
      title: "AUSTRAC Readiness Review",
      description: "Optional pre-readiness assurance preparing your business for regulatory audits.",
      bestFor: "All AUSTRAC reporting entities preparing for audits",
      price: "From $2,500",
      priceSub: "flat fee",
      featured: false,
    },
  ];

  const phase2Services = [
    {
      id: "fractional-mlro",
      title: "Fractional MLRO",
      description: "Ongoing compliance leadership on a monthly retainer.",
      bestFor: "Fintechs, DCEs, and businesses needing senior ongoing compliance leadership",
      price: "$4,500–$8,500/mo",
      priceSub: "",
      featured: false,
    },
    {
      id: "kyc-cdd",
      title: "KYC/CDD operations",
      description: "Onboarding, screening, and ongoing monitoring.",
      bestFor: "Businesses scaling fast who need compliance ops without hiring",
      price: "Retainer",
      priceSub: "from $800/mo",
      featured: false,
    },
    {
      id: "transaction-monitoring",
      title: "Transaction monitoring",
      description: "Alert review and structured adjudication.",
      bestFor: "High-volume transaction businesses needing dedicated alert management",
      price: "Retainer",
      priceSub: "from $800/mo",
      featured: false,
    },
    {
      id: "smr-drafting",
      title: "SMR drafting & submission",
      description: "Suspicious matter report evaluation and support.",
      bestFor: "Entities requiring expert assistance in accurately reporting suspicious matters",
      price: "Retainer",
      priceSub: "scope on free call",
      featured: false,
    },
    {
      id: "independent-evaluation",
      title: "Annual independent evaluation",
      description: "By Cleared Audit — CAMS-Audit certified practitioners.",
      bestFor: "All AUSTRAC reporting entities requiring their mandatory annual audit",
      price: "$2,500–$10,000+",
      priceSub: "",
      badge: "Tranche 1 & 2",
      featured: false,
    },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* ── Hero Section (Frame 688) ── */}
      <div className="w-full min-h-[495px] bg-gradient-to-b from-[#010132] to-[#1D1D81] flex flex-col relative overflow-hidden pt-[89px]">

        {/* ── Content Wrapper (Frame 687) ── */}
        <div className="flex-1 flex items-center justify-center px-6 lg:px-20 py-16 lg:py-[120px]">
          <div className="flex flex-col items-center text-center gap-6 max-w-[844px] w-full animate-in fade-in slide-in-from-bottom-4 duration-700">

            {/* Tagline: "About us" — gold gradient */}
            <span className="font-space-grotesk font-medium text-sm tracking-[1.1px] uppercase bg-gradient-to-r from-[#CCAB51] via-[#D5B45F] to-[#E7C77C] bg-clip-text text-transparent">
              Services
            </span>

            {/* Heading: Mixed Roman + Italic */}
            <h1 className="font-gelasio font-medium text-4xl sm:text-5xl md:text-[64px] leading-tight md:leading-[75px] tracking-[-0.48px] text-white">
              Transparent pricing.{" "}
              <br className="hidden sm:inline" />
              <span className="italic font-medium bg-[linear-gradient(271.02deg,#CCAB51_0.83%,#D5B45F_51.73%,#E7C77C_99.06%)] bg-clip-text text-transparent">No surprises.</span>
            </h1>

            {/* Subtitle / Description */}
            <p className="font-space-grotesk font-medium text-base sm:text-lg md:text-[18px] leading-[27px] text-white/80 max-w-[844px]">
              Every engagement scoped before you commit. No hidden fees. No scope creep. No disappearing.
            </p>
          </div>
        </div>
      </div>

      {/* ── Advisory Services Section (3. PHASE 1: GET CLEARED) ── */}
      <section className="w-full bg-white text-slate-900 flex flex-col items-center">
        <div className="container--boxed">

          <div className="max-w-[1440px] mx-auto section-2xl w-full flex flex-col items-center">

            {/* Header */}
            <div className="flex flex-col items-center text-center mb-16 max-w-[800px]">
              <span className="font-space-grotesk font-medium text-sm tracking-[1.1px] text-[#666666] uppercase">
                Phase 1 — Get Cleared
              </span>
              <h2 className="font-gelasio font-medium text-3xl sm:text-4xl md:text-[48px] leading-tight tracking-[-0.48px] text-[#1A1A1A] mt-4">
                Advisory services
              </h2>
            </div>

            {/* Cards Grid */}
            <div className="w-full max-w-[1200px] mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch w-full">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className={`group relative flex flex-col justify-between  py-8 px-6 sm:px-8 sm:py-10 min-h-[523px] transition-all duration-300 ${service.featured
                      ? "bg-white border-2 border-[#D4AF37] shadow-[0_20px_50px_rgba(212,175,55,0.08)] hover:shadow-[0_25px_60px_rgba(212,175,55,0.15)]"
                      : "bg-[#FDFDF9] border border-[#E5E7EB] hover:bg-white hover:border-[#CCAB51]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)]"
                      }`}
                  >
                    {service.badge && (
                      <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 font-space-grotesk font-bold text-xs tracking-[0.7px] px-6 py-2 rounded-full uppercase shadow-[0_4px_12px_rgba(0,0,0,0.1)] z-20 whitespace-nowrap bg-[#D4AF37]"
                      >
                        <span className="bg-[linear-gradient(180deg,_#010132_0%,_#1D1D81_100%)] bg-clip-text text-transparent">
                          {service.badge}
                        </span>
                      </div>
                    )}

                    <div className="flex flex-col gap-6">
                      {/* Title */}
                      <h3 className="font-gelasio font-medium text-2xl sm:text-[28px] text-[#1A1A1A] tracking-[-0.28px] leading-snug">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="font-space-grotesk font-normal text-base text-[#4B5563] leading-[24px]">
                        {service.description}
                      </p>


                    </div>

                    {/* Pricing Info & Button */}
                    <div className="mt-8 flex flex-col gap-6">
                      <div className="flex flex-col gap-3">
                        <div className="border-l-[3px] border-[#D4AF37] bg-[#1A1A1A]/[0.02] p-5 flex flex-col gap-2 rounded-r-sm">
                          <span className="font-space-grotesk font-bold text-xs tracking-[1.4px] text-[#1A1A1A] uppercase">
                            BEST FOR:
                          </span>
                          <span className="font-space-grotesk font-normal text-sm text-[#4B5563] leading-[22.4px]">
                            {service.bestFor}
                          </span>
                        </div>
                        <span className="pt-[32px] font-space-grotesk font-bold text-3xl sm:text-[32px] text-[#1A1A1A] leading-none">
                          {service.price}
                        </span>
                        {service.priceSub && (
                          <span className="font-space-grotesk font-normal text-sm text-[#666666] leading-normal">
                            {service.priceSub}
                          </span>
                        )}
                      </div>

                      <Link
                        href={`mailto:ritesh@clearedadvisory.com.au?subject=Inquiry regarding ${encodeURIComponent(service.title)}`}
                        className="group/btn flex w-full h-[50px] items-center justify-center gap-2 pl-6 pr-3 rounded-full bg-[#1A1A1A] hover:bg-[#CCAB51] hover:scale-[1.01] transition-all duration-300"
                      >
                        <span className="font-space-grotesk text-sm sm:text-base font-medium text-white group-hover/btn:text-[#1A1A1A] transition-colors duration-300">
                          Get Started
                        </span>

                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition-all duration-300 group-hover/btn:bg-[#1A1A1A] group-hover/btn:scale-105 shrink-0">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="transition-transform duration-300 group-hover/btn:translate-x-[1px] group-hover/btn:-translate-y-[1px]"
                          >
                            <path
                              d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                              stroke="currentColor"
                              className="text-[#1A1A1A] group-hover/btn:text-white transition-colors duration-300"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Phase 2: Stay Cleared ── */}
      <section className="w-full bg-gradient-to-b from-[#010132] to-[#1D1D81] text-white flex flex-col items-center">
        <div className="container--boxed">

          <div className="max-w-[1440px] mx-auto section-2xl w-full flex flex-col items-center">
            <div className="flex flex-col items-center w-full max-w-[1200px] mb-12 sm:mb-16">
              <span className="font-space-grotesk font-bold text-sm tracking-[1.4px] text-[#D4AF37] uppercase">
                PHASE 2 — STAY CLEARED
              </span>
              <h2 className="font-gelasio font-medium text-3xl sm:text-4xl md:text-[48px] leading-tight text-white mt-4">
                Ongoing services
              </h2>
            </div>

            <div className="w-full max-w-[1200px] mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch w-full">
                {phase2Services.map((service) => (
                  <div
                    key={service.id}
                    className="group relative flex flex-col justify-between py-8 px-6 sm:px-8 sm:py-10 transition-all duration-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#CCAB51]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
                  >
                    {service.badge && (
                      <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 font-space-grotesk font-bold text-xs tracking-[0.7px] px-6 py-2 rounded-full uppercase shadow-[0_4px_12px_rgba(0,0,0,0.1)] z-20 whitespace-nowrap bg-[#D4AF37]"
                      >
                        <span className="bg-[linear-gradient(180deg,_#010132_0%,_#1D1D81_100%)] bg-clip-text text-transparent">
                          {service.badge}
                        </span>
                      </div>
                    )}

                    <div className="flex flex-col gap-6">
                      {/* Title */}
                      <h3 className="font-gelasio font-medium text-2xl sm:text-[28px] text-white tracking-[-0.28px] leading-snug">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="font-space-grotesk font-normal text-base text-white/80 leading-[24px]">
                        {service.description}
                      </p>

                      {/* Best For Box */}

                    </div>

                    {/* Pricing Info & Button */}
                    <div className="mt-8 flex flex-col gap-6">
                      <div className="pt-6  flex flex-col gap-1">
                        <div className="border-l-[3px] border-[#D4AF37] bg-white/5 py-4 px-6 flex flex-col gap-2 rounded-r-sm">
                          <span className="font-space-grotesk font-bold text-xs tracking-[1.4px] text-white/60 uppercase">
                            BEST FOR:
                          </span>
                          <span className="font-space-grotesk font-medium text-sm text-white/90 leading-[22.4px]">
                            {service.bestFor}
                          </span>
                        </div>

                        <span className="pt-[32px] font-space-grotesk font-bold text-3xl sm:text-[32px] text-white leading-none">
                          {service.price}
                        </span>
                        {service.priceSub && (
                          <span className="font-space-grotesk font-normal text-sm text-white/60 leading-normal">
                            {service.priceSub}
                          </span>
                        )}
                      </div>

                      <Link
                        href={`mailto:ritesh@clearedadvisory.com.au?subject=Inquiry regarding ${encodeURIComponent(service.title)}`}
                        className="group/btn flex w-full h-[50px] items-center justify-center gap-2 pl-6 pr-3 rounded-full bg-gradient-to-r from-[#CCAB51] via-[#D5B45F] to-[#E7C77C] hover:scale-[1.01] transition-all duration-300"
                      >
                        <span className="font-space-grotesk text-sm sm:text-base font-semibold text-[#1A1A1A]">
                          Get Started
                        </span>

                        <div className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center transition-all duration-300 group-hover/btn:bg-white group-hover/btn:scale-105 shrink-0">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="transition-transform duration-300 group-hover/btn:translate-x-[1px] group-hover/btn:-translate-y-[1px]"
                          >
                            <path
                              d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                              stroke="currentColor"
                              className="text-white group-hover/btn:text-[#1A1A1A] transition-colors duration-300"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Cta />
    </div>
  );
}
