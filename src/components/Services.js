"use client";

import Link from "next/link";
import Image from "next/image";
import Cta from "./Cta";

export default function Aboutus() {
  const services = [
    {
      id: "template-pack",
      title: "Template pack",
      description: "A complete DIY compliance starter kit for your sector. Draft AML/CTF program, risk assessment template, CDD checklist, and staff training guide. Per sector or all three.",
      bestFor: "Small businesses that want to get compliant themselves",
      price: "$497",
      priceSub: "per sector / $997 all three",
      featured: false,
    },
    {
      id: "full-build",
      title: "Full program build",
      description: "We build your entire AML/CTF program from scratch. Business risk assessment, written program, policies, staff training, and full AUSTRAC enrolment. Everything you need by 1 July 2026.",
      bestFor: "Businesses that want it done properly, by an expert",
      price: "$5,000-$10,000",
      priceSub: "flat fee",
      featured: true,
    },
    {
      id: "health-check",
      title: "Compliance health check",
      description: "A structured review of your current position. Written gap analysis and prioritised action plan within 5 business days. 2-hour interview plus written report.",
      bestFor: "Businesses that want to know exactly where they stand",
      price: "$1,500–$2,500",
      priceSub: "flat fee",
      featured: false,
    },
    {
      id: "sector-workshop",
      title: "Sector workshop",
      description: "3-hour facilitated training for your team. AML/CTF in plain English, identifying suspicious activity, staying compliant day to day.",
      bestFor: "Teams needing practical training in plain English",
      price: "$750–$1,500",
      priceSub: "per person",
      featured: false,
    },
    {
      id: "independent-audit",
      title: "Independent AML/CTF audit",
      status: "FROM MAY 2026",
      description: "Independent audit of your AML/CTF program by a CAMS-Audit certified practitioner. Required annually by all AUSTRAC reporting entities.",
      bestFor: "All AUSTRAC reporting entities requiring their annual independent audit",
      price: "From $2,500",
      priceSub: "based on entity size",
      featured: false,
    },
  ];

  const phase2Services = [
    {
      id: "fractional-mlro",
      title: "Fractional MLRO",
      description: "Ongoing compliance leadership on a monthly retainer. Available, accountable, and across your program. Ideal for fintechs, DCEs, and growing businesses.",
      bestFor: "Fintechs, DCEs, and businesses needing senior ongoing compliance leadership",
      price: "$3,500–$6,000",
      priceSub: "per month",
    },
    {
      id: "cleared-ops",
      title: "Cleared Ops — outsourced compliance operations",
      description: "KYC/CDD processing, transaction monitoring, SMR drafting, ongoing program maintenance. Your compliance engine running in the background.",
      bestFor: "Businesses scaling fast who need compliance ops without hiring",
      price: "Retainer",
      priceSub: "scope on free call",
    }
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
      <section className="w-full bg-white container--boxed text-slate-900 flex flex-col items-center">
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
          <div className="w-full max-w-[1200px] flex flex-col gap-8 items-center">

            {/* Top Row: 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch w-full">
              {services.slice(0, 3).map((service) => (
                <div
                  key={service.id}
                  className={`group relative flex flex-col justify-between p-8 sm:p-10 min-h-[580px] lg:min-h-[608px] transition-all duration-300 ${service.featured
                    ? "bg-white border-2 border-[#D4AF37] shadow-[0_20px_50px_rgba(212,175,55,0.08)] hover:shadow-[0_25px_60px_rgba(212,175,55,0.15)]"
                    : "bg-[#FDFDF9] border border-[#E5E7EB] hover:bg-white hover:border-[#CCAB51]/30  hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)]"
                    }`}
                >
                  {service.featured && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D4AF37] text-slate-900 font-space-grotesk font-bold text-xs tracking-[0.7px] px-6 py-2 rounded-full uppercase shadow-[0_4px_12px_rgba(0,0,0,0.1)] z-20 whitespace-nowrap">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="flex flex-col gap-6">
                    {/* Title */}
                    <h3 className="font-gelasio font-medium text-2xl sm:text-[28px] text-[#111827] tracking-[-0.28px] leading-snug">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="font-space-grotesk font-normal text-base text-[#4B5563] leading-[24px]">
                      {service.description}
                    </p>

                    {/* Best For Box */}
                    <div className="border-l-[3px] border-[#D4AF37] bg-black/[0.03] p-5 flex flex-col gap-2 rounded-r-sm">
                      <span className="font-space-grotesk font-bold text-xs tracking-[1.4px] text-[#111827] uppercase">
                        BEST FOR:
                      </span>
                      <span className="font-space-grotesk font-normal text-sm text-[#4B5563] leading-[22.4px]">
                        {service.bestFor}
                      </span>
                    </div>
                  </div>

                  {/* Pricing Info */}
                  <div className="mt-8 pt-6 flex flex-col gap-1">
                    <span className="font-space-grotesk font-bold text-3xl sm:text-[32px] text-[#111827] leading-none">
                      {service.price}
                    </span>
                    <span className="font-space-grotesk font-normal text-sm text-[#4B5563] leading-normal">
                      {service.priceSub}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row: 2 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch w-full lg:max-w-[1200px]">
              {services.slice(3, 5).map((service) => (
                <div
                  key={service.id}
                  className="group relative flex flex-col justify-between p-8 sm:p-10 min-h-[550px] lg:min-h-[582px] transition-all duration-300 bg-[#FDFDF9] border border-[#E5E7EB] hover:bg-white hover:border-[#CCAB51]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)]"
                >
                  <div className="flex flex-col gap-6">
                    {/* Title & Status */}
                    <div className="flex flex-col gap-2">
                      <h3 className="font-gelasio font-medium text-2xl sm:text-[28px] text-[#111827] tracking-[-0.28px] leading-snug">
                        {service.title}
                      </h3>
                      {service.status && (
                        <span className="font-space-grotesk font-bold text-xs tracking-[1.4px] text-[#4B5563] uppercase">
                          {service.status}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="font-space-grotesk font-normal text-base text-[#4B5563] leading-[24px]">
                      {service.description}
                    </p>

                    {/* Best For Box */}
                    {/* <div className="border-l-[3px] border-[#D4AF37] bg-black/[0.03] p-5 flex flex-col gap-2 rounded-r-sm">
                      <span className="font-space-grotesk font-bold text-xs tracking-[1.4px] text-[#111827] uppercase">
                        BEST FOR:
                      </span>
                      <span className="font-space-grotesk font-normal text-sm text-[#4B5563] leading-[22.4px]">
                        {service.bestFor}
                      </span>
                    </div> */}
                  </div>

                  {/* Pricing Info */}
                  <div className=" flex flex-col gap-1">
                    {/* Best For Box */}
                    <div className="border-l-[3px] border-[#D4AF37] bg-black/[0.03] p-5 flex flex-col gap-2 rounded-r-sm">
                      <span className="font-space-grotesk font-bold text-xs tracking-[1.4px] text-[#111827] uppercase">
                        BEST FOR:
                      </span>
                      <span className="font-space-grotesk font-normal text-sm text-[#4B5563] leading-[22.4px]">
                        {service.bestFor}
                      </span>
                    </div>
                    <span className="font-space-grotesk pt-[32px]  font-bold text-3xl sm:text-[32px] text-[#111827] leading-none">
                      {service.price}
                    </span>
                    <span className="font-space-grotesk font-normal text-sm text-[#4B5563] leading-normal">
                      {service.priceSub}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Phase 2: Stay Cleared ── */}
      <section className="w-full bg-gradient-to-b from-[#010132] to-[#1D1D81] container--boxed text-white flex flex-col items-center">
        <div className="max-w-[1440px] mx-auto section-2xl w-full flex flex-col items-center">
          <div className="flex flex-col items-center w-full max-w-[1200px] mb-12 sm:mb-16">
            <span className="font-space-grotesk font-bold text-sm tracking-[1.4px] text-[#D4AF37] uppercase">
              PHASE 2 — STAY CLEARED
            </span>
            <h2 className="font-gelasio font-medium text-3xl sm:text-4xl md:text-[48px] leading-tight text-white mt-4">
              Ongoing services
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch w-full max-w-[1200px]">
            {phase2Services.map((service) => (
              <div key={service.id} className="group relative flex flex-col justify-between p-8 sm:p-10 lg:p-12 min-h-[500px] lg:min-h-[567px] transition-all duration-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02]">
                <div className="flex flex-col gap-6 lg:gap-8">
                  <h3 className="font-gelasio font-medium text-2xl sm:text-[28px] text-white tracking-[-0.28px] leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-space-grotesk font-normal text-base sm:text-[16px] text-white/80 leading-[25.6px]">
                    {service.description}
                  </p>
                  <div className="border-l-[3px] border-[#D4AF37] bg-white/5 p-5 flex flex-col gap-2 rounded-r-sm mt-2">
                    <span className="font-space-grotesk font-bold text-xs tracking-[1.4px] text-white/60 uppercase">BEST FOR:</span>
                    <span className="font-space-grotesk font-medium text-sm text-white/90 leading-[22.4px]">{service.bestFor}</span>
                  </div>
                </div>
                <div className=" mt-8 pt-8  flex flex-col gap-1">
                  <span className="font-space-grotesk font-bold text-3xl sm:text-[40px] text-white leading-none">{service.price}</span>
                  <span className="font-space-grotesk font-normal text-sm text-white/60 leading-normal">{service.priceSub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Cta />
    </div>
  );
}
