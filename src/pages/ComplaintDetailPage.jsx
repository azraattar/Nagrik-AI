import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import StatusBadge from '../components/StatusBadge';

export default function ComplaintDetailPage({ complaint, navigateTo, user, onUpdateStatus }) {
    const [currentStatus, setCurrentStatus] = useState(complaint?.status || 'Draft');
    const [aiAnalyzing, setAiAnalyzing] = useState(false);

    const item = complaint || {
        id: 'CMP-2024-8902',
        title: 'Pothole on Main Street causing traffic hazards',
        description: `There is a massive pothole that has developed over the last week on Main Street, just past the intersection with 5th Avenue. It spans almost an entire lane and is extremely deep.

Several cars have hit it hard, and it's becoming a major traffic hazard, especially during rush hour. Immediate attention is requested before an accident occurs or serious vehicle damage is sustained.`,
        location: 'Downtown District, Sector 4',
        date: 'Oct 24, 2024, 09:15 AM',
        reporter: 'Not provided (Anonymous)',
        status: currentStatus,
        priority: 'High Priority',
    };

    const handleStatusChange = (newStatus) => {
        setCurrentStatus(newStatus);
        if (onUpdateStatus) {
            onUpdateStatus(item.id, newStatus);
        }
    };

    const runAiAnalysis = () => {
        setAiAnalyzing(true);
        setTimeout(() => {
            setAiAnalyzing(false);
        }, 800);
    };

    return (
        <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col md:flex-row">
            <Sidebar role="citizen" activePage="my_complaints" navigateTo={navigateTo} />

            <div className="flex-1 md:ml-[280px] flex flex-col min-h-screen">
                <Header activePage="my_complaints" navigateTo={navigateTo} user={user} />

                <main className="flex-grow p-margin-mobile md:p-gutter max-w-container-max mx-auto w-full">
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-xl gap-md">
                        <div>
                            <div className="flex items-center gap-sm mb-xs">
                                <span className="text-on-surface-variant font-label-md text-xs">
                                    Complaint ID: #{item.id}
                                </span>
                                <StatusBadge status={currentStatus} />
                            </div>
                            <h2 className="text-headline-lg font-headline-lg text-on-surface mb-xs font-bold">
                                {item.title}
                            </h2>
                            <p className="text-on-surface-variant font-body-md flex items-center gap-xs text-sm">
                                <span className="material-symbols-outlined text-[16px]">location_on</span>
                                {item.location}
                            </p>
                        </div>

                        {/* Officer / Admin Quick Actions */}
                        <div className="flex flex-wrap gap-sm">
                            <button
                                onClick={() => handleStatusChange('Accepted')}
                                className="bg-surface text-on-surface border border-outline-variant px-md py-sm rounded-lg font-label-md hover:bg-surface-container-low transition-colors shadow-sm focus:ring-2 focus:ring-primary text-xs font-semibold flex items-center gap-xs"
                            >
                                <span className="material-symbols-outlined text-[18px]">assignment_turned_in</span>
                                Accept
                            </button>
                            <button
                                onClick={() => handleStatusChange('In Progress')}
                                className="bg-secondary-container text-on-secondary-container border border-secondary-container px-md py-sm rounded-lg font-label-md hover:brightness-95 transition-colors shadow-sm focus:ring-2 focus:ring-primary text-xs font-semibold flex items-center gap-xs"
                            >
                                <span className="material-symbols-outlined text-[18px]">pending_actions</span>
                                Mark In Progress
                            </button>
                            <button
                                onClick={() => handleStatusChange('Resolved')}
                                className="bg-primary-container text-on-primary px-md py-sm rounded-lg font-label-md hover:brightness-90 transition-colors focus:ring-2 focus:ring-primary text-xs font-semibold flex items-center gap-xs"
                            >
                                <span className="material-symbols-outlined text-[18px]">check_circle</span>
                                Resolve
                            </button>
                        </div>
                    </div>

                    {/* Bento Grid Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg mb-xl">
                        {/* Left Column: Description & Evidence */}
                        <div className="lg:col-span-2 flex flex-col gap-lg">
                            {/* Description Card */}
                            <section className="bg-surface border border-outline-variant rounded-xl p-lg shadow-sm">
                                <h3 className="text-headline-md font-headline-md text-on-surface border-b border-outline-variant pb-sm mb-md flex items-center gap-sm font-semibold">
                                    <span className="material-symbols-outlined">description</span> Description
                                </h3>
                                <p className="text-body-md text-on-surface-variant whitespace-pre-line leading-relaxed">
                                    {item.description}
                                </p>
                                <div className="mt-md flex gap-lg text-label-md text-on-surface-variant bg-surface-container-lowest p-md rounded-lg border border-outline-variant text-xs">
                                    <div>
                                        <span className="block text-label-sm text-outline mb-xs font-semibold">Submitted On</span>
                                        {item.date || 'Oct 24, 2024, 09:15 AM'}
                                    </div>
                                    <div>
                                        <span className="block text-label-sm text-outline mb-xs font-semibold">Reporter Contact</span>
                                        {item.reporter || 'Registered Citizen'}
                                    </div>
                                </div>
                            </section>

                            {/* Evidence Card */}
                            <section className="bg-surface border border-outline-variant rounded-xl p-lg shadow-sm">
                                <h3 className="text-headline-md font-headline-md text-on-surface border-b border-outline-variant pb-sm mb-md flex items-center gap-sm font-semibold">
                                    <span className="material-symbols-outlined">perm_media</span> Evidence
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                                    <div className="relative group cursor-pointer border border-outline-variant rounded-lg overflow-hidden h-48 bg-surface-container-low flex items-center justify-center">
                                        <img
                                            className="object-cover w-full h-full"
                                            alt="Pothole issue sample"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnhg7qA9K06trpmPh7Lr3Zos7b2ZB3f34pqNEo13odVxl3XQ7demL5FmcCExH5-auzNLiDz-rvFL30gztETdXWihLY1XOTxZJ0RUila7xtOQUycpQdnqlVqF0-RMlhqDIWSLCvXybEO4Di-UdI2JRBqOy-vv9iQ89synGsokizNAomUI8yLxuLG78u4nOnVyX7hl8A9cBTQNMsgZMS1g8W20Rpb5lxAYjQAqMXDxuXUzi65GZaABdY"
                                        />
                                        <div className="absolute inset-0 bg-on-background/30 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                                            <span className="material-symbols-outlined text-on-primary drop-shadow-md text-3xl">
                                                zoom_in
                                            </span>
                                        </div>
                                    </div>

                                    <div className="relative border border-outline-variant rounded-lg overflow-hidden h-48 bg-surface-container-low flex items-center justify-center flex-col text-on-surface-variant p-4 text-center">
                                        <span className="material-symbols-outlined text-[32px] mb-sm text-outline">
                                            videocam
                                        </span>
                                        <span className="font-label-md text-xs text-outline">No video provided</span>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Right Column: AI Analysis & Timeline */}
                        <div className="flex flex-col gap-lg">
                            {/* AI Analysis Card */}
                            <section className="bg-surface-container border border-primary-fixed-dim rounded-xl p-lg shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-fixed-dim opacity-20 blur-2xl rounded-full -mr-10 -mt-10"></div>
                                <div className="flex items-center justify-between border-b border-primary-fixed-dim pb-sm mb-md">
                                    <h3 className="text-headline-md font-headline-md text-primary flex items-center gap-sm font-semibold">
                                        <span className="material-symbols-outlined">smart_toy</span> AI Analysis
                                    </h3>
                                    <button
                                        onClick={runAiAnalysis}
                                        className="text-xs text-primary font-semibold hover:underline flex items-center gap-1"
                                    >
                                        <span className="material-symbols-outlined text-sm">refresh</span> Re-analyze
                                    </button>
                                </div>

                                <div className="flex flex-col gap-md relative z-10">
                                    <div className="bg-surface p-md rounded-lg border border-outline-variant">
                                        {aiAnalyzing ? (
                                            <div className="flex flex-col items-center justify-center py-4 text-center">
                                                <span className="material-symbols-outlined animate-spin text-primary text-2xl mb-2">
                                                    progress_activity
                                                </span>
                                                <p className="text-xs text-on-surface-variant font-medium">Running AI NLP & Computer Vision analysis...</p>
                                            </div>
                                        ) : (
                                            <div className="space-y-2 text-xs">
                                                <p className="font-semibold text-on-surface flex items-center gap-1 text-sm">
                                                    <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                                                    High Confidence Issue Detection
                                                </p>
                                                <p className="text-on-surface-variant">
                                                    Verified structural road defect. Severity rating: 8/10. Recommended routing: Department of Public Works.
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Analysis categories */}
                                    <div className="grid grid-cols-2 gap-sm text-xs">
                                        <div className="bg-surface p-sm rounded-lg border border-outline-variant">
                                            <span className="block text-label-sm text-outline mb-xs">Category</span>
                                            <span className="text-label-md text-on-surface font-semibold">Road Infrastructure</span>
                                        </div>
                                        <div className="bg-surface p-sm rounded-lg border border-outline-variant">
                                            <span className="block text-label-sm text-outline mb-xs">Department</span>
                                            <span className="text-label-md text-on-surface font-semibold">Public Works</span>
                                        </div>
                                        <div className="bg-surface p-sm rounded-lg border border-outline-variant">
                                            <span className="block text-label-sm text-outline mb-xs">Priority</span>
                                            <span className="text-label-md text-error font-semibold">High Priority</span>
                                        </div>
                                        <div className="bg-surface p-sm rounded-lg border border-outline-variant">
                                            <span className="block text-label-sm text-outline mb-xs">Duplicates</span>
                                            <span className="text-label-md text-on-surface font-semibold">0 Match Found</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Timeline Card */}
                            <section className="bg-surface border border-outline-variant rounded-xl p-lg shadow-sm flex-grow">
                                <h3 className="text-headline-md font-headline-md text-on-surface border-b border-outline-variant pb-sm mb-md flex items-center gap-sm font-semibold">
                                    <span className="material-symbols-outlined">timeline</span> Timeline
                                </h3>
                                <div className="relative border-l-2 border-surface-container-high ml-md py-sm space-y-md">
                                    <div className="relative pl-lg">
                                        <div className="absolute w-3 h-3 bg-primary-container rounded-full -left-[7px] top-[6px] border-2 border-surface"></div>
                                        <p className="font-label-md text-on-surface font-semibold text-xs">Complaint Submitted</p>
                                        <p className="font-label-sm text-outline text-[11px] mt-xs">{item.date || 'Oct 24, 2024 - 09:15 AM'}</p>
                                        <p className="font-body-md text-on-surface-variant mt-sm text-xs">Citizen filed report via web portal.</p>
                                    </div>

                                    <div className="relative pl-lg">
                                        <div className="absolute w-3 h-3 bg-secondary-container rounded-full -left-[7px] top-[6px] border-2 border-surface"></div>
                                        <p className="font-label-md text-on-surface font-semibold text-xs">Current Status: {currentStatus}</p>
                                        <p className="font-label-sm text-outline text-[11px] mt-xs">Updated just now</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
