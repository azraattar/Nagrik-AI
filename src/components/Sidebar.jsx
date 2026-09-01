import React from 'react';

export default function Sidebar({ role = 'citizen', activePage, navigateTo }) {
    // Define sidebar navigation items based on active role
    const getNavItems = () => {
        switch (role) {
            case 'officer':
                return [
                    { id: 'officer_dashboard', label: 'Dashboard', icon: 'dashboard' },
                    { id: 'complaint_queue', label: 'Complaint Queue', icon: 'queue' },
                    { id: 'priority_issues', label: 'Priority Issues', icon: 'priority_high' },
                    { id: 'complaint_clusters', label: 'Complaint Clusters', icon: 'hub' },
                    { id: 'hotspots', label: 'Map/Hotspots', icon: 'map' },
                    { id: 'analytics', label: 'Analytics', icon: 'analytics' },
                    { id: 'reports', label: 'Reports', icon: 'description' },
                ];
            case 'admin':
                return [
                    { id: 'admin_dashboard', label: 'Overview', icon: 'dashboard' },
                    { id: 'admin_complaints', label: 'Complaints', icon: 'report' },
                    { id: 'departments', label: 'Departments', icon: 'corporate_fare' },
                    { id: 'users', label: 'Users', icon: 'group' },
                    { id: 'ai_analytics', label: 'AI Analytics', icon: 'psychology' },
                    { id: 'admin_hotspots', label: 'Hotspots', icon: 'location_on' },
                    { id: 'admin_reports', label: 'Reports', icon: 'summarize' },
                ];
            case 'citizen':
            default:
                return [
                    { id: 'citizen_dashboard', label: 'Dashboard', icon: 'dashboard' },
                    { id: 'submit_complaint', label: 'Submit Grievance', icon: 'add_box' },
                    { id: 'my_complaints', label: 'My Complaints', icon: 'list_alt' },
                    { id: 'analytics', label: 'Analytics', icon: 'analytics' },
                    { id: 'settings', label: 'Settings', icon: 'settings' },
                ];
        }
    };

    const navItems = getNavItems();

    const getPortalInfo = () => {
        switch (role) {
            case 'officer':
                return { title: 'NagrikAI', subtitle: 'Department Portal', icon: 'badge' };
            case 'admin':
                return { title: 'NagrikAI', subtitle: 'Admin Portal', icon: 'admin_panel_settings' };
            case 'citizen':
            default:
                return { title: 'NagrikAI', subtitle: 'Citizen Portal', icon: 'shield_person' };
        }
    };

    const portal = getPortalInfo();

    return (
        <aside className="hidden md:flex flex-col p-md gap-sm bg-surface fixed left-0 top-0 h-full w-[280px] border-r border-outline-variant z-40">
            {/* Brand Header */}
            <div className="px-md py-lg border-b border-outline-variant mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined" data-weight="fill">
                        {portal.icon}
                    </span>
                </div>
                <div>
                    <h1
                        className="text-headline-md font-headline-md font-bold text-primary truncate cursor-pointer"
                        onClick={() => navigateTo('landing')}
                    >
                        {portal.title}
                    </h1>
                    <p className="font-label-sm text-label-sm text-on-surface-variant truncate">
                        {portal.subtitle}
                    </p>
                </div>
            </div>

            {/* Primary CTA button for Citizen */}
            {role === 'citizen' && (
                <button
                    onClick={() => navigateTo('submit_complaint')}
                    className="w-full bg-primary text-on-primary py-3 rounded-lg font-label-md text-label-md font-semibold hover:bg-opacity-90 transition-colors duration-200 flex items-center justify-center gap-2 mb-2 active:scale-95"
                >
                    <span className="material-symbols-outlined text-[20px]">add</span>
                    New Grievance
                </button>
            )}

            {/* Navigation Links */}
            <div className="flex-1 overflow-y-auto flex flex-col gap-xs">
                {navItems.map((item) => {
                    const isActive = activePage === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => navigateTo(item.id)}
                            className={`flex items-center gap-3 px-4 py-3 font-label-md text-label-md rounded-lg duration-200 ease-in-out text-left w-full transition-all active:scale-95 ${isActive
                                    ? 'bg-secondary-container text-on-secondary-container font-bold shadow-xs'
                                    : 'text-on-surface-variant hover:bg-surface-container-low hover:text-primary'
                                }`}
                        >
                            <span
                                className={`material-symbols-outlined ${isActive ? 'icon-fill' : ''
                                    }`}
                            >
                                {item.icon}
                            </span>
                            <span>{item.label}</span>
                        </button>
                    );
                })}
            </div>

            {/* Footer & Role Switcher */}
            <div className="mt-auto pt-4 border-t border-outline-variant flex flex-col gap-xs">
                {role === 'citizen' && (
                    <button
                        onClick={() => navigateTo('help')}
                        className="flex items-center gap-3 px-4 py-2 text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-low rounded-lg duration-200 ease-in-out w-full text-left"
                    >
                        <span className="material-symbols-outlined">help</span>
                        Help
                    </button>
                )}
                <button
                    onClick={() => navigateTo('login')}
                    className="flex items-center gap-3 px-4 py-2 text-error hover:bg-error-container rounded-lg duration-200 ease-in-out w-full text-left font-label-md text-label-md"
                >
                    <span className="material-symbols-outlined">logout</span>
                    Logout / Switch Role
                </button>
            </div>
        </aside>
    );
}
