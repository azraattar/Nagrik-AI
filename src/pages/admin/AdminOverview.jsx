import React from 'react';

export default function AdminOverview({ navigateTo }) {
    return (
        <div className="space-y-xl">
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
                    <button
                        onClick={() => navigateTo('/admin/reports')}
                        className="bg-surface border border-outline-variant text-on-surface px-md py-sm rounded-lg flex items-center gap-sm hover:bg-surface-container-low transition-colors shadow-sm text-xs font-semibold"
                    >
                        <span className="material-symbols-outlined text-[18px]">filter_list</span>
                        Global Filters
                    </button>
                    <button
                        onClick={() => navigateTo('/admin/reports')}
                        className="bg-primary-container text-on-primary-container px-md py-sm rounded-lg flex items-center gap-sm hover:opacity-90 transition-opacity shadow-sm text-xs font-semibold"
                    >
                        <span className="material-symbols-outlined text-[18px]">download</span>
                        Export Analytics
                    </button>
                </div>
            </header>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-min">
                {/* 1. Complaint Overview */}
                <div
                    onClick={() => navigateTo('/admin/complaints')}
                    className="col-span-1 md:col-span-4 bg-surface border border-outline-variant rounded-xl p-lg flex flex-col min-h-[240px] relative overflow-hidden group cursor-pointer hover:border-primary/50 transition-all shadow-xs"
                >
                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-md">
                            <h3 className="text-headline-md font-headline-md text-on-surface flex items-center gap-sm font-semibold text-base">
                                <span className="material-symbols-outlined text-primary">data_usage</span>
                                Complaint Overview
                            </h3>
                            <span className="text-xs text-primary font-semibold group-hover:underline flex items-center gap-1">
                                View all <span className="material-symbols-outlined text-xs">arrow_forward</span>
                            </span>
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
                <div
                    onClick={() => navigateTo('/admin/departments')}
                    className="col-span-1 md:col-span-8 bg-surface border border-outline-variant rounded-xl p-lg flex flex-col min-h-[240px] relative cursor-pointer hover:border-primary/50 transition-all shadow-xs"
                >
                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-md">
                            <h3 className="text-headline-md font-headline-md text-on-surface flex items-center gap-sm font-semibold text-base">
                                <span className="material-symbols-outlined text-secondary">pie_chart</span>
                                Complaint Categories Breakdown
                            </h3>
                            <span className="text-xs text-primary font-semibold flex items-center gap-1">
                                Departments <span className="material-symbols-outlined text-xs">arrow_forward</span>
                            </span>
                        </div>
                        <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-sm border-2 border-dashed border-outline-variant rounded-lg bg-surface-container-low/50 p-4">
                            <div className="bg-surface p-sm rounded-lg text-center">
                                <p className="text-xs text-outline">Public Works</p>
                                <p className="text-lg font-bold text-primary">42%</p>
                            </div>
                            <div className="bg-surface p-sm rounded-lg text-center">
                                <p className="text-xs text-outline">Water &amp; Sanitation</p>
                                <p className="text-lg font-bold text-secondary">38%</p>
                            </div>
                            <div className="bg-surface p-sm rounded-lg text-center">
                                <p className="text-xs text-outline">Food Management</p>
                                <p className="text-lg font-bold text-tertiary-container">14%</p>
                            </div>
                            <div className="bg-surface p-sm rounded-lg text-center">
                                <p className="text-xs text-outline">Other / Review</p>
                                <p className="text-lg font-bold text-on-surface">6%</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Department Performance */}
                <div
                    onClick={() => navigateTo('/admin/departments')}
                    className="col-span-1 md:col-span-6 bg-surface border border-outline-variant rounded-xl p-lg flex flex-col min-h-[280px] cursor-pointer hover:border-primary/50 transition-all shadow-xs"
                >
                    <div className="flex items-center justify-between mb-md">
                        <h3 className="text-headline-md font-headline-md text-on-surface flex items-center gap-sm font-semibold text-base">
                            <span className="material-symbols-outlined text-tertiary-container">domain</span>
                            Department Performance (SLA Compliance)
                        </h3>
                        <span className="text-xs text-primary font-semibold flex items-center gap-1">
                            Details <span className="material-symbols-outlined text-xs">arrow_forward</span>
                        </span>
                    </div>
                    <div className="flex-1 flex flex-col justify-center gap-3 border-2 border-dashed border-outline-variant rounded-lg bg-surface-container-low/50 p-4">
                        <div>
                            <div className="flex justify-between text-xs font-semibold mb-1">
                                <span>Public Works Department (PWD)</span>
                                <span className="text-tertiary-container">92% Resolved within SLA</span>
                            </div>
                            <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                                <div className="bg-tertiary-container h-full w-[92%]"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-xs font-semibold mb-1">
                                <span>Water &amp; Sanitation Department</span>
                                <span className="text-secondary">84% Resolved within SLA</span>
                            </div>
                            <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                                <div className="bg-secondary h-full w-[84%]"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-xs font-semibold mb-1">
                                <span>Food Management Department</span>
                                <span className="text-primary">89% Resolved within SLA</span>
                            </div>
                            <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-full w-[89%]"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. Geographical Hotspots */}
                <div
                    onClick={() => navigateTo('/admin/hotspots')}
                    className="col-span-1 md:col-span-6 bg-surface border border-outline-variant rounded-xl p-lg flex flex-col min-h-[280px] cursor-pointer hover:border-primary/50 transition-all shadow-xs"
                >
                    <div className="flex items-center justify-between mb-md">
                        <h3 className="text-headline-md font-headline-md text-on-surface flex items-center gap-sm font-semibold text-base">
                            <span className="material-symbols-outlined text-error">map</span>
                            Geographical Hotspots Heatmap
                        </h3>
                        <span className="text-xs text-primary font-semibold flex items-center gap-1">
                            Open Map <span className="material-symbols-outlined text-xs">arrow_forward</span>
                        </span>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-outline-variant rounded-lg bg-surface-container-low/50 relative overflow-hidden p-4 text-center">
                        <span className="material-symbols-outlined text-error text-[40px] mb-xs animate-bounce">
                            pin_drop
                        </span>
                        <p className="text-xs font-semibold text-on-surface">Top Hotspot: Sector 4 Intersection</p>
                        <p className="text-[11px] text-on-surface-variant">14 reported road complaints in the last 48 hrs</p>
                    </div>
                </div>

                {/* 5. AI Performance */}
                <div
                    onClick={() => navigateTo('/admin/ai-analytics')}
                    className="col-span-1 md:col-span-7 bg-surface border border-outline-variant rounded-xl p-lg flex flex-col min-h-[240px] cursor-pointer hover:border-primary/50 transition-all shadow-xs"
                >
                    <div className="flex items-center justify-between mb-md">
                        <h3 className="text-headline-md font-headline-md text-on-surface flex items-center gap-sm font-semibold text-base">
                            <span className="material-symbols-outlined text-primary-fixed-variant">memory</span>
                            AI Routing Accuracy &amp; Auto-Triage Rate
                        </h3>
                        <span className="text-xs text-primary font-semibold flex items-center gap-1">
                            AI Analytics <span className="material-symbols-outlined text-xs">arrow_forward</span>
                        </span>
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
                <div
                    onClick={() => navigateTo('/admin/users')}
                    className="col-span-1 md:col-span-5 bg-surface border border-outline-variant rounded-xl p-lg flex flex-col min-h-[240px] cursor-pointer hover:border-primary/50 transition-all shadow-xs"
                >
                    <div className="flex items-center justify-between mb-md">
                        <h3 className="text-headline-md font-headline-md text-on-surface flex items-center gap-sm font-semibold text-base">
                            <span className="material-symbols-outlined text-on-surface-variant">history</span>
                            Recent System Activity
                        </h3>
                    </div>
                    <div className="flex-1 flex flex-col gap-2 border-2 border-dashed border-outline-variant rounded-lg bg-surface-container-low/50 p-3 text-xs overflow-y-auto max-h-36">
                        <p className="text-on-surface"><span className="font-semibold">AI Model v2.4</span> re-indexed 120 new tickets</p>
                        <p className="text-on-surface"><span className="font-semibold">Officer Alex</span> closed #CMP-2024-8812</p>
                        <p className="text-on-surface"><span className="font-semibold">Admin</span> generated weekly SLA report</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
