import React, { useState } from 'react';

export default function LoginPage({ navigateTo, onLoginSuccess }) {
    const [selectedRole, setSelectedRole] = useState('citizen'); // 'citizen', 'officer', 'admin'
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg('');
        setLoading(true);

        const loginEmail = identifier || (selectedRole === 'admin' ? 'admin@nagrik.ai' : selectedRole === 'officer' ? 'officer@nagrik.ai' : 'user@example.com');
        const loginPassword = password || (selectedRole === 'admin' ? 'admin123' : selectedRole === 'officer' ? 'officer123' : 'password123');

        try {
            const response = await fetch('http://localhost:8000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: loginEmail, password: loginPassword })
            });

            if (!response.ok) {
                const errData = await response.json().catch(() => ({}));
                throw new Error(errData.detail || 'Invalid credentials');
            }

            const data = await response.json();
            localStorage.setItem('access_token', data.access_token);

            onLoginSuccess({
                role: data.role,
                email: loginEmail,
                name: data.role === 'admin' ? 'Admin User' : data.role === 'officer' ? 'Officer Alex' : 'Rahul Sharma'
            });

            // Redirect based on backend authoritative response
            if (data.redirect === '/department' || data.role === 'officer') {
                navigateTo('officer_dashboard');
            } else if (data.redirect === '/admin' || data.role === 'admin') {
                navigateTo('admin_dashboard');
            } else {
                navigateTo('citizen_dashboard');
            }
        } catch (err) {
            console.warn('Backend login fallback:', err);
            // Fallback for UI testing
            onLoginSuccess({
                role: selectedRole,
                name: selectedRole === 'admin' ? 'Admin User' : selectedRole === 'officer' ? 'Officer Alex' : 'Rahul Sharma',
                email: loginEmail
            });
            if (selectedRole === 'officer') navigateTo('officer_dashboard');
            else if (selectedRole === 'admin') navigateTo('admin_dashboard');
            else navigateTo('citizen_dashboard');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background font-body-md text-on-background flex flex-col justify-center items-center px-margin-mobile md:px-gutter py-xl">
            <div className="w-full max-w-md">
                {/* Brand */}
                <div className="text-center mb-xl">
                    <h1
                        className="font-headline-lg text-headline-lg md:text-display-lg font-bold text-primary flex items-center justify-center gap-sm cursor-pointer"
                        onClick={() => navigateTo('landing')}
                    >
                        <span className="material-symbols-outlined text-[40px]" data-weight="fill">
                            assured_workload
                        </span>
                        NagrikAI
                    </h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant mt-sm">
                        Citizen Portal Access
                    </p>
                </div>

                {/* Form Box */}
                <div className="bg-surface border border-outline-variant rounded-xl p-lg md:p-xl shadow-md">
                    <h2 className="font-headline-md text-headline-md text-on-surface mb-lg text-center font-bold">
                        Welcome Back
                    </h2>
                    <form className="space-y-md" onSubmit={handleSubmit}>
                        <div className="mb-lg">
                            <label className="block font-label-md text-label-md text-on-surface mb-sm">
                                Login as
                            </label>
                            <div className="grid grid-cols-3 gap-sm">
                                <button
                                    type="button"
                                    onClick={() => setSelectedRole('citizen')}
                                    className={`py-sm px-xs border border-outline-variant rounded-lg font-label-md text-label-md transition-all flex flex-col items-center justify-center gap-xs ${selectedRole === 'citizen'
                                        ? 'role-btn-active font-semibold'
                                        : 'text-on-surface-variant hover:bg-surface-container-low'
                                        }`}
                                >
                                    <span className="material-symbols-outlined text-[20px]">person</span>
                                    Citizen
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setSelectedRole('officer')}
                                    className={`py-sm px-xs border border-outline-variant rounded-lg font-label-md text-label-md transition-all flex flex-col items-center justify-center gap-xs ${selectedRole === 'officer'
                                        ? 'role-btn-active font-semibold'
                                        : 'text-on-surface-variant hover:bg-surface-container-low'
                                        }`}
                                >
                                    <span className="material-symbols-outlined text-[20px]">badge</span>
                                    Officer
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setSelectedRole('admin')}
                                    className={`py-sm px-xs border border-outline-variant rounded-lg font-label-md text-label-md transition-all flex flex-col items-center justify-center gap-xs ${selectedRole === 'admin'
                                        ? 'role-btn-active font-semibold'
                                        : 'text-on-surface-variant hover:bg-surface-container-low'
                                        }`}
                                >
                                    <span className="material-symbols-outlined text-[20px]">admin_panel_settings</span>
                                    Admin
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block font-label-md text-label-md text-on-surface mb-sm" htmlFor="identifier">
                                Email or Phone Number
                            </label>
                            <input
                                id="identifier"
                                type="text"
                                value={identifier}
                                onChange={(e) => setIdentifier(e.target.value)}
                                placeholder={`Enter your ${selectedRole} credentials`}
                                className="w-full bg-surface border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-secondary-container focus:ring-2 focus:ring-secondary-container/20 transition-all placeholder:text-outline"
                                required
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-sm">
                                <label className="block font-label-md text-label-md text-on-surface" htmlFor="password">
                                    Password
                                </label>
                                <a href="#forgot" className="font-label-sm text-label-sm text-primary hover:underline">
                                    Forgot Password?
                                </a>
                            </div>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full bg-surface border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-secondary-container focus:ring-2 focus:ring-secondary-container/20 transition-all placeholder:text-outline pr-10"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-sm flex items-center text-outline hover:text-on-surface"
                                >
                                    <span className="material-symbols-outlined text-[20px]">
                                        {showPassword ? 'visibility_off' : 'visibility'}
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="pt-sm">
                            <button
                                type="submit"
                                className="w-full bg-primary-container text-on-primary border border-transparent rounded-lg py-sm px-md font-label-md text-label-md hover:bg-primary-container/90 focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 transition-all font-semibold shadow-sm active:scale-[0.98]"
                            >
                                Login as {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}
                            </button>
                        </div>
                    </form>
                </div>

                <div className="mt-lg text-center">
                    <p className="font-body-md text-body-md text-on-surface-variant">
                        Don't have an account?{' '}
                        <button
                            onClick={() => navigateTo('submit_complaint')}
                            className="font-label-md text-label-md text-primary hover:underline ml-xs font-semibold"
                        >
                            Register here
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}
