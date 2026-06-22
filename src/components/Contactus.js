"use client";

export default function Contactus() {
    return (
        <div className="w-full flex flex-col">
            {/* ── Services Hero Section (Frame 688) ── */}
            <div className="w-full min-h-[527px] bg-gradient-to-b from-[#010132] to-[#1D1D81] flex flex-col relative overflow-hidden pt-[89px]">
                {/* ── Content Wrapper (Frame 687) ── */}
                <div className="flex-1 flex items-center justify-center px-6 lg:px-20 py-16 lg:py-[120px] relative z-10">
                    <div className="flex flex-col items-center text-center gap-6 max-w-[844px] w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
                        {/* Tagline: "Get In Touch" — gold gradient */}
                        <span className="font-space-grotesk font-medium text-sm tracking-[1.4px] uppercase bg-gradient-to-r from-[#CCAB51] via-[#D5B45F] to-[#E7C77C] bg-clip-text text-transparent">
                            Get In Touch
                        </span>

                        {/* Heading: Mixed Roman + Italic */}
                        <h1 className="font-gelasio font-medium text-4xl sm:text-5xl md:text-[64px] leading-tight md:leading-[75px] tracking-[-0.48px] text-white">
                            Book a free.{" "}
                            <br className="hidden sm:inline" />
                            <span className="italic font-medium bg-[linear-gradient(271.02deg,#CCAB51_0.83%,#D5B45F_51.73%,#E7C77C_99.06%)] bg-clip-text text-transparent">
                                30-minute consultation.
                            </span>
                        </h1>

                        {/* Subtitle / Description */}
                        <p className="font-space-grotesk font-medium text-base sm:text-lg md:text-[18px] leading-[27px] text-white/80 max-w-[844px]">
                            No sales pitch. No commitment. Just a plain-English conversation about where you stand.
                        </p>
                    </div>
                </div>
            </div>

            {/* ── CTA Section (8. CTA SECTION) ── */}
            <section className="w-full bg-white container--boxed text-slate-900 flex flex-col items-center">
                <div className="max-w-[1440px] mx-auto section-2xl w-full">
                    <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                        {/* Left Side: Contact details */}
                        <div className="flex flex-col max-w-[568px] w-full">
                            {/* Tagline */}
                            <span className="font-space-grotesk font-bold text-sm tracking-[1.1px] text-slate-500 uppercase">
                                Contact details
                            </span>

                            {/* Heading */}
                            <h2 className="font-gelasio font-medium text-3xl sm:text-4xl md:text-[64px] leading-tight tracking-[-0.64px] text-slate-900 mt-4">
                                Let's talk.
                            </h2>

                            {/* Description */}
                            <p className="font-space-grotesk font-normal text-base text-slate-600 leading-relaxed max-w-[480px] mt-6">
                                30 minutes, no charge, no commitment. We'll confirm whether you're captured, walk through what you need to do, and give you at least 3 practical actions you can take immediately.
                            </p>

                            {/* Contact Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 divide-y divide-slate-200 sm:divide-y-0  overflow-hidden">
                                {/* Cell 1: Email */}
                                <div className="p-3.5!  flex flex-col gap-2 border border-slate-200  sm:border-r sm:border-b sm:border-slate-200">
                                    <span className="font-space-grotesk font-bold text-xs tracking-[1.1px] text-slate-500 uppercase">
                                        EMAIL
                                    </span>
                                    <a href="mailto:ritesh@clearedadvisory.com.au" className="font-space-grotesk font-medium text-sm sm:text-base text-slate-900 hover:text-[#CCAB51] transition-colors break-words">
                                        ritesh@clearedadvisory.com.au
                                    </a>
                                </div>

                                {/* Cell 2: Phone */}
                                <div className="p-3.5! flex flex-col gap-2  sm:border-b border border-slate-200   sm:border-slate-200">
                                    <span className="font-space-grotesk font-bold text-xs tracking-[1.1px] text-slate-500 uppercase">
                                        PHONE
                                    </span>
                                    <a href="tel:+61410450511" className="font-space-grotesk font-medium text-sm sm:text-base text-slate-900 hover:text-[#CCAB51] transition-colors">
                                        +61 410 450 511
                                    </a>
                                </div>

                                {/* Cell 3: Location */}
                                <div className="p-3.5! flex flex-col gap-2  sm:border-r sm:border-b border border-slate-200 sm:border-slate-200">
                                    <span className="font-space-grotesk font-bold text-xs tracking-[1.1px] text-slate-500 uppercase">
                                        LOCATION
                                    </span>
                                    <span className="font-space-grotesk font-medium text-sm sm:text-base text-slate-900">
                                        Sydney, NSW — available nationally
                                    </span>
                                </div>

                                {/* Cell 4: LinkedIn */}
                                <div className="p-3.5! flex flex-col gap-2 border border-slate-200 sm:border-b sm:border-slate-200">
                                    <span className="font-space-grotesk font-bold text-xs tracking-[1.1px] text-slate-500 uppercase">
                                        LINKEDIN
                                    </span>
                                    <a href="https://linkedin.com/in/riteshsingh" target="_blank" rel="noopener noreferrer" className="font-space-grotesk font-medium text-sm sm:text-base text-slate-900 hover:text-[#CCAB51] transition-colors break-all">
                                        linkedin.com/in/riteshsingh
                                    </a>
                                </div>

                                {/* Cell 5: ABN */}
                            </div>
                            <div className="p-6 flex flex-col gap-2  sm:col-span-2 border border-slate-200 sm:border-slate-200">
                                <span className="font-space-grotesk font-bold text-xs tracking-[1.1px] text-slate-500 uppercase">
                                    ABN
                                </span>
                                <span className="font-space-grotesk font-medium text-sm sm:text-base text-slate-900">
                                    28 867 326 033 — Trading as Cleared Advisory
                                </span>
                            </div>

                            {/* Cell 6: Tranche 2 Deadline */}
                            <div className="p-6 flex flex-col gap-2 border border-slate-200 sm:col-span-2">
                                <span className="font-space-grotesk font-bold text-xs tracking-[1.1px] text-slate-500 uppercase">
                                    TRANCHE 2 DEADLINE
                                </span>
                                <span className="font-space-grotesk font-medium text-sm sm:text-base text-slate-900">
                                    29 July 2026 — Enrol now at AUSTRAC
                                </span>
                            </div>
                        </div>

                        {/* Right Side: Dark Card */}
                        <div className="w-full lg:max-w-[568px] bg-gradient-to-b from-[#010132] to-[#1D1D81] border border-white/10 p-8 sm:p-12 flex flex-col gap-8 text-white relative overflow-hidden shadow-xl shadow-indigo-950/20">
                            {/* Subtle Frost Sheen Overlay */}
                            <div className="absolute inset-0 bg-white/[0.03] pointer-events-none" />

                            <div className="relative z-10 flex flex-col gap-8">
                                {/* Title */}
                                <h3 className="font-gelasio font-medium text-2xl tracking-tight text-white">
                                    What To Expect on The Call
                                </h3>

                                {/* Bullet List */}
                                <ul className="flex flex-col gap-5 border-t border-b border-white/10 py-6">
                                    {[
                                        "30 minutes, no charge, no commitment",
                                        "We confirm whether you're captured under Tranche 2",
                                        "We walk through what you need to do before 1 July 2026",
                                        "You leave with at least 3 practical actions you can take immediately",
                                        "If there's a fit for further work, we discuss it — only if it makes sense for you"
                                    ].map((text, idx) => (
                                        <li key={idx} className="flex items-start gap-4 text-white/80 font-space-grotesk text-base leading-relaxed">
                                            <span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 flex-shrink-0" />
                                            <span>{text}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Action Button & Call-to-action */}
                                <div className="flex flex-col gap-6 items-center w-full">
                                    <a
                                        href="mailto:ritesh@clearedadvisory.com.au"
                                        className="group w-full h-[57px] rounded-full bg-white text-[#1A1A1A] hover:bg-slate-100 transition-colors duration-300 flex items-center justify-between px-6 py-4 shadow-md"
                                    >
                                        <span className="font-space-grotesk font-bold text-base">Send us an email now</span>
                                        <div className="w-7 h-7 bg-[#1A1A1A] rounded-full flex items-center justify-center group-hover:bg-[#CCAB51] transition-colors duration-300">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H2.5M9.5 2.5V9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </a>

                                    <a href="tel:+61410450511" className="font-space-grotesk font-bold text-sm tracking-[1.4px] text-white/60 hover:text-white transition-colors uppercase text-center block">
                                        OR CALL +61 410 450 511
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}