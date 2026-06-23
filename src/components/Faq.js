"use client";
import { useState } from "react";

export default function Faq() {
  const faqs = [
    {
      question: "What is Tranche 2 and does it apply to my business?",
      answer: "Tranche 2 of Australia's AML/CTF laws extends obligations to five new sectors: real estate agents, accountants and bookkeepers, lawyers and conveyancers, precious metals dealers, and trust and company service providers. If your business falls into one of these categories, you almost certainly need to enrol with AUSTRAC, build an AML/CTF program, and have it in place by 1 July 2026. Book a free call and we'll confirm your position in 30 minutes."
    },
    {
      question: "What happens if I don't enrol by 29 July 2026?",
      answer: "Failing to enrol with AUSTRAC if you are a reporting entity by the deadline is a civil offence and can result in significant financial penalties, operational disruption, and regulatory action. Additionally, AUSTRAC has the power to issue infringement notices or enforce compliance directions to ensure businesses comply with their obligations."
    },
    {
      question: "How long does it take to build a compliant AML/CTF program?",
      answer: "Typically, it takes anywhere from 4 to 8 weeks to build a comprehensive, audit-ready AML/CTF program tailored to your business structure and risk profile. This includes conducting a thorough risk assessment, drafting your program documentation (Part A and Part B), and training your team on their operational duties."
    },
    {
      question: "What is a fractional MLRO?",
      answer: "A fractional MLRO (Money Laundering Reporting Officer) is an experienced compliance practitioner who acts as your outsourced compliance officer on a part-time or retainer basis. This gives your business access to senior AML expertise and AUSTRAC-facing representation without the overhead of hiring a full-time compliance team."
    },
    {
      question: "What's included in the template pack? Is it enough?",
      answer: "Our template pack includes all the foundational policies, risk assessment worksheets, and KYC forms required to get started. While it provides a solid foundation, AUSTRAC requires programs to be tailored to your specific business operations. We recommend using our review services to ensure your final program meets all regulatory expectations."
    },
    {
      question: "What is a fractional MLRO and does my business need one?",
      answer: "Under Australian law, reporting entities must appoint a designated officer to oversee their AML/CTF program. If you do not have internal compliance expertise, a fractional MLRO fills this gap by managing your day-to-day operations, filing suspicious matter reports (SMRs), and acting as your main point of contact for AUSTRAC."
    },
    {
      question: "Can you also do our annual independent audit?",
      answer: "Yes. To maintain independence, the person conducting your annual AML/CTF audit cannot be the same person who built or operates your compliance program. Cleared Advisory maintains a clear separation between our advisory, operations, and audit teams to ensure you receive a fully independent and compliant review."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#010132] to-[#1D1D81]  text-white relative">
      <div className="container--boxed">


        <div className="max-w-[1440px] mx-auto section-2xl">

          {/* Header Container */}
          <div className="max-w-[1280px] mx-auto flex flex-col items-center text-center mb-16">
            <span className="font-space-grotesk font-medium text--xs tracking-[1.1px] text-white/70 uppercase">
              COMMON QUESTIONS
            </span>
            <h2 className="font-gelasio font-medium text--2xl sm:text--2xl md:text-[48px] leading-tight md:leading-[57.6px] tracking-[-0.01em] text-white mt-6 max-w-[600px]">
              Got questions? <br className="xs:hidden" />We have answers.
            </h2>
          </div>

          {/* Accordion Container */}
          <div className="max-w-[800px] mx-auto w-full border-t border-b border-white/10 divide-y divide-white/10">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-8 transition-all duration-300">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center text-left group gap-6 focus:outline-none cursor-pointer"
                  >
                    <span className="font-gelasio font-medium text--lg sm:text--xl md:text--xl text-white group-hover:text-amber-300 transition-colors duration-300">
                      {faq.question}
                    </span>

                    {/* Circular Button */}
                    <div
                      className={`w-9 h-9 rounded-full shrink-0 flex items-center justify-center transition-all duration-300 ${isOpen
                        ? "bg-gradient-to-r from-[#CCAB51] via-[#D5B45F] to-[#E7C77C] text-black border border-transparent"
                        : "border border-white/20 text-white group-hover:border-white"
                        }`}
                    >
                      {isOpen ? (
                        // Minus sign
                        <span className="text--xl font-bold leading-none select-none -translate-y-[2px]">-</span>
                      ) : (
                        // Plus sign
                        <span className="text--lg font-normal leading-none select-none -translate-y-[1px]">+</span>
                      )}
                    </div>
                  </button>

                  {/* Animated Answer Body */}
                  <div
                    className={`grid transition-[grid-template-rows,margin-top] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] mt-6" : "grid-rows-[0fr] mt-0"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-inter font-normal text--base text-white/80 leading-[25.6px] max-w-[680px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
