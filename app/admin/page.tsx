"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, ShieldAlert, Fingerprint, Shield, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { loginUser } from "@/lib/api-client";

export default function AdminLoginPage() {
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
            const result = await loginUser({ email, password, role: "admin" });
            if (result.access_token) {
                localStorage.setItem("token", result.access_token);
                localStorage.setItem("role", "admin");
                router.push("/admin/dashboard");
            } else {
                setError(result.detail || "Access denied. System credentials invalid.");
            }
        } catch (err) {
            setError("Network failure. Could not connect to authentication server.");
        } finally {
            setIsAuthenticating(false);
        }
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
                        <h1 className="text-4xl font-black text-white tracking-tight mb-2">System Admin</h1>
                        <p className="text-white font-black uppercase tracking-[0.2em] text-[10px] bg-white/10 py-1 rounded-lg border border-white/20">Secure Portal Authentication</p>
                    </div>

                    {error && (
                        <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs font-bold flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                            <AlertCircle size={16} />
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-6">
                        {/* Email Input group */}
                        <div className="space-y-2 relative">
                            <label className="text-xs font-black text-white uppercase tracking-wider ml-1">
                                Admin ID
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="admin.terminal@system"
                                    required
                                    className="w-full pl-5 pr-10 py-4 bg-slate-900 border-2 border-white/20 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-all text-sm font-black placeholder:text-slate-500 shadow-inner"
                                />
                            </div>
                        </div>

                        {/* Password Input group */}
                        <div className="space-y-2">
                            <label className="text-xs font-black text-white uppercase tracking-wider ml-1">
                                Passphrase
                            </label>
                            <div className="relative group">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••••••"
                                    required
                                    className="w-full pl-5 pr-12 py-4 bg-slate-900 border-2 border-white/20 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-all font-mono text-sm tracking-widest font-black placeholder:text-slate-500 shadow-inner"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors p-1"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            disabled={isAuthenticating}
                            className="relative w-full overflow-hidden bg-blue-600 hover:bg-blue-500 text-white font-black h-16 rounded-xl transition-all shadow-2xl shadow-blue-500/40 mt-4 border-2 border-blue-400"
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

                    {/* Security Info */}
                    <div className="mt-8 text-center border-t-2 border-white/10 pt-6">
                        <p className="text-[10px] text-white font-black uppercase tracking-widest bg-white/5 py-1 px-3 rounded-lg border border-white/10 inline-block">
                            Authorized Personnel Only
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
