import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ComplaintCard from '../components/ComplaintCard';

export default function MyComplaintsPage({ navigateTo, user, complaints = [], onViewDetail }) {
    const [filter, setFilter] = useState('All'); // 'All', 'Open', 'Resolved'
    const [searchQuery, setSearchQuery] = useState('');

    const filteredComplaints = complaints.filter((item) => {
        const matchesFilter =
            filter === 'All'
                ? true
                : filter === 'Open'
                    ? item.status !== 'Resolved'
                    : item.status === 'Resolved';
        const matchesSearch =
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.id.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="bg-background text-on-background min-h-screen flex antialiased">
            <Sidebar role="citizen" activePage="my_complaints" navigateTo={navigateTo} />

            <div className="flex-1 md:ml-[280px] flex flex-col min-h-screen">
                <Header activePage="my_complaints" navigateTo={navigateTo} user={user} />

                <main className="flex-1 p-margin-mobile md:p-gutter max-w-container-max mx-auto w-full">
                    {/* Title Header */}
                    <div className="mb-xl">
                        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-sm font-bold">
                            Your Complaints
                        </h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                            Track and manage the status of your submitted grievances.
                        </p>
                    </div>

                    <div className="w-full space-y-md">
                        {/* Filters & Search */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-md mb-lg">
                            <div className="flex gap-sm">
                                {['All', 'Open', 'Resolved'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setFilter(tab)}
                                        className={`px-md py-sm border rounded-full font-label-sm text-label-sm transition-all ${filter === tab
                                                ? 'bg-surface-container-low border-primary text-primary font-bold shadow-xs'
                                                : 'bg-surface text-on-surface-variant border-outline-variant hover:bg-surface-container-low'
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            <div className="relative w-full sm:w-64">
                                <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline">
                                    search
                                </span>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search complaints..."
                                    className="w-full pl-xl pr-md py-sm bg-surface border border-outline-variant rounded-lg font-body-md text-body-md focus:border-secondary-container focus:ring-2 focus:ring-secondary-container/20 outline-none"
                                />
                            </div>
                        </div>

                        {/* Complaints List or Empty State */}
                        {filteredComplaints.length > 0 ? (
                            <div className="space-y-md">
                                {filteredComplaints.map((complaint) => (
                                    <ComplaintCard
                                        key={complaint.id}
                                        complaint={complaint}
                                        onViewDetail={() => onViewDetail(complaint)}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="bg-surface border border-outline-variant rounded-xl p-xl flex flex-col items-center justify-center text-center min-h-[400px]">
                                <div className="w-24 h-24 rounded-full bg-surface-container-low flex items-center justify-center mb-lg">
                                    <span className="material-symbols-outlined text-outline text-4xl" style={{ fontSize: '48px' }}>
                                        inbox
                                    </span>
                                </div>
                                <h3 className="font-headline-md text-headline-md text-on-background mb-sm font-bold">
                                    No complaints found.
                                </h3>
                                <p className="font-body-md text-body-md text-on-surface-variant mb-xl max-w-md">
                                    You haven't submitted any complaints matching this filter yet.
                                </p>
                                <button
                                    onClick={() => navigateTo('submit_complaint')}
                                    className="bg-primary-container text-on-primary-container px-xl py-md rounded-lg font-label-md text-label-md hover:bg-primary-container/90 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-primary-container font-semibold"
                                >
                                    Report an Issue
                                </button>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}
