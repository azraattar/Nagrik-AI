import React, { useState } from 'react';
import StatusBadge from '../../components/StatusBadge';

export default function AdminComplaints({ navigateTo, complaints = [] }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDept, setSelectedDept] = useState('All');
    const [selectedStatus, setSelectedStatus] = useState('All');
    const [selectedPriority, setSelectedPriority] = useState('All');

    // Default complaints sample if not passed or empty
    const allComplaints = complaints.length > 0 ? complaints : [
        {
            id: 'CMP-2024-8902',
            title: 'Pothole on Main Street causing traffic hazards',
            department: 'Public Works Department (PWD)',
            location: 'Downtown District, Sector 4',
            date: 'Oct 24, 2024',
            reporter: 'Rahul Sharma',
            status: 'In Progress',
            priority: 'High Priority',
            urgencyScore: '88/100'
        },
        {
            id: 'CMP-2024-7410',
            title: 'Broken Streetlight near Community Park',
            department: 'Public Works Department (PWD)',
            location: 'North Ward, Block C',
            date: 'Oct 22, 2024',
            reporter: 'Priya Patel',
            status: 'Open',
            priority: 'Normal',
            urgencyScore: '45/100'
        },
        {
            id: 'CMP-2024-6521',
            title: 'Garbage accumulation near Sector 2 Market',
            department: 'Water & Sanitation Department',
            location: 'Central Market, Sector 2',
            date: 'Oct 18, 2024',
            reporter: 'Anil Deshmukh',
            status: 'Resolved',
            priority: 'Normal',
            urgencyScore: '52/100'
        },
        {
            id: 'CMP-2024-5120',
            title: 'Contaminated tap water supply with odor',
            department: 'Water & Sanitation Department',
            location: 'East Ward, Sector 9',
            date: 'Oct 25, 2024',
            reporter: 'Sunita Rao',
            status: 'In Progress',
            priority: 'High Priority',
            urgencyScore: '94/100'
        },
        {
            id: 'CMP-2024-4019',
            title: 'Spoiled food sold at central food stall',
            department: 'Food Management Department',
            location: 'Station Road Plaza',
            date: 'Oct 26, 2024',
            reporter: 'Vikram Singh',
            status: 'Open',
            priority: 'High Priority',
            urgencyScore: '82/100'
        }
    ];

    const filtered = allComplaints.filter((item) => {
        const matchesSearch =
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (item.reporter && item.reporter.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (item.location && item.location.toLowerCase().includes(searchQuery.toLowerCase()));

        const itemDept = item.department || (item.title.toLowerCase().includes('water') || item.title.toLowerCase().includes('garbage') ? 'Water & Sanitation Department' : item.title.toLowerCase().includes('food') ? 'Food Management Department' : 'Public Works Department (PWD)');

        const matchesDept = selectedDept === 'All' || itemDept === selectedDept;
        const matchesStatus = selectedStatus === 'All' || item.status === selectedStatus;
        const matchesPriority = selectedPriority === 'All' || item.priority === selectedPriority;

        return matchesSearch && matchesDept && matchesStatus && matchesPriority;
    });

    return (
        <div className="space-y-xl">
            {/* Header */}
            <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-md border-b border-outline-variant pb-md">
                <div>
                    <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface font-bold">
                        Complaints Management
                    </h2>
                    <p className="text-body-md font-body-md text-on-surface-variant mt-sm">
                        Monitor, filter, and inspect citywide grievances across all departments.
                    </p>
                </div>
                <div className="flex items-center gap-sm">
                    <span className="font-label-sm text-label-sm bg-primary-fixed text-on-primary-fixed px-3 py-1.5 rounded-full font-bold">
                        {filtered.length} Complaints Displayed
                    </span>
                </div>
            </header>

            {/* Filter Toolbar */}
            <div className="bg-surface border border-outline-variant rounded-xl p-md shadow-xs space-y-md">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
                    {/* Search */}
                    <div className="relative">
                        <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline text-[20px]">
                            search
                        </span>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search by ID, title, user..."
                            className="w-full pl-9 pr-sm py-2 bg-surface-container-lowest border border-outline-variant rounded-lg text-xs font-body-md text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                        />
                    </div>

                    {/* Department Filter */}
                    <div>
                        <select
                            value={selectedDept}
                            onChange={(e) => setSelectedDept(e.target.value)}
                            className="w-full px-sm py-2 bg-surface-container-lowest border border-outline-variant rounded-lg text-xs font-body-md text-on-surface focus:outline-none focus:border-secondary"
                        >
                            <option value="All">All Departments</option>
                            <option value="Water & Sanitation Department">Water &amp; Sanitation</option>
                            <option value="Food Management Department">Food Management</option>
                            <option value="Public Works Department (PWD)">Public Works (PWD)</option>
                        </select>
                    </div>

                    {/* Status Filter */}
                    <div>
                        <select
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.target.value)}
                            className="w-full px-sm py-2 bg-surface-container-lowest border border-outline-variant rounded-lg text-xs font-body-md text-on-surface focus:outline-none focus:border-secondary"
                        >
                            <option value="All">All Statuses</option>
                            <option value="Open">Open</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Resolved">Resolved</option>
                        </select>
                    </div>

                    {/* Priority Filter */}
                    <div>
                        <select
                            value={selectedPriority}
                            onChange={(e) => setSelectedPriority(e.target.value)}
                            className="w-full px-sm py-2 bg-surface-container-lowest border border-outline-variant rounded-lg text-xs font-body-md text-on-surface focus:outline-none focus:border-secondary"
                        >
                            <option value="All">All Priorities</option>
                            <option value="High Priority">High Priority</option>
                            <option value="Normal">Normal Priority</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Complaints Table */}
            <div className="bg-surface border border-outline-variant rounded-xl shadow-xs overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs font-body-md">
                        <thead className="bg-surface-container-low border-b border-outline-variant text-on-surface font-bold uppercase tracking-wider text-[11px]">
                            <tr>
                                <th className="p-md">Complaint ID</th>
                                <th className="p-md">Issue Title</th>
                                <th className="p-md">Department</th>
                                <th className="p-md">Reporter</th>
                                <th className="p-md">Priority</th>
                                <th className="p-md">Status</th>
                                <th className="p-md">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-outline-variant/60">
                            {filtered.map((item) => {
                                const dept = item.department || (item.title.toLowerCase().includes('water') || item.title.toLowerCase().includes('garbage') ? 'Water & Sanitation Department' : item.title.toLowerCase().includes('food') ? 'Food Management Department' : 'Public Works Department (PWD)');
                                return (
                                    <tr
                                        key={item.id}
                                        className="hover:bg-surface-container-low/50 transition-colors"
                                    >
                                        <td className="p-md font-mono font-bold text-primary whitespace-nowrap">
                                            #{item.id}
                                        </td>
                                        <td className="p-md font-medium text-on-surface max-w-xs truncate">
                                            {item.title}
                                            <div className="text-[11px] text-on-surface-variant truncate font-normal">
                                                {item.location}
                                            </div>
                                        </td>
                                        <td className="p-md text-on-surface whitespace-nowrap">
                                            <span className="bg-surface-container-high px-2 py-1 rounded text-[11px] font-semibold text-on-surface">
                                                {dept}
                                            </span>
                                        </td>
                                        <td className="p-md text-on-surface-variant whitespace-nowrap">
                                            {item.reporter || 'Citizen'}
                                        </td>
                                        <td className="p-md whitespace-nowrap">
                                            <span
                                                className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                                                    item.priority === 'High Priority'
                                                        ? 'bg-error-container text-error'
                                                        : 'bg-surface-container-high text-outline'
                                                }`}
                                            >
                                                {item.priority || 'Normal'}
                                            </span>
                                        </td>
                                        <td className="p-md whitespace-nowrap">
                                            <StatusBadge status={item.status} />
                                        </td>
                                        <td className="p-md text-on-surface-variant whitespace-nowrap">
                                            {item.date || 'Recent'}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                {filtered.length === 0 && (
                    <div className="p-xl text-center text-on-surface-variant">
                        <span className="material-symbols-outlined text-4xl text-outline mb-2">search_off</span>
                        <p className="font-semibold text-sm">No complaints found matching current filters.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
