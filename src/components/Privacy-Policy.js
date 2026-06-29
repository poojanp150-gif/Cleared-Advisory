"use client";
import './Privacy-Policy.css';


import Link from "next/link";


export default function PrivacyPolicy() {
    return (
        <div className="w-full flex flex-col">
            {/* ── Hero Section ── */}
            <div className="w-full min-h-105 bg-gradient-to-b from-brand-blue-900 to-brand-blue-800 flex flex-col relative overflow-hidden pt-22">
                <div className="flex-1 flex items-center justify-center px-6 lg:px-15 xl:px-20 py-16">
                    <div className="flex flex-col items-center text-center gap-2 sm:gap-6 max-w-211 w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <span className="font-space-grotesk font-medium text--2xs  sm:text--xs tracking--1.4px uppercase bg-gradient-to-l from-brand-gold-500 via-brand-gold-400 to-brand-gold-300 bg-clip-text text-transparent">
                            LEGAL & COMPLIANCE
                        </span>
                        <h1 className="font-gelasio font-medium text--4xl sm:text--7xl md:text--9xl leading-tight tracking--0.48px text-white">
                            Privacy <span className="italic font-medium privacy-policy__highlight-text-gold bg-clip-text text-transparent">Policy.</span>
                        </h1>
                        <p className="font-space-grotesk font-medium text--xs sm:text--lg md:text-18px leading-7 text-white/80 max-w-202 mt-0 sm:mt-2">
                            Last updated: June 2026
                        </p>
                    </div>
                </div>
            </div>

            {/* ── Privacy Policy Content ── */}
            <section className="w-full bg-white  text-slate-900 flex flex-col items-center">
                <div className="container--boxed">


                    <div className="max-w-360 mx-auto section-2xl w-full flex flex-col items-center">
                        <div className="w-full max-w-180 flex flex-col">

                            {/* Introduction */}
                            <div className="flex flex-col">
                                <p className="font-space-grotesk font-normal text--xs sm:text--base text-brand-gray-600 leading-7 pb-6">
                                    Cleared Advisory (ABN 28 867 326 033) (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your right to privacy
                                    and is committed to safeguarding the privacy of our clients and website visitors. We adhere
                                    to the Australian Privacy Principles contained in the Privacy Act 1988 (Cth).
                                </p>
                                <p className="font-space-grotesk font-normal text--xs sm:text--base text-brand-gray-600 leading-7 pb-6">
                                    This policy sets out how we collect, use, disclose, and protect your personal information
                                    when you engage with our advisory services, visit our website, or communicate with us.
                                </p>
                            </div>

                            {/* Section 1 */}
                            <div className="flex flex-col">
                                <h2 className="font-gelasio font-medium text--xl sm:text--4xl border-b-2 pt-8 pb-4 border-black/5 leading-tight tracking--0.32px text-brand-gray-800">
                                    1. Information we collect
                                </h2>
                                <p className="font-space-grotesk font-normal text--xs sm:text--base text-brand-gray-600 pt-3 pb-6 leading-7">
                                    We may collect the following types of personal information from you:
                                </p>
                                <ul className="flex flex-col gap-4 pl-4 pb-6 sm:pl-6">
                                    <li>
                                        <span className="font-space-grotesk font-bold text--xs sm:text--base text-brand-gray-600">Identity Information:</span>
                                        <span className="font-space-grotesk font-normal text--xs sm:text--base text-brand-gray-600 ml-2">Name, job title, and company details.</span>
                                    </li>
                                    <li>
                                        <span className="font-space-grotesk font-bold text--xs sm:text--base text-brand-gray-600">Contact Information:</span>
                                        <span className="font-space-grotesk font-normal text--xs sm:text--base text-brand-gray-600 ml-2">Email address, phone number, and business address.</span>
                                    </li>
                                    <li>
                                        <span className="font-space-grotesk font-bold text--xs sm:text--base text-brand-gray-600">Financial & Compliance Information:</span>
                                        <span className="font-space-grotesk font-normal text--xs sm:text--base text-brand-gray-600 ml-2">Information necessary to conduct AML/CTF health checks, build compliance programs, and assist with AUSTRAC enrolment.</span>
                                    </li>
                                    <li>
                                        <span className="font-space-grotesk font-bold text--xs sm:text--base text-brand-gray-600">Technical Data:</span>
                                        <span className="font-space-grotesk font-normal text--xs sm:text--base text-brand-gray-600 ml-2">IP addresses, browser type, and usage data when you visit our website.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Section 2 */}
                            <div className="flex flex-col gap-6">
                                <h2 className="font-gelasio font-medium text--xl sm:text--4xl border-b-2 pt-8 pb-5 border-black/5 leading-tight  sm:tracking--0.32px text-brand-gray-800">
                                    2. How we collect your information
                                </h2>
                                <p className="font-space-grotesk font-normal text--base text-brand-gray-600 leading-7">
                                    We collect personal information in several ways, including:
                                </p>
                                <ul className="flex flex-col gap-4 pl-4 pb-6 sm:pl-6 text-brand-gray-600 font-space-grotesk font-normal text--base leading-7 marker:text-brand-gold-600">
                                    <li>Directly from you when you submit an inquiry, book a consultation, or engage our services.</li>
                                    <li>From your organisation if they engage us to provide compliance services or fractional MLRO support.</li>
                                    <li>Automatically through website analytics tools when you browse our site.</li>
                                </ul>
                            </div>

                            {/* Section 3 */}
                            <div className="flex flex-col gap-6">
                                <h2 className="font-gelasio font-medium text--xl sm:text--4xl border-b-2 pt-8 pb-5 border-black/5  leading-tight tracking--0.32px text-brand-gray-800">
                                    3. How we use your information
                                </h2>
                                <p className="font-space-grotesk font-normal text--xs sm:text--base text-brand-gray-600 leading-7">
                                    We use your personal information solely for the purpose of providing our professional services and managing our relationship with you. This includes:
                                </p>
                                <ul className="flex flex-col gap-4  pl-4 pb-6 sm:pl-6 text-brand-gray-600 font-space-grotesk font-normal text--xs sm:text--base leading-7 marker:text-brand-gold-600">
                                    <li>Delivering AML/CTF advisory, program building, and audit services.</li>
                                    <li>Communicating with you regarding regulatory updates, AUSTRAC deadlines, and service offerings.</li>
                                    <li>Fulfilling our own legal and regulatory obligations.</li>
                                    <li>Improving our website and service delivery.</li>
                                </ul>
                            </div>

                            {/* Section 4 */}
                            <div className="flex flex-col gap-6">
                                <h2 className="font-gelasio font-medium text--xl sm:text--4xl border-b-2 pt-8 pb-5 border-black/5 leading-tight tracking--0.32px text-brand-gray-800">
                                    4. Disclosure of your information
                                </h2>
                                <p className="font-space-grotesk font-normal text--base text-brand-gray-600 leading-7">
                                    We do not sell, trade, or rent your personal information to third parties. We may disclose your information in the following circumstances:
                                </p>
                                <ul className="flex flex-col gap-4  pl-4 pb-6 sm:pl-6 border-black/5">
                                    <li className="text-brand-gray-600 font-bold font-space-grotesk text--xs  sm:text--base">
                                        <span>Service Providers:</span>
                                        <span className="ml-2">To trusted third-party vendors who assist us in operating our business (e.g., secure cloud storage providers, billing systems), strictly under confidentiality agreements.</span>
                                    </li>
                                    <li className="text-brand-gray-600 font-bold font-space-grotesk text--xs  sm:text--base">
                                        <span>Regulatory Bodies:</span>
                                        <span className="ml-2">Where required by law, or where you have explicitly authorised us to act on your behalf (e.g., submitting documentation to AUSTRAC).</span>
                                    </li>
                                    <li className="text-brand-gray-600 font-bold font-space-grotesk text--xs  sm:text--base">
                                        <span>Legal Requirements:</span>
                                        <span className="ml-2">If we are required to do so in order to comply with a legal obligation or court order.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Section 5 */}
                            <div className="flex flex-col gap-6">
                                <h2 className="font-gelasio font-medium text--xl sm:text--4xl border-b-2 pt-8 pb-5 border-black/5 leading-tight tracking--0.32px text-brand-gray-800">
                                    5. Security of your information
                                </h2>
                                <p className="font-space-grotesk font-normal text--xs sm:text--base text-brand-gray-600 leading-7">
                                    We take the security of your data seriously. Given the sensitive nature of AML/CTF compliance, we employ strict administrative, technical, and physical security measures to protect your personal information from unauthorised access, disclosure, alteration, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
                                </p>
                            </div>

                            {/* Section 6 */}
                            <div className="flex flex-col gap-6">
                                <h2 className="font-gelasio font-medium text--xl sm:text--4xl border-b-2 pt-8 pb-5 border-black/5 leading-tight tracking--0.32px text-brand-gray-800">
                                    6. Access and correction
                                </h2>
                                <p className="font-space-grotesk font-normal text--xs sm:text--base text-brand-gray-600 leading-7">
                                    You have the right to request access to the personal information we hold about you and to ask that we correct any inaccuracies. If you would like to exercise this right, please contact us using the details below. We will respond to your request within a reasonable timeframe.
                                </p>
                            </div>

                            {/* Section 7 */}
                            <div className="flex flex-col gap-6">
                                <h2 className="font-gelasio font-medium text--xl sm:text--4xl border-b-2 pt-8 pb-5 border-black/5 leading-tight tracking--0.32px text-brand-gray-800">
                                    7. Changes to this Privacy Policy
                                </h2>
                                <p className="font-space-grotesk font-normal text--xs sm:text--base text-brand-gray-600 leading-7">
                                    We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations (such as the passing of the Tranche 2 reforms). Any updates will be published on this page, and the &quot;Last updated&quot; date at the top will be revised accordingly.
                                </p>
                            </div>

                            {/* Section 8 */}
                            <div className="flex flex-col gap-6">
                                <h2 className="font-gelasio font-medium text--xl sm:text--4xl border-b-2 pt-8 pb-5 border-black/5 leading-tight tracking--0.32px text-brand-gray-800">
                                    8. Contact Us
                                </h2>
                                <p className="font-space-grotesk font-normal text--xs sm:text--base text-brand-gray-600 leading-7">
                                    If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us at:
                                </p>

                                {/* Contact Box */}
                                <div className="mt-4 p-8 border border-brand-gray-200 bg-brand-bg-white flex flex-col gap-2 sm:gap-4 shadow-sm">
                                    <h3 className="font-space-grotesk font-bold text--base text-brand-gray-800">
                                        Cleared Advisory
                                    </h3>
                                    <p className="font-space-grotesk font-normal text--xs sm:text--base text-brand-gray-600">
                                        <strong className="text-brand-gray-600">Email:</strong> ritesh@clearedadvisory.com.au
                                    </p>
                                    <p className="font-space-grotesk font-normal text--xs sm:text--base text-brand-gray-600">
                                        <strong className="text-brand-gray-600">Phone:</strong> +61 410 450 511
                                    </p>
                                    <p className="font-space-grotesk font-normal text--xs sm:text--base text-brand-gray-600">
                                        <strong className="text-brand-gray-600">ABN:</strong> 28 867 326 033
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
