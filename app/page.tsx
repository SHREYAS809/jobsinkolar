"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Briefcase, Building2, Search, ArrowRight, CheckCircle2, Star, Sparkles, MapPin, Zap, FileText, User } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 relative selection:bg-blue-100 selection:text-blue-900 overflow-hidden">

      {/* Subtle Professional Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-5%] left-[-5%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[25%] h-[25%] bg-indigo-500/5 rounded-full blur-[80px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"></div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 shadow-md">
              <Briefcase className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              JobsIn<span className="text-blue-600">Kolar</span>
            </span>
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <Link href="#job-seekers" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Find Jobs</Link>
            <Link href="/login" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Sign in</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/register">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 font-bold text-sm h-10 shadow-sm transition-all">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="bg-white border-b border-slate-200 pt-16 pb-20">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              The district's most trusted <br />
              <span className="text-blue-600">job portal is here.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Find your next career move in Kolar. Trusted by 2,000+ local companies and verified professionals.
            </p>

            {/* Indeed/Apna Style Search Bar */}
            <div className="bg-white p-2 rounded-2xl shadow-xl border border-slate-200 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-2">
              <div className="flex-1 w-full relative flex items-center">
                <Search className="absolute left-4 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  className="w-full pl-12 pr-4 py-4 text-slate-900 focus:outline-none text-base rounded-xl bg-transparent"
                />
              </div>
              <div className="w-px h-8 bg-slate-200 hidden md:block" />
              <div className="flex-1 w-full relative flex items-center">
                <MapPin className="absolute left-4 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Kolar, Karnataka"
                  className="w-full pl-12 pr-4 py-4 text-slate-900 focus:outline-none text-base rounded-xl bg-transparent"
                />
              </div>
              <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 h-14 px-8 rounded-xl font-bold text-base">
                Search Jobs
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> 100% Free for Seekers</span>
              <span className="flex items-center gap-1.5"><Zap className="h-4 w-4 text-blue-500" /> Direct HR Contact</span>
              <span className="flex items-center gap-1.5"><Briefcase className="h-4 w-4 text-amber-500" /> Verified Listings</span>
            </div>
          </div>
        </section>

        {/* Popular Categories */}
        <section className="py-20 container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-slate-900">Featured Categories</h2>
            <Link href="#" className="text-blue-600 font-bold text-sm hover:underline">View all</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "IT & Software", count: "450+", icon: <Zap /> },
              { name: "Healthcare", count: "120+", icon: <Briefcase /> },
              { name: "Education", count: "85+", icon: <FileText /> },
              { name: "Logistics", count: "210+", icon: <Building2 /> },
              { name: "Manufacturing", count: "180+", icon: <Building2 /> },
              { name: "Sales", count: "320+", icon: <Star /> },
            ].map((cat, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group">
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">{cat.icon}</div>
                <h3 className="font-bold text-slate-900 mb-1">{cat.name}</h3>
                <p className="text-sm text-slate-500">{cat.count} jobs</p>
              </div>
            ))}
          </div>
        </section>

        {/* Roles Section */}
        <section className="bg-slate-100 py-24 px-4 md:px-8">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">

              {/* Job Seeker Card */}
              <div id="job-seekers" className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm hover:shadow-lg transition-all group">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <User size={28} />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-slate-900">For Job Seekers</h3>
                <p className="mb-8 text-slate-600 leading-relaxed">
                  Upload your resume and let companies come to you. Direct connection with employers in Kolar District.
                </p>
                <ul className="space-y-3 mb-10">
                  {["Easy one-tap apply", "Direct WhatsApp HR chat", "Verified job listings", "Free career resources"].map((text, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" /> {text}
                    </li>
                  ))}
                </ul>
                <Link href="/register" className="block w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-14 text-sm font-bold rounded-xl transition-all">
                    Get Started Now
                  </Button>
                </Link>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 pt-20 pb-10 text-slate-600 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-6 w-6 rounded bg-blue-600 flex items-center justify-center text-white">
                  <Briefcase size={14} />
                </div>
                <span className="text-xl font-bold tracking-tighter text-slate-900">JobsInKolar</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-6">
                The #1 destination for talent and jobs in Kolar District. Helping people get hired and companies grow.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="icon-sm" className="rounded-full"><Star size={14} /></Button>
                <Button variant="outline" size="icon-sm" className="rounded-full"><Building2 size={14} /></Button>
                <Button variant="outline" size="icon-sm" className="rounded-full"><ArrowRight size={14} /></Button>
              </div>
            </div>

            <div>
              <h4 className="text-slate-900 font-bold text-sm mb-6">For Job Seekers</h4>
              <nav className="flex flex-col gap-3 text-sm">
                <Link href="#" className="hover:text-blue-600 transition-colors">Browse Jobs</Link>
                <Link href="#" className="hover:text-blue-600 transition-colors">Company Reviews</Link>
                <Link href="#" className="hover:text-blue-600 transition-colors">Salaries</Link>
                <Link href="#" className="hover:text-blue-600 transition-colors">Career Advice</Link>
              </nav>
            </div>

            <div>
              <h4 className="text-slate-900 font-bold text-sm mb-6">Support</h4>
              <nav className="flex flex-col gap-3 text-sm">
                <Link href="#" className="hover:text-blue-600 transition-colors">Help Center</Link>
                <Link href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
                <Link href="/admin" className="hover:text-blue-600 transition-colors">System Admin</Link>
              </nav>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100 text-xs text-slate-400">
            <div>
              © {new Date().getFullYear()} JobsInKolar District Initiative. All rights reserved.
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-slate-600">Privacy Center</Link>
              <Link href="#" className="hover:text-slate-600">Accessibility</Link>
              <Link href="#" className="hover:text-slate-600">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
