"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { mainNav } from "@/lib/data";
import { Menu, X, ChevronDown } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white border-b border-neutral-200 shadow-sm" : "bg-blue-900"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex flex-col">
              <span
                className={`text-2xl font-bold tracking-tight ${
                  scrolled ? "text-blue-900" : "text-white"
                }`}
              >
                BOCRA
              </span>
              <span
                className={`text-[0.6rem] font-medium tracking-widest uppercase ${
                  scrolled ? "text-blue-600" : "text-blue-200"
                }`}
              >
                Botswana Communications Regulatory Authority
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {mainNav.map((item) => (
              <div key={item.title} className="relative group">
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                    scrolled
                      ? "text-neutral-600 hover:text-blue-600"
                      : "text-neutral-100 hover:text-white"
                  }`}
                >
                  {item.title}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {item.children && (
                  <div className="absolute top-full left-0 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200">
                    <div className="bg-white rounded-lg shadow-xl border border-neutral-100 py-2 w-56 flex flex-col">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          className="px-4 py-2 text-sm text-neutral-600 hover:text-blue-600 hover:bg-neutral-50 transition-colors"
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-2 rounded-md ${
              scrolled ? "text-neutral-900" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {mainNav.map((item) => (
              <div key={item.title} className="flex flex-col gap-2">
                <Link
                  href={item.href}
                  className="text-neutral-800 font-bold py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
                {item.children && (
                  <div className="pl-4 flex flex-col gap-2 border-l-2 border-blue-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        href={child.href}
                        className="text-neutral-600 text-sm py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
