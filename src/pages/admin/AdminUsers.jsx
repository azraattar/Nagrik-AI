import React, { useState } from 'react';

export default function AdminUsers() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRole, setSelectedRole] = useState('All');

    const users = [
        {
            id: 'USR-101',
            name: 'Rahul Sharma',
            email: 'user@example.com',
            role: 'Citizen',
            department: 'Civilian',
            complaintsCount: 3,
            status: 'Active',
            joined: 'Jan 2024'
        },
        {
            id: 'USR-102',
            name: 'Priya Patel',
            email: 'priya.p@example.com',
            role: 'Citizen',
            department: 'Civilian',
            complaintsCount: 1,
            status: 'Active',
            joined: 'Feb 2024'
        },
        {
            id: 'USR-201',
            name: 'Officer Alex',
            email: 'officer@nagrik.ai',
            role: 'Officer',
            department: 'Public Works Department (PWD)',
            complaintsCount: 124,
            status: 'Active',
            joined: 'Nov 2023'
        },
        {
            id: 'USR-202',
            name: 'Officer Sunita Rao',
            email: 'sunita.officer@nagrik.ai',
            role: 'Officer',
            department: 'Water & Sanitation Department',
            complaintsCount: 98,
            status: 'Active',
            joined: 'Dec 2023'
        },
        {
            id: 'USR-203',
            name: 'Officer Rajesh V.',
            email: 'rajesh.officer@nagrik.ai',
            role: 'Officer',
            department: 'Food Management Department',
            complaintsCount: 65,
            status: 'Active',
            joined: 'Jan 2024'
        },
        {
            id: 'USR-301',
            name: 'Admin User',
            email: 'admin@nagrik.ai',
            role: 'Admin',
            department: 'Municipal Corporation',
            complaintsCount: 1248,
            status: 'Active',
            joined: 'Oct 2023'
        }
    ];

    const filtered = users.filter((u) => {
        const matchesSearch =
            u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            u.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            u.department.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesRole = selectedRole === 'All' || u.role === selectedRole;
        return matchesSearch && matchesRole;
    });

    return (
        <div className="space-y-xl">
            {/* Header */}
            <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-md border-b border-outline-variant pb-md">
                <div>
                    <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface font-bold">
                        User &amp; Officer Management
                    </h2>
                    <p className="text-body-md font-body-md text-on-surface-variant mt-sm">
                        Manage citizen accounts, department officers, and municipal administrator permissions.
                    </p>
                </div>
                <div className="flex items-center gap-sm">
                    <span className="font-label-sm text-label-sm bg-primary-fixed text-on-primary-fixed px-3 py-1.5 rounded-full font-bold">
                        {filtered.length} Users Listed
                    </span>
                </div>
            </header>

            {/* Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-md">
                <div className="bg-surface border border-outline-variant rounded-xl p-md flex items-center gap-md">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-[22px]">group</span>
                    </div>
                    <div>
                        <p className="text-xs text-outline font-semibold">Registered Citizens</p>
                        <p className="text-xl font-bold text-on-surface">1,840</p>
                    </div>
                </div>
                <div className="bg-surface border border-outline-variant rounded-xl p-md flex items-center gap-md">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high text-secondary flex items-center justify-center">
                        <span className="material-symbols-outlined text-[22px]">badge</span>
                    </div>
                    <div>
                        <p className="text-xs text-outline font-semibold">Department Officers</p>
                        <p className="text-xl font-bold text-on-surface">41</p>
                    </div>
                </div>
                <div className="bg-surface border border-outline-variant rounded-xl p-md flex items-center gap-md">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high text-tertiary-container flex items-center justify-center">
                        <span className="material-symbols-outlined text-[22px]">admin_panel_settings</span>
                    </div>
                    <div>
                        <p className="text-xs text-outline font-semibold">Administrators</p>
                        <p className="text-xl font-bold text-on-surface">6</p>
                    </div>
                </div>
            </div>

            {/* Filter toolbar */}
            <div className="bg-surface border border-outline-variant rounded-xl p-md shadow-xs flex flex-col sm:flex-row gap-md justify-between items-center">
                <div className="relative w-full sm:w-80">
                    <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline text-[20px]">
                        search
                    </span>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search by name, email, department..."
                        className="w-full pl-9 pr-sm py-2 bg-surface-container-lowest border border-outline-variant rounded-lg text-xs font-body-md text-on-surface focus:outline-none focus:border-secondary"
                    />
                </div>

                <div className="flex gap-2 w-full sm:w-auto">
                    {['All', 'Citizen', 'Officer', 'Admin'].map((role) => (
                        <button
                            key={role}
                            onClick={() => setSelectedRole(role)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                                selectedRole === role
                                    ? 'bg-primary text-on-primary shadow-xs'
                                    : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
                            }`}
                        >
                            {role}
                        </button>
                    ))}
                </div>
            </div>

            {/* Users Table */}
            <div className="bg-surface border border-outline-variant rounded-xl shadow-xs overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs font-body-md">
                        <thead className="bg-surface-container-low border-b border-outline-variant text-on-surface font-bold uppercase tracking-wider text-[11px]">
                            <tr>
                                <th className="p-md">User ID</th>
                                <th className="p-md">Name &amp; Email</th>
                                <th className="p-md">Role</th>
                                <th className="p-md">Department</th>
                                <th className="p-md">Complaints / Handled</th>
                                <th className="p-md">Status</th>
                                <th className="p-md">Joined</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-outline-variant/60">
                            {filtered.map((u) => (
                                <tr key={u.id} className="hover:bg-surface-container-low/50 transition-colors">
                                    <td className="p-md font-mono font-bold text-primary whitespace-nowrap">
                                        {u.id}
                                    </td>
                                    <td className="p-md whitespace-nowrap">
                                        <div className="font-semibold text-on-surface">{u.name}</div>
                                        <div className="text-[11px] text-on-surface-variant font-mono">{u.email}</div>
                                    </td>
                                    <td className="p-md whitespace-nowrap">
                                        <span
                                            className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                                                u.role === 'Admin'
                                                    ? 'bg-error-container text-error'
                                                    : u.role === 'Officer'
                                                    ? 'bg-primary-fixed text-on-primary-fixed'
                                                    : 'bg-surface-container-high text-on-surface'
                                            }`}
                                        >
                                            {u.role}
                                        </span>
                                    </td>
                                    <td className="p-md text-on-surface whitespace-nowrap">
                                        {u.department}
                                    </td>
                                    <td className="p-md font-semibold text-on-surface whitespace-nowrap">
                                        {u.complaintsCount} {u.role === 'Officer' ? 'Handled' : 'Reported'}
                                    </td>
                                    <td className="p-md whitespace-nowrap">
                                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-tertiary-container">
                                            <span className="w-1.5 h-1.5 rounded-full bg-tertiary-container"></span>
                                            {u.status}
                                        </span>
                                    </td>
                                    <td className="p-md text-on-surface-variant whitespace-nowrap">
                                        {u.joined}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
