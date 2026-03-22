import React from "react";
import { executiveManagement } from "@/lib/data";

export default function ExecutiveManagementPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
              Executive Management
            </h1>
            <p className="text-lg text-neutral-600">
              Meet the executive team responsible for the day-to-day regulatory operations and achieving BOCRA&apos;s strategic objectives.
            </p>
          </div>

          <div className="space-y-12">
            {executiveManagement.map((member, idx) => (
              <div key={idx} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-neutral-100 flex flex-col md:flex-row gap-8 items-start">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-indigo-50 border-4 border-indigo-100 shrink-0 flex items-center justify-center">
                  <span className="text-3xl md:text-5xl font-bold text-indigo-200 uppercase">
                    {member.name.slice(0, 1)}
                  </span>
                </div>
                <div className="space-y-4 flex-grow">
                  <div>
                    <h2 className="text-2xl font-bold text-neutral-900">{member.name}</h2>
                    <p className="text-indigo-600 font-medium">{member.role}</p>
                  </div>
                  <div className="space-y-3 text-neutral-600 leading-relaxed text-left">
                    {Array.isArray(member.bio) 
                      ? member.bio.map((p, i) => <p key={i}>{p}</p>)
                      : <p>{member.bio}</p>
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
