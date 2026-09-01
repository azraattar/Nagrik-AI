import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function AdminDashboard({ navigateTo, user }) {
    return (
        <div className="bg-background text-on-background h-full font-body-md text-body-md flex antialiased min-h-screen">
            <Sidebar role="admin" activePage="admin_dashboard" navigateTo={navigateTo} />

            <main className="flex-1 ml-0 md:ml-[280px] p-margin-mobile md:p-gutter flex flex-col gap-xl min-h-screen">
                <Header activePage="admin_dashboard" navigateTo={navigateTo} user={user} />

                {/* Header */}
                <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-md border-b border-outline-variant pb-md">
                    <div>
                        <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface font-bold">
                            System Overview
                        </h2>
                        <p className="text-body-md font-body-md text-on-surface-variant mt-sm">
                            High-level monitoring and analytics platform for city administrators.
                        </p>
                    </div>
                    <div className="flex items-center gap-sm">
                        <button className="bg-surface border border-outline-variant text-on-surface px-md py-sm rounded-lg flex items-center gap-sm hover:bg-surface-container-low transition-colors shadow-sm text-xs font-semibold">
                            <span className="material-symbols-outlined text-[18px]">filter_list</span>
                            Global Filters
                        </button>
                        <button className="bg-primary-container text-on-primary-container px-md py-sm rounded-lg flex items-center gap-sm hover:opacity-90 transition-opacity shadow-sm text-xs font-semibold">
                            <span className="material-symbols-outlined text-[18px]">download</span>
                            Export Analytics
                        </button>
                    </div>
                </header>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-min">
                    {/* 1. Complaint Overview */}
                    <div className="col-span-1 md:col-span-4 bg-surface border border-outline-variant rounded-xl p-lg flex flex-col min-h-[240px] relative overflow-hidden group">
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center justify-between mb-md">
                                <h3 className="text-headline-md font-headline-md text-on-surface flex items-center gap-sm font-semibold text-base">
                                    <span className="material-symbols-outlined text-primary">data_usage</span>
                                    Complaint Overview
                                </h3>
                                <button className="text-on-surface-variant hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined">more_vert</span>
                                </button>
                            </div>
                            <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-outline-variant rounded-lg bg-surface-container-low/50 p-4 text-center">
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-3xl font-bold text-primary">1,248</span>
                                    <span className="text-xs text-tertiary-container font-medium">+14% this month</span>
                                </div>
                                <p className="text-xs text-on-surface-variant">Total grievances reported citywide</p>
                            </div>
                        </div>
                    </div>

                    {/* 2. Complaint Categories */}
                    <div className="col-span-1 md:col-span-8 bg-surface border border-outline-variant rounded-xl p-lg flex flex-col min-h-[240px] relative">
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center justify-between mb-md">
                                <h3 className="text-headline-md font-headline-md text-on-surface flex items-center gap-sm font-semibold text-base">
                                    <span className="material-symbols-outlined text-secondary">pie_chart</span>
                                    Complaint Categories Breakdown
                                </h3>
                            </div>
                            <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-sm border-2 border-dashed border-outline-variant rounded-lg bg-surface-container-low/50 p-4">
                                <div className="bg-surface p-sm rounded-lg text-center">
                                    <p className="text-xs text-outline">Roads & Traffic</p>
                                    <p className="text-lg font-bold text-primary">42%</p>
                                </div>
                                <div className="bg-surface p-sm rounded-lg text-center">
                                    <p className="text-xs text-outline">Sanitation</p>
                                    <p className="text-lg font-bold text-secondary">28%</p>
                                </div>
                                <div className="bg-surface p-sm rounded-lg text-center">
                                    <p className="text-xs text-outline">Water Supply</p>
                                    <p className="text-lg font-bold text-tertiary-container">18%</p>
                                </div>
                                <div className="bg-surface p-sm rounded-lg text-center">
                                    <p className="text-xs text-outline">Electricity</p>
                                    <p className="text-lg font-bold text-on-surface">12%</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Department Performance */}
                    <div className="col-span-1 md:col-span-6 bg-surface border border-outline-variant rounded-xl p-lg flex flex-col min-h-[280px]">
                        <div className="flex items-center justify-between mb-md">
                            <h3 className="text-headline-md font-headline-md text-on-surface flex items-center gap-sm font-semibold text-base">
                                <span className="material-symbols-outlined text-tertiary-container">domain</span>
                                Department Performance (SLA Compliance)
                            </h3>
                        </div>
                        <div className="flex-1 flex flex-col justify-center gap-3 border-2 border-dashed border-outline-variant rounded-lg bg-surface-container-low/50 p-4">
                            <div>
                                <div className="flex justify-between text-xs font-semibold mb-1">
                                    <span>Public Works</span>
                                    <span className="text-tertiary-container">92% Resolved within SLA</span>
                                </div>
                                <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                                    <div className="bg-tertiary-container h-full w-[92%]"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs font-semibold mb-1">
                                    <span>Water & Sewage</span>
                                    <span className="text-secondary">84% Resolved within SLA</span>
                                </div>
                                <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                                    <div className="bg-secondary h-full w-[84%]"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs font-semibold mb-1">
                                    <span>Electrical Grid</span>
                                    <span className="text-primary">89% Resolved within SLA</span>
                                </div>
                                <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                                    <div className="bg-primary h-full w-[89%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. Geographical Hotspots */}
                    <div className="col-span-1 md:col-span-6 bg-surface border border-outline-variant rounded-xl p-lg flex flex-col min-h-[280px]">
                        <div className="flex items-center justify-between mb-md">
                            <h3 className="text-headline-md font-headline-md text-on-surface flex items-center gap-sm font-semibold text-base">
                                <span className="material-symbols-outlined text-error">map</span>
                                Geographical Hotspots Heatmap
                            </h3>
                        </div>
                        <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-outline-variant rounded-lg bg-surface-container-low/50 relative overflow-hidden p-4 text-center">
                            <span className="material-symbols-outlined text-error text-[40px] mb-xs">
                                pin_drop
                            </span>
                            <p className="text-xs font-semibold text-on-surface">Top Hotspot: Sector 4 Intersection</p>
                            <p className="text-[11px] text-on-surface-variant">14 reported road complaints in the last 48 hrs</p>
                        </div>
                    </div>

                    {/* 5. AI Performance */}
                    <div className="col-span-1 md:col-span-7 bg-surface border border-outline-variant rounded-xl p-lg flex flex-col min-h-[240px]">
                        <div className="flex items-center justify-between mb-md">
                            <h3 className="text-headline-md font-headline-md text-on-surface flex items-center gap-sm font-semibold text-base">
                                <span className="material-symbols-outlined text-primary-fixed-variant">memory</span>
                                AI Routing Accuracy & Auto-Triage Rate
                            </h3>
                        </div>
                        <div className="flex-1 flex items-center justify-around border-2 border-dashed border-outline-variant rounded-lg bg-surface-container-low/50 p-4">
                            <div className="text-center">
                                <p className="text-2xl font-bold text-primary">96.4%</p>
                                <p className="text-xs text-outline">Category Auto-Classification</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-bold text-secondary">91.8%</p>
                                <p className="text-xs text-outline">Duplicate Detection Precision</p>
                            </div>
                        </div>
                    </div>

                    {/* 6. Recent System Activity */}
                    <div className="col-span-1 md:col-span-5 bg-surface border border-outline-variant rounded-xl p-lg flex flex-col min-h-[240px]">
                        <div className="flex items-center justify-between mb-md">
                            <h3 className="text-headline-md font-headline-md text-on-surface flex items-center gap-sm font-semibold text-base">
                                <span className="material-symbols-outlined text-on-surface-variant">history</span>
                                Recent System Activity
                            </h3>
                        </div>
                        <div className="flex-1 flex flex-col gap-2 border-2 border-dashed border-outline-variant rounded-lg bg-surface-container-low/50 p-3 text-xs overflow-y-auto max-h-36">
                            <p className="text-on-surface"><span className="font-semibold">AI Model v2.4</span> re-indexed 120 new tickets</p>
                            <p className="text-on-surface"><span className="font-semibold">Officer #29</span> closed #CMP-2024-8812</p>
                            <p className="text-on-surface"><span className="font-semibold">System</span> generated weekly SLA report</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
