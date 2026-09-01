import React, { useState } from 'react';

export default function AdminHotspots() {
    const [selectedWard, setSelectedWard] = useState('All');

    const hotspots = [
        {
            id: 'HS-01',
            location: 'Sector 4 Intersection & Main Blvd',
            ward: 'Ward A',
            complaintsCount: 14,
            category: 'Potholes & Road Damage',
            department: 'Public Works Department (PWD)',
            severity: 'High',
            status: 'Action Required'
        },
        {
            id: 'HS-02',
            location: 'Central Market Food Strip, Block 2',
            ward: 'Ward B',
            complaintsCount: 9,
            category: 'Garbage & Sanitation',
            department: 'Water & Sanitation Department',
            severity: 'Medium',
            status: 'Inspection Scheduled'
        },
        {
            id: 'HS-03',
            location: 'East Ward Sector 9 Pipeline Junction',
            ward: 'Ward C',
            complaintsCount: 8,
            category: 'Water Contamination',
            department: 'Water & Sanitation Department',
            severity: 'High',
            status: 'Investigating'
        },
        {
            id: 'HS-04',
            location: 'Station Road Vendor Plaza',
            ward: 'Ward A',
            complaintsCount: 6,
            category: 'Unhygienic Food Stall',
            department: 'Food Management Department',
            severity: 'Medium',
            status: 'Under Review'
        }
    ];

    const filtered = hotspots.filter(
        (h) => selectedWard === 'All' || h.ward === selectedWard
    );

    return (
        <div className="space-y-xl">
            {/* Header */}
            <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-md border-b border-outline-variant pb-md">
                <div>
                    <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface font-bold">
                        Geographical Complaint Hotspots
                    </h2>
                    <p className="text-body-md font-body-md text-on-surface-variant mt-sm">
                        Spatial clustering, ward concentrations, and geospatial density analysis.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    {['All', 'Ward A', 'Ward B', 'Ward C'].map((ward) => (
                        <button
                            key={ward}
                            onClick={() => setSelectedWard(ward)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                                selectedWard === ward
                                    ? 'bg-primary text-on-primary shadow-xs'
                                    : 'bg-surface border border-outline-variant text-on-surface-variant hover:bg-surface-container-low'
                            }`}
                        >
                            {ward}
                        </button>
                    ))}
                </div>
            </header>

            {/* Map Visualizer */}
            <div className="bg-surface border border-outline-variant rounded-xl p-lg min-h-[380px] flex flex-col justify-between relative overflow-hidden shadow-xs">
                <div className="flex justify-between items-center z-10">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-error text-[24px]">map</span>
                        <h3 className="font-headline-md text-base font-bold text-on-surface">
                            City Geospatial Heatmap View
                        </h3>
                    </div>
                    <span className="text-xs bg-surface-container-high text-on-surface font-semibold px-2.5 py-1 rounded-full">
                        GIS Layer: Live Active Complaints
                    </span>
                </div>

                {/* Simulated Map Visuals */}
                <div className="my-md flex-1 bg-surface-container-low rounded-xl border border-outline-variant relative overflow-hidden flex items-center justify-center min-h-[220px]">
                    <div
                        className="absolute inset-0 opacity-15"
                        style={{
                            backgroundImage:
                                'radial-gradient(circle, #00236f 1px, transparent 1px), radial-gradient(circle, #00236f 1px, transparent 1px)',
                            backgroundSize: '24px 24px',
                        }}
                    ></div>

                    {/* Hotspot Markers */}
                    <div className="relative z-10 flex flex-wrap gap-4 justify-center items-center p-md">
                        {filtered.map((item) => (
                            <div
                                key={item.id}
                                className="bg-surface border border-outline-variant rounded-lg p-sm shadow-md flex items-center gap-2 text-xs"
                            >
                                <span className="w-3 h-3 rounded-full bg-error animate-ping"></span>
                                <div>
                                    <p className="font-bold text-on-surface">{item.location}</p>
                                    <p className="text-[10px] text-outline">{item.complaintsCount} linked complaints ({item.ward})</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-on-surface-variant z-10 gap-2">
                    <span>* Clustering threshold: 5+ complaints within 100m radius in 48 hours</span>
                    <span className="font-semibold text-primary">4 Active Hotspots Monitored</span>
                </div>
            </div>

            {/* Hotspots List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                {filtered.map((hs) => (
                    <div
                        key={hs.id}
                        className="bg-surface border border-outline-variant rounded-xl p-md shadow-xs flex justify-between items-start"
                    >
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <span className="font-mono text-xs font-bold text-primary">{hs.id}</span>
                                <span className="bg-surface-container-high px-2 py-0.5 rounded text-[10px] font-semibold text-on-surface">
                                    {hs.ward}
                                </span>
                            </div>
                            <h4 className="font-bold text-sm text-on-surface">{hs.location}</h4>
                            <p className="text-xs text-on-surface-variant">{hs.category} • {hs.department}</p>
                        </div>
                        <div className="text-right">
                            <span className="bg-error-container text-error text-[11px] font-bold px-2 py-0.5 rounded">
                                {hs.complaintsCount} Reports
                            </span>
                            <p className="text-[10px] text-outline mt-1">{hs.status}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
