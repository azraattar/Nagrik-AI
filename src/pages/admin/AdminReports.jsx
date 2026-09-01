import React, { useState } from 'react';

export default function AdminReports() {
    const [downloadingReport, setDownloadingReport] = useState(null);

    const reportTemplates = [
        {
            id: 'REP-01',
            title: 'Monthly Civic Grievance Audit',
            period: 'October 2024',
            fileSize: '2.4 MB PDF',
            desc: 'Comprehensive summary of all 1,248 reported issues, resolution rates, and SLA compliance.'
        },
        {
            id: 'REP-02',
            title: 'Department SLA & Turnaround Time Performance',
            period: 'Q3 2024',
            fileSize: '1.8 MB PDF',
            desc: 'In-depth analysis of PWD, Water & Sanitation, and Food Management response metrics.'
        },
        {
            id: 'REP-03',
            title: 'AI Classification & Auto-Triage Accuracy Report',
            period: 'October 2024',
            fileSize: '1.1 MB CSV',
            desc: 'Model telemetry, duplicate detection rates, and manual review override metrics.'
        },
        {
            id: 'REP-04',
            title: 'Geospatial Hotspot & Ward Incident Concentration',
            period: 'Last 30 Days',
            fileSize: '3.6 MB PDF',
            desc: 'GIS cluster reports and recurring infrastructure failure zones across all wards.'
        }
    ];

    const handleDownload = (repId) => {
        setDownloadingReport(repId);
        setTimeout(() => {
            setDownloadingReport(null);
            alert(`Report ${repId} exported successfully.`);
        }, 1200);
    };

    return (
        <div className="space-y-xl">
            {/* Header */}
            <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-md border-b border-outline-variant pb-md">
                <div>
                    <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface font-bold">
                        Reports &amp; SLA Compliance
                    </h2>
                    <p className="text-body-md font-body-md text-on-surface-variant mt-sm">
                        Export analytical reports, SLA compliance summaries, and civic audit documentation.
                    </p>
                </div>
                <div className="flex items-center gap-sm">
                    <button
                        onClick={() => handleDownload('CUSTOM_EXPORT')}
                        className="bg-primary-container text-on-primary-container px-md py-sm rounded-lg flex items-center gap-sm hover:opacity-90 transition-opacity shadow-sm text-xs font-semibold"
                    >
                        <span className="material-symbols-outlined text-[18px]">download</span>
                        {downloadingReport === 'CUSTOM_EXPORT' ? 'Exporting...' : 'Export Complete Audit CSV'}
                    </button>
                </div>
            </header>

            {/* Performance Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-md">
                <div className="bg-surface border border-outline-variant rounded-xl p-md">
                    <p className="text-xs text-outline font-semibold">Citywide Resolution Rate</p>
                    <p className="text-2xl font-bold text-primary mt-1">88.4%</p>
                    <p className="text-[11px] text-tertiary-container font-semibold mt-1">Within SLA targets</p>
                </div>
                <div className="bg-surface border border-outline-variant rounded-xl p-md">
                    <p className="text-xs text-outline font-semibold">Average Resolution Time</p>
                    <p className="text-2xl font-bold text-secondary mt-1">2.8 Days</p>
                    <p className="text-[11px] text-on-surface-variant font-semibold mt-1">Down from 4.1 days</p>
                </div>
                <div className="bg-surface border border-outline-variant rounded-xl p-md">
                    <p className="text-xs text-outline font-semibold">Citizen Satisfaction Index</p>
                    <p className="text-2xl font-bold text-tertiary-container mt-1">4.6 / 5.0</p>
                    <p className="text-[11px] text-tertiary-container font-semibold mt-1">Based on 820 feedbacks</p>
                </div>
            </div>

            {/* Report Downloads */}
            <div className="bg-surface border border-outline-variant rounded-xl p-lg shadow-xs space-y-md">
                <h3 className="font-headline-md text-base font-bold text-on-surface">
                    Available Report Templates
                </h3>

                <div className="space-y-sm">
                    {reportTemplates.map((rep) => (
                        <div
                            key={rep.id}
                            className="p-md bg-surface-container-low/60 rounded-xl border border-outline-variant flex flex-col sm:flex-row justify-between items-start sm:items-center gap-md hover:bg-surface-container-low transition-colors"
                        >
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <span className="font-mono font-bold text-xs text-primary">{rep.id}</span>
                                    <span className="text-xs bg-surface-container-high px-2 py-0.5 rounded font-semibold text-on-surface">
                                        {rep.period}
                                    </span>
                                </div>
                                <h4 className="font-bold text-sm text-on-surface">{rep.title}</h4>
                                <p className="text-xs text-on-surface-variant max-w-xl">{rep.desc}</p>
                            </div>

                            <button
                                onClick={() => handleDownload(rep.id)}
                                disabled={downloadingReport === rep.id}
                                className="bg-surface border border-outline-variant hover:bg-surface-container text-xs font-semibold px-4 py-2 rounded-lg text-primary flex items-center gap-2 transition-colors shrink-0 shadow-xs"
                            >
                                <span className="material-symbols-outlined text-[16px]">
                                    {downloadingReport === rep.id ? 'hourglass_top' : 'download'}
                                </span>
                                {downloadingReport === rep.id ? 'Generating...' : `Export (${rep.fileSize})`}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
