import React, { useState } from 'react';

export default function Header({ currentRole, activePage, navigateTo, user }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    return (
        <header className="bg-surface border-b border-outline-variant sticky top-0 z-30 w-full">
            <div className="flex justify-between items-center w-full px-gutter max-w-container-max mx-auto h-16">
                {/* Logo & Brand */}
                <div className="flex items-center gap-md">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-on-surface-variant p-2 rounded-lg hover:bg-surface-container-low focus:outline-none focus:ring-2 focus:ring-primary"
                        aria-label="Toggle menu"
                    >
                        <span className="material-symbols-outlined">
                            {mobileMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>

                    <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => navigateTo('landing')}
                    >
                        <span
                            className="material-symbols-outlined text-primary text-3xl"
                            data-weight="fill"
                        >
                            assured_workload
                        </span>
                        <span className="text-headline-md font-headline-md font-bold text-primary">
                            NagrikAI
                        </span>
                    </div>
                </div>

                {/* Desktop Nav Links */}
                <nav className="hidden md:flex items-center gap-lg">
                    <button
                        onClick={() => navigateTo('landing')}
                        className={`font-body-md text-body-md transition-colors cursor-pointer active:scale-95 ${activePage === 'landing'
                            ? 'text-primary border-b-2 border-primary pb-1 font-semibold'
                            : 'text-on-surface-variant hover:text-primary'
                            }`}
                    >
                        Home
                    </button>
                    <button
                        onClick={() => navigateTo('my_complaints')}
                        className={`font-body-md text-body-md transition-colors cursor-pointer active:scale-95 ${activePage === 'my_complaints'
                            ? 'text-primary border-b-2 border-primary pb-1 font-semibold'
                            : 'text-on-surface-variant hover:text-primary'
                            }`}
                    >
                        My Complaints
                    </button>
                    <button
                        onClick={() => navigateTo('submit_complaint')}
                        className={`font-body-md text-body-md transition-colors cursor-pointer active:scale-95 ${activePage === 'submit_complaint'
                            ? 'text-primary border-b-2 border-primary pb-1 font-semibold'
                            : 'text-on-surface-variant hover:text-primary'
                            }`}
                    >
                        File Issue
                    </button>
                </nav>

                {/* Right Actions / Profile / Login */}
                <div className="flex items-center gap-md">

                    {/* Notifications */}
                    <div className="relative">
                        <button
                            onClick={() => setNotificationsOpen(!notificationsOpen)}
                            className="relative p-2 text-on-surface-variant rounded-full hover:bg-surface-container-low transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                            aria-label="Notifications"
                        >
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-error rounded-full border-2 border-surface"></span>
                        </button>

                        {notificationsOpen && (
                            <div className="absolute right-0 mt-2 w-80 bg-surface border border-outline-variant rounded-xl shadow-lg p-md z-50">
                                <div className="flex justify-between items-center border-b border-outline-variant pb-xs mb-sm">
                                    <h4 className="font-headline-md text-sm font-semibold text-on-surface">Notifications</h4>
                                    <span className="text-xs text-primary font-medium cursor-pointer">Mark all read</span>
                                </div>
                                <div className="space-y-sm max-h-60 overflow-y-auto">
                                    <div className="p-sm bg-surface-container-low rounded-lg text-xs">
                                        <p className="font-semibold text-on-surface">Status Update: #CMP-2024-8902</p>
                                        <p className="text-on-surface-variant mt-0.5">Your complaint status was changed to In Progress.</p>
                                        <span className="text-[10px] text-outline mt-1 block">10 mins ago</span>
                                    </div>
                                    <div className="p-sm bg-surface-container-low rounded-lg text-xs">
                                        <p className="font-semibold text-on-surface">New Department Assignment</p>
                                        <p className="text-on-surface-variant mt-0.5">Public Works department picked up your ticket.</p>
                                        <span className="text-[10px] text-outline mt-1 block">2 hours ago</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Auth Button or Profile */}
                    {user ? (
                        <div className="relative">
                            <button
                                onClick={() => setProfileOpen(!profileOpen)}
                                className="flex items-center gap-2 p-1 rounded-full hover:bg-surface-container-low transition-colors focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant"
                            >
                                <img
                                    className="w-8 h-8 rounded-full object-cover"
                                    src={user.avatar || "https://lh3.googleusercontent.com/aida-public/AB6AXuDLWRGUUW_I0pNKOnqMHsttw2bw5mWy4Z6NzpLzOrvpxI4QbjMRXf5oZ9sv7hrZaDcs0s-SnaTYU3qLvoRF9eX8lvaNH-mMUwHhmL-P3JThZ0RK2eahj0IaLWOuaqwk6gohhbbuH-5pKE0eVwIKTK_1ny5YTiGcVafnJEykstK1z-mp7PQliqQ3MzWgq2wZ2EWOR0lR4Ghdm5hMB2zrGey2aW-73cvcYADHUDzRe5pRLT9Tr9sjgrVe"}
                                    alt={user.name || "User Avatar"}
                                />
                            </button>

                            {profileOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-surface border border-outline-variant rounded-xl shadow-lg p-sm z-50">
                                    <div className="px-sm py-xs border-b border-outline-variant mb-xs">
                                        <p className="font-semibold text-sm text-on-surface">{user.name || "Citizen User"}</p>
                                        <p className="text-xs text-on-surface-variant">{user.email || "citizen@nagrik.ai"}</p>
                                    </div>
                                    <button
                                        onClick={() => {
                                            if (user?.role === 'admin') navigateTo('/admin');
                                            else if (user?.role === 'officer') navigateTo('/officer_dashboard');
                                            else navigateTo('/dashboard');
                                            setProfileOpen(false);
                                        }}
                                        className="w-full text-left px-sm py-xs text-sm text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors flex items-center gap-2"
                                    >
                                        <span className="material-symbols-outlined text-base">dashboard</span>
                                        Dashboard
                                    </button>
                                    <button
                                        onClick={() => { navigateTo('help'); setProfileOpen(false); }}
                                        className="w-full text-left px-sm py-xs text-sm text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors flex items-center gap-2"
                                    >
                                        <span className="material-symbols-outlined text-base">help</span>
                                        Help &amp; Support
                                    </button>
                                    <button
                                        onClick={() => { navigateTo('login'); setProfileOpen(false); }}
                                        className="w-full text-left px-sm py-xs text-sm text-error hover:bg-error-container rounded-lg transition-colors flex items-center gap-2"
                                    >
                                        <span className="material-symbols-outlined text-base">logout</span>
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="flex items-center gap-sm">
                            <button
                                onClick={() => navigateTo('login')}
                                className="bg-surface border border-outline text-on-surface px-md py-sm rounded-lg font-label-md hover:bg-surface-container-low transition-colors active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            >
                                Login
                            </button>
                            <button
                                onClick={() => navigateTo('submit_complaint')}
                                className="bg-primary-container text-on-primary px-md py-sm rounded-lg font-label-md hover:bg-[#152a65] transition-colors active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            >
                                Report an Issue
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Drawer */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-surface border-t border-outline-variant px-gutter py-md space-y-md">
                    <nav className="flex flex-col gap-sm">
                        <button
                            onClick={() => { navigateTo('landing'); setMobileMenuOpen(false); }}
                            className="text-left py-sm px-md rounded-lg font-label-md text-on-surface hover:bg-surface-container-low"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => { navigateTo('citizen_dashboard'); setMobileMenuOpen(false); }}
                            className="text-left py-sm px-md rounded-lg font-label-md text-on-surface hover:bg-surface-container-low"
                        >
                            Citizen Dashboard
                        </button>
                        <button
                            onClick={() => { navigateTo('my_complaints'); setMobileMenuOpen(false); }}
                            className="text-left py-sm px-md rounded-lg font-label-md text-on-surface hover:bg-surface-container-low"
                        >
                            My Complaints
                        </button>
                        <button
                            onClick={() => { navigateTo('submit_complaint'); setMobileMenuOpen(false); }}
                            className="text-left py-sm px-md rounded-lg font-label-md text-on-surface hover:bg-surface-container-low"
                        >
                            Submit Grievance
                        </button>
                        <button
                            onClick={() => { navigateTo('help'); setMobileMenuOpen(false); }}
                            className="text-left py-sm px-md rounded-lg font-label-md text-on-surface hover:bg-surface-container-low"
                        >
                            Help &amp; Support
                        </button>
                        <button
                            onClick={() => { navigateTo('officer_dashboard'); setMobileMenuOpen(false); }}
                            className="text-left py-sm px-md rounded-lg font-label-md text-on-surface hover:bg-surface-container-low"
                        >
                            Officer Portal
                        </button>
                        <button
                            onClick={() => { navigateTo('admin_dashboard'); setMobileMenuOpen(false); }}
                            className="text-left py-sm px-md rounded-lg font-label-md text-on-surface hover:bg-surface-container-low"
                        >
                            Admin Portal
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}
