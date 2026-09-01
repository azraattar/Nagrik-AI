import React from 'react';

export default function AdminAIAnalytics() {
    return (
        <div className="space-y-xl">
            {/* Header */}
            <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-md border-b border-outline-variant pb-md">
                <div>
                    <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface font-bold">
                        AI Intelligence &amp; Analytics
                    </h2>
                    <p className="text-body-md font-body-md text-on-surface-variant mt-sm">
                        Real-time AI telemetry, automated classification accuracy, and duplicate linking metrics.
                    </p>
                </div>
                <div className="flex items-center gap-sm">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-tertiary-container bg-tertiary-fixed/30 px-3 py-1.5 rounded-full">
                        <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
                        AI Engine Online (v2.4)
                    </span>
                </div>
            </header>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
                <div className="bg-surface border border-outline-variant rounded-xl p-md shadow-xs space-y-1">
                    <div className="flex items-center justify-between text-outline">
                        <span className="text-xs font-semibold uppercase">Classification Accuracy</span>
                        <span className="material-symbols-outlined text-primary text-[20px]">category</span>
                    </div>
                    <p className="text-2xl font-bold text-primary">96.4%</p>
                    <p className="text-[11px] text-tertiary-container font-semibold">+2.1% improvement</p>
                </div>

                <div className="bg-surface border border-outline-variant rounded-xl p-md shadow-xs space-y-1">
                    <div className="flex items-center justify-between text-outline">
                        <span className="text-xs font-semibold uppercase">Duplicate Detection</span>
                        <span className="material-symbols-outlined text-secondary text-[20px]">hub</span>
                    </div>
                    <p className="text-2xl font-bold text-secondary">91.8%</p>
                    <p className="text-[11px] text-outline font-semibold">184 duplicates merged</p>
                </div>

                <div className="bg-surface border border-outline-variant rounded-xl p-md shadow-xs space-y-1">
                    <div className="flex items-center justify-between text-outline">
                        <span className="text-xs font-semibold uppercase">Auto-Routing Precision</span>
                        <span className="material-symbols-outlined text-tertiary-container text-[20px]">alt_route</span>
                    </div>
                    <p className="text-2xl font-bold text-tertiary-container">94.6%</p>
                    <p className="text-[11px] text-on-surface-variant font-semibold">3 departments routed</p>
                </div>

                <div className="bg-surface border border-outline-variant rounded-xl p-md shadow-xs space-y-1">
                    <div className="flex items-center justify-between text-outline">
                        <span className="text-xs font-semibold uppercase">Avg Inference Latency</span>
                        <span className="material-symbols-outlined text-on-surface text-[20px]">speed</span>
                    </div>
                    <p className="text-2xl font-bold text-on-surface">1.2s</p>
                    <p className="text-[11px] text-outline font-semibold">Multimodal analysis</p>
                </div>
            </div>

            {/* Analysis Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
                {/* Priority Distribution */}
                <div className="bg-surface border border-outline-variant rounded-xl p-lg space-y-md shadow-xs">
                    <h3 className="font-headline-md text-base font-bold text-on-surface flex items-center gap-2">
                        <span className="material-symbols-outlined text-error">priority_high</span>
                        AI Urgency &amp; Priority Scoring Breakdown
                    </h3>
                    <div className="space-y-sm text-xs">
                        <div>
                            <div className="flex justify-between font-semibold mb-1">
                                <span className="text-error">Critical &amp; High Urgency (Score &gt; 80)</span>
                                <span>18% (224 complaints)</span>
                            </div>
                            <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                                <div className="bg-error h-full w-[18%]"></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between font-semibold mb-1">
                                <span className="text-secondary">Normal Priority (Score 40 - 80)</span>
                                <span>68% (848 complaints)</span>
                            </div>
                            <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                                <div className="bg-secondary h-full w-[68%]"></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between font-semibold mb-1">
                                <span className="text-outline">Low Urgency (Score &lt; 40)</span>
                                <span>14% (176 complaints)</span>
                            </div>
                            <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                                <div className="bg-outline h-full w-[14%]"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Duplicate Detection Statistics */}
                <div className="bg-surface border border-outline-variant rounded-xl p-lg space-y-md shadow-xs">
                    <h3 className="font-headline-md text-base font-bold text-on-surface flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">join_inner</span>
                        Duplicate Report Deduplication Engine
                    </h3>
                    <div className="p-md bg-surface-container-low rounded-lg space-y-sm text-xs">
                        <div className="flex justify-between items-center pb-xs border-b border-outline-variant">
                            <span className="text-on-surface-variant">Total Linked Clusters:</span>
                            <span className="font-bold text-on-surface">46 clusters</span>
                        </div>
                        <div className="flex justify-between items-center pb-xs border-b border-outline-variant">
                            <span className="text-on-surface-variant">Max Duplicates on Single Issue:</span>
                            <span className="font-bold text-primary">14 reports (Sector 4 Pothole)</span>
                        </div>
                        <div className="flex justify-between items-center pb-xs border-b border-outline-variant">
                            <span className="text-on-surface-variant">Time Saved by Auto-Linking:</span>
                            <span className="font-bold text-tertiary-container">~62 triage hours</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-on-surface-variant">Geospatial Radius Matching:</span>
                            <span className="font-bold text-on-surface">50 meters</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
