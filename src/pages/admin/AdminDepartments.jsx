import React from 'react';

export default function AdminDepartments({ navigateTo }) {
    const departments = [
        {
            name: 'Public Works Department (PWD)',
            icon: 'construction',
            head: 'Er. Rajesh Verma',
            totalComplaints: 524,
            pendingComplaints: 42,
            resolvedComplaints: 482,
            slaCompliance: '92%',
            activeOfficers: 18,
            primaryFocus: 'Road repairs, footpaths, bridges, streetlights & civil infrastructure',
            status: 'Operational'
        },
        {
            name: 'Water & Sanitation Department',
            icon: 'water_drop',
            head: 'Dr. Meenakshi S.',
            totalComplaints: 476,
            pendingComplaints: 76,
            resolvedComplaints: 400,
            slaCompliance: '84%',
            activeOfficers: 14,
            primaryFocus: 'Water supply pipelines, drainage cleaning, municipal solid waste & sanitation',
            status: 'Operational'
        },
        {
            name: 'Food Management Department',
            icon: 'restaurant',
            head: 'Shri Anand K.',
            totalComplaints: 248,
            pendingComplaints: 28,
            resolvedComplaints: 220,
            slaCompliance: '89%',
            activeOfficers: 9,
            primaryFocus: 'Food safety audits, restaurant hygiene, expired provisions & market inspections',
            status: 'Operational'
        }
    ];

    return (
        <div className="space-y-xl">
            {/* Header */}
            <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-md border-b border-outline-variant pb-md">
                <div>
                    <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface font-bold">
                        Departments Management
                    </h2>
                    <p className="text-body-md font-body-md text-on-surface-variant mt-sm">
                        Overview of city municipal departments, active staff, and complaint resolution metrics.
                    </p>
                </div>
                <div className="flex items-center gap-sm">
                    <button
                        onClick={() => navigateTo('/admin/complaints')}
                        className="bg-primary-container text-on-primary-container px-md py-sm rounded-lg flex items-center gap-sm hover:opacity-90 transition-opacity shadow-sm text-xs font-semibold"
                    >
                        <span className="material-symbols-outlined text-[18px]">list_alt</span>
                        View All Department Tickets
                    </button>
                </div>
            </header>

            {/* Department Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
                {departments.map((dept) => (
                    <div
                        key={dept.name}
                        className="bg-surface border border-outline-variant rounded-xl p-lg flex flex-col justify-between shadow-xs hover:border-primary/50 transition-all space-y-md"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-sm">
                                <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shadow-xs">
                                    <span className="material-symbols-outlined text-[26px]">
                                        {dept.icon}
                                    </span>
                                </div>
                                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-tertiary-container bg-tertiary-fixed/30 px-2.5 py-1 rounded-full">
                                    <span className="w-2 h-2 rounded-full bg-tertiary-container"></span>
                                    {dept.status}
                                </span>
                            </div>

                            <h3 className="font-headline-md text-base font-bold text-on-surface mb-1">
                                {dept.name}
                            </h3>
                            <p className="text-xs text-outline mb-sm font-medium">Head: {dept.head}</p>
                            <p className="text-xs text-on-surface-variant leading-relaxed mb-md">
                                {dept.primaryFocus}
                            </p>
                        </div>

                        <div className="space-y-sm pt-sm border-t border-outline-variant/60">
                            <div className="grid grid-cols-3 gap-2 text-center bg-surface-container-low p-sm rounded-lg">
                                <div>
                                    <p className="text-[10px] text-outline font-semibold uppercase">Total</p>
                                    <p className="text-base font-bold text-primary">{dept.totalComplaints}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-outline font-semibold uppercase">Pending</p>
                                    <p className="text-base font-bold text-error">{dept.pendingComplaints}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-outline font-semibold uppercase">Resolved</p>
                                    <p className="text-base font-bold text-tertiary-container">{dept.resolvedComplaints}</p>
                                </div>
                            </div>

                            <div className="flex justify-between items-center text-xs pt-1">
                                <span className="text-on-surface-variant font-medium">SLA Resolution Rate:</span>
                                <span className="font-bold text-primary">{dept.slaCompliance}</span>
                            </div>
                            <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-primary h-full"
                                    style={{ width: dept.slaCompliance }}
                                ></div>
                            </div>

                            <div className="flex justify-between items-center text-xs pt-1 text-on-surface-variant">
                                <span>Officers on Duty:</span>
                                <span className="font-bold text-on-surface">{dept.activeOfficers} Active</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
