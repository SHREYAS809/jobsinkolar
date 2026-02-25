"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { Eye, EyeOff, Sparkles, Shield, ArrowRight, User, Building2, Lock, Mail, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

import { loginUser } from "@/lib/api-client";

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState<"employee" | "employer">("employee");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const roleParam = searchParams.get("role");
    if (roleParam === "employer") {
      setUserType("employer");
    } else {
      setUserType("employee");
    }
  }, [searchParams]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = await loginUser({ email, password, role: userType });
      if (result.access_token) {
        localStorage.setItem("token", result.access_token);
        localStorage.setItem("role", result.role);
        const redirectPath = result.role === "employer" ? "/employer/dashboard" : `/${result.role}`;
        router.push(redirectPath);
      } else {
        const detail = result.detail;
        if (typeof detail === "string") {
          setError(detail);
        } else if (Array.isArray(detail)) {
          setError(detail[0]?.msg || "Validation error occurred.");
        } else if (typeof detail === "object" && detail !== null) {
          setError(detail.msg || JSON.stringify(detail));
        } else {
          setError("Authentication failed. Please check your credentials.");
        }
      }
    } catch (err) {
      setError("Network error. Is the backend running?");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-900 relative px-4 py-12 overflow-hidden">
      {/* Professional Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[35%] h-[35%] bg-indigo-500/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-40"></div>
      </div>

      <div className="w-full max-w-lg relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 mb-8 group">
          <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-md">
            <Briefcase size={16} />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">JobsInKolar</span>
        </Link>

        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl border border-slate-200">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">
              Welcome back
            </h1>
            <p className="text-slate-500 font-medium text-sm">
              Enter your credentials to access your account.
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-rose-50 border border-rose-100 rounded-xl text-rose-600 text-sm font-bold flex items-center gap-2">
              <Shield size={16} />
              {error}
            </div>
          )}

          {/* Role Switcher */}
          <div className={`flex p-1 bg-slate-100 rounded-xl mb-8 ${searchParams.get("role") === "employer" ? "" : "hidden"}`}>
            <button
              onClick={() => setUserType("employee")}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold transition-all ${userType === "employee"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
                }`}
            >
              <User size={14} /> Job Seeker
            </button>
            <button
              onClick={() => setUserType("employer")}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold transition-all ${userType === "employer"
                ? "bg-white text-indigo-600 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
                }`}
            >
              <Building2 size={14} /> Employer
            </button>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  required
                  disabled={isLoading}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl h-12 pl-12 pr-4 text-slate-900 font-medium text-sm focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all disabled:opacity-50"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-bold text-slate-600">Password</label>
                <Link href="#" className="text-xs font-bold text-blue-600 hover:underline">Forgot password?</Link>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  disabled={isLoading}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl h-12 pl-12 pr-12 text-slate-900 font-medium text-sm focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all disabled:opacity-50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 text-sm rounded-xl transition-all shadow-lg shadow-blue-600/10 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 mt-2"
            >
              {isLoading ? (
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  Sign In <ArrowRight size={18} />
                </>
              )}
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-slate-500 font-medium text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-blue-600 font-bold hover:underline">Sign up for free</Link>
            </p>
          </div>
        </div>

        {/* Security Info */}
        <div className="mt-12 flex justify-center gap-8">
          <div className="flex items-center gap-2 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
            <Shield size={14} />
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-900">AES-256 Encryption</span>
          </div>
          <div className="flex items-center gap-2 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-900">Network Secure</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">Loading Auth Protocol...</div>}>
      <LoginContent />
    </Suspense>
  );
}
