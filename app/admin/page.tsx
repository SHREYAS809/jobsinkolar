"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, ShieldAlert, Fingerprint } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminLoginPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsAuthenticating(true);
        // Simulate login delay
        setTimeout(() => {
            if (email && password) {
                router.push("/admin/dashboard");
            } else {
                setIsAuthenticating(false);
            }
        }, 800);
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-slate-950 px-4 py-12 overflow-hidden selection:bg-blue-500/30">

            {/* Intense Dark Gradient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen opacity-40" />

                {/* Subtle dot pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            <div className="relative w-full max-w-lg z-10 animate-in fade-in zoom-in-95 duration-500">

                {/* Glassmorphism Card */}
                <div className="bg-slate-900/60 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 sm:p-12 border border-white/10 relative overflow-hidden">

                    {/* Subtle top glare */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>

                    {/* Header */}
                    <div className="text-center mb-10 mt-2">
                        <div className="relative inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-xl border border-slate-700 mb-6 group">
                            <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-lg group-hover:bg-blue-400/30 transition-colors"></div>
                            <ShieldAlert className="h-10 w-10 text-blue-500 relative z-10" />
                        </div>
                        <h1 className="text-3xl font-black text-white tracking-tight mb-2">System Admin</h1>
                        <p className="text-slate-400 font-medium">Secure Portal Authentication</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        {/* Email Input group */}
                        <div className="space-y-2 relative">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">
                                Admin ID
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="admin.terminal@system"
                                    required
                                    className="w-full pl-5 pr-10 py-4 bg-slate-950/50 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 placeholder:text-slate-600 transition-all text-sm font-medium"
                                />
                            </div>
                        </div>

                        {/* Password Input group */}
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">
                                Passphrase
                            </label>
                            <div className="relative group">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••••••"
                                    required
                                    className="w-full pl-5 pr-12 py-4 bg-slate-950/50 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 placeholder:text-slate-600 mb-1 transition-all font-mono text-sm tracking-widest"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-500 hover:text-white transition-colors p-1"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            disabled={isAuthenticating}
                            className="relative w-full overflow-hidden bg-blue-600 hover:bg-blue-500 text-white font-bold h-14 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] mt-4 disabled:opacity-80"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2 text-base tracking-wide">
                                {isAuthenticating ? (
                                    <>
                                        <Fingerprint className="h-5 w-5 animate-pulse" />
                                        Authenticating...
                                    </>
                                ) : (
                                    <>
                                        <Fingerprint className="h-5 w-5" />
                                        Initialize Session
                                    </>
                                )}
                            </span>
                        </Button>
                    </form>

                    {/* Demo Info */}
                    <div className="mt-8 text-center border-t border-slate-800 pt-6">
                        <p className="text-xs text-slate-500 font-medium">
                            Demo Access: Any credentials permitted
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
