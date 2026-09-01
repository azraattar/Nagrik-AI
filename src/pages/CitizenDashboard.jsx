import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ComplaintCard from '../components/ComplaintCard';

export default function CitizenDashboard({ navigateTo, user, complaints = [], onViewDetail }) {
    return (
        <div className="bg-background text-on-background h-full font-sans antialiased flex min-h-screen">
            {/* Sidebar for Desktop */}
            <Sidebar role="citizen" activePage="citizen_dashboard" navigateTo={navigateTo} />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-h-screen md:ml-[280px]">
                {/* Top Bar for Desktop/Mobile */}
                <Header activePage="citizen_dashboard" navigateTo={navigateTo} user={user} />

                {/* Main Canvas */}
                <main className="flex-1 overflow-y-auto p-margin-mobile md:p-gutter bg-background">
                    <div className="max-w-container-max mx-auto space-y-xl">
                        {/* Welcome Section */}
                        <section className="bg-surface border border-outline-variant rounded-xl p-lg md:p-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-lg soft-shadow">
                            {/* Decorative Background element */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed-dim rounded-full blur-3xl opacity-20 -mr-20 -mt-20 pointer-events-none"></div>

                            <div className="relative z-10 flex-1 max-w-2xl">
                                <h1 className="font-display-lg text-display-lg text-on-surface mb-sm tracking-tight font-bold">
                                    Welcome to NagrikAI
                                </h1>
                                <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg max-w-xl">
                                    Report a civic issue and track its progress from submission to resolution. We connect you directly with the right authorities to ensure a better community for everyone.
                                </p>
                                <button
                                    onClick={() => navigateTo('submit_complaint')}
                                    className="bg-primary hover:bg-on-primary-fixed-variant text-on-primary font-label-md text-label-md px-6 py-3 rounded-lg shadow-sm transition-colors duration-200 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 active:scale-95"
                                >
                                    <span className="material-symbols-outlined font-bold text-[20px]">add</span>
                                    Report an Issue
                                </button>
                            </div>

                            {/* Illustration Placeholder */}
                            <div className="relative z-10 hidden lg:block shrink-0">
                                <img
                                    className="w-64 h-auto object-contain drop-shadow-sm"
                                    alt="City illustration"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3GChYmKs5GsHCleMKHJ26DxVqLkI4QK1ZjYN5uongQlHDDB8wx7ReYqxDoLxyn6GFSOOAmdkUsmD4bTRWxyAHyPIyEu0FkQDQTS9N46TAHHt1C-0npdJetdKff-HxT-WpHdvJ6M0IEET1qxu4gwWv0I23o9nSQBzQh-C2299gQC7DfbUNiAwNB807t1w-_jFOYd8F3UDKMrOj2qkJ70DIWHqUlolXqYqNd8L4R2QWY-J268dsHrge"
                                />
                            </div>
                        </section>

                        {/* My Complaints Section */}
                        <section>
                            <div className="flex items-center justify-between mb-md border-b border-outline-variant pb-2">
                                <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                                    My Complaints ({complaints.length})
                                </h3>
                                <button
                                    onClick={() => navigateTo('my_complaints')}
                                    className="font-label-md text-label-md text-primary hover:underline font-semibold"
                                >
                                    View All
                                </button>
                            </div>

                            {/* Complaints List or Empty State */}
                            {complaints.length > 0 ? (
                                <div className="space-y-md">
                                    {complaints.map((item) => (
                                        <ComplaintCard
                                            key={item.id}
                                            complaint={item}
                                            onViewDetail={() => onViewDetail(item)}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-surface border border-outline-variant rounded-xl p-xl flex flex-col items-center justify-center text-center min-h-[350px]">
                                    <div className="w-24 h-24 mb-6 text-outline-variant flex items-center justify-center">
                                        <span className="material-symbols-outlined text-6xl opacity-50" style={{ fontSize: '80px' }}>
                                            inbox
                                        </span>
                                    </div>
                                    <h4 className="font-headline-md text-headline-md text-on-surface mb-2 font-bold">
                                        No complaints submitted yet.
                                    </h4>
                                    <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-md">
                                        Your dashboard is clear. When you report an issue in your community, you can track its status and updates right here.
                                    </p>
                                    <button
                                        onClick={() => navigateTo('submit_complaint')}
                                        className="bg-surface text-on-surface border border-outline-variant hover:bg-surface-container-low font-label-md text-label-md px-6 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 soft-shadow font-semibold"
                                    >
                                        Submit Your First Complaint
                                    </button>
                                </div>
                            )}
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
}
