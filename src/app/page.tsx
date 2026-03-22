import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, Globe, Radio, Mail, ShieldCheck, Zap, Users } from "lucide-react";
import { mandateData } from "@/lib/data";

function getIcon(name: string) {
  switch (name) {
    case "Phone": return <Phone className="w-8 h-8" />;
    case "Globe": return <Globe className="w-8 h-8" />;
    case "Radio": return <Radio className="w-8 h-8" />;
    case "Mail": return <Mail className="w-8 h-8" />;
    default: return <Globe className="w-8 h-8" />;
  }
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white min-h-[85vh] flex items-center pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 bg-opacity-90 z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <span className="px-4 py-2 rounded-full border border-blue-400 bg-blue-800 text-sm font-medium inline-block">
              Regulating for a Connected Future
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              A Connected and <br /> Digitally Driven Society
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">
              Empowering Botswana through world-class communication regulation, driving innovation, and protecting consumers across all digital frontiers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8 text-lg">
              <Link 
                href="/about" 
                className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
              >
                Discover Our Story <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/about/board-of-directors" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Meet the Leadership
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Snippet */}
      <section className="py-24 bg-white text-neutral-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm">About BOCRA</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Shaping the Communications Landscape
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Established in 2013, the Botswana Communications Regulatory Authority unites the regulation of telecommunications, Internet access, broadcasting, and postal services into one unified authority.
              </p>
              <div className="pt-8 grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <ShieldCheck className="w-10 h-10 text-blue-600 mb-2" />
                  <h4 className="font-bold text-xl">Consumer Protection</h4>
                  <p className="text-neutral-500">Ensuring fair practices and quality services for all citizens.</p>
                </div>
                <div className="space-y-3">
                  <Zap className="w-10 h-10 text-blue-600 mb-2" />
                  <h4 className="font-bold text-xl">Fostering Innovation</h4>
                  <p className="text-neutral-500">Creating an enabling environment for tech advancements.</p>
                </div>
              </div>
            </div>
            <div className="bg-neutral-100 aspect-square rounded-3xl p-8 flex items-center justify-center border border-neutral-200 shadow-inner">
              <Users className="w-32 h-32 text-blue-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Regulated Sectors / Mandate */}
      <section className="py-24 bg-neutral-50 border-t border-neutral-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm">Our Mandate</h2>
            <h3 className="text-4xl font-extrabold text-neutral-900">Regulated Sectors</h3>
            <p className="text-xl text-neutral-600">
              Providing unified oversight to ensure robust, secure, and accessible communication networks across the nation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mandateData.map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  {getIcon(item.icon)}
                </div>
                <h4 className="text-xl font-bold mb-3 text-neutral-900">{item.title}</h4>
                <p className="text-neutral-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
