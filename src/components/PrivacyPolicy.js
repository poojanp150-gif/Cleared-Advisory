"use client";

import Link from "next/link";


export default function PrivacyPolicy() {
    return (
        <div className="w-full flex flex-col">
            {/* ── Hero Section ── */}
            <div className="w-full min-h-[419px] bg-gradient-to-b from-[#010132] to-[#1D1D81] flex flex-col relative overflow-hidden pt-[89px]">
                <div className="flex-1 flex items-center justify-center px-6 lg:px-20 py-16">
                    <div className="flex flex-col items-center text-center gap-4 sm:gap-6 max-w-[844px] w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <span className="font-space-grotesk font-medium text-sm tracking-[1.4px] uppercase bg-gradient-to-r from-[#CCAB51] via-[#D5B45F] to-[#E7C77C] bg-clip-text text-transparent">
                            LEGAL & COMPLIANCE
                        </span>
                        <h1 className="font-gelasio font-medium text-4xl sm:text-5xl md:text-[64px] leading-tight tracking-[-0.48px] text-white">
                            Privacy <span className="italic font-medium bg-[linear-gradient(271.02deg,#CCAB51_0.83%,#D5B45F_51.73%,#E7C77C_99.06%)] bg-clip-text text-transparent">Policy.</span>
                        </h1>
                        <p className="font-space-grotesk font-medium text-base sm:text-lg md:text-[18px] leading-[27px] text-white/80 max-w-[806px] mt-2">
                            Last updated: June 2026
                        </p>
                    </div>
                </div>
            </div>

            {/* ── Privacy Policy Content ── */}
            <section className="w-full bg-white py-16 lg:py-[120px] text-slate-900 flex flex-col items-center">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-20 w-full flex flex-col items-center">
                    <div className="w-full max-w-[720px] flex flex-col gap-10">

                        {/* Introduction */}
                        <div className="flex flex-col gap-6">
                            <p className="font-space-grotesk font-normal text-base text-[#4B5563] leading-[28.8px]">
                                Cleared Advisory (ABN 28 867 326 033) (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your right to privacy
                                and is committed to safeguarding the privacy of our clients and website visitors. We adhere
                                to the Australian Privacy Principles contained in the Privacy Act 1988 (Cth).
                            </p>
                            <p className="font-space-grotesk font-normal text-base text-[#4B5563] leading-[28.8px]">
                                This policy sets out how we collect, use, disclose, and protect your personal information
                                when you engage with our advisory services, visit our website, or communicate with us.
                            </p>
                        </div>

                        {/* Section 1 */}
                        <div className="flex flex-col gap-6">
                            <h2 className="font-gelasio font-medium text-3xl sm:text-[32px] border-b-2 pb-5 border-black/5 leading-tight tracking-[-0.32px] text-[#111827]">
                                1. Information we collect
                            </h2>
                            <p className="font-space-grotesk font-normal text-base text-[#4B5563] leading-[28.8px]">
                                We may collect the following types of personal information from you:
                            </p>
                            <ul className="flex flex-col gap-4 pl-4 sm:pl-6">
                                <li>
                                    <span className="font-space-grotesk font-bold text-base text-[#4B5563]">Identity Information:</span>
                                    <span className="font-space-grotesk font-normal text-base text-[#4B5563] ml-2">Name, job title, and company details.</span>
                                </li>
                                <li>
                                    <span className="font-space-grotesk font-bold text-base text-[#4B5563]">Contact Information:</span>
                                    <span className="font-space-grotesk font-normal text-base text-[#4B5563] ml-2">Email address, phone number, and business address.</span>
                                </li>
                                <li>
                                    <span className="font-space-grotesk font-bold text-base text-[#4B5563]">Financial & Compliance Information:</span>
                                    <span className="font-space-grotesk font-normal text-base text-[#4B5563] ml-2">Information necessary to conduct AML/CTF health checks, build compliance programs, and assist with AUSTRAC enrolment.</span>
                                </li>
                                <li>
                                    <span className="font-space-grotesk font-bold text-base text-[#4B5563]">Technical Data:</span>
                                    <span className="font-space-grotesk font-normal text-base text-[#4B5563] ml-2">IP addresses, browser type, and usage data when you visit our website.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Section 2 */}
                        <div className="flex flex-col gap-6">
                            <h2 className="font-gelasio font-medium text-3xl sm:text-[32px] border-b-2 pb-5 border-black/5 leading-tight tracking-[-0.32px] text-[#111827]">
                                2. How we collect your information
                            </h2>
                            <p className="font-space-grotesk font-normal text-base text-[#4B5563] leading-[28.8px]">
                                We collect personal information in several ways, including:
                            </p>
                            <ul className="flex flex-col gap-4 pl-6 sm:pl-8 text-[#4B5563] font-space-grotesk font-normal text-base leading-[28.8px] marker:text-[#D4AF37]">
                                <li>Directly from you when you submit an inquiry, book a consultation, or engage our services.</li>
                                <li>From your organisation if they engage us to provide compliance services or fractional MLRO support.</li>
                                <li>Automatically through website analytics tools when you browse our site.</li>
                            </ul>
                        </div>

                        {/* Section 3 */}
                        <div className="flex flex-col gap-6">
                            <h2 className="font-gelasio font-medium text-3xl sm:text-[32px] border-b-2 pb-5 border-black/5  leading-tight tracking-[-0.32px] text-[#111827]">
                                3. How we use your information
                            </h2>
                            <p className="font-space-grotesk font-normal text-base text-[#4B5563] leading-[28.8px]">
                                We use your personal information solely for the purpose of providing our professional services and managing our relationship with you. This includes:
                            </p>
                            <ul className="flex flex-col gap-4  pl-6 sm:pl-8 text-[#4B5563] font-space-grotesk font-normal text-base leading-[28.8px] marker:text-[#D4AF37]">
                                <li>Delivering AML/CTF advisory, program building, and audit services.</li>
                                <li>Communicating with you regarding regulatory updates, AUSTRAC deadlines, and service offerings.</li>
                                <li>Fulfilling our own legal and regulatory obligations.</li>
                                <li>Improving our website and service delivery.</li>
                            </ul>
                        </div>

                        {/* Section 4 */}
                        <div className="flex flex-col gap-6">
                            <h2 className="font-gelasio font-medium text-3xl sm:text-[32px] border-b-2 pb-5 border-black/5 leading-tight tracking-[-0.32px] text-[#111827]">
                                4. Disclosure of your information
                            </h2>
                            <p className="font-space-grotesk font-normal text-base text-[#4B5563] leading-[28.8px]">
                                We do not sell, trade, or rent your personal information to third parties. We may disclose your information in the following circumstances:
                            </p>
                            <ul className="flex flex-col gap-4  pl-4 sm:pl-6 border-black/5">
                                <li className="text-[#4B5563] font-bold font-space-grotesk  text-base">
                                    <span>Service Providers:</span>
                                    <span className="ml-2">To trusted third-party vendors who assist us in operating our business (e.g., secure cloud storage providers, billing systems), strictly under confidentiality agreements.</span>
                                </li>
                                <li className="text-[#4B5563] font-bold font-space-grotesk  text-base">
                                    <span>Regulatory Bodies:</span>
                                    <span className="ml-2">Where required by law, or where you have explicitly authorised us to act on your behalf (e.g., submitting documentation to AUSTRAC).</span>
                                </li>
                                <li className="text-[#4B5563] font-bold font-space-grotesk  text-base">
                                    <span>Legal Requirements:</span>
                                    <span className="ml-2">If we are required to do so in order to comply with a legal obligation or court order.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Section 5 */}
                        <div className="flex flex-col gap-6">
                            <h2 className="font-gelasio font-medium text-3xl sm:text-[32px] border-b-2 pb-5 border-black/5 leading-tight tracking-[-0.32px] text-[#111827]">
                                5. Security of your information
                            </h2>
                            <p className="font-space-grotesk font-normal text-base text-[#4B5563] leading-[28.8px]">
                                We take the security of your data seriously. Given the sensitive nature of AML/CTF compliance, we employ strict administrative, technical, and physical security measures to protect your personal information from unauthorised access, disclosure, alteration, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
                            </p>
                        </div>

                        {/* Section 6 */}
                        <div className="flex flex-col gap-6">
                            <h2 className="font-gelasio font-medium text-3xl sm:text-[32px] border-b-2 pb-5 border-black/5 leading-tight tracking-[-0.32px] text-[#111827]">
                                6. Access and correction
                            </h2>
                            <p className="font-space-grotesk font-normal text-base text-[#4B5563] leading-[28.8px]">
                                You have the right to request access to the personal information we hold about you and to ask that we correct any inaccuracies. If you would like to exercise this right, please contact us using the details below. We will respond to your request within a reasonable timeframe.
                            </p>
                        </div>

                        {/* Section 7 */}
                        <div className="flex flex-col gap-6">
                            <h2 className="font-gelasio font-medium text-3xl sm:text-[32px] border-b-2 pb-5 border-black/5 leading-tight tracking-[-0.32px] text-[#111827]">
                                7. Changes to this Privacy Policy
                            </h2>
                            <p className="font-space-grotesk font-normal text-base text-[#4B5563] leading-[28.8px]">
                                We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations (such as the passing of the Tranche 2 reforms). Any updates will be published on this page, and the &quot;Last updated&quot; date at the top will be revised accordingly.
                            </p>
                        </div>

                        {/* Section 8 */}
                        <div className="flex flex-col gap-6">
                            <h2 className="font-gelasio font-medium text-3xl sm:text-[32px] border-b-2 pb-5 border-black/5 leading-tight tracking-[-0.32px] text-[#111827]">
                                8. Contact Us
                            </h2>
                            <p className="font-space-grotesk font-normal text-base text-[#4B5563] leading-[28.8px]">
                                If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us at:
                            </p>

                            {/* Contact Box */}
                            <div className="mt-4 p-8 border border-[#E5E7EB] bg-[#FDFDF9] flex flex-col gap-4 shadow-sm">
                                <h3 className="font-space-grotesk font-bold text-base text-[#111827]">
                                    Cleared Advisory
                                </h3>
                                <p className="font-space-grotesk font-normal text-base text-[#4B5563]">
                                    <strong className="text-[#4B5563]">Email:</strong> ritesh@clearedadvisory.com.au
                                </p>
                                <p className="font-space-grotesk font-normal text-base text-[#4B5563]">
                                    <strong className="text-[#4B5563]">Phone:</strong> +61 410 450 511
                                </p>
                                <p className="font-space-grotesk font-normal text-base text-[#4B5563]">
                                    <strong className="text-[#4B5563]">ABN:</strong> 28 867 326 033
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
