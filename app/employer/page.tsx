"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Building2, Fingerprint, Lock, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { loginUser } from "@/lib/api-client";
import Link from "next/link";

export default function EmployerLoginPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsAuthenticating(true);
        setError("");

        try {
            const result = await loginUser({ email, password, role: "employer" });
            if (result.access_token) {
                localStorage.setItem("token", result.access_token);
                localStorage.setItem("role", "employer");
                router.push("/employer/dashboard");
            } else {
                setError(result.detail || "Authentication failed. Please check your employer credentials.");
            }
        } catch (err) {
            setError("Network error. Security protocol failed to establish connection.");
        } finally {
            setIsAuthenticating(false);
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-white px-4 py-12 overflow-hidden selection:bg-blue-100 selection:text-blue-900">

            {/* Subtle Professional Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-40"></div>
            </div>

            <div className="relative w-full max-w-lg z-10 animate-in fade-in zoom-in-95 duration-500">

                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 group mb-6">
                        <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg">
                            <Building2 size={24} />
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-slate-900">JobsInKolar</span>
                    </Link>
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">Employer Login</h1>
                    <p className="text-slate-500 font-medium">Access your recruitment console</p>
                </div>

                <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 sm:p-12 border border-slate-200 relative overflow-hidden">

                    {error && (
                        <div className="mb-6 p-4 bg-rose-50 border border-rose-100 rounded-2xl text-rose-600 text-sm font-bold flex items-center gap-3">
                            <div className="h-1.5 w-1.5 rounded-full bg-rose-600 animate-pulse"></div>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-600 uppercase tracking-widest ml-1">
                                Business Email
                            </label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="hr@yourcompany.com"
                                    required
                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-sm font-medium"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center ml-1">
                                <label className="text-xs font-bold text-slate-600 uppercase tracking-widest">
                                    Secure Key
                                </label>
                                <button type="button" className="text-xs font-bold text-blue-600 hover:underline">Reset access</button>
                            </div>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••••••"
                                    required
                                    className="w-full pl-12 pr-12 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-sm font-medium"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            disabled={isAuthenticating}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-14 rounded-2xl transition-all shadow-xl shadow-blue-600/20 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3 text-sm uppercase tracking-widest"
                        >
                            {isAuthenticating ? (
                                <>
                                    <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    Processing...
                                </>
                            ) : (
                                <>
                                    Enter Portal <ArrowRight size={18} />
                                </>
                            )}
                        </Button>
                    </form>

                    <div className="mt-10 pt-8 border-t border-slate-100 text-center">
                        <p className="text-slate-500 text-sm font-medium leading-relaxed">
                            Need a business account? <br />
                            <Link href="/register?role=employer" className="text-blue-600 font-bold hover:underline">Register your organization</Link>
                        </p>
                    </div>
                </div>

                <div className="mt-12 flex justify-center gap-8 opacity-40 grayscale">
                    <div className="flex items-center gap-2">
                        <div className="h-1 w-1 rounded-full bg-slate-900"></div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900">Secured Node</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-1 w-1 rounded-full bg-slate-900"></div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900">District Verified</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
