"use client";

import Link from "next/link";
import Image from "next/image";
import Cta from "./Cta";
import Container from "../../public/Container.png"

export default function Services() {
    return (
        <div className="w-full flex flex-col">
            {/* ── Services Hero Section (Frame 688) ── */}
            <div className="w-full min-h-[527px] bg-gradient-to-b from-[#010132] to-[#1D1D81] flex flex-col relative overflow-hidden pt-[89px]">


                {/* ── Content Wrapper (Frame 687) ── */}
                <div className="flex-1 flex items-center justify-center px-6 lg:px-20 py-16 lg:py-[120px] relative z-10">
                    <div className="flex flex-col items-center text-center gap-6 max-w-[844px] w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
                        {/* Tagline: "Services & pricing" — gold gradient */}
                        <span className="font-space-grotesk font-medium text-sm tracking-[1.4px] uppercase bg-gradient-to-r from-[#CCAB51] via-[#D5B45F] to-[#E7C77C] bg-clip-text text-transparent">
                            Services & pricing
                        </span>

                        {/* Heading: Mixed Roman + Italic */}
                        <h1 className="font-gelasio font-medium text-4xl sm:text-5xl md:text-[64px] leading-tight md:leading-[75px] tracking-[-0.48px] text-white">
                            Four meanings.{" "}
                            <br className="hidden sm:inline" />
                            <span className="italic font-medium bg-[linear-gradient(271.02deg,#CCAB51_0.83%,#D5B45F_51.73%,#E7C77C_99.06%)] bg-clip-text text-transparent">
                                One mission.
                            </span>
                        </h1>

                        {/* Subtitle / Description */}
                        <p className="font-space-grotesk font-medium text-base sm:text-lg md:text-[18px] leading-[27px] text-white/80 max-w-[844px]">
                            The name &quot;Cleared&quot; was chosen deliberately. We exist to simplify compliance and remove the fear of the unknown.
                        </p>
                    </div>
                </div>
            </div>
            <section className="w-full bg-white container--boxed text-slate-900 flex flex-col items-center">
                <div className="max-w-[1440px] mx-auto section-2xl w-full flex flex-col items-center">
                    {/* Header */}
                    <div className="flex flex-col items-center text-center ">
                        <span className="font-space-grotesk font-bold text-sm tracking-[1.4px] text-[#D4AF37] uppercase">
                            Why Cleared?
                        </span>
                        <h2 className="font-gelasio font-medium text-3xl sm:text-4xl md:text-[48px] leading-tight tracking-[-0.48px] text-[#111827] mt-4">
                            What the name stands for.
                        </h2>
                    </div>
                    {/* Cards Grid */}
                    <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 p-[48px] items-stretch">
                        {/* Card 1 */}
                        <div className="group relative flex flex-col justify-between p-8 sm:p-10 min-h-[320px] bg-[#FDFDF9] border border-[#D4AF37] hover:shadow-lg transition-all duration-300">
                            <div className="flex flex-col gap-6">
                                <div>

                                    <span className="font-space-grotesk font-bold text-[48px] leading-none text-black/5 select-none">
                                        01
                                    </span>
                                    <h3 className="font-gelasio font-medium text-2xl sm:text-[28px] text-[#111827] tracking-[-0.28px] leading-snug">
                                        Cleared to proceed
                                    </h3>
                                </div>
                                <p className="font-space-grotesk font-normal text-base text-[#4B5563] leading-[25.6px]">
                                    Like an aircraft cleared for takeoff — verified, authorised, ready to operate with confidence. That's what every business we work with feels when we're done.
                                </p>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="group relative flex flex-col justify-between p-8 sm:p-10 min-h-[320px] bg-[#FDFDF9] border border-[#D4AF37] hover:shadow-lg transition-all duration-300">
                            <div className="flex flex-col gap-6">
                                <div>

                                    <span className="font-space-grotesk font-bold text-[48px] leading-none text-black/5 select-none">
                                        02
                                    </span>
                                    <h3 className="font-gelasio font-medium text-2xl sm:text-[28px] text-[#111827] tracking-[-0.28px] leading-snug">
                                        AML clearance
                                    </h3>
                                </div>
                                <p className="font-space-grotesk font-normal text-base text-[#4B5563] leading-[25.6px]">
                                    The technical meaning — a customer is cleared, a transaction is cleared, a business is cleared to operate. Compliance built in, not bolted on.
                                </p>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="group relative flex flex-col justify-between p-8 sm:p-10 min-h-[320px] bg-[#FDFDF9] border border-[#D4AF37] hover:shadow-lg transition-all duration-300">
                            <div className="flex flex-col gap-6">
                                <div>

                                    <span className="font-space-grotesk font-bold text-[48px] leading-none text-black/5 select-none">
                                        03
                                    </span>
                                    <h3 className="font-gelasio font-medium text-2xl sm:text-[28px] text-[#111827] tracking-[-0.28px] leading-snug">
                                        Cleared of doubt
                                    </h3>
                                </div>
                                <p className="font-space-grotesk font-normal text-base text-[#4B5563] leading-[25.6px]">
                                    The relief a business owner feels when they know they're compliant. No more wondering. No more fear of the AUSTRAC letter.
                                </p>
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div className="group relative flex flex-col justify-between p-8 sm:p-10 min-h-[320px] bg-[#FDFDF9] border border-[#D4AF37] hover:shadow-lg transition-all duration-300">
                            <div className="flex flex-col gap-6">
                                <div>

                                    <span className="font-space-grotesk font-bold text-[48px] leading-none text-black/5 select-none">
                                        04
                                    </span>
                                    <h3 className="font-gelasio font-medium text-2xl sm:text-[28px] text-[#111827] tracking-[-0.28px] leading-snug">
                                        Cleared — transparent
                                    </h3>
                                </div>
                                <p className="font-space-grotesk font-normal text-base text-[#4B5563] leading-[25.6px]">
                                    Nothing hidden. Nothing murky. Everything above board. Plain English, transparent pricing, no surprises.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Pull Quote Section (4. PULL QUOTE SECTION) ── */}
            <section className="w-full bg-gradient-to-t from-[#1D1D81] to-[#010132] container--boxed  text-white flex flex-col items-center relative overflow-hidden">


                <div className="max-w-[1440px] mx-auto section-2xl w-full flex flex-col items-center relative z-10">
                    {/* Big Decorative Quote Mark */}
                    <span className="font-gelasio font-medium text-[120px] leading-none text-[#D4AF37]/20 select-none">
                        <Image src={Container} alt="Container" />
                    </span>

                    {/* Quote Text */}
                    <h2 className="font-gelasio font-medium text-2xl sm:text-3xl md:text-[40px] leading-snug md:leading-[56px] tracking-[-0.4px] text-center max-w-[900px]">
                        "For 20 years, serious compliance expertise was available only to those who could afford it. Tranche 2 just changed the rules for 80,000 businesses overnight.{" "}
                        <span className="bg-gradient-to-r from-[#CCAB51] via-[#D5B45F] to-[#E7C77C] bg-clip-text text-transparent italic font-medium">
                            Cleared Advisory exists to close that gap.
                        </span>
                        "
                    </h2>

                    {/* Author Tagline */}
                    <span className="font-space-grotesk font-bold text-sm tracking-[1.4px] text-white/60 uppercase mt-10">
                        &mdash; Ritesh Singh, Founder
                    </span>
                </div>
            </section>

            {/* ── Our Values Section (5. OUR VALUES) ── */}
            <section className="w-full bg-white container--boxed  text-slate-900 flex flex-col items-center">
                <div className="max-w-[1440px] mx-auto section-2xl w-full flex flex-col items-center">
                    {/* Header */}
                    <div className="flex flex-col items-center text-center mb-16">
                        <span className="font-space-grotesk font-bold text-sm tracking-[1.4px] text-[#D4AF37] uppercase">
                            How We Work
                        </span>
                        <h2 className="font-gelasio font-medium text-3xl sm:text-4xl md:text-[48px] leading-tight tracking-[-0.48px] text-[#111827] mt-4">
                            Our values.
                        </h2>
                    </div>

                    {/* Cards Grid */}
                    <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-stretch">
                        {/* Card 1 */}
                        <div className="group relative flex flex-col justify-between p-8 sm:p-10 min-h-[307px] bg-[#FDFDF9] border border-[#E5E7EB] rounded-[4px] hover:border-[#CCAB51]/30 hover:shadow-lg transition-all duration-300">
                            <div className="flex flex-col gap-6">
                                <h3 className="font-gelasio font-medium text-2xl text-[#111827] tracking-[-0.24px] leading-snug">
                                    Plain English always
                                </h3>
                                <p className="font-space-grotesk font-normal text-base text-[#4B5563] leading-[25.6px]">
                                    We never use jargon when plain language works. Our clients are business owners, not compliance professionals.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="group relative flex flex-col justify-between p-8 sm:p-10 min-h-[307px] bg-[#FDFDF9] border border-[#E5E7EB] rounded-[4px] hover:border-[#CCAB51]/30 hover:shadow-lg transition-all duration-300">
                            <div className="flex flex-col gap-6">
                                <h3 className="font-gelasio font-medium text-2xl text-[#111827] tracking-[-0.24px] leading-snug">
                                    Educator first, seller second
                                </h3>
                                <p className="font-space-grotesk font-normal text-base text-[#4B5563] leading-[25.6px]">
                                    We give you enough information to make your own decision. If you don't need us for something, we'll tell you.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="group relative flex flex-col justify-between p-8 sm:p-10 min-h-[307px] bg-[#FDFDF9] border border-[#E5E7EB] rounded-[4px] hover:border-[#CCAB51]/30 hover:shadow-lg transition-all duration-300">
                            <div className="flex flex-col gap-6">
                                <h3 className="font-gelasio font-medium text-2xl text-[#111827] tracking-[-0.24px] leading-snug">
                                    Independence is non-negotiable
                                </h3>
                                <p className="font-space-grotesk font-normal text-base text-[#4B5563] leading-[25.6px]">
                                    We never audit programs we built for the same client. AUSTRAC expects independence. So do we.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="group relative flex flex-col justify-between p-8 sm:p-10 min-h-[307px] bg-[#FDFDF9] border border-[#E5E7EB] rounded-[4px] hover:border-[#CCAB51]/30 hover:shadow-lg transition-all duration-300">
                            <div className="flex flex-col gap-6">
                                <h3 className="font-gelasio font-medium text-2xl text-[#111827] tracking-[-0.24px] leading-snug">
                                    Built to last — not built to invoice
                                </h3>
                                <p className="font-space-grotesk font-normal text-base text-[#4B5563] leading-[25.6px]">
                                    Programs people actually use. Not documents in drawers.
                                </p>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="group relative flex flex-col justify-between p-8 sm:p-10 min-h-[307px] bg-[#FDFDF9] border border-[#E5E7EB] rounded-[4px] hover:border-[#CCAB51]/30 hover:shadow-lg transition-all duration-300">
                            <div className="flex flex-col gap-6">
                                <h3 className="font-gelasio font-medium text-2xl text-[#111827] tracking-[-0.24px] leading-snug">
                                    Practical and specific
                                </h3>
                                <p className="font-space-grotesk font-normal text-base text-[#4B5563] leading-[25.6px]">
                                    Every recommendation comes with a clear action. We don't deal in theory. We do action plans.
                                </p>
                            </div>
                        </div>

                        {/* Card 6 */}
                        <div className="group relative flex flex-col justify-between p-8 sm:p-10 min-h-[307px] bg-[#FDFDF9] border border-[#E5E7EB] rounded-[4px] hover:border-[#CCAB51]/30 hover:shadow-lg transition-all duration-300">
                            <div className="flex flex-col gap-6">
                                <h3 className="font-gelasio font-medium text-2xl text-[#111827] tracking-[-0.24px] leading-snug">
                                    We stay — we don't disappear
                                </h3>
                                <p className="font-space-grotesk font-normal text-base text-[#4B5563] leading-[25.6px]">
                                    Available when something goes wrong. When AUSTRAC asks a question. When a transaction needs reviewing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Our Difference (Editorial Split) Section (3. OUR DIFFERENCE) ── */}
            <section className="w-full bg-gradient-to-b from-[#010132] to-[#1D1D81] container--boxed  text-white flex flex-col items-center relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto section-2xl w-full">
                    <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Left Column: Text & Stats */}
                        <div className="flex flex-col justify-center max-w-[568px] w-full">
                            {/* Tagline */}
                            <span className="font-space-grotesk font-bold text-sm tracking-[1.4px] text-[#D4AF37] uppercase">
                                The Team
                            </span>

                            {/* Heading */}
                            <h2 className="font-gelasio font-medium text-3xl sm:text-4xl md:text-[48px] leading-tight tracking-[-0.48px] text-white mt-6">
                                Built by practitioners. Not theorists.
                            </h2>

                            {/* Description */}
                            <div className="flex flex-col gap-6 mt-8">
                                <p className="font-space-grotesk font-normal text-base sm:text-lg text-white/70 leading-relaxed">
                                    Cleared Advisory wasn't built by software developers or junior consultants reading rulebooks. It was founded by Ritesh Singh after 22+ years as a practicing MLRO and risk officer in the APAC region.
                                </p>
                                <p className="font-space-grotesk font-normal text-base sm:text-lg text-white/70 leading-relaxed">
                                    We know what it feels like to be accountable to AUSTRAC. We know what regulators actually look for, and more importantly, we know how to build programs that fastgrowing businesses can actually run without slowing down their operations.
                                </p>
                            </div>

                            {/* Horizontal Divider */}
                            <hr className="border-t border-white/20 my-8 w-full" />

                            {/* Stats */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-0  p-6 rounded-sm">
                                {/* Stat 1 */}
                                <div className="flex flex-col gap-2 sm:pr-6 justify-center items-center text-center">
                                    <span className="font-space-grotesk font-medium text-4xl text-white tracking-[-1.44px]">
                                        80,000+
                                    </span>
                                    <span className="font-space-grotesk font-medium text-xs tracking-[1.1px] text-white/80 uppercase">
                                        Businesses Captured
                                    </span>
                                </div>

                                {/* Stat 2 */}
                                <div className="flex flex-col gap-2 sm:pl-6 pt-4 sm:pt-0 justify-center items-center text-center">
                                    <span className="font-space-grotesk font-medium text-4xl text-white tracking-[-1.44px]">
                                        3-in-1
                                    </span>
                                    <span className="font-space-grotesk font-medium text-xs tracking-[1.1px] text-white/80 uppercase">
                                        Advisory &middot; Ops &middot; Audit
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Image with Overlaid Stat Card */}
                        <div className="relative flex justify-center lg:justify-end w-full lg:max-w-[568px] mt-12 lg:mt-0">
                            {/* Main Image */}
                            <div className="relative w-full aspect-[568/600] max-h-[600px] overflow-hidden bg-slate-900">
                                <Image
                                    src="/three_colleagues.png"
                                    alt="Three colleagues discussing compliance operations in front of a laptop"
                                    fill
                                    className="object-cover"
                                    sizes="(max-w-1024px) 100vw, 568px"
                                />
                            </div>

                            {/* Overlaid Premium Stat Card */}
                            <div className="absolute -left-4 sm:-left-8 bottom-8 w-[270px] h-[96px]  bg-gradient-to-r from-[#CCAB51] via-[#D5B45F] to-[#E7C77C] shadow-xl shadow-amber-500/10 border border-black/10 flex items-center px-6 py-6 transition-transform duration-300 hover:scale-[1.03]">
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

            <Cta />
        </div>
    );
}
