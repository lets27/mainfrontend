import React from "react";
import { careersData } from "@/lib/data";
import { Briefcase, HeartHandshake, Zap, CheckCircle2 } from "lucide-react";

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      <section className="bg-blue-900 text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Careers at BOCRA
            </h1>
            <p className="text-xl text-blue-100 font-light leading-relaxed">
              {careersData.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Life at BOCRA */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 text-blue-600">
                <HeartHandshake className="w-10 h-10" />
                <h2 className="text-3xl font-bold text-neutral-900">Life at BOCRA</h2>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed">
                {careersData.lifeAtBocra}
              </p>
              
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 space-y-6 mt-8">
                <h3 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-indigo-500" /> What We Offer
                </h3>
                <ul className="space-y-4">
                  {careersData.whatWeOffer.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-neutral-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-8 md:pt-16">
              <div className="flex items-center gap-4 text-blue-600">
                <Briefcase className="w-10 h-10" />
                <h2 className="text-3xl font-bold text-neutral-900">Our Benefits</h2>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Our standard flexible benefits package is designed to support our diverse team inside and outside the office.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {careersData.benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 flex items-center justify-center text-center">
                    <span className="font-semibold text-blue-900">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
