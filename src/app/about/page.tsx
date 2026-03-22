import React from "react";
import Link from "next/link";
import { aboutOverview, coreValues, ceoMessage } from "@/lib/data";
import { ArrowRight, Target, Eye, Heart, BarChart3, Briefcase, GraduationCap, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-blue-900 text-white min-h-[50vh] flex items-center pt-24 pb-12 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            About BOCRA
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">
            Regulating the communications sector for the promotion of competition, innovation, consumer protection and universal access.
          </p>
        </div>
      </section>

      {/* Overview & Mandate */}
      <section className="py-24 bg-white text-neutral-900">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold">{aboutOverview.title}</h2>
            <div className="space-y-4 text-lg text-neutral-600 text-left leading-relaxed">
              {Array.isArray(aboutOverview.content) 
                ? aboutOverview.content.map((p, i) => <p key={i}>{p}</p>)
                : <p>{aboutOverview.content}</p>
              }
            </div>
            
            <div className="pt-12 grid md:grid-cols-2 gap-8 text-left">
              <div className="p-8 rounded-2xl bg-blue-50 border border-blue-100 shadow-sm relative">
                <Target className="w-16 h-16 text-blue-300 absolute top-6 right-6 opacity-50" />
                <h3 className="text-2xl font-bold text-blue-900 mb-4 relative z-10">Our Mission</h3>
                <p className="text-blue-800 relative z-10 leading-relaxed">
                  To regulate the Communications sector for the promotion of competition, innovation, consumer protection and universal access.
                </p>
              </div>
              
              <div className="p-8 rounded-2xl bg-blue-900 border border-blue-800 shadow-sm relative text-white">
                <Eye className="w-16 h-16 text-blue-700 absolute top-6 right-6 opacity-50" />
                <h3 className="text-2xl font-bold mb-4 relative z-10">Our Vision</h3>
                <p className="text-blue-100 relative z-10 leading-relaxed">
                  A connected and Digitally Driven Society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-neutral-100 text-neutral-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2">Guiding Principles</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold">Our Core Values</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => {
              const icons = [Target, Eye, Heart, BarChart3];
              const Icon = icons[idx % icons.length];
              return (
                <div key={value.title} className="p-8 rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
                  <Icon className="w-10 h-10 text-blue-600 mb-6" />
                  <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                  <p className="text-neutral-500 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Word from Chief Executive */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-blue-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center text-center md:text-left">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-blue-200 shrink-0 shadow-lg border-4 border-white flex items-center justify-center">
              <span className="text-blue-500 font-bold text-3xl">CE</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-neutral-900">A Word From The Chief Executive</h2>
              <blockquote className="text-lg text-neutral-600 italic border-l-4 border-blue-500 pl-6 py-2 leading-relaxed">
                &quot;{ceoMessage.content.substring(0, 300)}...&quot;
              </blockquote>
              <div className="pt-2">
                <p className="font-bold text-xl text-neutral-900">{ceoMessage.author}</p>
                <p className="text-blue-600 font-medium">{ceoMessage.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Previews & Subpages */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold">Leadership & Opportunities</h2>
            <p className="text-blue-200 mt-4 text-lg">
              Meet the people driving our vision forward and discover opportunities to join our team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/about/board-of-directors" className="flex flex-col h-full bg-blue-800 hover:bg-white hover:text-blue-900 group transition-colors rounded-2xl p-10 border border-blue-700 hover:border-white shadow-sm text-center">
              <Briefcase className="w-12 h-12 text-blue-300 group-hover:text-blue-600 mb-6 mx-auto transition-colors" />
              <h3 className="text-2xl font-bold mb-3">Board of Directors</h3>
              <p className="text-blue-100 group-hover:text-neutral-500 mb-8 flex-grow transition-colors">
                The strategic team guiding BOCRA in line with Botswana&apos;s Digital Economy Roadmap.
              </p>
              <div className="inline-flex items-center justify-center gap-2 font-bold group-hover:underline">
                Meet the Board <ArrowRight className="w-5 h-5" />
              </div>
            </Link>

            <Link href="/about/executive-management" className="flex flex-col h-full bg-blue-800 hover:bg-white hover:text-blue-900 group transition-colors rounded-2xl p-10 border border-blue-700 hover:border-white shadow-sm text-center">
              <Users className="w-12 h-12 text-blue-300 group-hover:text-blue-600 mb-6 mx-auto transition-colors" />
              <h3 className="text-2xl font-bold mb-3">Executive Management</h3>
              <p className="text-blue-100 group-hover:text-neutral-500 mb-8 flex-grow transition-colors">
                The executive team responsible for the day-to-day regulatory operations.
              </p>
              <div className="inline-flex items-center justify-center gap-2 font-bold group-hover:underline">
                View Management <ArrowRight className="w-5 h-5" />
              </div>
            </Link>

            <Link href="/about/careers" className="flex flex-col h-full bg-blue-800 hover:bg-white hover:text-blue-900 group transition-colors rounded-2xl p-10 border border-blue-700 hover:border-white shadow-sm text-center">
              <GraduationCap className="w-12 h-12 text-blue-300 group-hover:text-blue-600 mb-6 mx-auto transition-colors" />
              <h3 className="text-2xl font-bold mb-3">Careers</h3>
              <p className="text-blue-100 group-hover:text-neutral-500 mb-8 flex-grow transition-colors">
                Join us at the heart of the fast-moving communications sector.
              </p>
              <div className="inline-flex items-center justify-center gap-2 font-bold group-hover:underline">
                Explore Opportunities <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
