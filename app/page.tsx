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
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-white/70 backdrop-blur-xl">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/20 transition-transform group-hover:rotate-12">
              <Briefcase className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tight text-slate-900">
              Kolar<span className="text-primary italic">Jobs</span>
            </span>
          </div>
          <nav className="hidden lg:flex gap-10 items-center">
            <Link href="/jobs" className="text-sm font-bold text-slate-500 hover:text-primary transition-colors">Browse Jobs</Link>
            <Link href="/employers" className="text-sm font-bold text-slate-500 hover:text-primary transition-colors">For Employers</Link>
            <Link href="/about" className="text-sm font-bold text-slate-500 hover:text-primary transition-colors">Our Impact</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden md:block text-sm font-bold text-slate-900 hover:bg-slate-100 px-4 py-2 rounded-xl transition-all">
              Sign in
            </Link>
            <Link href="/register">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl px-8 font-black text-sm h-12 shadow-lg shadow-primary/20 transition-all active:scale-95">
                Join Network
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 relative z-10">
        {/* Modern Hero Section */}
        <section className="bg-white border-b border-slate-200 pt-20 pb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent-foreground text-xs font-bold mb-6">
                  <Sparkles size={14} className="animate-pulse" />
                  Kolar's #1 Job Network
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6">
                  Your next <span className="text-primary italic">dream role</span> <br />
                  awaits in Kolar.
                </h1>
                <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl lg:mx-0 mx-auto leading-relaxed">
                  Join 10,000+ professionals connecting with the best local companies.
                  Vetted employers, verified roles, 100% free for you.
                </p>

                {/* Indeed Style Unified Search */}
                <div className="bg-white p-2 rounded-2xl shadow-2xl border border-slate-200 max-w-3xl flex flex-col md:flex-row items-center gap-2 group focus-within:ring-4 focus-within:ring-primary/10 transition-all">
                  <div className="flex-1 w-full relative flex items-center">
                    <Search className="absolute left-4 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                    <input
                      type="text"
                      placeholder="Job title, keywords, or company"
                      className="w-full pl-12 pr-4 py-4 text-slate-900 focus:outline-none text-base rounded-xl bg-transparent font-medium"
                    />
                  </div>
                  <div className="w-px h-10 bg-slate-200 hidden md:block" />
                  <div className="flex-1 w-full relative flex items-center">
                    <MapPin className="absolute left-4 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                    <input
                      type="text"
                      placeholder="Kolar, Karnataka"
                      className="w-full pl-12 pr-4 py-4 text-slate-900 focus:outline-none text-base rounded-xl bg-transparent font-medium"
                    />
                  </div>
                  <Button className="w-full md:w-auto bg-primary hover:bg-primary/90 h-14 px-10 rounded-xl font-bold text-base shadow-lg shadow-primary/25 transition-all active:scale-95">
                    Search Jobs
                  </Button>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm text-slate-500 font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-2 group cursor-default text-slate-400 hover:text-emerald-600 transition-colors">
                    <div className="h-5 w-5 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100 italic">✓</div>
                    Verified Employers
                  </span>
                  <span className="flex items-center gap-2 group cursor-default text-slate-400 hover:text-blue-600 transition-colors">
                    <div className="h-5 w-5 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100 font-serif">i</div>
                    Direct Contact
                  </span>
                  <span className="flex items-center gap-2 group cursor-default text-slate-400 hover:text-purple-600 transition-colors">
                    <div className="h-5 w-5 rounded-full bg-purple-50 flex items-center justify-center border border-purple-100">★</div>
                    100% Free
                  </span>
                </div>
              </div>

              {/* Optional: Hero Illustration/Image Placeholder Block */}
              <div className="hidden lg:block flex-1 relative">
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white group">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000"
                    alt="Professional at work"
                    className="w-full h-[500px] object-crop transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Decorative Blobs */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-blob" />
                <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
              </div>
            </div>
          </div>
        </section>

        {/* Latest Job Openings - HerJobs Style */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Latest <span className="text-primary italic border-b-4 border-accent/30">Job Openings</span></h2>
                <p className="text-slate-500 font-medium max-w-md">The most recent opportunities from our verified partner network across the district.</p>
              </div>
              <Link href="/jobs">
                <Button variant="outline" className="rounded-xl font-bold px-8 hover:bg-slate-900 hover:text-white transition-all group">
                  Explore All Jobs <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Senior Software Engineer", company: "Kolar Tech Park", location: "Kolar City", type: "Full-time", salary: "₹50,000 - ₹80,000", posted: "2 hours ago", icon: <Zap className="text-amber-500" /> },
                { title: "Operations Manager", company: "Blue Origin Logistics", location: "Nagarbhavi", type: "Full-time", salary: "₹45,000 - ₹60,000", posted: "5 hours ago", icon: <Building2 className="text-blue-500" /> },
                { title: "Customer Success Lead", company: "Swift Solutions", location: "KGF", type: "Remote", salary: "₹35,000 - ₹50,000", posted: "1 day ago", icon: <User className="text-purple-500" /> },
                { title: "Marketing Executive", company: "Urban Market", location: "Malur", type: "Contract", salary: "₹25,000 - ₹40,000", posted: "2 days ago", icon: <Star className="text-emerald-500" /> },
                { title: "Warehouse Supervisor", company: "Kolar Cold Storage", location: "Kolar Bypass", type: "Full-time", salary: "₹20,000 - ₹30,000", posted: "3 days ago", icon: <Briefcase className="text-slate-500" /> },
                { title: "Primary School Teacher", company: "Green Valley Academy", location: "Mulbagal", type: "Part-time", salary: "₹15,000 - ₹25,000", posted: "3 days ago", icon: <FileText className="text-indigo-500" /> },
              ].map((job, i) => (
                <div key={i} className="group bg-white rounded-3xl p-8 border border-slate-200 hover:border-primary/20 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] -mr-4 -mt-4 group-hover:bg-primary/10 transition-colors" />

                  <div className="flex items-start justify-between mb-6">
                    <div className="h-14 w-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      {job.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">{job.title}</h3>
                  <div className="flex items-center gap-2 text-slate-500 text-sm font-medium mb-6">
                    <Building2 size={14} /> {job.company} • <MapPin size={14} /> {job.location}
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400 font-medium">Estimated Salary</span>
                      <span className="text-slate-900 font-bold">{job.salary}</span>
                    </div>
                    <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-accent w-2/3 rounded-full" />
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button className="flex-1 bg-slate-900 hover:bg-primary text-white font-bold h-12 rounded-xl transition-all">
                      Quick Apply
                    </Button>
                    <Button variant="outline" className="h-12 w-12 rounded-xl border-slate-200 hover:border-primary group/btn">
                      <Star size={18} className="group-hover/btn:fill-primary group-hover/btn:text-primary transition-all" />
                    </Button>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-50 text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
                    Last activity: {job.posted}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dual CTA Section - For Employers & Seekers */}
        <section className="py-24 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-primary rounded-[2.5rem] p-12 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-6">Looking to Hire?</h3>
                <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed">
                  Post your jobs to Kolar's largest talent pool and find the perfect match in days, not weeks.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/employer/register">
                    <Button className="bg-white text-primary hover:bg-slate-100 h-14 px-8 rounded-2xl font-black transition-all">
                      Post a Job Free
                    </Button>
                  </Link>
                  <Link href="/employer">
                    <Button variant="link" className="text-white hover:text-accent font-bold h-14">
                      Employer Solutions <ArrowRight className="ml-2" size={18} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white border-4 border-primary/5 rounded-[2.5rem] p-12 flex flex-col justify-center relative group hover:border-accent/20 transition-all">
              <div className="mb-10 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-accent/10 text-accent-foreground">
                <User size={36} className="group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-6 font-serif italic">Build your future.</h3>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                Create a professional profile and let the best companies in the district come to you.
              </p>
              <Link href="/register">
                <Button className="w-fit bg-primary hover:bg-primary/90 h-14 px-12 rounded-2xl font-black shadow-lg shadow-primary/20 transition-all active:scale-95">
                  Get Started <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 pt-24 pb-12 text-slate-400 relative z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-50" />
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-white">
                  <Briefcase size={16} />
                </div>
                <span className="text-2xl font-black tracking-tight text-white italic">KolarJobs</span>
              </div>
              <p className="text-slate-500 text-lg leading-relaxed max-w-sm mb-10">
                Revolutionizing how talent meets opportunity in Kolar District.
                Built for the community, driven by technology.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-2xl border-slate-800 bg-slate-800/50 hover:bg-primary hover:border-primary transition-all"><Star size={18} className="text-white" /></Button>
                <Button variant="outline" size="icon" className="rounded-2xl border-slate-800 bg-slate-800/50 hover:bg-primary hover:border-primary transition-all"><Building2 size={18} className="text-white" /></Button>
                <Button variant="outline" size="icon" className="rounded-2xl border-slate-800 bg-slate-800/50 hover:bg-primary hover:border-primary transition-all"><ArrowRight size={18} className="text-white" /></Button>
              </div>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-white font-black text-xs uppercase tracking-widest mb-8">Ecosystem</h4>
              <nav className="flex flex-col gap-4 text-sm font-bold">
                <Link href="#" className="hover:text-primary transition-colors">Find Work</Link>
                <Link href="#" className="hover:text-primary transition-colors">Hire Talent</Link>
                <Link href="#" className="hover:text-primary transition-colors">Skill Center</Link>
                <Link href="#" className="hover:text-primary transition-colors">Success Stories</Link>
              </nav>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-white font-black text-xs uppercase tracking-widest mb-8">Organization</h4>
              <nav className="flex flex-col gap-4 text-sm font-bold">
                <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
                <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
                <Link href="#" className="hover:text-primary transition-colors">Partners</Link>
                <Link href="/admin" className="hover:text-primary transition-colors">Staff Login</Link>
              </nav>
            </div>

            <div className="md:col-span-3">
              <div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-800">
                <h4 className="text-white font-black text-sm mb-4">Official Updates</h4>
                <p className="text-sm text-slate-500 mb-6 font-medium">Get notified about new government initiatives and local recruitment drives.</p>
                <div className="flex gap-2">
                  <input placeholder="Email" className="bg-slate-900 border-none rounded-xl px-4 py-2 text-sm w-full focus:ring-2 ring-primary transition-all" />
                  <Button className="bg-primary hover:bg-primary/90 h-10 px-4 rounded-xl font-bold text-xs text-white">Join</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-slate-800/50 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
            <div>
              © {new Date().getFullYear()} KolarJobs Initiative. Empowering local communities.
            </div>
            <div className="flex gap-10 mt-6 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-white transition-colors">Legal</Link>
              <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
