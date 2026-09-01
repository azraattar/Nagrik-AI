import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import StatusBadge from '../components/StatusBadge';

export default function OfficerDashboard({ navigateTo, user, complaints = [], onViewDetail }) {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="bg-background text-on-background min-h-screen flex">
            <Sidebar role="officer" activePage="officer_dashboard" navigateTo={navigateTo} />

            <main className="ml-0 md:ml-[280px] flex-1 flex flex-col min-h-screen">
                {/* Top Header */}
                <Header activePage="officer_dashboard" navigateTo={navigateTo} user={user} />

                {/* Header Bar */}
                <header className="h-16 bg-surface border-b border-outline-variant flex items-center justify-between px-gutter sticky top-0 z-10">
                    <div className="font-headline-md text-headline-md text-on-surface font-bold text-base md:text-lg">
                        Department of Public Works
                    </div>
                    <div className="flex items-center gap-lg">
                        <div className="relative hidden md:block">
                            <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant">
                                search
                            </span>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search assigned queue..."
                                className="pl-[36px] pr-sm py-xs border border-outline-variant rounded-lg bg-surface-container-lowest focus:border-secondary focus:ring-2 focus:ring-secondary/20 font-body-md text-body-md text-on-surface outline-none w-64 text-xs"
                            />
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <div className="p-xl space-y-xl max-w-container-max mx-auto w-full">
                    {/* Bento Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
                        {/* Complaint Queue */}
                        <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col min-h-[260px] shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-center mb-md">
                                <h2 className="font-headline-md text-headline-md text-on-surface font-bold text-base">
                                    Complaint Queue ({complaints.length})
                                </h2>
                                <span className="text-xs text-primary font-semibold cursor-pointer" onClick={() => navigateTo('my_complaints')}>View All</span>
                            </div>

                            {complaints.length > 0 ? (
                                <div className="space-y-sm overflow-y-auto max-h-48 pr-1">
                                    {complaints.slice(0, 3).map((item) => (
                                        <div
                                            key={item.id}
                                            onClick={() => onViewDetail(item)}
                                            className="p-sm bg-surface rounded-lg border border-outline-variant hover:border-primary cursor-pointer transition-colors"
                                        >
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-[10px] text-outline font-semibold">#{item.id}</span>
                                                <StatusBadge status={item.status} />
                                            </div>
                                            <p className="text-xs font-bold text-on-surface line-clamp-1">{item.title}</p>
                                            <p className="text-[11px] text-on-surface-variant line-clamp-1">{item.location}</p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex-1 flex flex-col items-center justify-center text-center py-4">
                                    <span className="material-symbols-outlined text-4xl text-outline-variant mb-sm">inbox</span>
                                    <p className="font-body-md text-body-md text-on-surface-variant text-xs">No complaints assigned yet.</p>
                                </div>
                            )}
                        </section>

                        {/* Priority Issues */}
                        <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col min-h-[260px] shadow-sm hover:shadow-md transition-shadow">
                            <h2 className="font-headline-md text-headline-md text-on-surface mb-md font-bold text-base">
                                Priority Issues
                            </h2>
                            <div className="flex-1 flex flex-col items-center justify-center text-center">
                                <span className="material-symbols-outlined text-4xl text-outline-variant mb-sm">
                                    assignment_turned_in
                                </span>
                                <p className="font-body-md text-body-md text-on-surface-variant text-xs">No priority complaints pending inspection.</p>
                            </div>
                        </section>

                        {/* Recent Activity */}
                        <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col min-h-[260px] shadow-sm hover:shadow-md transition-shadow">
                            <h2 className="font-headline-md text-headline-md text-on-surface mb-md font-bold text-base">
                                Recent Activity
                            </h2>
                            <div className="space-y-sm text-xs">
                                <div className="p-xs border-b border-outline-variant">
                                    <p className="font-semibold text-on-surface">Updated #CMP-2024-8902</p>
                                    <p className="text-on-surface-variant text-[11px]">Marked as In Progress</p>
                                </div>
                                <div className="p-xs border-b border-outline-variant">
                                    <p className="font-semibold text-on-surface">Auto-Assigned #CMP-2024-1044</p>
                                    <p className="text-on-surface-variant text-[11px]">Routed to Road Repair Crew</p>
                                </div>
                            </div>
                        </section>

                        {/* Complaint Hotspots - Large Map Placeholder */}
                        <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col lg:col-span-3 min-h-[380px] shadow-sm hover:shadow-md transition-shadow">
                            <h2 className="font-headline-md text-headline-md text-on-surface mb-md font-bold text-base">
                                Complaint Hotspots Map
                            </h2>
                            <div className="flex-1 bg-surface-container-low rounded-lg border border-outline-variant flex items-center justify-center relative overflow-hidden">
                                <div
                                    className="absolute inset-0 opacity-10"
                                    style={{
                                        backgroundImage:
                                            'repeating-linear-gradient(45deg, #757682 25%, transparent 25%, transparent 75%, #757682 75%, #757682), repeating-linear-gradient(45deg, #757682 25%, transparent 25%, transparent 75%, #757682 75%, #757682)',
                                        backgroundPosition: '0 0, 10px 10px',
                                        backgroundSize: '20px 20px',
                                    }}
                                ></div>
                                <div className="z-10 flex flex-col items-center text-center bg-surface-container-lowest/80 p-md rounded-lg backdrop-blur-sm border border-outline-variant">
                                    <span className="material-symbols-outlined text-4xl text-primary mb-sm">location_on</span>
                                    <p className="font-body-lg text-body-lg text-on-surface font-semibold text-sm">
                                        Interactive Geospatial GIS Map Active
                                    </p>
                                    <p className="text-xs text-on-surface-variant mt-1">4 active complaint clusters detected in South Ward</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
