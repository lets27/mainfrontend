"use client";

import React from "react";
import Link from "next/link";
import { mainNav } from "@/lib/data";

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-16 border-t border-neutral-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-bold tracking-tight text-white">
              BOCRA
            </span>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-xs">
              Botswana Communications Regulatory Authority. Regulating the communications sector for a connected and digitally driven society.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {mainNav.slice(0, 4).map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href || "/"}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold">Resources</h3>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Tariffs", href: "/" },
                { label: "FAQs", href: "/" },
                { label: "Links", href: "/" },
                { label: "Privacy Notice", href: "/" },
                { label: "BOCRA Staff Mail", href: "/" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold">Contact Us</h3>
            <ul className="flex flex-col gap-3 text-sm text-neutral-400">
              <li>
                <span className="block font-medium text-neutral-300">
                  Address
                </span>
                <span>
                  Plot 50671 Independence Avenue
                  <br />
                  Gaborone, Botswana
                </span>
              </li>

              <li>
                <span className="block font-medium text-neutral-300">
                  Phone
                </span>
                <span>+267 395 7755</span>
              </li>

              <li>
                <span className="block font-medium text-neutral-300">
                  Email
                </span>
                <a
                  href="mailto:info@bocra.org.bw"
                  className="hover:text-white transition-colors"
                >
                  info@bocra.org.bw
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} Botswana Communications Regulatory Authority. All Rights Reserved.
          </p>
          <p className="text-xs text-neutral-500">
            Remastered for excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};